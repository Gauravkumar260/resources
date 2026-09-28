# Program to perform string operations

input_string = input("Enter a string: ")
target_char = input("Enter a single character to count its occurrences: ")

# 1. Count vowels and consonants
vowels = "aeiouAEIOU"
v_count = 0
c_count = 0

for char in input_string:
    if char.isalpha():
        if char in vowels:
            v_count += 1
        else:
            c_count += 1

# 2. Reverse the string
reversed_string = input_string[::-1]

# 3. Check for Palindrome (ignoring spaces and case)
cleaned_str = "".join(input_string.split()).lower()
is_palindrome = (cleaned_str == cleaned_str[::-1])

# 4. Count occurrence of target character
char_occurrences = input_string.count(target_char)

# Results Display
print("\n--- String Analysis ---")
print(f"Original String          : '{input_string}'")
print(f"Vowels Count             : {v_count}")
print(f"Consonants Count         : {c_count}")
print(f"Reversed String          : '{reversed_string}'")
print(f"Is Palindrome?           : {is_palindrome}")
print(f"Occurrences of '{target_char}'    : {char_occurrences}")
