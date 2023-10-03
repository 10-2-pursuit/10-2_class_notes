# Introduction to the Internet and Servers

## Agenda 
* 7:00 - 7:30 KICKOFF!@#@!#!!@
* 7:30 - 7:50 Postgress Install
* 7:50 - 8:00 Break
* 8:00 - 9:00 Internet && Servers
* 9:00 - 10:00 Lab 
## Learning Objectives

By the end of this lesson, you should be able to:

- Define clients, servers, resources, and databases.
- Define the basic components of the internet.
- Describe the request-response cycle.
- Identify the key components of an HTTP request.
- Identify the key components of an HTTP response.

---

## Big Picture - why is this important?
"servers are how we have websites in the first place"
-Keith

Half of the internet (probably more to be honest) is SERVERs
the other half would be clients;

We know how to make client apps using REACT

This is called FULLSTACK 

## Guiding Questions

- What is a computer network and why is it important?
    A lot of computers on the same interconnected system

- What kinds of computer networks exist?
    Data centers,
    an office computer system
    cloud computer systems
    LOCAL AREA NETWORK -
    Peer to Peer,
    Gaming

- What is the internet?
    the internet is the underlying infrastructure that connects computers globally

- What is the difference between the internet and the world wide web?
    this is the connetion of all the webpages hosted on the internet

- What is a client?

what the user interacts with to make requests - think a menu at a restaurant 
when the response is processed - the client consumes it

- What is a server?

"The Middleman" -Shanice
server accepts requests;
they bring it to the DB;
think a waiter at a restaurant
it sends the response once the API is finished;


- How do databases fit into the internet?

this is the back of the house - doing the cooking;
once the 'meal' is done - the DB (chef) passes the data to the server;
server sends the response - the client consumes it


- Let's put it all together at this [Miro](https://miro.com/app/board/uXjVOmBz3K4=/?share_link_id=63312373474)

- What is a URL and what purpose does it serve?
uniform resource locator - where the site lives in the browser
each site is hosted at an IP adress: 129.290.187231.1231

- What are the components of a URL?

https://github.com:3000/10-2-pursuit/unit-full-stack-web-development/tree/main/intro-to-internet-and-servers?name=tim&limit=10&spaghetti=true
const params = { name:"tim", limit: 10 } 
React allows us to limit what the user can input as a query param
using forms
1 - protocol http(s)
2 - domain: github.com - this is what stands in place of our IP
3 :3000 - port localhost:5741  - localhost:8080
4 .../-servers - path individual files/ fodlers
5 after ? - query
- What is a protocol?
"rules"  - Michael K

- What is the HTTP protocol and where is it used?
    http is an agreed upon way to request information via the internet and receive repsonses;

- How do clients and servers interact?
client makes a request to a server;
fetch() <--- what does this need?  a url!

server sends a response if everything is good

- What are the three essential components that make up an HTTP request?

METHOD - line 
    GET, POST, PUT/PATCH, DELETE - tells us what action we are doing

Headers(mandatory) - metadata, information about the data.  where the request was made, from what browser it was made, what time it was made, content/type

we need to know from where it came and what kind of responses we accept

Body - optional - form => CREATES A resource; POST the values we send to the server is usually hosted in the BODY

- Why are they important?

- What are the three components that make up an HTTP response?

status code - tells us what happened - 400, 500, 200

headers - info about the info

Body - the information sent back to the user

- Why are they important?

- Describe the parts of this HTTP response
``` 
HTTP/1.1 200 OK
Date: Thu, 03 Jan 2019 23:26:07 GMT
Server: gws
Accept-Ranges: bytes
Content-Length: 68894
Content-Type: text/html; charset=UTF-8

<!doctype html><html> 
```

- Describe what happens when you visit a webpage through your browser. Assume that some data will need to be recalled from a database.


## Let's Explore Web Apps!

### Goal:
To dive into popular web applications and understand how they connect with servers.

### Here's What You'll Do:

1. **Breakout** 
   - In breakout rooms, choose a driver and presenter.
   - Your room will share the name of  a well-known web app - think Instagram, Pinterest, Twi-err uh X

2. **Dig Deeper!**
   - Head to your virtual breakout rooms.
   - What type of HTTP methods are used?
   - Delve into the types of resources the server sends back to the user (like images, text, profiles).
   - Also, think about the various types of HTTP requests that are made within the app to even make those requests
3. **Consider Resources** 
    - What 'resrouces' would need to be tracked in a database for this app?
    - If each resource had its own database, how many databases would we need?
    - Do any resources _belong to any other resources_?  How would we handle that?

## Today's Lab: [Introduction To Servers and the Internet](https://pursuit.instructure.com/courses/162/assignments/1902?module_item_id=9063)

## Today's Pairs

1. Joseph Carter, Aisha Kleemoff
2. Erick Tolentino, Davon Bridgett
3. Michael Caldwell, Nicole Slater
4. Anthony Huarneck, Joram Mercado
5. Dwayne Jones, Genesis Lara
6. Tonesha Rose, James Edmond
7. Shanice Griffin, Elisaul Batista
8. Sung Yi, Abel Vargas
9. Michael Kleemoff, Jalal Jonaid
10. Keith Camacho, Addis Jackson
11. Isaiah Derosiers, Alexander Tsiklidis
