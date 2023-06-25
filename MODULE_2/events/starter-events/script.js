// 1 - get a handle on the node you want to create / update

// 2 - update the proper key / values

// 3 - add it to the dom 

const incrementButtons = document.querySelectorAll(".increment");

for (let button of incrementButtons) {
  button.addEventListener("click", (e) => {
    const hearts = e.target.parentNode.parentNode.querySelector(".hearts");
    hearts.textContent += "❤";
  });
}

const decrementButtons = document.querySelectorAll(".decrement");

for (let button of decrementButtons) {
  button.addEventListener("click", (e) => {
    const hearts = e.target.parentNode.parentNode.querySelector(".hearts");
    if(hearts.textContent.length > 3) {
      hearts.textContent = hearts.textContent.slice(0, -1);
    }
  });
}


let card = document.querySelector('article');


card.addEventListener("mouseenter", () => {
  card.style.transform = "scale(1.1)";
  
})

card.addEventListener("mouseleave", () => {
  card.style.transform = "scale(1)"
})