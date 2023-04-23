import * as jspb from 'google-protobuf'



export class HelloReq extends jspb.Message {
  getName(): string;
  setName(value: string): HelloReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloReq.AsObject;
  static toObject(includeInstance: boolean, msg: HelloReq): HelloReq.AsObject;
  static serializeBinaryToWriter(message: HelloReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloReq;
  static deserializeBinaryFromReader(message: HelloReq, reader: jspb.BinaryReader): HelloReq;
}

export namespace HelloReq {
  export type AsObject = {
    name: string,
  }
}

export class HelloResp extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): HelloResp;

  getDatetime(): string;
  setDatetime(value: string): HelloResp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloResp.AsObject;
  static toObject(includeInstance: boolean, msg: HelloResp): HelloResp.AsObject;
  static serializeBinaryToWriter(message: HelloResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloResp;
  static deserializeBinaryFromReader(message: HelloResp, reader: jspb.BinaryReader): HelloResp;
}

export namespace HelloResp {
  export type AsObject = {
    message: string,
    datetime: string,
  }
}

