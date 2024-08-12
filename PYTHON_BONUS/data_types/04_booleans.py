# The Boolean data type is perhaps the simplest because it has only two possible values, True and False.

# Logical operators
# One of the simplicities that developers like about Python is that it reads more like English than JavaScript - especially with the logical operators.

# For reference, here's a comparison table.

# Python	JavaScript
# and	    &&
# or	    ||
# not	    !

# Here is an example of how Python reads like English.

# Logical AND
print(True and True)    # => True
print(True and False)   # => False
print(False and False)  # => False

# Logical OR
print(True or True)     # => True
print(True or False)    # => True
print(False or False)   # => False

# Logical NOT
print(not True)             # => False
print(not False and True)   # => True
print(not True or False)    # => False
# The rules of logic apply in Python as in every other language, including DeMorgan's Law.

# not (A or B) is equivalent to not A and not B
# not (A and B) is equivalent to not A or not B

# Truth Value Testing
# ANY object can be tested for a truth value in an if statement or while loop even it is not a Boolean type.

# Python considers an object to be true (notice the lower case 't') UNLESS it is one of the following

# constant: None or False
# zero of any numeric type: 0, 0.0
# empty sequence or collection
# string: ''
# list: []
# tuple: ()
# dictionary: {}
# set()
# range(0)
# In other words, all items in this list are False and everything else is true.

# Solving common mistakes
# Capitalization is crucial to Python. The items true and false are considered to be variables with those names, not the special values you'd expect from JavaScript. If you accidentally make this typo you'll probably see an error like this:

# NameError: name 'true' is not defined
# Simply change true to True and your problem will be solved.

# Likewise, &&, || and ! by itself have no meaning. If you accidentally use one like this:
print (True && False)
# Then you'll receive this error:
# SyntaxError: invalid syntax

# Again, it's an easy fix to change && to and.