def helloWorld(name):
    return f"Hello, {name}!"

def day1Task1():
    file = open("test_inputs/2023_12_01.txt")

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