const { faker } = require('@faker-js/faker');


const getAssetCodeName = () => {
    return faker.hacker.verb() + "-" + faker.hacker.noun()
}
const getAssetBio = () => {
    return faker.person.bio()
}
const getAssetCoverStory = () => {
    return `${faker.person.jobType()} ${faker.person.jobTitle()}`   
}
     


module.exports = {
    getAssetCodeName,
    getAssetCoverStory,
    getAssetBio
}