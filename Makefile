.PHONY: helper help install-deps

help:
	@echo "Hello, world"

python-dir := "./langs/python"
ts-dir := "./langs/typescript"

install-deps: setup-ts setup-python

##############
# TypeScript #
##############
.PHONY: setup-ts lint-ts test-ts run-ts

# Install deps
setup-ts:
	@./scripts/setup-ts.sh

# Linting
lint-ts:
	@echo "Linting Node files..."
	@cd $(ts-dir) && \
	pnpm run check:fix

# Run tests
test-ts: setup-ts
	@echo "Running Node tests..."
	@cd $(ts-dir) && \
	pnpm run test

# Run main
run-ts:
	@echo "Running Node tests..."
	@cd $(ts-dir) && \
	pnpm run start


##########
# Python #
##########
.PHONY: setup-python test-python

# Install deps
setup-python:
	@./scripts/setup-python.sh

# Run tests
test-python: setup-python
	@./scripts/test-python.sh
