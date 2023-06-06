const { writeJSONFile, readJSONFile } = require("./src/helpers");



function run() {
  const action = process.argv[2];
  const asset = process.argv[3];
  let assets = readJSONFile("data/assets.json");
  let updatedAssets = [];
  switch (action) {
    case "index":
      const assetsView = index(assets);
      console.log(assetsView);
      break;
    case "create":
      updatedAssets = create(assets, asset);
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
    writeJSONFile("data", "assets.js", s);
  }
}

run()