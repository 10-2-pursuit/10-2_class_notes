# One-to-Many and Many-to-Many Relationships in Postgres

## One-to-Many

By the end of this lesson, you should be able to:

- Explain the purpose of table normalization.
- Describe the business and technical implications of a one-to-many relationship.
- Explain the function of a foreign key.
- Implement a join on two tables through matching IDs

## Getting Started

Let's imagine you are designing an application for a new boutique travel travel boutique, where guests will get to work with an agent to book experiences at unique hotels not part of any franchises. What kind of data would you need?

**Terminal**

- `psql` to open a Postgres shell

```SQL
CREATE DATABASE learn_hotels;
\c learn_hotels
```

- Let's create a table for our hotels. We want to be sure our ratings are only between 0 and 5, so we'll add a constraint by checking the values.
- What other constraints should you consider?
- When creating a new application, is it better to be more strict with your data at first or more loose?

Create a table:

```SQL
CREATE TABLE hotels (id SERIAL PRIMARY KEY, name TEXT, city TEXT, state TEXT, pets BOOLEAN, rating numeric DEFAULT 5, CHECK (rating >= 0 AND rating <= 5));
```

- Let's insert some data.

```SQL
INSERT INTO hotels (name, city, state, rating, pets)
VALUES
('Hotel California', null, 'California', 4, true),
('The Great Northern', 'Twin Peaks', 'Washington', 3, true),
('Hilbert''s Hotel', null, null, 1, false),
('Hotelicopter', 'Somewhere in the sky', null, 3, false),
('Fawlty Towers', 'Torquay on the English Riviera','England', 2, true),
('Grand Budapest Hotel', 'Republic of Zubrowka', null, 1, true);
```

- Let's check out our data.

```SQL
SELECT * FROM hotels;
```

- Let's create a rooms table.
- How can you relate the rooms and hotels tables?

Create a table:

```SQL
CREATE TABLE rooms (id SERIAL PRIMARY KEY, name TEXT, price numeric, vacant BOOLEAN, room_num INT, hotel_id INT);
```

- Let's add some rooms.

```SQL
INSERT INTO rooms (hotel_id, name, price, room_num, vacant)
VALUES
(1, 'Queen', 1200, 202, true),
(1, 'Queen', 1200, 303, true),
(1, 'King', 1400, 404, true),
(1, 'Penthouse', 2200, 707, true),
(2, 'Queen', 400, 201, true),
(2, 'Queen', 400, 302, false),
(2, 'King', 600, 403, false),
(2, 'Penthouse', 1200, 605, false),
(3, 'Room', null, null, null),
(4, null, 4000, null, true),
(5, 'Queen', 1200, 111, false),
(5, 'Queen', 1200, 222, false),
(5, 'King', 1400, 333, false),
(7, 'Queen', 1200, 1111, false),
(7, 'Queen', 1200, 2222, false),
(7, 'King', 1400, 3333, false);
```

- Let's check out our data.

```SQL
SELECT * FROM rooms;
```

- Tough to read? Try toggling the view with `\x`
- Don't want to scroll to the bottom? Use the `q` key.

## Joins

We now have two tables, one for our hotels and one for our rooms. How do we join the data together to make it readable and usable?

#### Full Outer Join

- What is a full outer join? What data is it including? What is it excluding?

```SQL
SELECT * FROM hotels FULL OUTER JOIN rooms ON hotels.id = rooms.hotel_id;
```

- Is it a permanent change or temporary when you join the tables?

![](../assets/full-hotel-room.png)

- How can you determine if hotels are the left or right part of the join?
- Can you change which table is on the left or right?

```SQL
SELECT * FROM rooms FULL OUTER JOIN hotels ON hotels.id = rooms.hotel_id;
```

![](../assets/full-room-hotel.png)

#### Inner Join

- What is an inner join? What data is it including? What data is it excluding?

```SQL
SELECT * FROM hotels INNER JOIN rooms ON hotels.id = rooms.hotel_id;
```

![](../assets/inner-hotel-room.png)

- Which hotels were excluded?
- Which rooms were excluded?
- Can you have null values in some fields with an inner join?

#### Left Join

- If hotels are on the left table, how can you see all the hotels but only include rooms that are associated with the hotels?

```SQL
SELECT * FROM hotels LEFT JOIN rooms ON hotels.id = rooms.hotel_id;
```

- What is a left join? What data is it including? What data is it excluding?

![](../assets/left-hotel-room.png)

- Which hotels were excluded?
- Which rooms were excluded?

#### Right Join

If we do the right join with hotels and rooms, can you hypothesize how many rows we should have?

```SQL
SELECT * FROM hotels RIGHT JOIN rooms ON hotels.id = rooms.hotel_id;
```

![](../assets/right-hotel-room.png)

- Which hotels were excluded?
- Which rooms were excluded?

#### BONUS Complex Queries

We can now combine our queries to ask more interesting questions about our data.

What is the average hotel room price that can be booked at Boutique Travel Travel Boutique?

```SQL
SELECT
 AVG(price)
FROM
 rooms
INNER JOIN
 hotels
ON
 hotels.id = rooms.hotel_id;
```

- Can you write a query that lists just the hotels with vacancies?

```SQL
SELECT DISTINCT
 hotels.name
FROM
 hotels
JOIN
 rooms
ON
 hotels.id = rooms.hotel_id
WHERE
 rooms.vacant IS TRUE;
```

- What does the keyword `distinct` do?

**TRY IT:**

- Query for hotels that allow pets
- Query for hotels that allow pets AND have vacancies
- Query for the average room price for a hotel that allows pets
- Query for the most expensive room
- Query for the average price of a room that has a name that includes `queen` in it (case insensitive)
- Query for the most expensive room
- Update a room at Hotel California with room number 202 from vacant-true to vacant-false.
- Update all the rooms with the hotel_id of 7 to have now a hotel_id that matches the Grand Budapest Hotel

