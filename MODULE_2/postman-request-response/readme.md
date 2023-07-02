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

- What does it mean to "run" a program?

- A browser is a program on your computer. What is the job of this program?

- This website is being rendered thanks to HTML, CSS, and JavaScript. Where does that HTML, CSS, and JavaScript come from?

- Your browser makes a request whenever you go to a URL. What is a URL?

- Take a look at the following URL below. Then, describe each part of the URL.

  ```
  https://www.google.com/search?q=pursuit+nyc
  ```

- What is a server's job?

- Whenever a server needs to store or retrieve data, it makes a request to a database. What is the role of the database?

- What is the request-response cycle?

-  Lets illustrate it [here](https://miro.com/app/board/uXjVOmBz3K4=/)

- Describe the different types of request that are made when you order a product on a website. (Feel free to refer to the reading!)

- Based on what you know, make a guess as to the different types of requests that occur when you make a search on Google.

- What is a web API?

- What is JSON?

- What does it mean for a server to be a JSON web API?

- Open up the Postman application. How can you create a new request in Postman?

- Is Postman a client or a server? How do you know?

- What are the four components of an HTTP request? Describe each and identify where they can be found in Postman.

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
