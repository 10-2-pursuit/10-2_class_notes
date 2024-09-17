# Python Decorators
# In this lesson, you'll be learning about the fundamentals of Python decorators. Python decorators are functions that wrap another function to dynamically modify its behavior. A decorator is a function that takes in another function to extend its behavior and return a modified version of the inner function. The original input function is not directly modified. You have already been briefly introduced to the @property decorator that is used to change methods to properties. Today you'll learn about what is happening under the hood when you use the decorator syntactic sugar (such as @property).

# Dynamic modification through the use of Python decorators is a simple example of metaprogramming. As a simple definition, metaprogramming is when an object is created by other objects. Decorators are functions that return other functions. Before diving into using Python decorators, you'll revisit the concepts of callbacks and closures. Decorators combine both concepts by taking in a callback function that is invoked within an inner function (that forms a closure) to modify behavior.

# After finishing this lesson, you will:
    # Be able to explain what a Python decorator is;
    # Understand how callbacks and closures are connected to Python decorators;
    # Know how to define custom decorator functions with and without syntactic sugar;
    # Understand how to use @property, a built-in class decorator;
    # Know how to use *args and **kwargs to manage decorator arguments; and,
    # Recognize popular decorator libraries.

# Callbacks

# Python functions can be passed as arguments just like the callbacks you are familiar with from JavaScript. This is because, in Python, functions are first-class-objects. Since functions are first-class objects, there are no restrictions to how the function can be used (so the function can be passed as an argument).

def say_hi(name):
  print(f'Hi, {name}!')

def say_good_morning(name):
  print(f'Good morning, {name}!')

def say_something_to_curtis(say_something_func):
  return say_something_func('Curtis')

say_something_to_curtis(say_hi)            # Hi, Curtis!
say_something_to_curtis(say_good_morning)  # Good morning, Curtis!

# Introspection
# One of the powers of Python is introspection. Introspection is the ability to examine objects to determine its behavior or type. You can use the built-in dir() function to observe the say_hi object.

def say_hi(name):
  print(f'Hi, {name}!')

print(say_hi)       # <function say_hi at 0x1037a41f0>
print(dir(say_hi))
# ['__annotations__', '__call__', '__class__', '__closure__', '__code__', '__defaults__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__get__', '__getattribute__', '__globals__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__kwdefaults__', '__le__', '__lt__', '__module__', '__name__', '__ne__', '__new__', '__qualname__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__']

print(say_hi.__closure__) # None
# Notice how the function has a __closure__ attribute. This will be helpful later as you dive into exploring the role of inner functions in Python decorators!

# Inner functions
# But first, let's do a brief review of closures. A closure is formed when an inner function is defined within an outer function so that the inner function can reference arguments passed into the outer function. This binds the outer arguments to the inner function whenever the outer function is invoked. Right now the say_hi function has no inner function, so the __closure__ attribute prints to be None. Let's write a new say_hi_to function with an inner function, say_from!

def say_hi_to(name):
  def say_from(author):
    print(f'Hi, {name}!')
    print(f'This is a message from {author}.')
  return say_from

say_hi_ryan_from = say_hi_to('Ryan')
say_hi_ryan_from('Julia')             # Hi, Ryan! This is a message from Julia.
say_hi_ryan_from('Erik')              # Hi, Ryan! This is a message from Erik.

print(say_hi_ryan_from.__closure__)   # (<cell at 0x1093cf1f0: str object at 0x1094035f0>,)
print(say_hi_ryan_from.__closure__[0].cell_contents)  # Ryan
# When you print the __closure__ attribute of the say_hi_to object, you'll see a tuple with a cell object of type string, meaning that the say_hi_ryan_from function has a closure! A cell object is used to store and reference variables of multiple scopes. When a variable from another scope is used, it references the value stored in the cell object. The __closure__ tuple holds a cell object for each of the function's enclosed variables. If you look into the closure's cell_contents attribute, you'll find the enclosed name variable (Ryan) from the outer scope.

# Notice how the closure makes the say_hi_to function fairly reusable. You can easily create more wrapper functions to attach different names to the inner say_from function and greet different people.

say_hi_andrew_from = say_hi_to('Andrew')
say_hi_chris_from = say_hi_to('Chris')
say_hi_andrew_from('Julia')       # Hi, Andrew! This is a message from Julia.
say_hi_chris_from('Julia')        # Hi, Chris! This is a message from Julia.

# Decorators
# With decorators, you can wrap functions to dynamically modify their behavior in a similar way that you have done with renaming outer functions that form a closure. Decoration happens when you pass a function into a wrapper and assign the wrapper's name to be the same as the function. Take the following message_decorator wrapper function as well as the say_hi and say_bye functions.

def message_decorator(message_func):
  def message_wrapper(name):
    from_statement = 'This is a message from ' + name
    print(message_func() + from_statement)
  return message_wrapper

def say_hi():
  return 'Hi! '

def say_bye():
  return 'Bye! '
# Note the order of what is happening in the message_decorator function:

# The decorator function (message_decorator) takes in a function to invoke.
# The inner wrapper function is defined (message_wrapper).
# There is functional code that happens before the decorator's function argument is invoked (from_statement = ...).
# The decorator's function argument is invoked (message_func()).
# The wrapper function is returned (return message_wrapper).
# Before wrapping the say_hi function with the message_decorator function, take a moment to inspect it. You'll see that it's a simple function-type object named say_hi that is stored at a specific memory point (0x10f1a9280). You'll also notice that it does not have any enclosed variables (say_hi.__closure__ is None).

def message_decorator(message_func):
  def message_wrapper(name):
    from_statement = 'This is a message from ' + name
    print(message_func() + from_statement)
  return message_wrapper

def say_hi():
  return 'Hi! '

def say_bye():
  return 'Bye! '

print(say_hi)             # <function say_hi at 0x10f1a9280>>
print(say_hi.__closure__) # None

# Now wrap the function with the message_decorator and re-inspect the say_hi function. To mimic what is happening under the hood with decorator syntactic sugar, you'll need to reassign the name say_hi to the invocation of the message_decorator function. Prefacing a function definition with a statement like @message_decorator is syntactic sugar to invoke a decorator with a named callback function. This syntactic sugar also reassigns the name of the callback to point to the wrapper function returned by the decorator.

def message_decorator(message_func):
  def message_wrapper(name):
    from_statement = 'This is a message from ' + name
    print(message_func() + from_statement)
  return message_wrapper

def say_hi():
  return 'Hi! '

def say_bye():
  return 'Bye! '

print(say_hi)             # <function say_hi at 0x10f1a9280>>
print(say_hi.__closure__) # None

say_hi = message_decorator(say_hi)
print(say_hi)             # <function message_decorator.<locals>.message_wrapper at 0x10f1a93a0>
# You'll see that say_hi is no longer a simple function and that is references a different memory point. In this reading's example, it references 0x10f1a93a0 instead of 0x10f1a9280. Note that you would see a different memory address if you are following along and running this code locally. The memory address for each function will also change every time you re-run your code. The key take-aways from this example are that the original say_hi function is enclosed within the new decorated say_hi function, and that the original say_hi function does not simply disappear with the name overwrite.

# The new renamed say_hi function references the message_decorator and message_wrapper functions. It is a new function that invokes the original say_hi function (to say Hi!) and adds additional behavior when invoked (to say This is a message from...).

# Inspect the new say_hi function's closure property and you'll see that it holds a cell that encloses the original say_hi function at 0x10f1a9280. This is an example of Python decorators enclosing a function's outer variables and return information in another function.

print(say_hi)             # <function say_hi at 0x10f1a9280>>
print(say_hi.__closure__) # None

say_hi = message_decorator(say_hi)
print(say_hi)             # <function message_decorator.<locals>.message_wrapper at 0x10f1a93a0>
print(say_hi.__closure__) # (<cell at 0x10f17b1f0: function object at 0x10f1a9280>,)
print(say_hi.__closure__[0].cell_contents) # <function say_hi at 0x10f1a9280>

# Syntactic sugar  ** left off here
# In Python, you can use syntactic sugar to shorten the decoration of a function. You simply use @ to preface the name of a decorator function, such as message_decorator. Then you can apply the full decorator statement (@message_decorator) before a function's definition to apply the decorator to the defined function:

def message_decorator(message_func):
  def message_wrapper(name):
    from_statement = 'This is a message from ' + name
    print(message_func() + from_statement)
  return message_wrapper

@message_decorator  # Replaces the need for `say_hi = message_decorator(say_hi)`
def say_hi():
  return 'Hi! '

@message_decorator  # Replaces the need for `say_bye = message_decorator(say_bye)`
def say_bye():
  return 'Bye! '

print(say_hi)   # <function message_decorator.<locals>.message_wrapper at 0x10d53c310>
print(say_bye)  # <function message_decorator.<locals>.message_wrapper at 0x10d53c430>

# Arguments
# But what if you want your decorated function to take in arguments? You can start by explicitly setting parameters for the needed arguments. Then you can refactor to make use of *args and **kwargs because a decorator function with explicitly set parameters isn't very reusable.

def message_decorator(message_func):
  def message_wrapper(name, author):
    return f'{message_func(name)}! This is a message from {author}.'
  return message_wrapper

@message_decorator
def say_hi(name):
  return f'Hi, {name}'

print(say_hi('Julia', 'Ryan'))  # Hi, Julia! This is a message from Ryan.
# The example below destructures the positional arguments stored in *args. The decorator's function argument is invoked with the name from *args and interpolation is used to return a message string. Notice how the message string output has been extended to include an author sign-off, instead of only returning the simple Hi, ... message of the original say_hi function.

def message_decorator(message_func):
  def message_wrapper(*args):
    name, author = args
    message = message_func(name)
    return f'{message}! This is a message from {author}.'
  return message_wrapper

@message_decorator
def say_hi(name):
  return f'Hi, {name}'

print(say_hi('Julia', 'Ryan'))  # Hi, Julia! This is a message from Ryan.
# You can also access keyword arguments with **kwargs. As you might remember, **kwargs is a dictionary of named arguments. This means you need to key in with the specified argument name in order to access the value of the argument.

def message_decorator(message_func):
  def message_wrapper(*args, **kwargs):
    message = message_func(kwargs['name'])
    author = kwargs['author']
    return f'{message}! This is a message from {author}.'
  return message_wrapper

@message_decorator
def say_hi(name):
  return f'Hi, {name}'

print(say_hi(name='Julia', author='Ryan'))  # Hi, Julia! This is a message from Ryan.

# Built-in class decorators
# Python also has a few built-in class decorators: @property, @classmethod, and @staticmethod. You have already used the @property in learning the basics of class definition in Python. The @property decorator references Python's built-in property() function to get a class attribute. It can be used to define the getter of a class property. The property getter also has associated setter and deleter methods: @«getter_method_name».setter and @«getter_method_name».deleter.

class Ring:
  def __init__(self):
    self._nickname = "Shiny ring"

  @property
  def nickname(self):
    return self._nickname

  @nickname.setter
  def nickname(self, value):
    self._nickname = value

  @nickname.deleter
  def nickname(self):
    del self._nickname
    print('Oh no! The ring is gone!')

ring = Ring()
print(ring.nickname)                  # Shiny ring
ring.nickname = "Gollum's precious"
print(ring.nickname)                  # Gollum's precious
del ring.nickname                     # Oh no! The ring is gone!
# You'll learn more about the built-in @classmethod and @staticmethod decorators in a future reading when you dive into class and instance variables in Python!

# Decorator modules and libraries
# In essence, you can use any of Python's built-in functions, that take in a function as an argument, as a decorator! In addition to using Python's built-in functions and writing custom code as decorators, you can import libraries of other functions and use those functions as decorators. For example, Functools is a module of higher-order functions and PythonDecoratorLibrary is another collection of reusable code that can be used in decorators. As you might remember from learning about higher-order components in React, a higher-order function is simply a function that returns another function. Both libraries are full of functions that you can import and use as decorators.

# Custom class decorators
# Like how you wrote a decorator for a function outside of a class, you can use decorators to wrap method definitions. You can also write reusable decorators to wrap class definitions and modify the behavior of an entire class. For example, you can use a class decorator to implement the singleton software design pattern. Whenever you initialize a singleton class instance, only one instance is actually created. This is a helpful pattern that allows the same object to be globally accessed. You are already familiar with this design pattern through Python's built-in constants: None, True, and False. The @singleton_decorator below nests the @wraps decorator from the Functools module. The wraps decorator is used to preserve the class information, for example its name (__name__) and docstring (__doc__).

from functools import wraps

def singleton_decorator(class_definition):
  @wraps(class_definition)
  def class_wrapper():
    if not class_wrapper.instance:
      class_wrapper.instance = class_definition()
    return class_wrapper.instance
  class_wrapper.instance = None
  return class_wrapper
 
@singleton_decorator
class OneRingToRuleThemAll:
  """
  This is a class for The Ring from Lord of the Rings.
  """
  def __init__(self):
    self._nickname = "Gollum's precious"
 
first_ring = OneRingToRuleThemAll()
second_ring = OneRingToRuleThemAll()
third_ring = OneRingToRuleThemAll()
print(first_ring)   # <__main__.OneRingToRuleThemAll object at 0x1023981f0>
print(second_ring)  # <__main__.OneRingToRuleThemAll object at 0x1023981f0>
print(third_ring)   # <__main__.OneRingToRuleThemAll object at 0x1023981f0>
print(OneRingToRuleThemAll.__name__)  # OneRingToRuleThemAll
print(OneRingToRuleThemAll.__doc__)   # This is a class for The Ring from Lord of the Rings.