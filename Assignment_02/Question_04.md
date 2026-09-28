### Question 4

**Functions for Prime Number Determination and Range Processing**

```python
def is_prime(n: int) -> bool:
    """Checks if a given number is prime. Returns True if prime, False otherwise."""
    if n <= 1:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True


def display_primes_in_range(start: int, end: int) -> list[int]:
    """Finds and displays all prime numbers in the specified range [start, end]."""
    prime_list = []
    for num in range(start, end + 1):
        if is_prime(num):
            prime_list.append(num)
    return prime_list


# Demonstration of Function Calls
number_to_check = 29
if is_prime(number_to_check):
    print(f"{number_to_check} is a Prime Number.")
else:
    print(f"{number_to_check} is NOT a Prime Number.")

# Processing Range
start_range, end_range = 10, 50
primes = display_primes_in_range(start_range, end_range)
print(f"Prime numbers between {start_range} and {end_range}: {primes}")
```
