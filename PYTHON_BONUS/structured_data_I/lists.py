# Lists
# - declaration & length
# - accessing items
# - sorting
# - sum, min, max

empty = []
print(empty) #[]

friends = ["Keith", "Jennifer", "Joe", "Sung", "Erick", "Elisaul", "Shanice"]
print(friends)

print(friends[0]) # Keith
print(friends[15]) # IndexError
print(friends[-1]) # Shanice
print(friends[1:-1]) # Jennifer to Elisaul
print(friends[-1:]) # ["Shanice"]
print(friends[1::2]) # start at index 1 with a step value of 2 ["Jennifer", "Sung", "Elisaul"]
print(friends[::2]) # every other person starting from the beginning ["Keith", "Joe", "Erick", "Shanice"]

print(friends.length)
print(len(friends))

scores = [159, 210, 188, 76]
print(scores)

teamscore = sum(scores)
print(teamscore)

highestscore = max(scores)
print(highestscore)

lowestscore = min(scores)
print(lowestscore)

averagescore = sum(scores) / len(scores)
print(averagescore)


rankedscore = sorted(scores, reverse=True)
print(rankedscore)

supplies = ['crayons', 'pencils', 'paper', 'Kleenex', 'eraser']
print(supplies)

supplies.append('markers')
print(supplies)

supplies.remove('crayons')
print(supplies)

supplies.sort()
print(supplies)

supplies.sort(key=str.lower)
print(supplies)

# Mutability Of And Sorting Lists

colors = [ 'red', 'orange', 'blue', 'pink' ]
alphabetical  = sorted(colors)
print(colors)
print(alphabetical)

alphabetical  = sorted(colors, reverse=True)

reversedcolors = reversed(colors)
reversedalpha = reversed(alphabetical)
print(list(reversedcolors))
print(list(reversedalpha))



# The for loop in general 

# In Python, there is only one for loop. In code, a for statement always includes the following:
    # The for keyword
    # A variable name
    # The in keyword
    # An iterable of some kind
    # A colon
    # Starting on the next line, an indented block of code (called the for clause)

# The for loop in Python is very much like the for (..of..) loop in JavaScript. There is no counting version of the for loop in Python like the for(;;) version in JavaScript. Instead, you use the range function to create an iterable "filled" with numbers. The following sections show how to use the for loop with different kinds of iterables.

# Just like with the while loop, you can use break and continue statements inside for loops as well. The continue statement will continue to the next value of the for loop’s counter, as if the program execution had reached the end of the loop and returned to the start. In fact, you can use continue and break statements only inside while and for loops. If you try to use these statements elsewhere, Python will give you an error.


# The for loop with a list
# Now that you've seen lists in Python, you probably wondered how you loop over them because, as you've come to find out in programming, looping over a list is a really common thing. Here's how you do it, once with a list literal (which won't happen often), and once with a variable that contains a list (which you'll do very often).

for c in ['a', 'b', 'c']:
    print(c)

lst = [0, 1, 2, 3]
for i in lst:
    print(i)

# What the previous for loop actually does is loop through its clause with the variable i set to a successive value in the [0, 1, 2, 3] list in each iteration.

# A common Python technique is to use range(len(someList)) with a for loop to iterate over the indexes of a list. Here's an example of that.

supplies = ['pens', 'staplers', 'flame-throwers', 'binders']
for i in range(len(supplies)):
    print('Index ' + str(i) + ' in supplies is: ' + supplies[i])

# That will print out the following.
    # Index 0 in supplies is: pens
    # Index 1 in supplies is: staplers
    # Index 2 in supplies is: flame-throwers
    # Index 3 in supplies is: binders

# Using range(len(supplies)) in the previously shown for loop is handy because the code in the loop can access the index (as the variable i) and the value at that index (as supplies[i]). Best of all, range(len(supplies)) will iterate through all the indexes of supplies, no matter how many items it contains.

# Sometimes you will have a list of lists. You can loop over those and destructure at the same time just like you can do in JavaScript. As a matter of fact, Python has had this feature since its inception whereas JavaScript only recently got it.

l = [[1, 2], [3, 4], [5, 6]]
for a, b in l:
    print(a, ', ', b)

# Prints 1, 2
# Prints 3, 4
# Prints 5, 6
