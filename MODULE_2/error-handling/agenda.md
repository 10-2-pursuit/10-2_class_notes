# Error Hanlding 6/5/23

## Quote of The Day
“Tell me and I forget, teach me and I may remember, involve me and I learn.”
– Benjamin Franklin

## Agenda
* 6:00 - 6:10 - Announcements
* 6:10 - 8:00 - CRUD lab
* 8:00 - 8:10 - Break
* 8:10 - 9:00 - Handling Errors Lecture
* 9:00 - 10:00 - Handling Errors lab



## Quick Review

  - What is a stacktrace?

    it is a system that will tell you where you encountering an error

  - What is a Type Error?
    executing the wrong methods on a variable
    ie : 
    let myStr = "hello"
    myStr.push("goobye"); myStr.filter();
     

  - What is a syntax Error?
    when we write our code incrroectly - closing brackets, wrong declaration
    funciton doWhatever () {
      last line = unclossed function

  - What is a Reference Error?
    accessing a variable that has no value 
    or is OUT OF SCOPE 
    happens often if we do not import / export CORRECTLY

  - What does the following error tell us?
  - its a misspelling of console.log() 
    - line

  ```
  TypeError: console.lg is not a function
at listCharacters (/home/runner/Warmup-Common-Error-Handling/index.js:15:13)
at /home/runner/Warmup-Common-Error-Handling/index.js:20:1
at Script.runInContext (vm.js:130:18)
```
  
- What is a `try/catch` and how is it similar to an `if/else`
    it allows you to run a block of code 
      if it THROWS an error 
        the catch block will STOP the code from ENDING
    if  something is tru => do some code
    ELSE do something else

    try wraps our functionality that we want to attempt
      if this functionality shoud fail
        an ERROR will be THROWN and this ERROR
          will be sent to the CATCH block - this is very much the same as an ELSE to an IF

### Key Terms
 - Throw
  - sends an ERROR up the callstack.  That error WILL STOP the code in its TRACKS unless it is CAUGHT - thats why we see UNCAUGHT ERROR
 - Catch
  - response to an error - catch will stop the error from ending the code AND it allows us to manipulate the error if we want.  Send to a user - console.log() etc.
 - try / catch
  - A try/catch block allows you to try out some code, and if no errors are thrown, the code will continue.
  - try block ATTEMPTS any code in the brackets;  Should ANYTHING fail - an error will be thrown to the NEAREST catch block
  - the catch is a specific code block designed to  STOP the ERROR that is THROWN from 
  stopping the entire funciton
   

## Today's Lab
[Errod Handling](https://github.com/10-2-pursuit/lab-error-handling)



