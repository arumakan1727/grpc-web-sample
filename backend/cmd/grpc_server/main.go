package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net"

	"github.com/arumakan1727/grpc-web-sample/server"
)

var (
	port = flag.Int("port", 50051, "The server port")
)

func main() {
	flag.Parse()
	s := server.NewServer()

	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", *port))
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}

	log.Printf("Server listening at %v", lis.Addr())
	if err := s.Serve(context.Background(), lis); err != nil {
		log.Fatalf("Failed to serve: %v", err)
	}
}
