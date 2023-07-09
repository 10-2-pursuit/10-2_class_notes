# Request-response Cycle & API Calls with Postman 7/2/23
Please download [Postman](https://www.postman.com/downloads/) prior to today's lecture

## Quote of The Day
"The Bulk of Software Engineering is Just Plumbing" - Karl Hughes.


    
## Agenda
* 9:00 - 9:10  Announcements - download Postman
* 9:10 - 10:30 Request / Response Lecture
* 10:30 - 10:45 Break 
* 10:45 - 1:00 Lab / Flex Time
## Request Response 

- What is a software program?
A set of instructions that a developer tells a computer to perform a specific set of actions

- What does it mean to "run" a program?
To execute the instruction in the code - to actual start it - to put the functions in motion

When we open our HTML file on our project - our BROWSER gets the html file - the HTML
points to a JS file.  That JS file is linked to our DOM and can then execute the program. 


- A browser is a program on your computer. What is the job of this program?

The browser executes HTML JS and CSS together.  The browser renders our documents based in HTML in a way defined in our CSS and JS and allows a user to actually read/ interact with them

- This website is being rendered thanks to HTML, CSS, and JavaScript. Where does that HTML, CSS, and JavaScript come from? 

 Githhub servers rendered these files and sent them to us via the internet

- What is a server - by the way?

  A really big hard drive.  These can be anywhere on the planet - the servers could even be in the cloud

- Your browser makes a request whenever you go to a URL. What is a URL?
Uniform Resource Locator

google.com => DNS server.

DNS Domain name server 

"google.com" => 101.23.5.6.1 => the files are served to the user;

- Take a look at the following URL below. Then, describe each part of the URL.
 ```
  https://www.google.com/search?q=pursuit+nyc
  https://www.amazon.com/home/appliances/vaccums?limit=50&color=red

```
https => Protocol agreed method of communication.  Protocol is the rules we agree to follow.
http =>  less secure
https => secured using SSL
'www.google.com/ 'domain => actual location, points to a IP somewhere 
'/search/' => path  this is just a filepath  to a route or a specfic directory;
'?' query string => allows user to pass extra information on a request



- What is a server's job?
It serves files after recieveing requests

- Whenever a server needs to store or retrieve data, it makes a request to a database. What is the role of the database?

Databases are servers that process requests - DB's secure DATA for efficent lookup and storage and are reliable at PERSISTING DATA
DB's save data SECURELY OVER A VERY LONG PERIOD OF TIME; ACID compliant 
NOSQL - json
SQL => sequencial query language - very efficent sotrage and lookup language for DB's

- What is the request-response cycle?

Browser makes a request => 
the request is fielded by a server EXPRESS => 
server decides what route to send our data to in a DB => 
DB looks up / stores / deletes information and sends a RESPONSE to the server => 
server sends response to browser => 
Everyone rejoices

-  Lets illustrate it [here](https://miro.com/app/board/uXjVOmBz3K4=/)

- What are the primary Types of HTTP request?
  There are four primary methods that allows us to CRUD data over the internet

  POST => Create data 
  GET  => Reading data - getting data back from a server  could have a query string on it with paramters
  PUT / PATCH => Update our data 
  DELETE => Destroys data


- Describe the different types of request that are made when you order a product on a website. (Feel free to refer to the reading!)

  
  Initial landing page => GET request is going to populate the initial HTML & CSS && JS;
    Login to your account => GET request with some paramters ? pw = aiwdjawoidjwaio& username = tmckiernan;
    Create an account => POST => name, username, password
    Go get some sandals  =>  GET => search form => a request to the server => then to the db then to us

    add sandals to cart => POST => cart is updated based on what we added

    checkout => POST => sending payment information to a server that can process payments 


- What is a web API?
 
 a web api is a specific way of interacting with a server on the web.  Most likely this api will process requests and return some sort of data from a database.  

 The API is a list of rules needed in order to interact with the data.



- What is JSON?
 Javascript object notation - was adopted as the way to communicate data over the internet

- What does it mean for a server to be a JSON web API?
  A system that recieves requests and returns JSON

- Open up the Postman application. How can you create a new request in Postman?

- Is Postman a client or a server? How do you know?
Postman is a client because it MAKES the REQUESTS

- What are the four components of an HTTP request? Describe each and identify where they can be found in Postman.

Method => what type of request it is

URL => where are we sending it?

Headers => contin meta data about the request itself;

Body => optional data that we can send; POST request with data from a form;

- The [api.citybik.es](http://api.citybik.es/v2/) API is a free API you can access by making a request to the following URL. It will return information about different city bike networks around the world.

  ```
  http://api.citybik.es/v2/networks
  ```

  Try making a request to the API. Was the request successful? How do you know?

- What data type did the server respond with? How do you know?

- What was the status code of the response. How do you know?

- APIs often have multiple URLs that can be accessed. For example, this API allows for request a single network, as opposed to multiple, via the following URL.

  ```
  http://api.citybik.es/v2/networks/{networkId}
  ```

Replace `{networkId}` with one of the IDs you received from your first request. How does this response differ from the response you received earlier?

- Another API is the free Star Wars API, also known as [SWAPI](https://www.swapi.tech/).

  Some APIs have better documentation than others. Take a bit of time to look through the websites and see if you can make the following requests:

  - Request all films.
  - Request the person with an ID of `11`.
  - Request the starship with an ID of `9`.



- what is an http request? 
  How computers on the internet communicate 

- what request / ressponse ?
  client sends HTTP request, server builds response with parameters form request and sends http response

- request types?
POST => creating a resource
GET => reading data
PUT/ PATCH = > updating data that exists
DELETE = > DELETES DATA


- what is postman for?

is a tool that lets us make HTTP requests.  IT allows us to parse responses from servers and make requests without building an entire frontend

- the four parts of a HTTP request => 
METHOD = > what kind of request are we dealing with?
URL =>  to send a request 
HEADER => metadata about the request
BODY => body is any optional information we need to send

what ALSO is part of the HTTP response that is NOT part of the request?

STATUS CODE => what happened when we made the request?  404, not found, 200 OK, 503, FORBIDDEN

What are API's used for?

App development.  API's are tools for developers to make _real_ applicaitons.

## Reference Terms

### URL terms
<div style="display: flex; border: 2px solid;">
  <table>
    <thead>
      <tr>
        <th>Part</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Protocol</td>
        <td>The communication protocol used, such as HTTP or HTTPS</td>
      </tr>
      <tr>
        <td>Domain</td>
        <td>The registered name of the website or server</td>
      </tr>
      <tr>
        <td>Port</td>
        <td>The port number used for the communication</td>
      </tr>
      <tr>
        <td>Path</td>
        <td>The specific location or file path on the server</td>
      </tr>
      <tr>
        <td>Query Parameters</td>
        <td>Additional data sent to the server as key-value pairs designated by following a `?`</td>
      </tr>
      <tr>
        <td>Fragment Identifier</td>
        <td>A specific section or anchor within the resource</td>
      </tr>
    </tbody>
  </table>
</div>

### HTTP Requests
<div style="display: flex; border: 2px solid;">
  <table>
    <thead>
      <tr>
        <th>Part</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>HTTP Method</td>
        <td>GET, POST, PUT, DELETE, etc.</td>
      </tr>
      <tr>
        <td>URL</td>
        <td>The address of the resource being requested</td>
      </tr>
      <tr>
        <td>Headers</td>
        <td>Additional information about the request</td>
      </tr>
      <tr>
        <td>Body</td>
        <td>Optional data sent in the request (e.g., form data or JSON)</td>
      </tr>
    </tbody>
  </table>
</div>

### HTTP Repsonse 
<div style="display: flex; border: 2px solid;">
  <table>
    <thead>
      <tr>
        <th>Part</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Status Code</td>
        <td>A numerical code indicating the status of the response (e.g., 200, 404, 500)</td>
      </tr>
      <tr>
        <td>Headers</td>
        <td>Additional information about the response</td>
      </tr>
      <tr>
        <td>Body</td>
        <td>The content of the response (e.g., HTML, JSON, plain text)</td>
      </tr>
    </tbody>
  </table>
</div>


## Pairs for today
1. Kanique Cox, Areebur Rahman
2. Alexander Tsiklidis, Tonesha Rose
3. Aisha Kleemoff, Michael Caldwell
4. Elisaul Batista, Erick Tolentino
5. Nicole Slater, Addis Jackson
6. Mayi Gomez, Keith Camacho
7. Jefferson Chua, Ana Torres
8. Genesis Lara, Anile Choice
9. Anthony Huarneck, Jalal Jonaid
10. Joseph Carter, Franklin Rendon-Ramirez
11. Winder Joel Marte, Ruslan Poptsov
12. Mikal Wazeerud-Din, Sung Yi
13. Dwayne Jones, Davon Bridgett
14. Emily Mohr, Shanice Griffin
