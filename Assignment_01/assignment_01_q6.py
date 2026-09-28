# List Operations on Student Marks
marks = [78, 85, 92, 64, 92, 88, 70]

# Core Calculations
max_marks = max(marks)
min_marks = min(marks)
avg_marks = sum(marks) / len(marks)

# Finding Second-Highest Marks
unique_marks = list(set(marks))
unique_marks.sort(reverse=True)
second_highest = unique_marks[1] if len(unique_marks) > 1 else max_marks

print(f"Initial Marks List    : {marks}")
print(f"Maximum Marks         : {max_marks}")
print(f"Minimum Marks         : {min_marks}")
print(f"Average Marks         : {avg_marks:.2f}")
print(f"Second Highest Marks  : {second_highest}\n")

# Demonstrations

# 1. Indexing
print(f"First element (index 0)   : {marks[0]}")
print(f"Last element (index -1)   : {marks[-1]}")

# 2. Slicing
print(f"First 3 marks (0:3)       : {marks[0:3]}")
print(f"Sublist (index 2 to 5)    : {marks[2:5]}")

# 3. Insertion
marks.append(95)             # Appends to the end
marks.insert(2, 81)          # Inserts 81 at index 2
print(f"After Append & Insert     : {marks}")

# 4. Deletion
removed_last = marks.pop()   # Removes last element
marks.remove(64)             # Removes first occurrence of value 64
print(f"After Pop & Remove (64)   : {marks}")

# 5. Sorting
marks.sort()                 # Ascending in-place
print(f"Sorted Ascending          : {marks}")
marks.sort(reverse=True)     # Descending in-place
print(f"Sorted Descending         : {marks}")
