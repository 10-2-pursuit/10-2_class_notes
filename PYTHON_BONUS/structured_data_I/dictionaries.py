# Dictionaries
# - mapping iterable
# - declare
# - add/remove items
# - loop through all items
# - dict()
# - zip()
# - dir()
# - duck typing revisted

# Dictionaries are a mapping type of iterble which means there is a value you can use to access a certain type of item

book = {
    'title': 'The Color Purple', 
    'ratings': 7492, 
    'stars': 4.8,
    'author':{
        'firstName': 'Alice', 
        'lastName': 'Walker'
    },
    'images': ['thecolorpurple1.png', 'thecolorpurple2.png']
}
print(book)

# Dictionaries in Python are iterables which means they have a length

print(len(book))

# We can remove items we no longer need from our dictionaries with del, similare to `delete` in JavaScript

del book['stars']
print(book)


# We can also add items to dictionaries at any time by specifying the dictionary and give it the key that we want to add
book['stars'] = 4.9
print(book)
# notice how stars is now at the end of the dictionary

# One thing we may want to often do with dictionaries is go through every item in the dictionary

for i in book:
    print(i) # notice how i is all of the keys that come with the dictionary, if we want to see the corresponding values we can do `book[i]`

# More ways to create dictionaries

# Starting with a variable we can use the dict() function to declare a dictionary and using arguments that have a name and a value associated with them

pond = dict(
    depth=10, 
    area='210 square feet', 
    fish=['Mary', 'Billy', 'Bob']
)
print(pond)

# We can also use the dict() function to take in a list of tuples where the first item is a string element and the second is whatever we want the value to be

alligator = dict([
    ('lifespan', 30),
    ('length', 3.4),
    ('lengthUnits', 'm'),
    ('species', ['American Alligator','Chinese Alligator' ]),
    ('funFact', 'As an alligators teeth are worn down, they are replaced. An alligator can go though 3,000 teeth in a lifetime.')
])
print(alligator)

# Using zip()

keys = ['name', 'home runs', 'strikeouts', 'rbi']
values = ['Babe Ruth', 7214, 1330, 2214]
my_zip = zip(keys, values)
player = dict(my_zip)
print(player)

# Inspect a dictionary
print(dir(player))

# For statement with dictionaries 

# The for loop in general (recall)
# In Python, there is only one for loop. In code, a for statement always includes the following:

    # -The for keyword
    # -A variable name
    # -The in keyword
    # -An iterable of some kind
    # -A colon
    # -Starting on the next line, an indented block of code # -(called the for clause)

# The for loop in Python is very much like the for (..of..) loop in JavaScript. There is no counting version of the for loop in Python like the for(;;) version in JavaScript. Instead, you use the range function to create an iterable "filled" with numbers. 

# Just like with the while loop, you can use break and continue statements inside for loops as well. The continue statement will continue to the next value of the for loop’s counter, as if the program execution had reached the end of the loop and returned to the start. In fact, you can use continue and break statements only inside while and for loops. If you try to use these statements elsewhere, Python will give you an error.

# The for loop with a dictionary

# There are three dictionary methods that will return list-like values of the dictionary’s keys, values, or both keys and values: keys(), values(), and items(). The values returned by these methods are not true lists, they cannot be modified and do not have an append() method. But, like the range, they're list-like and can be used with a for loop.

# Here, a for loop iterates over each of the values in the spam dictionary.

spam = {'color': 'red', 'age': 42}

for v in spam.values():
    print(v)
# Prints red
# Prints 42

# A for loop can also iterate over the keys.

for k in spam.keys():
    print(k)
# Prints color
# Prints age

# Finally, a for loop can iterate over both keys and values. In this next code, the items() method returns a list-like object that contains tuples that contain each key and value. That means you can assign a single variable to the tuple, or destructure it.

# Getting tuples
for i in spam.items():
    print(i)
# Prints ('color', 'red')
# Prints ('age', 42)


# Destructuring to values
for k, v in spam.items():
    print('Key: ' + k + ' Value: ' + str(v))
# Prints Key: age Value: 42
# Prints Key: color Value: red
