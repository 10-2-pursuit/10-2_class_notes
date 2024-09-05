# The if statement
#The most common type of flow control statement is the if statement. An if statement’s clause (that is, the block following the if statement) will execute if the statement’s condition is True. The clause is skipped if the condition is False.

#In plain English, an if statement could be read as, “If this condition is true, execute the code in the clause.” In Python, an if statement consists of the following:

# The if keyword
# A condition (that is, an expression that evaluates to True or False)
# A colon
# Starting on the next line, an indented block of code (called the if clause)
# For example, say you have some code that checks to see whether someone’s name is Monica. (Pretend name was assigned some value earlier.)

if name == 'Monica':
    print('Hi, Monica.')

# All flow control statements end with a colon and are followed by a new block of code (the clause). This if statement’s clause is the block with print('Hi, Monica.').

# Please note, no parentheses around the conditional for the if statement. This vastly differs from JavaScript. In Python, you just don't need them, unless you want to have some special order of operations.

# It doesn't hurt to write them. This, too, is valid Python.

if (name == 'Monica'):
  print('Hi, Monica.');

# It's just, nobody writes it like that, so you probably shouldn't, either.

# The else statement
# An if clause can optionally be followed by an else statement. The else clause is executed only when the if statement’s condition is False. In plain English, an else statement could be read as, “If this condition is true, execute this code. Or else, execute that code.” An else statement doesn’t have a condition, and in code, an else statement always consists of the following:

# The else keyword
# A colon
# Starting on the next line, an indented block of code (called the else clause)
# Returning to the Monica example, have a look at some code that uses an else statement to offer a different greeting if the person’s name isn’t Monica.

if name == 'Monica':
    print('Hi, Monica.')
else:
    print('Hello, stranger.')


# The elif statement
# While only one of the if or else clauses will execute, you may have a case where you want one of many possible clauses to execute. The elif statement is an “else if” statement that always follows an if or another elif statement. It provides another condition that is checked only if any of the previous conditions were False. In code, an elif statement always consists of the following:

# The elif keyword
# A condition (that is, an expression that evaluates to True or False)
# A colon
# Starting on the next line, an indented block of code (called the elif clause)
# The following code adds an elif to the name checker to see this statement in action.

if name == 'Monica':
    print('Hi, Monica.')
elif age < 12:
    print('You are not Monica, kiddo.')

# This time, the code checks the person’s age, and will tell them something different if they’re younger than 12. The elif clause executes if age < 12 is True and name == 'Monica' is False. However, if both of the conditions are False, then both of the clauses are skipped. It is not guaranteed that at least one of the clauses will be executed. When there is a chain of elif statements, only one or none of the clauses will be executed. Once one of the statements’ conditions is found to be True, the rest of the elif clauses are automatically skipped. For example, have a look at the following code:

if name == 'Monica':
    print('Hi, Monica.')
elif age < 12:
    print('You are not Monica, kiddo.')
elif age > 2000:
   print('Unlike you, Monica is not an undead, immortal vampire.')
elif age > 100:
   print('You are not Monica, grannie.')

# The order of the elif statements does matter, however. The following discussion rearranges them to introduce a bug. Remember that the rest of the elif clauses are automatically skipped once a True condition has been found, so if you swap around some of the clauses, you run into a problem.

if name == 'Monica':
    print('Hi, Monica.')
elif age < 12:
    print('You are not Monica, kiddo.')
elif age > 100:
    print('You are not Monica, grannie.')
elif age > 2000:
    print('Unlike you, Monica is not an undead, immortal vampire.')

# Say the age variable contains the value 3000 before this code is executed. You might expect the code to print the string 'Unlike you, Monica is not an undead, immortal vampire.'. However, because the age > 100 condition is True (after all, 3000 is greater than 100), the string 'You are not Monica, grannie.' is printed, and the rest of the elif statements are automatically skipped. Remember, at most only one of the clauses will be executed, and for elif statements, the order matters!

# Optionally, you can have an else statement after the last elif statement. In that case, it is guaranteed that at least one (and only one) of the clauses will be executed. If the conditions in every if and elif statement are False, then the else clause is executed. For example, here's the Monica program that uses if, elif, and else clauses.

if name == 'Monica':
    print('Hi, Monica.')
elif age < 12:
    print('You are not Monica, kiddo.')
else:
    print('You are neither Monica nor a little kid.')

# In plain English, this type of flow control structure would be, “If the first condition is true, do this. Else, if the second condition is true, do that. Otherwise, do something else.” When you use all three of these statements together, remember these rules about how to order them to avoid bugs like the one from earlier.

# First, there is always exactly one if statement. Any elif statements you need should follow the if statement. Second, if you want to be sure that at least one clause is executed, close the structure with an else statement.



# Try/Except Statements

# An error that occurs while a program is executing is called an exception. The process of detecting these execution errors is often referred to as catching exceptions. Developers often say, "Your code threw an error," or "an exception was raised," when they are talking about exceptions that need to be caught.

# The try...except blocks in Python work in a similar way to if...else. However there is nothing to check at the start. Instead try is like asking Python to listen for an error and do something with it other than crashing.

# The flow enters the try block and runs each line of code in order. If there are no issues, then it skips the except block entirely. However, if one line in the try-block fails then the flow immediately skips to the start of the except block without running any more code in the try-block, including anything remaining on the line that failed.

# Here's an example. Let's say you want to know how many digits are in the variable a. That variable should be a string which just happens to have numeric characters (0 through 9) in it, such as 321. As you've learned previously, you can use len(a) to obtain the number of characters in the string.

# For the purpose of this experiment, set a to an integer so you can see the error.

a = 321
print(len(a))
# Causes this output

# TypeError: object of type 'int' has no len()

# Then catch the exception by placing the try statement before the line with the error and the except statement after with at least one line of code to run as a result of the error occurring. After updating, your code may look something like this.

a = 321
try:
    print(len(a))
except:
    print('Silently handle error here')

    # Optionally include a correction to the issue
    a = str(a)
    print(len(a))

# Which outputs
'Silently handle error here'
3

# If you add quotes to change a to a string, then you will see the length value WITHOUT the error.

a = '321'
try:
    print(len(a))
except:
    print('Silently handle error here')

    # Optionally include a correction to the issue
    a = str(a)
    print(len(a))

# Output
3

# WARNING: Use this with extreme caution, since it is easy to mask a real programming error in this way!

# Naming errors
# The best way to handle errors is to specify them by name. That way if something unexpected happens you will find out about it.

# Consider this example.

a = 100
b = 20
c = a / b
print(c)
# Division works perfectly fine as long as b is not zero.

a = 100
b = 0
c = a / b
print(c)

# Causes
'ZeroDivisionError: division by zero'

# To solve the problem, introduce try before the division and specify the error with the except statement, which is ZeroDivisionError in this example.

a = 100
b = 0
try:
    c = a / b
except ZeroDivisionError:
    c = None
    print(c)

# Works without crashing to show whatever value you give to c under except.
None

# Now suppose you don't actually need c for anything; rather, all you want to do was print out a/b and not crash if b is zero (0). Python allows you to use the keyword pass as a way of doing nothing in a block of code.

a = 100
b = 0
try:
    print(a / b)
except ZeroDivisionError:
    pass

# In this case, nothing will be output when you run the program. That's ok because this is really a small part of something much larger. :)

# Different handling for different errors
# This also has the advantage of allowing you to take a different action depending on the error thrown. For example, change b to a string.

a = 100
b = "5"
try:
    print(a / b)
except ZeroDivisionError:
    pass

# Which throws this error

"TypeError: unsupported operand type(s) for /: 'int' and 'str'"

# Likewise, you can pretend b never existed by deleting it or commenting it out.

a = 100
# b = "5"
try:
    print(a / b)
except ZeroDivisionError:
    pass

# Which throws this error

"NameError: name 'b' is not defined"

# Perhaps you want to handle both of these cases the same way. Python allows this using a series of errors in parentheses.

a = 100
# b = "5"
try:
    print(a / b)
except ZeroDivisionError:
    pass
except (TypeError, NameError):
    print("ERROR!")

# Output
'ERROR!'

# You can even name the error so you can record it. Notice the as statement and variable name e introduced here and added to the print statement.

a = 100
# b = "5"
try:
    print(a / b)
except ZeroDivisionError:
    pass
except (TypeError, NameError) as e:
    print("ERROR!", e)

# Output
"ERROR! name 'b' is not defined"