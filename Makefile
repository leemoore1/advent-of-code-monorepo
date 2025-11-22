.PHONY: helper help install-deps

help:
	@echo "Hello, world"

DAY ?= 01
YEAR ?= 2024

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
lint-ts: setup-ts
	@echo "Linting Node files..."
	@cd $(ts-dir) && \
	pnpm run check:fix

# Run tests
test-ts: setup-ts
	@echo "Running Node tests..."
	@cd $(ts-dir) && \
	pnpm run test -- $(YEAR)

test-ts-watch: setup-ts
	@echo "Running Node tests..."
	@cd $(ts-dir) && \
	pnpm run test:watch -- $(YEAR)

test-ts-watch-day: setup-ts
	@echo "Running Node tests..."
	@cd $(ts-dir) && \
	pnpm run test:watch -- "$(YEAR)/__tests__/d_$(DAY).test.ts"

# Run main
run-ts: setup-ts
	@echo "Running Node tests..."
	@cd $(ts-dir) && \
	pnpm run start:$(YEAR)


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
