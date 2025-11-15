# Advent of Code Mono Repo

## Prerequisites

- GNU Make
- Node.js >= 22.20.0
- Python >= 3.14.0

### Use asdf (optional)

You can use the [asdf](https://asdf-vm.com/) version manager to install all language runtimes required by this project.

#### Node.js

```shell
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
asdf install nodejs 22.20.0
asdf set nodejs 22.20.0
```

#### Python

```shell
asdf plugin add python https://github.com/asdf-community/asdf-python.git
asdf install python 3.14.0
asdf set python 3.14.0
```

## Getting Started

See the [Makefile](./Makefile) for a complete list of commands, but here are some
quick examples:

Run Node.js unit tests:

```shell
make test-ts
```

Run Node.js main entry point:

```shell
make run-ts
```

Run Python unit tests:

```shell
make test-python
```
