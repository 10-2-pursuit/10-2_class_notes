# Sets
# - declare
# - union, intersection, symmetric_difference, difference
# - Examples
# -- unique tags
# -- users taking two actions

# A set in mathematics is a group of elements where every element is unique. Sets in Python are based on this same theory

# To declare a set in Python we need to use {}

a = {1, 2, 3}
b = {3, 4, 5}
print(a)
print(b)

# Sets not only have unique values, but we can compare sets in special ways

# Union - Combine two sets into a new set using union. The union will contain the unique items from both sets

print(a | b)

# Combine using intersection - Intersection means all the items that are in both sets

print(a & b)

# We can also figure out what different in one set compared to another set (a.k.a. removes the intersection). This is called the difference.

print(a - b)
print(b - a)

# Symmetric difference - If we wanted to know everything that is different between two sets we can find the symmetric difference

print(a ^ b)

# Sets in Python have the special ability to take a string and create a set comprised of the characters in that given string

a = set('banana')
b = set('scarab')

print(a)
print(b)

print(a | b)
# Notice the values are in any particular order. In Python, sets are unordered meaning the have no concept of order

print(a.union(b)) # We can also use the .union() method to create a union

print(a.intersection(b))
print(a.difference(b))
print(b.difference(a))
print(a.symmetric_difference(b))

# Creating a set from a list

basket = ['apple', 'banana', 'apple', 'orange', 'pear', 'apple', 'banana']
print(basket)
print(set(basket))

# Real world application
posts = [
    {"title": "All About Lists", "tags": ('fun', 'informative', 'lists')},
    {"title": "Tuple Trouble", "tags": ('fun', 'tuples')},
    {"title": "Sparkling Sets", "tags": ( 'informative', 'numbers')},
]

all_tags = []

for i in range(len(posts)):
    print(posts[i]['tags'])
    all_tags.extend(posts[i]['tags'])

print(all_tags)
all_tags = (set(all_tags))
all_tags = list(all_tags)
all_tags.sort()
print(all_tags)