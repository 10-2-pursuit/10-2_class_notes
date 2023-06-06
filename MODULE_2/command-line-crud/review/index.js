const { writeJSONFile, readJSONFile } = require("./src/fs-helpers");
const {
    create,
    index,
    show,
    destroy,
    updateCoverStory
} = require("./src/cia-assets-controller")


function run() {
  const action = process.argv[2];
  const asset = process.argv[3];
  let assets = readJSONFile("data", "assets.json");
  let writeToFile = false;
  let updatedAssets = [];
  switch (action) {
    case "index":
      const assetsView = index(assets);
      console.log(assetsView);
      break;
    case "create":
      updatedAssets = create(assets, asset);
      writeToFile = true;
      break;
    case "show":
      const assetView = show(assets, asset);
      console.log(assetView);
      break;
    case "update":
      updatedAssets = updateCoverStory(assets, asset, process.argv[4]);
      writeToFile = true;
      break;
    case "destroy":
      updatedAssets = destroy(assets, asset);
      writeToFile = true;
      break;
    case "score":
      const score = assets.reduce((acc, curr) => acc + curr.points, 0);
      console.log("Current score", score);
      break;
    default:
      console.log("There was an error.");
  }
  if (writeToFile) {
    writeJSONFile("data", "assets.json", updatedAssets);
  }
}

run()