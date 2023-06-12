const { nanoid } = require("nanoid")
const { 
    getAssetCodeName,
    getAssetBio,
    getAssetCoverStory
} = require("./helpers/faker-helpers")

// takes all our data 
function create(assets, assetName) {
  const asset = {
    id: nanoid(),
    realName: assetName,
    codeName: getAssetCodeName(),
    bio: getAssetBio(),
    coverStory: getAssetCoverStory()
  };
  assets.push(asset);
  return assets
}

function index(assets) {
  console.log(typeof assets, " < ---- this is assets")
  console.log(assets, " < ---- this is assets")
  return assets.map((asset) => asset.id + " " + asset.codeName).join("\n");
}

function show(assets, assetId) {
  const asset = assets.find((asset) => asset === asset);
  const  { id, realName, codeName} = asset;

  return `
    Asset: #${id}
    Name: ${realName}
    CodeName: ${codeName}
    Bio: ${bio}
    Cover Story: ${coverStory}
    `
}
function destroy(assets, assetId) {
  const index = assets.findIndex((asset) => asset.id === assetId);
  if (index > -1) {
    assets.splice(index, 1);
   console.log("Asset burned");
  } else {
   console.log("Asset not found. No action taken");
  }
}

function updateCoverStory(assets, assetId, updatedCover) {
  const index = assets.findIndex((asset) => asset.id === assetId);
  if (index > -1) {
    assets[index].id = assetId;
    assets[index].coverStory = updatedCover;
   console.log("Asset cover successfully updated");
    return assets;
  } else {
   console.log("Asset not found. No action taken");
    return assets;
  }
}

module.exports = { 
  create, 
  destroy, 
  updateCoverStory, 
  index, 
  show 
};