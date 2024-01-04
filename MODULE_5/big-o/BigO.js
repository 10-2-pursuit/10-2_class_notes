// ******* OBJECTIVES *******
    // - Introduction to Big O
    // - Why do developers analyze Big O?
    // - How to identify the Big O of a function

// ******* CONCEPTS *******
    // - What is optimization?
        // - Optimization is the idea that we can make our code smaller, faster, cheaper, and more precise
        // - This is why engineers get paid the BIG BUCK$$$$$$$$$$!!!!!!
        // - After we have SUCCESSFULLY built something we should always consider if there are ways to optimize
    // - What is Big O ?
        // - By understanding Big O, we can better identify opportunities to optimize
        // - Big O Notation is a way to denote the worst case scenario. The worst case scenario is that whatever algorithm, it will take the most amount of time possible.
        // - Big O is used to describe the relationship between functions and their growth rates

// ******* MEASURING BIG O *******
    // Time complexity - the amount of time it takes to execute. It is measured in the number of steps an algorithm takes rather than measures of time like seconds or minutes.
    // Space complexity - the amount of memory (RAM) required an algorithm needs to run.
    // Each complexity can be described with notation like O(n): Where n represents the number of elements.
    // Big O can be represented visually with the execution time/memory on the y-axis and input size on the x-axis.

// ******* COMPLEXITIES *******
    // - Constant Complexity O(1)
    // - Linear Complexity O(n)
    // - Quadratic Complexity O(n^2) or O(n*m)
    // - Logarithmic Complexity O(log(n))
    // - Factorial Complexity O(n!)

// EXAMPLE
    // Cloud music service
    // Let's think that we have an array of artists. Each artist is made up of an object. Each artist has an array of objects that are albums. Each album is an array of song names.

    const artists = [
        {
          name: "Miles Davis",
          albums: [
            {
              title: "In a Silent Way",
              songs: ["Shhh/Peaceful", "In a Silent Way/It's About That Time"],
            },
            {
              title: "Milestones",
              songs: [
                "Dr. Jekyl",
                "Sid's Ahead",
                ///...
              ],
            },
          ],
        },
        {
          name: "Dolly Parton",
          albums: [
            {
              title: "Jolene",
              songs: [
                //...
              ],
            },
            {
              title: "9 to 5 and Other Odd Jobs",
              songs: [
                // ...
              ],
            },
          ],
        },
      ];

// ******* CONSTANT COMPLEXITY O(1) *******
      // ["Song1", "Song2"]
    const getFirstSongFromPlaylist = (album) => {
        console.log(album[0]);
    };

    // This algorithm has a Big O complexity of constant. No matter the size of the array 1 or 1 million, this always takes the same amount of time and memory to execute.

    // This type of complexity is considered highly efficient.

// ******* LINEAR COMPLEXITY O(n) *******
    // ["Song1", "Song2", ...]
    const printSongs = (album) => {
        for (let i = 0; i < album.length; i++) {
            console.log(album[i]);
        }
    };

    //   This algorithm has a Big O complexity of linear. For each added song to the array, the amount of time it takes to complete this is increased by 1 step.
  
    // If the array (or playlist) has 1 item, it will take 1 step to complete. If the array has a million items it will take a million steps to complete.
  
    // This type of complexity is considered pretty good efficiency.

// ******* QUADRATIC COMPLEXITY O(n^2) OR O(n*m) *******
    // "List every song on all albums" 

    // [
    //     {
    //       title: "In a Silent Way",
    //       songs: ["Shhh/Peaceful", "In a Silent Way/It's About That Time", "Some other song"],
    //     },
    //     {
    //       title: "Milestones",
    //       songs: [
    //         "Dr. Jekyl",
    //         "Sid's Ahead",
    //         ///...
    //       ],
    //     },
    //   ]
    const printSongsWithinAlbums = (artist) => { // array with the lenth of two
        for (let i = 0; i < artist.albums.length; i++) { // some unknown length but the longest amount of albums
          for (let j = 0; j < artist.album.songs.length; j++) { // some unkown length of albums - some unknown length of steps -> the longest album
            console.log(artist.album[i].songs[j]);
          }
        }
      };

      /// the longest number of artist albums (n) * the album with the most songs (m)

    //   This algorithm has a Big O complexity of quadratic. For each added item to the array, the amount of time it takes to complete this is increased by n to the n power!

    //  Imagine you wanted to print every song by an artist. The above function would loop through each album and then within each album, loop through each song. For each album the complexity doesn't increase just by 1 step, but by each album times each song on the album.

    // If every album has ten songs, if we have 10 albums, we go through the steps 10 times for the albums and then times for each song so for a collection of 10 albums we go through the algorithm 100 times. If we had 100 albums and still 10 songs, we'd go through this algorithm 1000 times...
    
    const PrintSongsWithinAlbumsByArtist = () => {
        for (let i = 0; i < artists.length; i++) {
          for (let j = 0; j < artists[i].albums.length; j++) {
            for (let k = 0; k < artists[i].album[j].songs.length; k++) {
              console.log(artists[i].albums[j].songs[k]);
            }
          }
        }
      };

    // If we were to also have to go through artists, and now every artist has 10 albums and each album has 10 songs the amount of steps we have to take increases quite quickly!

    // This type of complexity is considered inefficient. It is also important to note, that for this particular ask, there isn't a more efficient way. We want every single song! That's ok.

// ******* LOGARITHMIC COMPLEXITY O(log(n)) *******

    // If we want to play "I Can't Get No Satisfaction" how is our assistant finding our song?

    // Is it going randomly through every single song in the database?

    // Is it looking by artist then by song (again without any organization)?

    // In either scenario, you'd have to consider the worst-case scenario which is that the song you ask for is always the absolute last song found.

    // What if the songs were organized alphabetically?

    // Then we could perform a binary search.

    // We would start at the middle and then check if there is a match. If it matches we're done! But with Big O we're always thinking about the worst case scenario and that our song will be the last song found.

    // So we start in the middle, let's say that this middle is songs that start with the letter M, if our song starts with the letter I we can eliminate all the songs that start with M or further in the alphabet. Now we've cut down the number of items we must search by half.

    // Let's set our next midpoint to be the middle of the remaining songs, and we get songs that start with the letter F. Since our song starts with the letter I, we can stop searching through songs starting with A - F, and have again, cut our search down by half.

    // We would keep repeating, removing half of the songs we are looking through until we found our song. This more complicated process is more efficient than looking through every single song and can be represented as this image


    function artistSearch(artists, artist, first = 0, last = null) {
        if (!last) last = artists.length;
        let midpoint = Math.floor((last - first) / 2) + first;
        if (artists[midpoint] === artist) return midpoint;
        if (artists[midpoint] > artist)
          return artistSearch(artists, artist, first, midpoint);
        if (artists[midpoint] < artist)
          return artistSearch(artists, artist, midpoint, last);
      }

//   ******* FACTORIAL COMPLEXITY O(n!) ********

    // "Play the album Hamilton over and over again, until I've heard every song in every order possible"

    // Factorial means the product of all positive integers less than or equal to n.

    // Examples
      // ["Song 1", "Song 2", "Song3", "Song4"]
                - ["Song 1", "Song 2", "Song3"]
                - ["Song 1",  "Song3", "Song 2",]
                - ["Song 2",  "Song1", "Song3",]
                - ["Song 2",  "Song3", "Song1",]
                - ["Song 3",  "Song2", "Song1",]
                - ["Song 3",  "Song1", "Song2",]

    // 3 factorial is 3 x 2 x 1
    // 7 factorial is 7 x 6 x 5 x 4 x 3 x 2 x 1
    // The complexity of an algorithm that is factorial increases faster than any other example. While there are real world examples of these types of algorithms, due to their complexity, they are not typically asked in coding interviews for jr positions and thus we won't include an example.

    // This type of complexity is considered inefficient.

// ******* DROPPING CONSTANTS *******
    let min = 0;
    let max = 0;
    for (let n of numbersArray) {
        if (x < min) min = x;
        if (x > max) max = x;
    }

    // 1 for loop
    // 2 steps inside of our for loop
    //  O(2n) -> O(n)


// ******* Drop Non-Dominant Terms *******

// O(N^2 + N) -> O(n^2)

// O(4n! + n^2) -> O(n!)

// ******* Adding vs Multiplying *******

    let min = 0;
    let max = 0;
    for (let n of numbersArray) {
    if (x < min) min = x;
    }
    for (let n of numbersArray) {
    if (x > max) max = x;
    }

    // O(2n)

    const someNestedArray = []
    let sum = 0
    for (let row of someNestedArray) { // length of arr (n)
        for (let item of row) { // length of nested arr (m)
            console.log(item, row)
            sum += item
        }
        }
    }

    // O(n*m) -> quadratic time