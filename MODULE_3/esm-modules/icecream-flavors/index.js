import icecreams from "./icecreams.js";

// console.log(icecreams)


const spicy = icecreams.filter(icecream => icecream.flavorType === "Spicy")
// console.log(spicy)

const organizeByColor = (treats) => {
    return treats.sort((currentIcecream, nextIcecream) => {
        if(currentIcecream.color.toLowerCase() < nextIcecream.color.toLowerCase()){
            return -1
        }else if (currentIcecream.color.toLowerCase() > nextIcecream.color.toLowerCase()){
            return 1
        } else {
            return 0
        }
    })
}
console.log(organizeByColor(icecreams))