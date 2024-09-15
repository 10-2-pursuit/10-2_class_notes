# Tuples
# - declare
# - cannot append, remove, or sort in place
# - sorted()print(scores)

# - min, max, sum, len
# - empty and single item tuples
# - returning tuples from functions

# Tuples in python are very similar to lists the difference is they are immutable

# You can declare a tuple using parenthesis

a = (1, 2, 3, 4, 5, 6, 7, 8, 9)
b = ("a", "b", "c", "d", "e")
c = 10, 20, 30 # we can also declare tuples without the parentheses as long as we have multiple items

print(a)
print(b)
print(c)

a.append(10) # AttributeError: 'tuple' object has no attribute 'append'
print(a)

a.sort() # AttributeError: 'tuple' object has no attribute 'sort'

# TUPLES ARE IMMUTABLE! WE CANNOT SORT OR REMOVE/ADD TO THEM

# However the Python sorted() function does still work with tuples because it created a whole new item

shopping = ('apples', 'milk', 'bread')
alpha_shopping = sorted(shopping)
print(alpha_shopping) # converts to a sorted list. we can wrap the list it in tuple() initializer function to convert it back to a tuple

# We can make a tuple of lists. We can also make a list of tuples. Let's get wild!

shopping_stops = (
    ["bread", "milk", "eggs"],
    ["picture hooks", "extension cord"]
)

print(shopping_stops)

print(shopping_stops[0])
shopping_stops[0].append('apples')
print(shopping_stops)


users = [
    (1, "user_a"),
    (2, "user_b")
]
print(users)

# NUMBER STUFF WITH TUPLES

scores = (15, 66, 34, 99, 29, 54, 12)
print(max(scores))
print(min(scores))
print(sum(scores) / len(scores))

print(tuple(sorted(scores)))

def minmax(numbers):
    return min(numbers), max(numbers)

my_nums = (1, 4, -2, 3.3, -8, 25, 9, 0)
print(minmax(my_nums))

(lowest, highest) = minmax(my_nums)
print(lowest)
print(highest)

# What if we want an empty tuple or a tuple with only one item??

empty = ()
print(empty)

single = (1)
print(single) # gives us just the integer 1

# Why won't it create a tuple with one item in it?! **Cue rage scream!!!!**

# Not to worry we can easily fix this by adding a trailing comma after the single value in our tuple

really_single = (1,)
print(really_single)
