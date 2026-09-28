# 1. Dictionary Operations (Student Record)
student_record = {
    "name": "Gaurav",
    "roll_no": 101,
    "course": "BCA",
    "marks": 89.5
}

print("=== DICTIONARY OPERATIONS ===")
print(f"Initial Dictionary    : {student_record}")
print(f"Access Name           : {student_record.get('name')}")
student_record["grade"] = "A"              # Insertion
student_record["marks"] = 92.0            # Update
deleted_val = student_record.pop("grade") # Deletion
print(f"Dictionary Keys       : {list(student_record.keys())}")
print(f"Dictionary Values     : {list(student_record.values())}")
print(f"Updated Dictionary    : {student_record}\n")

# 2. Tuple Operations (Subjects)
subjects = ("Python", "Web Development", "DBMS", "Computer Networks", "Python")

print("=== TUPLE OPERATIONS ===")
print(f"Subjects Tuple        : {subjects}")
print(f"Indexing (First Item) : {subjects[0]}")
print(f"Slicing (First 2)     : {subjects[:2]}")
print(f"Count of 'Python'     : {subjects.count('Python')}")
print(f"Index of 'DBMS'       : {subjects.index('DBMS')}")
# Concatenation creates a new tuple (since tuples are immutable)
extended_subjects = subjects + ("Operating Systems",)
print(f"Extended Tuple        : {extended_subjects}\n")

# 3. Set Operations (Unique Course Names)
courses = {"BCA", "B.Tech", "MCA", "B.Sc", "BCA"} # Duplicates automatically removed

print("=== SET OPERATIONS ===")
print(f"Unique Courses Set    : {courses}")
courses.add("M.Tech")                    # Addition
courses.remove("B.Sc")                    # Removal
print(f"Set after Add/Remove  : {courses}")

other_courses = {"B.Tech", "MBA", "PhD"}
print(f"Union                 : {courses.union(other_courses)}")
print(f"Intersection          : {courses.intersection(other_courses)}")
