### Question 3

**Demonstration of Loops (`for` and `while`)**

```python
# Part A: Multiplication Table using 'for' loop
num = 7
print(f"--- Multiplication Table of {num} (for loop) ---")
for i in range(1, 11):
    print(f"{num} x {i:2d} = {num * i}")

print("\n" + "="*35 + "\n")

# Part B: Sum of first N natural numbers using 'while' loop
n = 10
count = 1
total_sum = 0

while count <= n:
    total_sum += count
    count += 1

print(f"Sum of first {n} natural numbers (while loop): {total_sum}")
```
