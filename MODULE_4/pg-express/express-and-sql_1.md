# Full Stack Class Overview


## Setting up the database

In this section, you'll begin by setting up a PostgreSQL database. This involves creating a database named `bookmarks_dev` and a table named `bookmarks` to store bookmark data. To streamline this process, you'll create two SQL files: `schema.sql` for database and table setup, and `seed.sql` for initial data. These files will be stored in a `db` directory. With a simple command, you'll execute these SQL files using `psql`, ensuring a successful initialization.

## Adding Postgres/pg-promise

Next, you'll introduce PostgreSQL integration using the npm package `pg-promise`. Following installation (`npm install pg-promise`), you'll set up environmental variables to securely store critical information like port number, host, database name, and user. This prevents hard-coding and enhances security. A `dbConfig.js` file will be created to configure the database connection, utilizing the variables from the `.env` file. This file will also establish the connection to the database with `pgp(cn)`.

## Querying the Database

Lastly, you'll dive into querying the database. To maintain organization, you'll create a `queries` folder to house your SQL queries. The initial function, `getAllBookmarks`, will be defined to retrieve all bookmarks from the database. As database operations are asynchronous, you'll mark this function as `async` and implement a `try/catch` block for error handling. The SQL query will be executed using `db.any()`, one of many built in functions from `pg-promise`, to fetch the required data. Finally, you'll export this function for use in other parts of your application. This structured approach will enable efficient database interaction in your Express server.

# Quick-Reference

## Concepts Introduced:

### Setting up the database

- **PostgreSQL Database Creation**: The process of creating a new database in PostgreSQL, in this case named `bookmarks_dev`, which will be used to store bookmark data.

- **SQL File Organization (schema.sql and seed.sql)**: The practice of separating SQL commands into different files for better organization. `schema.sql` contains commands for setting up the database structure, while `seed.sql` contains starter data.

- **Executing SQL Files with psql**: Using the command-line tool `psql` to execute SQL files, automating the process of initializing the database and creating the necessary tables.

- **Database Initialization and Table Creation**: The steps involved in setting up a new database, including creating the database itself (`bookmarks_dev`) and establishing a table (`bookmarks`) within it.

### Adding Postgres/pg-promise

- **Installation of pg-promise npm package**: Installing the `pg-promise` npm package, a library that provides an interface for interacting with PostgreSQL databases in Node.js applications.

- **Environmental Variables for Database Configuration**: Using environmental variables to store sensitive information such as port number, host, database name, and user. This enhances security and flexibility in application configuration.

- **Database Configuration File (dbConfig.js)**: A JavaScript file (`dbConfig.js`) that contains the necessary code to configure the connection to the PostgreSQL database, using information from the `.env` file.

- **Establishing Connection with pgp(cn)**: Creating a connection to the database using `pg-promise`, utilizing the configuration information stored in the `dbConfig.js` file.

### Querying the Database

- **Organizing SQL Queries in a `queries` Folder**: Creating a dedicated folder (`queries`) to store SQL queries separately from route handling code, promoting better code organization.

- **Asynchronous Functions in JavaScript**: Functions that allow other code to run while waiting for a non-blocking operation to complete. This is essential for handling database operations, which are inherently asynchronous.

- **Error Handling with try/catch**: Implementing a structured approach to handle potential errors that may occur during database operations. The `try` block contains the code to be executed, and the `catch` block handles any errors that occur.

- **Executing SQL Queries with db.any()**: Using `db.any()` method from `pg-promise` to execute SQL queries. In this context, it's used to retrieve data from the database.

- **Exporting Functions for Reusability**: Making functions available for use in other parts of the application by exporting them. This promotes code reusability and maintainability.

# Tuner Three Day Fullstack Lab

### Pairs 

1. Jalal Jonaid, Aisha Kleemoff
2. Alexander Tsiklidis, Joram Mercado
3. Sung Yi, Tonesha Rose
4. Michael Caldwell, Nicole Slater
5. Michael Kleemoff, Anthony Huarneck
6. Addis Jackson, Genesis Lara
7. Shanice Griffin, Davon Bridgett
8. Elisaul Batista, Keith Camacho
9. Joseph Carter, Dwayne Jones
10. Erick Tolentino, James Edmond

### Lab
https://github.com/10-2-pursuit/lab-express-sql-seed-read



### Day 1: Setting Up the Basic Express App and Database

**Objectives:**
- Set up a basic Express app.
- Create a PostgreSQL database and schema.
- Implement the index route using pg-promise to query the database.
- Create a seed file to populate the database with initial data.

**Tasks:**
1. Set up a basic Express app with routes for `/` and `/songs`.
2. Create a `schema.sql` file with columns for name, artist, album, time, and is_favorite.
3. Create a `seed.sql` file to insert sample songs into the database.
4. Update environmental variables for database connection.
5. Implement the `/` route to display a welcome message.
6. Implement the `/songs` route to display a list of songs.

### Day 2: Adding Show and Create Routes

**Objectives:**
- Implement show and create routes.
- Utilize song IDs instead of array positions.
- Add validation for required fields and boolean values.

**Tasks:**
1. Implement a route to show individual songs using their IDs.
2. Add logic to redirect to the 404 route for invalid IDs.
3. Validate that `name` and `artist` fields are required.
4. Validate that `is_favorite` is a boolean.

### Day 3: Adding Destroy and Update Routes

**Objectives:**
- Implement routes for deleting and updating songs.
- Ensure proper validation and error handling.

**Tasks:**
1. Implement a route to delete songs using their IDs.
2. Implement a route to update song details using their IDs.
3. Add appropriate validation and error handling.

#### Day 3.5: Connect React;
1. Create React RESTful Routes, Index, Show, Edit, New.
2. Implement CRUD functionality.
3. Style applicaiont appropriately.


