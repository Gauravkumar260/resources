### Question 5

**Python Strings, Common Methods, and Character Counter**

#### String Explanation

A Python string is an **immutable sequence** of Unicode characters. Once created, elements inside a string cannot be modified in place.

#### 5 Commonly Used String Functions

1. `str.upper()`: Converts all characters in the string to uppercase.
2. `str.lower()`: Converts all characters in the string to lowercase.
3. `str.strip()`: Removes leading and trailing whitespace.
4. `str.replace(old, new)`: Replaces occurrences of a substring with another.
5. `str.split(sep)`: Splits the string into a list of substrings using a specified delimiter.

#### Character Counter Program

```python
text = input("Enter a string: ")

vowels_count = 0
consonants_count = 0
digits_count = 0
spaces_count = 0

vowels = "aeiouAEIOU"

for char in text:
    if char.isdigit():
        digits_count += 1
    elif char.isspace():
        spaces_count += 1
    elif char.isalpha():
        if char in vowels:
            vowels_count += 1
        else:
            consonants_count += 1

print("\n--- String Analysis ---")
print(f"Vowels     : {vowels_count}")
print(f"Consonants : {consonants_count}")
print(f"Digits     : {digits_count}")
print(f"Spaces     : {spaces_count}")
```
