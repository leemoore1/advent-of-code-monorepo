import os


def helloWorld(name: str):
    return f"Hello, {name}!"


def day1Task1():
    file = open("../../data/samples/2023/d_01_test.txt")

    for line in file:
        print(line)
        chars = line.split()

    # for char in chars:

    return ""


def isNumber(char):
    try:
        int(char)
        return True
    except ValueError:
        return False
