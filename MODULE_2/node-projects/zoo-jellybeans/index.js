const jellybeans = require("./jellybeans.js")
const jellybeansJSON = require("./jellybeans.json")


const salty = jellybeans.filter(jellybean => jellybean.flavorType === "salty")

function showByFlavor(flavorType){
    return jellybeansJSON.filter((jellybean) => {
        return jellybean.flavorType === flavorType;
      }
    )
}

// console.log(showByFlavor(process.argv[2]))

const organizeByColor = (candies) => {
    return candies.sort((a, b) => {
        if (a.color < b.color) {
          return -1;
        } else if (a.color > b.color) {
          return 1;
        } else {
          return 0;
        }
      });
};

console.log(organizeByColor(jellybeansJSON));
