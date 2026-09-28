numbers = [4, 7, 12, 15, 20, 25, 8, 10, 55, 62]

# 1. Generate squares of all numbers using map() and lambda
squares = list(map(lambda x: x ** 2, numbers))

# 2. Extract even numbers using filter() and lambda
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))

# 3. Extract numbers greater than 50 using filter() and lambda
numbers_above_50 = list(filter(lambda x: x > 50, numbers))

print(f"Original Numbers List : {numbers}")
print(f"Squares of Numbers    : {squares}")
print(f"Even Numbers          : {even_numbers}")
print(f"Numbers > 50          : {numbers_above_50}")
