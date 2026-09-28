### Question 11

**NumPy Sub-array Extractions on Matrix $A$**

Given:

$$A = \begin{bmatrix} 10 & 20 & 30 & 40 \\ 50 & 60 & 70 & 80 \\ 90 & 100 & 110 & 120 \end{bmatrix}$$

```python
import numpy as np

A = np.array([[10, 20, 30, 40],
              [50, 60, 70, 80],
              [90, 100, 110, 120]])

# 1. Extract the second row (Index 1)
ans1 = A[1, :]

# 2. Extract the first two columns
ans2 = A[:, :2]

# 3. Extract the bottom-right 2x2 sub-array
ans3 = A[1:, 2:]

# 4. Extract every alternate column
ans4 = A[:, ::2]

# 5. Reverse the order of the rows
ans5 = A[::-1, :]
```

#### Results:

1. **Second row:**
`[50, 60, 70, 80]`
2. **First two columns:**

$$\begin{bmatrix} 10 & 20 \\ 50 & 60 \\ 90 & 100 \end{bmatrix}$$

3. **Bottom-right $2\times2$ sub-array:**

$$\begin{bmatrix} 70 & 80 \\ 110 & 120 \end{bmatrix}$$

4. **Every alternate column:**

$$\begin{bmatrix} 10 & 30 \\ 50 & 70 \\ 90 & 110 \end{bmatrix}$$

5. **Reversed rows:**

$$\begin{bmatrix} 90 & 100 & 110 & 120 \\ 50 & 60 & 70 & 80 \\ 10 & 20 & 30 & 40 \end{bmatrix}$$
