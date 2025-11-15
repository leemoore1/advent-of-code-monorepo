import unittest
from advent.puzzles import helloWorld, day1Task1


class TestPuzzles(unittest.TestCase):
    def test_helloWorld(self):
        name = "Gordon"
        self.assertEqual(helloWorld(name), f"Hello, {name}!")

    def test_day1Task1(self):
        result = day1Task1()
        # print(result)
        self.assertEqual(result, 142)


if __name__ == "__main__":
    unittest.main()
