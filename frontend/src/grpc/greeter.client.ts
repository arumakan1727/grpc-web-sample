// @generated by protobuf-ts 2.8.3
// @generated from protobuf file "greeter.proto" (package "greeter", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Greeter } from "./greeter";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { HelloResp } from "./greeter";
import type { HelloReq } from "./greeter";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service greeter.Greeter
 */
export interface IGreeterClient {
    /**
     * @generated from protobuf rpc: SayHello(greeter.HelloReq) returns (greeter.HelloResp);
     */
    sayHello(input: HelloReq, options?: RpcOptions): UnaryCall<HelloReq, HelloResp>;
}
/**
 * @generated from protobuf service greeter.Greeter
 */
export class GreeterClient implements IGreeterClient, ServiceInfo {
    typeName = Greeter.typeName;
    methods = Greeter.methods;
    options = Greeter.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: SayHello(greeter.HelloReq) returns (greeter.HelloResp);
     */
    sayHello(input: HelloReq, options?: RpcOptions): UnaryCall<HelloReq, HelloResp> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<HelloReq, HelloResp>("unary", this._transport, method, opt, input);
    }
}
