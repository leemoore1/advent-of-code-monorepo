#!/usr/bin/env bash

python_dir="./langs/python"
venv_dir=".venv"

echo "Running Python tests..."
cd "$python_dir" &&
	source "$venv_dir/bin/activate" &&
	pytest
