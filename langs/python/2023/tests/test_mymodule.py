import unittest
from mymodule.mymodule import add

class TestMyModule(unittest.TestCase):
    def test_addition(self):
        self.assertEqual(add(2, 3), 5)
        self.assertEqual(add(0, 0), 0)
        self.assertEqual(add(-1, 1), 0)

if __name__ == "__main__":
    unittest.main()