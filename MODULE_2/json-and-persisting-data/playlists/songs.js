const { faker } = require("@faker-js/faker");

function createRandomSong(){
    const song = {
        _id: faker.datatype.uuid(),
        title: faker.music.songName(),
        genre: faker.music.genre(),
        artist: faker.name.fullName()
    }
    return song
}

function randomSongFactory(number){
    const songs = [];
    for(let i = 0; i < number; i++){
        songs.push(createRandomSong())
    }
    return songs
}

module.exports = {
    createRandomSong,
    randomSongFactory
}