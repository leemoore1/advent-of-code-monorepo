.PHONY: helper help install-deps install-deps-node install-deps-python

help:
	@echo "Hello, world"

node-dir := "./langs/typescript"
node-years := 2024

install-deps: install-deps-node install-deps-python

install-deps-node:
	@echo "Installing Node dependencies..."
	@cd $(node-dir) && \
	pnpm install

install-deps-python:
	@echo "Installing Python dependencies..."
	@cd ./langs/python && \
	python3 -m venv .venv && \
	source .venv/bin/activate && \
	pip install -r requirements.txt

run-tests-node:
	@echo "Running Node tests..."
	@echo "Year: $(node-year)"
	@cd $(node-dir) && \
	pnpm run start
