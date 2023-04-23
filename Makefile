.DEFAULT_GOAL := help
SHELL   := /bin/bash
RED     := \033[31m
CYAN    := \033[36m
MAGENTA := \033[35m
RESET   := \033[0m

dbg/path:
	echo "$$PATH" | tr ':' '\n'
	which protoc-gen-go

PROTOC_BACKEND_OUT_DIR := backend
PROTOC_FRONTEND_OUT_DIR := frontend/src/grpc

.PHONY:	gen/backend	## Generate gRPC server code
gen/backend:
	protoc \
		--go_out=$(PROTOC_BACKEND_OUT_DIR) --go_opt=paths=source_relative \
		--go-grpc_out=$(PROTOC_BACKEND_OUT_DIR) --go-grpc_opt=paths=source_relative \
		proto/*.proto


.PHONY:	gen/frontend	## Generate gRPC web client code
gen/frontend:
	env PATH="./frontend/node_modules/@protobuf-ts/plugin/bin:$$PATH" \
		protoc -I proto \
		--ts_out=$(PROTOC_FRONTEND_OUT_DIR) \
		proto/*.proto

.PHONY:	help	## Show Makefile tasks
help:
	@grep -E '^.PHONY:\s*\S+\s+#' Makefile | \
		sed -E 's/.PHONY:\t*//' | \
		awk 'BEGIN {FS = "(\\t*##\\s*)?"}; {printf "$(CYAN)%-16s$(RESET) %s\n", $$1, $$2}'
