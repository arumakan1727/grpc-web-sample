package server

import (
	"context"
	"net"

	"github.com/arumakan1727/grpc-web-sample/proto"
	"google.golang.org/grpc"
)

type Server struct {
	s *grpc.Server
}

func NewServer() Server {
	s := grpc.NewServer()
	{
		proto.RegisterGreeterServer(s, &GreeterHandler{})
	}
	return Server{s}
}

func (s Server) Serve(ctx context.Context, lis net.Listener) error {
	return s.s.Serve(lis)
}
