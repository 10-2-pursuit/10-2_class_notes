# Express RESTful Routes, Middleware: Show and Create

## Organization of routes

Imagine you are in charge of maintaining a website for a school. Your task is to create pages for all the cancellations and delays due to snow storms and inclement weather.

How would you create the routes? Here are some examples. Think about the following details:

- Are the routes stable? Is there a maintainable pattern to follow if the number of routes grows?
- Are the routes organized in a way that makes sense?
- Are the routes as simple as possible?
- Can you reorganize them in a (relatively) easy way?
- Can both creators and users understand what is going on?

<br>

- Imagine inheriting a server that has the following routes. Do these routes fit the above principles?

  - `/January-Events/20/2019/Snow`
  - `/Snowstorms/Cancellations/Tomorrow`
  - `/Info/Events/Important/inclementWeather`

- How would you continue to build out the routes if the following events happened?

  - December 18, 2018 - early dismissal
  - February 13, 2020 - half day
  - May 4, 2016 - windstorm/county power outage

- What are the challenges of creating routes for the above scenarios?

- Did you make sure your routes are:
  - Stable
  - Organized
  - Following a simple pattern
  - Easily reorganized code
  - Understandable by creators and users

### RESTful Routes

- What are RESTful routes?

- Why were they developed?

- What are the five RESTful routes for a back-end server that sends JSON?

|  #  |   Action   |      URL       | HTTP Verb |    CRUD    |                Description                 |
| :-: | :--------: | :------------: | :-------: | :--------: | :----------------------------------------: |
|  1  | **Create** |   /bookmarks   |   POST    | **C**reate |           Create a new bookmark            |
|  2  |  _Index_   |   /bookmarks   |    GET    |  **R**ead  |   Get a list (or index) of all bookmarks   |
|  3  |  **Show**  | /bookmarks/:id |    GET    |  **R**ead  | Get an individual view (show one bookmark) |
|  4  |   Update   | /bookmarks/:id |    PUT    | **U**pdate |             Update a bookmark              |
|  5  |  Destroy   | /bookmarks/:id |  DELETE   | **D**elete |             Delete a bookmark              |


## Captains Log Multi-part lab
Over the next week we will be paired with the same partners as we build out the [Captain's Log Multi Part Lab](https://github.com/10-2-pursuit/lab-express-rest-show-create/blob/main/README.md).  This lab will span the course of four class periods and culminate with a full stack Express server connected to a React CRUD app.  

Over the course of this week it is imperitive that we __do not move ahead__.  Each lab is designed for a specific class period and attempting to move ahead is not encouraged.  

This lab will be due **EOD Monday 10/16** 


## Captain's that shall console.log()
1. Abel Vargas, James Edmond
2. Addis Jackson,Shanice Griffin
3. Tonesha Rose, Erick Tolentino
4. Anthony Huarneck, Aisha Kleemoff,
5. Jalal Jonaid, Genesis Lara
6. Keith Camacho, Michael Caldwell
7. Sung Yi, Elisaul Batista
8. Dwayne Jones, Joram Mercado
9.  Michael Kleemoff
10. Alexander Tsiklidis, Davon Bridgett
11. Nicole Slater, Joseph Carter
