#  Intermediate Functions in Python

# Default parameter values
# Like JavaScript, Python can have default values for the parameters of its methods. The following function has a default parameter for the "saying" parameter of the greeting function.

def greeting(name, saying="Hello"):
    print(saying, name)

greeting("Monica")
# Hello Monica

greeting("Barry", "Hey")
# Hey Barry

# Parameters with default values must always come after parameters that do not have default values. The following code results in a SyntaxError.

# THIS IS BAD CODE AND WILL NOT RUN
def increment(delta=1, value):
    return delta + value

# Keyword arguments (named parameters)
# Unlike JavaScript, Python has the built-in ability to specify arguments by name without resorting to destructuring. You can just write the name of the parameter and an equal sign before the value you pass as a parameter. By specifying the names of the arguments, you can provide them in any order.

def greeting(name, saying="Hello"):
    print(saying, name)

greeting(name="Monica")
# Hello Monica

greeting(name="Barry", saying="Hey")
# Hey Barry

greeting(saying="Hey", name="Barry")
# Hey Barry

# Pro-tip: Idiomatic Python will see developers use positional arguments for the values of parameters with no default values, and keyword arguments for parameters that do have default values. For example, the above greeting function would normally be seen used like this.

def greeting(name, saying="Hello"):
    print(saying, name)

# name has no default value, so just provide the value
# saying has a default value, so use a keyword argument
greeting("Monica", saying="Hi")


# Anonymous functions
# In JavaScript, you could just create functions and assign them to variables. Python has a special keyword, lambda, to allow you to create anonymous functions that you can assign to variables.

# The so-called lambda functions in Python act like arrow functions in JavaScript.

# In JavaScript, to create a function that uppercases a string, you could do something like this:

    # const toUpper = s => s.toUpperCase();

# In Python, you would do something similar, but with the lambda keyword.

toUpper = lambda s: s.upper()

# Lambda functions are meant to be one-line functions. The only way to spread them across lines is to wrap them in parentheses. However, it is greatly discouraged to do so.

toUpper = (
    lambda s:
        s.upper())


# Errors
# Like elsewhere in Python, if you make a mistake, then an error will be thrown.

# For example, if the number of arguments sent in doesn't match the number of parameters in the definition, then a TypeError occurs.

# Not enough arguments:
"TypeError: average() missing 1 required positional argument: 'num2'"

# Too many arguments:
"TypeError: average() takes 2 positional arguments but 3 wwere given"



# More On Functions

# In JavaScript, you can define a function with the rest operator to collect up all arguments without a specific parameter. JavaScript will take the extra values and put them into an array for you.

    # function add(a, b, ...args) {
    # let total = a + b;
    # for (let n of args) {
    #     total += n;
    # }
    # return total;
    # }

    # add(1, 2)  // Returns 3

    # add(2, 3, 4, 5) // Returns 14


# Python has this idea, too, but in two different ways. You will learn about the * and ** special forms.

# Variable-length positional arguments

# In Python, you can get the extra positional arguments (those without names) using the * operator in the function declaration. By convention, you should name the parameter "args". Python will collect all of the "extra" arguments, create a tuple for you, and put it in the parameter with the single asterisk in front of it.

# Here's the code from above, but in Python.

def add(a, b, *args):
    total = a + b;
    for n in args:
        total += n
    return total

add(1, 2)  # Returns 3

add(2, 3, 4, 5) # Returns 14
In the first invocation of add, the value in *args is an empty tuple.

In the second invocation of add, the value in *args is a tuple that contains the values 4 and 5, (4, 5).

# Variable-length keyword arguments
# Because Python has keyword arguments, it's not really possible to nicely put a key and a value into a tuple. It would not be the right data structure. Instead, for any extra keyword arguments, you can collect them with the ** operator in the function declaration. By convention, you should name the parameter kwargs for "keyword arguments". Python will collect all of the "extra" keyword arguments, put them into a dictionary for you, and put it in the parameter with the double asterisk in front of it.

def print_names_and_countries(greeting, **kwargs):
    for k, v in kwargs.items():
        print(greeting, k, "from", v)

print_names_and_countries("Hi",
                          Monica="Sweden",
                          Charles="British Virgin Islands",
                          Carlo="Portugal")
# Prints
# Hi Monica from Sweden
# Hi Charles from British Virgin Islands
# Hi Carlo from Portugal


# Functions as a whole
# When ordering arguments within a function or function call, arguments need to occur in a particular order:

# formal positional arguments
*args

# Keyword arguments with default values
**kwargs

# In practice, when working with explicit positional parameters along with *args and **kwargs, your function would look like this:

def example(arg_1, arg_2, *args, **kwargs):
  pass

# And, when working with positional parameters along with named keyword parameters in addition to *args and **kwargs, your function would look like this:

def example2(arg_1, arg_2, *args, kw_1="shark", kw_2="blowfish", **kwargs):
  pass

# It is important to keep the order of arguments in mind when creating functions so that you do not receive a syntax error in your Python code.