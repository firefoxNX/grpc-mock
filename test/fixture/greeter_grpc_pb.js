// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var greeter_pb = require('./greeter_pb.js');

function serialize_greeter_RequestGreet(arg) {
  if (!(arg instanceof greeter_pb.RequestGreet)) {
    throw new Error('Expected argument of type greeter.RequestGreet');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeter_RequestGreet(buffer_arg) {
  return greeter_pb.RequestGreet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greeter_ResponseGreet(arg) {
  if (!(arg instanceof greeter_pb.ResponseGreet)) {
    throw new Error('Expected argument of type greeter.ResponseGreet');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeter_ResponseGreet(buffer_arg) {
  return greeter_pb.ResponseGreet.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreeterService = exports.GreeterService = {
  hello: {
    path: '/greeter.Greeter/Hello',
    requestStream: false,
    responseStream: false,
    requestType: greeter_pb.RequestGreet,
    responseType: greeter_pb.ResponseGreet,
    requestSerialize: serialize_greeter_RequestGreet,
    requestDeserialize: deserialize_greeter_RequestGreet,
    responseSerialize: serialize_greeter_ResponseGreet,
    responseDeserialize: deserialize_greeter_ResponseGreet,
  },
  goodbye: {
    path: '/greeter.Greeter/Goodbye',
    requestStream: false,
    responseStream: false,
    requestType: greeter_pb.RequestGreet,
    responseType: greeter_pb.ResponseGreet,
    requestSerialize: serialize_greeter_RequestGreet,
    requestDeserialize: deserialize_greeter_RequestGreet,
    responseSerialize: serialize_greeter_ResponseGreet,
    responseDeserialize: deserialize_greeter_ResponseGreet,
  },
  howAreYou: {
    path: '/greeter.Greeter/HowAreYou',
    requestStream: true,
    responseStream: false,
    requestType: greeter_pb.RequestGreet,
    responseType: greeter_pb.ResponseGreet,
    requestSerialize: serialize_greeter_RequestGreet,
    requestDeserialize: deserialize_greeter_RequestGreet,
    responseSerialize: serialize_greeter_ResponseGreet,
    responseDeserialize: deserialize_greeter_ResponseGreet,
  },
  niceToMeetYou: {
    path: '/greeter.Greeter/NiceToMeetYou',
    requestStream: false,
    responseStream: true,
    requestType: greeter_pb.RequestGreet,
    responseType: greeter_pb.ResponseGreet,
    requestSerialize: serialize_greeter_RequestGreet,
    requestDeserialize: deserialize_greeter_RequestGreet,
    responseSerialize: serialize_greeter_ResponseGreet,
    responseDeserialize: deserialize_greeter_ResponseGreet,
  },
  chat: {
    path: '/greeter.Greeter/Chat',
    requestStream: true,
    responseStream: true,
    requestType: greeter_pb.RequestGreet,
    responseType: greeter_pb.ResponseGreet,
    requestSerialize: serialize_greeter_RequestGreet,
    requestDeserialize: deserialize_greeter_RequestGreet,
    responseSerialize: serialize_greeter_ResponseGreet,
    responseDeserialize: deserialize_greeter_ResponseGreet,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
