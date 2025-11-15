#!/usr/bin/env bash

python_dir="./langs/python"
venv_dir=".venv"

echo "Checking Python dependencies..."
if [[ -d "$python_dir/$venv_dir" ]]; then
	echo "Dependencies already installed. Skipping."
else
	echo "Dependencies missing. Installing..."
	cd "$python_dir" &&
		python3 -m venv "$venv_dir" &&
		source "$venv_dir/bin/activate" &&
		pip install -r requirements.txt
fi
