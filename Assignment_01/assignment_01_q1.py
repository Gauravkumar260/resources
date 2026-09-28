# Program to calculate total, percentage, and average marks

# Accepting inputs with appropriate data types
student_name: str = input("Enter student name: ")
roll_number: int = int(input("Enter roll number: "))

marks: list[float] = []
for i in range(1, 6):
    m = float(input(f"Enter marks for Subject {i} (out of 100): "))
    marks.append(m)

# Calculations
total_marks: float = sum(marks)
average_marks: float = total_marks / 5
percentage: float = (total_marks / 500) * 100

# Display results and data types
print("\n" + "="*30)
print("      STUDENT MARKSHEET      ")
print("="*30)
print(f"Name (str)       : {student_name}")
print(f"Roll No (int)    : {roll_number}")
print(f"Marks (list)     : {marks}")
print(f"Total Marks      : {total_marks:.2f} / 500.0")
print(f"Average Marks    : {average_marks:.2f}")
print(f"Percentage       : {percentage:.2f}%")
print("="*30)
