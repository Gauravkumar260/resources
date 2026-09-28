# Function 1: Factorial
def calculate_factorial(n: int) -> int:
    """Calculates and returns the factorial of a non-negative integer."""
    if n < 0:
        raise ValueError("Factorial is undefined for negative numbers.")
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

# Function 2: Fibonacci Series
def generate_fibonacci(terms: int) -> list[int]:
    """Generates a list containing the Fibonacci series up to n terms."""
    if terms <= 0:
        return []
    elif terms == 1:
        return [0]
    
    series = [0, 1]
    for _ in range(2, terms):
        series.append(series[-1] + series[-2])
    return series

# Function 3: Sum of Digits
def sum_of_digits(n: int) -> int:
    """Calculates and returns the sum of digits of an integer."""
    num = abs(n)
    total = 0
    while num > 0:
        total += num % 10
        num //= 10
    return total

# --- Function Demonstrations ---
number = 5

# Factorial Call
fact = calculate_factorial(number)
print(f"Factorial of {number}: {fact}")

# Fibonacci Call
fib = generate_fibonacci(number)
print(f"Fibonacci series ({number} terms): {fib}")

# Sum of Digits Call
test_num = 4567
digit_sum = sum_of_digits(test_num)
print(f"Sum of digits of {test_num}: {digit_sum}")
