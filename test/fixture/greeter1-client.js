const {promisify} = require("util");
const path = require("path");
const {createClient} = require("grpc-kit");

const client = createClient({
  protoPath: path.resolve(__dirname, "./greeter1.proto"),
  // packageName: "greeter1",
  serviceName: "Greeter1"
}, "0.0.0.0:50051");

exports.client = client;
exports.hello1 = promisify(client.hello1.bind(client));
// exports.goodbye = promisify(client.goodbye.bind(client));
