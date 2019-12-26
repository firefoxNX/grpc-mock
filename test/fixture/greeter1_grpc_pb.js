// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var greeter1_pb = require('./greeter1_pb.js');

function serialize_RequestGreet1(arg) {
  if (!(arg instanceof greeter1_pb.RequestGreet1)) {
    throw new Error('Expected argument of type RequestGreet1');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RequestGreet1(buffer_arg) {
  return greeter1_pb.RequestGreet1.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ResponseGreet1(arg) {
  if (!(arg instanceof greeter1_pb.ResponseGreet1)) {
    throw new Error('Expected argument of type ResponseGreet1');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ResponseGreet1(buffer_arg) {
  return greeter1_pb.ResponseGreet1.deserializeBinary(new Uint8Array(buffer_arg));
}


// package greeter1;
//
var Greeter1Service = exports.Greeter1Service = {
  hello1: {
    path: '/Greeter1/Hello1',
    requestStream: false,
    responseStream: false,
    requestType: greeter1_pb.RequestGreet1,
    responseType: greeter1_pb.ResponseGreet1,
    requestSerialize: serialize_RequestGreet1,
    requestDeserialize: deserialize_RequestGreet1,
    responseSerialize: serialize_ResponseGreet1,
    responseDeserialize: deserialize_ResponseGreet1,
  },
};

exports.Greeter1Client = grpc.makeGenericClientConstructor(Greeter1Service);
