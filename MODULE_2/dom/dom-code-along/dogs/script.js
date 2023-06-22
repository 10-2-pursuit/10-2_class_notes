// how do we know this script is connected to our HTML file?
// alert("hey Dwayne")
console.log("script is connected")
// can we write something here to make sure its working?

// How do we add a <span> element to our h1?
const h1 = document.querySelector("h1")
let span = document.createElement("span")
span.textContent = "  Hello 10.2!!!!!  ";
console.log(h1)
// The span element should come after the text.

// how do we add text to this span?
h1.append(span)

// using our CSS how do give it an underline?
span.classList.add("underline")

// how do we do this without leveraging our CSS file?
span.style.color = "blue";


// what are the following lines doing?
const url = `https://placedog.net/500`;

// what is this funciton doing?
function _getRandomInt() {
    return Math.floor(Math.random() * 500);
}
// what is this array representing?
const dogInfo = [
    {
        name:"steve",
        description:"hes a good boi",
        imageNum:_getRandomInt(),
        featured:false
    },
    {
        name:"bryan",
        description:"hes a good boi",
        imageNum:_getRandomInt(),
        featured:false
    },
    {
        name:"bob",
        description:"hes a good boi",
        imageNum:_getRandomInt(),
        featured:true
    },
    {
        name:"catboy",
        description:"hes a good boi",
        imageNum:_getRandomInt(),
        featured:false
    },
    {
        name:"Billy",
        description:"hes a good boi",
        imageNum:_getRandomInt(),
        featured:false
    },
    {
        name:"benji",
        description:"hes a good boi",
        imageNum:_getRandomInt(),
        featured:true
    }
    
];
    /*
    
        using the data above we will build functionality to add cards to our HTML
    
        These cards will have:
            1: an <img> with our dogs;
            2: an <h2> with our dogs name;
            3: a <p> tag with some info on our dog
    
            The end result should look something like this:
    
        <article>
            <img
                class="animated"
                src="https://placedog.net/500/450"
                alt="Amber, the dog."
            />
            <h2>Amber</h2>
            <p>A sweet little doggo that belongs to my friend.</p>
        </article>
    
    */
 

// how do we create the tags above using JS?
const _createCard = (dog) => {
    let article = document.createElement("article");
    const { name, description, imageNum } = dog
    
    let image = _createImage(dog)
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    // how do we add text to our h2 and p tags?
    h2.textContent = name
    p.textContent = description
    // how do we populate the attributes of our image?

    // how do we add a 'featured' class to our article tag?
    article.append(h2, image, p)
    let main = document.querySelector("main");
    main.append(article)
    
}

const _createImage = (dog) => {
  const { name, description, imageNum } = dog;
  let image = document.createElement("img");
  image.src = url + "/" + imageNum;
  image.alt = `${name}, ${description}`;
  image.classList.add("animated");
  return image;
};

for(let dog of dogInfo) {
    _createCard(dog)
}
// get a handle on the item we want to remove
const main = document.body.children[1]
const dogToDelete = main.children[1]

dogToDelete.remove()





// lets add 6 dogs to our data - and do this six times





// can we write  a helper function to handle this?





