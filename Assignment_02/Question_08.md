### Question 8

**Comprehensions in Python**

#### Explanations & Examples

* **List Comprehension:** Constructing a new list concisely.
```python
squares = [x**2 for x in range(1, 6)]  # Output: [1, 4, 9, 16, 25]
```

* **Dictionary Comprehension:** Constructing a dictionary dynamically.
```python
sq_dict = {x: x**2 for x in range(1, 6)}  # Output: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
```

* **Set Comprehension:** Constructing a set of unique elements.
```python
unique_rem = {x % 3 for x in [10, 11, 12, 13, 14]}  # Output: {0, 1, 2}
```

#### Primary Advantage over Loops

Comprehensions provide a **concise, single-line syntax** that improves code readability and runs **faster** than traditional `for` loops because construction is optimized directly in C at the interpreter level.
