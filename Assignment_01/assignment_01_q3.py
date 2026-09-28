# Program to check if a number is Prime, Palindrome, or Neither

num = int(input("Enter an integer: "))

# 1. Prime Number Check
is_prime = True
if num <= 1:
    is_prime = False
else:
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            is_prime = False
            break

# 2. Palindrome Check
str_num = str(abs(num))
is_palindrome = (str_num == str_num[::-1])

# 3. Decision Matrix
print("\n--- Result ---")
if is_prime and is_palindrome:
    print(f"{num} is BOTH a Prime number and a Palindrome.")
elif is_prime:
    print(f"{num} is a PRIME number, but NOT a Palindrome.")
elif is_palindrome:
    print(f"{num} is a PALINDROME, but NOT a Prime number.")
else:
    print(f"{num} is NEITHER a Prime number nor a Palindrome.")
