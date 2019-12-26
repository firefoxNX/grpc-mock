const path = require("path");
const assert = require("power-assert");
const {hello} = require("./fixture/greeter-client");
const {promisify} = require("util");
// const {hello1} = require("./fixture/greeter1-client");
const Greeter1Client = require('./fixture/greeter1_grpc_pb').Greeter1Client;
const grpc = require('grpc');
const greeterClient1 = new Greeter1Client("0.0.0.0:50051", grpc.credentials.createInsecure());
const greeter1Messages = require('./fixture/greeter1_pb');
const {createMockServer} = require("../index");
const protoPath = path.resolve(__dirname, "./fixture/greeter.proto");
const protoPath1 = path.resolve(__dirname, "./fixture/greeter1.proto");
const packageName = "greeter";
const serviceName = "Greeter";
const mockServer = createMockServer({
  protoPath,
  packageName,
  serviceName,
  rules: [
    {method: "hello", input: {message: "test"}, output: {message: "Hello"}}
  ]
});

describe("multiple proto files", () => {
  before(() => {
    mockServer.use({
      protoPath: protoPath1, packageName: "", serviceName: "Greeter1",
      routes: [{method: "hello1", input: {message: "test1"}, output: {message: "Hello1"}}
      ]
    });
    mockServer.listen("0.0.0.0:50051");
  });

  afterEach(() => mockServer.clearInteractions());

  it("responds Hello", () => {
    return hello({message: "test"})
      .then((res) => {
        assert(res.message === "Hello");
      })
      .catch(assert);
  });

  it("responds Hello1", () => {
    const requestGreet1 = new greeter1Messages.RequestGreet1();
    requestGreet1.message = "test1";
    const hello1promisify = promisify(greeterClient1.hello1);
    return hello1promisify(requestGreet1)
      .then((res) => {
        assert(res.message === "Hello1");
      })
      .catch(assert);
  });

  after(() => {
    mockServer.close(true);
  });
});
