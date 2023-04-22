package server

import (
	"context"
	"log"
	"time"

	pb "github.com/arumakan1727/grpc-web-sample/proto"
)

type GreeterHandler struct {
	pb.UnsafeGreeterServer
}

// implementation check
var _ pb.GreeterServer = &GreeterHandler{}

// SayHello implements proto.GreeterServer
func (h *GreeterHandler) SayHello(ctx context.Context, in *pb.HelloReq) (*pb.HelloResp, error) {
	log.Printf("Received: %v+", in)
	return &pb.HelloResp{
		Message: "Hello " + in.GetName(),
		Datetime: time.Now().String(),
	}, nil
}
