#!/usr/bin/env bash

ts_dir="./langs/typescript"

echo "Checking TypeScript / Node dependencies..."
if [[ -d "$ts_dir/node_modules" ]]; then
	echo "Dependencies already installed. Skipping."
else
	echo "Dependencies missing. Installing..."
	cd "$ts_dir" && pnpm install
fi
