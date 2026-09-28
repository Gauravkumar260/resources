### Question 7

**Lambda Functions, `map()`, and `filter()**`

#### Core Concepts

* **`lambda`:** Small anonymous function defined inline without `def`, syntax: `lambda arguments: expression`.
* **`map(function, iterable)`:** Applies the given function to every item in the input iterable and returns an iterator.
* **`filter(function, iterable)`:** Filters elements of an iterable based on whether a conditional function returns `True`.

#### Program: Squares of Even Numbers

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# 1. Filter out odd numbers (keep only evens)
evens = filter(lambda x: x % 2 == 0, numbers)

# 2. Map the even numbers to their squares
squares_of_evens = list(map(lambda x: x ** 2, evens))

print(f"Original List       : {numbers}")
print(f"Squares of Evens    : {squares_of_evens}")
```
