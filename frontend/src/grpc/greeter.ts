// @generated by protobuf-ts 2.8.3
// @generated from protobuf file "greeter.proto" (package "greeter", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message greeter.HelloReq
 */
export interface HelloReq {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
}
/**
 * @generated from protobuf message greeter.HelloResp
 */
export interface HelloResp {
    /**
     * @generated from protobuf field: string message = 1;
     */
    message: string;
    /**
     * @generated from protobuf field: string datetime = 2;
     */
    datetime: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class HelloReq$Type extends MessageType<HelloReq> {
    constructor() {
        super("greeter.HelloReq", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<HelloReq>): HelloReq {
        const message = { name: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HelloReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HelloReq): HelloReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: HelloReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message greeter.HelloReq
 */
export const HelloReq = new HelloReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HelloResp$Type extends MessageType<HelloResp> {
    constructor() {
        super("greeter.HelloResp", [
            { no: 1, name: "message", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "datetime", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<HelloResp>): HelloResp {
        const message = { message: "", datetime: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HelloResp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HelloResp): HelloResp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string message */ 1:
                    message.message = reader.string();
                    break;
                case /* string datetime */ 2:
                    message.datetime = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: HelloResp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string message = 1; */
        if (message.message !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.message);
        /* string datetime = 2; */
        if (message.datetime !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.datetime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message greeter.HelloResp
 */
export const HelloResp = new HelloResp$Type();
/**
 * @generated ServiceType for protobuf service greeter.Greeter
 */
export const Greeter = new ServiceType("greeter.Greeter", [
    { name: "SayHello", options: {}, I: HelloReq, O: HelloResp }
]);
