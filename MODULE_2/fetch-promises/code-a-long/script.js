const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

const button = document.querySelector("button");
const input = document.querySelector("input");
const pokemon = document.querySelector(".pokemon");

button.addEventListener("click", (e) => {
    e.preventDefault();
    const id = input.value;
    fetch(`${BASE_URL}/${id}`)
        .then(data => data.json())
        .then(json => {
            showPokemon(json)
        })
        .catch(err => showError(err))
});
// documentation here: https://pokeapi.co/

// firesin the event we have success!
const showPokemon = (json) => {
    pokemon.innerHTML = `
    <article>
        <img src="${json.sprites.front_shiny}" alt=${json.name} />
        <h2>${json.name}</h2>
    </article>
`
}
// this function will fire in the event that we have an error
const showError = (err) => {
   pokemon.innerHTML =  `
   <section class="error">
        <p>There was an error!</p>
        <p class="message">${err}</p>
    </section>
`
}
// Let's fetch some data

// check the pokeapi docs.  What URL should you request data for a Pokemon named "Ditto"?

// Use just the fetch() function to request that same URL. What shows up in the console? Why? Was the API call made?





// how do we fix this to get some usable data?

// lets wrap  the API inside a getPokemonByID() function.

// lets expand this funciton to accept a number - why would we do this?

// lets connect our function to our button to grab a pokemon by id based user input

// lets pass some data to the `pokemon` secion of our html on our api call

// How do we update this so that there is an error displayed to the user if the call fails
