SHELL := /bin/bash

dbg/path:
	echo "$$PATH" | tr ':' '\n'
	which protoc-gen-go

gen/backend:
	protoc \
		--go_out=backend --go_opt=paths=source_relative \
		--go-grpc_out=backend --go-grpc_opt=paths=source_relative \
		proto/*.proto
