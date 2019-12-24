const path = require("path");
const assert =require("power-assert");
const {hello} = require("./fixture/greeter-client");
const {hello1} = require("./fixture/greeter1-client");
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
    { method: "hello", input: { message: "test" }, output: { message: "Hello" } }
  ]
});

describe("multiple proto files", () => {
  before(() => {
    mockServer.use(protoPath1, "greeter1", "Greeter1",  [
      { method: "hello1", input: { message: "test1" }, output: { message: "Hello1" } }
    ]);
    mockServer.listen("0.0.0.0:50051");
  });

  afterEach(() => mockServer.clearInteractions());

  it("responds Hello", () => {
    return hello({ message : "test" })
      .then((res) => {
        assert(res.message === "Hello");
      })
      .catch(assert);
  });

  it("responds Hello1", () => {
    return hello1({ message : "test1" })
      .then((res) => {
        assert(res.message === "Hello1");
      })
      .catch(assert);
  });

  after(() => {
    mockServer.close(true);
  });
});
