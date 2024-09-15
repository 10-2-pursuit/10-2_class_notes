# Ranges
# - declare
# - loops

# A range is an iterable that can be looped through specifically it is a set of integer numbers

# We declare a range with the function range. At a minimum it requires 1 parameter which is how many numbers you want in your range.

nums = range(10) # Will create 1 number in our range 0 through 9
print(nums)
print(list(nums))

counters = range(1,11)
print(list(counters))

fives = range(0, 50, 5)
print(list(fives))

fives = range(0, 51, 5)
print(list(fives))

test = range(51, 5)
print(list(test))

# Looping
items = ['a', 'b', 'c']
for i in range(len(items)):
    print(i, items[i])

for i in range(1, 10, 2):
    print(i)
