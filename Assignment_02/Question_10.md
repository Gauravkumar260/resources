### Question 10

**NumPy Advanced Operations: Logic, Statistics, Linear Algebra, and Random Numbers**

```python
import numpy as np

# 1. Numerical Array and Conditional Logic
data = np.array([12, 45, 67, 23, 89, 34, 90])
filtered_data = data[data > 40]
print("Elements > 40:", filtered_data)

# 2. Statistical Calculations
print("Mean      :", np.mean(data))
print("Std Dev   :", np.std(data))
print("Sum       :", np.sum(data))

# 3. Basic Linear Algebra (Matrix Multiplication)
mat_A = np.array([[1, 2], [3, 4]])
mat_B = np.array([[5, 6], [7, 8]])
matrix_product = np.dot(mat_A, mat_B)
print("\nMatrix Product (mat_A @ mat_B):\n", matrix_product)

# 4. Random Number Generation
random_floats = np.random.rand(3)         # 3 random floats in [0, 1)
random_ints = np.random.randint(1, 100, 4) # 4 random ints between 1 and 100
print("\nRandom Floats :", random_floats)
print("Random Integers:", random_ints)
```
