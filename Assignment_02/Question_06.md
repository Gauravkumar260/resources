### Question 6

**Comparison of Data Structures and Operations Demonstration**

#### Comparison Table

| Feature | List | Tuple | Set | Dictionary |
| --- | --- | --- | --- | --- |
| **Mutability** | Mutable | Immutable | Mutable | Mutable |
| **Ordering** | Ordered | Ordered | Unordered | Key-Ordered (3.7+) |
| **Duplicates** | Allowed | Allowed | Not Allowed | Unique Keys |
| **Syntax** | `[1, 2]` | `(1, 2)` | `{1, 2}` | `{"k": "v"}` |

#### Demonstration Program

```python
# 1. LIST DEMONSTRATION
sample_list = [10, 20, 30, 40]
print("--- LIST ---")
print(f"Slicing [1:3]     : {sample_list[1:3]}")  # Slicing
sample_list.append(50)                              # Insertion
sample_list.remove(20)                              # Removal
print(f"Updated List     : {sample_list}\n")

# 2. TUPLE DEMONSTRATION
sample_tuple = (100, 200, 300, 400)
print("--- TUPLE ---")
print(f"Indexing [2]      : {sample_tuple[2]}")    # Indexing
# Tuple is immutable: modification creates a new tuple
sample_tuple = sample_tuple + (500,)                # Concatenation/Update
print(f"Updated Tuple    : {sample_tuple}\n")

# 3. SET DEMONSTRATION
sample_set = {1, 2, 3, 4}
print("--- SET ---")
sample_set.add(5)                                   # Insertion
sample_set.discard(2)                               # Removal
print(f"Updated Set      : {sample_set}\n")

# 4. DICTIONARY DEMONSTRATION
sample_dict = {"a": 1, "b": 2, "c": 3}
print("--- DICTIONARY ---")
sample_dict["d"] = 4                                # Insertion / Update
del sample_dict["a"]                                # Removal
print(f"Updated Dict     : {sample_dict}")
```
