### Question 2

**Program to Calculate Marks, Percentage, and Grade**

```python
# Accept marks in three subjects
sub1 = float(input("Enter marks for Subject 1 (out of 100): "))
sub2 = float(input("Enter marks for Subject 2 (out of 100): "))
sub3 = float(input("Enter marks for Subject 3 (out of 100): "))

# Calculations
total_marks = sub1 + sub2 + sub3
percentage = (total_marks / 300) * 100

# Grade determination using if-elif-else
if percentage >= 90:
    grade = "A+"
elif percentage >= 80:
    grade = "A"
elif percentage >= 70:
    grade = "B"
elif percentage >= 60:
    grade = "C"
elif percentage >= 50:
    grade = "D"
else:
    grade = "F (Fail)"

# Display Results
print("\n--- Result Summary ---")
print(f"Total Marks : {total_marks:.2f} / 300")
print(f"Percentage  : {percentage:.2f}%")
print(f"Grade       : {grade}")
```
