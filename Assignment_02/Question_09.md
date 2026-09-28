### Question 9

**NumPy 1D and 2D Array Operations**

```python
import numpy as np

# Creating 1D and 2D arrays
arr1d = np.array([10, 20, 30, 40, 50])
arr2d = np.array([[1, 2, 3], [4, 5, 6]])

# Data Type
print("Data type of arr1d :", arr1d.dtype)

# Indexing and Slicing
print("1D Indexing [2]    :", arr1d[2])
print("1D Slicing [1:4]   :", arr1d[1:4])
print("2D Element [1, 2]  :", arr2d[1, 2])

# Transpose
print("\nOriginal 2D Array:\n", arr2d)
print("Transposed 2D Array:\n", arr2d.T)

# Scalar Arithmetic
print("\nScalar Addition (arr1d + 5):", arr1d + 5)
print("Scalar Multiplication (arr2d * 10):\n", arr2d * 10)
```

**Output:**

```text
Data type of arr1d : int64
1D Indexing [2]    : 30
1D Slicing [1:4]   : [20 30 40]
2D Element [1, 2]  : 6

Original 2D Array:
 [[1 2 3]
  [4 5 6]]
Transposed 2D Array:
 [[1 4]
  [2 5]
  [3 6]]

Scalar Addition (arr1d + 5): [15 25 35 45 55]
Scalar Multiplication (arr2d * 10):
 [[10 20 30]
  [40 50 60]]
```
