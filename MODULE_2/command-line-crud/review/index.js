const { writeJSONFile, readJSONFile } = require("./src/helpers/fs-helpers")

const { 
  create, 
  destroy, 
  updateCoverStory, 
  index, 
  show 
} = require("./src/cia-assets-controller")

function run() {
  const action = process.argv[2];
  const asset = process.argv[3];
  let assets = readJSONFile("./data", "assets.json")
  // state
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
    case "destroy":
      updatedAssets = destroy(assets, asset);
    break;

    default:
      console.log("There was an error.");
  }
  if (writeToFile) {
    writeJSONFile("data", "assets.json", updatedAssets);
  }
}

run()