# Promises and Fetch 7/9/23

## Quote of The Day
 "The best way to appreciate your job is to imagine yourself without one." 
 — Oscar Wilde

## Agenda
* 9:00 - 9:05 Announcements
* 9:05 - 10:00 Promises && Fetch Lecture
* 10:00 - 10:45 Promises Code-a-long
* 10:45 - 11:00 Break   
* 11:15 - 1:00 Lab / Flex-time

## Quick Reference


### Synchronous and Asynchronus code

Synchronous code is like following a recipe step by step. When you execute synchronous code, each task is completed before moving on to the next one. It's like cooking a meal where you can't start chopping vegetables until you finish washing them. The program waits for each task to complete before moving forward.

Asynchronous code is like sending multiple requests at a drive-through restaurant. You place your order and move on to the next task while waiting for your order to be prepared. Asynchronous code allows you to initiate a task and move on to other tasks without waiting for the first task to finish. When the first task completes, it notifies you or triggers a callback function to handle the result.

### Promises
a JavaScript Promise is like a special container for an action that hasn't happened yet, but will happen sometime in the future. It's like a promise you make to someone, saying, "I will do this for you, and when I'm done, I'll let you know."

Let's say you want to fetch some data from a website. You create a Promise, which represents that action of fetching the data. The Promise is like a little box that will eventually contain the data you want.  When you create the Promise you also pass it two callback functions, one if the promise works as planned, the other if it fails for some reason.

Each promise has three possible states.  
* Pending - our promise is in the process of being completed
* Resolved - our promise is complete and everything went as planned
* Reject - our promise failed somewhere

After the promise is complete, it will either return a value through a `resolve` or `reject` function.

### .then()

The `.then()` method is a function that can be called on a Promise object in JavaScript. It allows you to specify a callback function that will be executed when the Promise is successfully fulfilled.

### fetch()
The `.fetch()` method is a built-in function in JavaScript that allows you to make network requests to fetch resources, typically data, from a specified URL.

When you call `.fetch()`, you provide the URL of the resource you want to retrieve as its parameter. The method sends an HTTP request to that URL and returns a Promise that represents the eventual response.

With the returned Promise, you can use the `.then()` method to handle the response once it is received. The response itself is an object that contains information about the request and the data returned by the server.

You can access the data from the response using various methods provided by the response object. For example, you can use .json() to extract the response body as JSON, or .text() to retrieve it as plain text.

The `.fetch()` method is commonly used for making asynchronous HTTP requests in web development, such as retrieving data from an API or fetching HTML content from a server. It provides a flexible and powerful way to interact with web resources and handle their responses in JavaScript applications.

### Promise Examples
[Async code example](https://replit.com/@PursuitTim/async-callbacks-1)

[Promise Constructor](https://replit.com/@PursuitTim/promises-1)

[Resolve and Reject Promise](https://replit.com/@PursuitTim/promises-with-error-handling-1)
### Promise States
<div style="display: flex;  border:2px solid">
<table>
  <thead>
    <tr>
      <th>Promise State</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Pending</td>
      <td> This is the initial state, where the Promise is waiting for the data to be fetched.</td>
    </tr>
    <tr>
      <td>Fullfilled </td>
      <td>If everything goes well, the Promise transitions to the fulfilled state. This means the data has been successfully fetched, and the Promise is now holding that data inside it.</td>
    </tr>
    <tr>
      <td>Rejected</td>
      <td>If something goes wrong during the data fetching process, the Promise transitions to the rejected state. This means an error occurred, and the Promise couldn't fulfill its task.</td>
    </tr>
  
  </tbody>
</table>
</div>


## Today's Pairs 
1. Mikal Wazeerud-Din, Jalal Jonaid
2. Ana Torres, Mayi Gomez
3. Genesis Lara, Aisha Kleemoff
4. Alexander Tsiklidis, Emily Mohr
5. Keith Camacho, Joseph Carter
6. Sung Yi, Davon Bridgett
7. Dwayne Jones, Addis Jackson
8. Anile Choice, Michael Caldwell
9. Nicole Slater, Shanice Griffin
10. Anthony Huarneck, Tonesha Rose
11. Ruslan Poptsov, Winder Joel Marte
12. Elisaul Batista, Erick Tolentino
13. Jefferson Chua, Areebur Rahman
14. Kanique Cox





