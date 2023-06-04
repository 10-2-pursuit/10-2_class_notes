const { createRandomSong, randomSongFactory } = require("./songs")
const { writeJSONFile, readJSONFile } = require("./helpers");

function run(){
    const songs = readJSONFile("./data", "playlist.json");
    console.log(songs)
    if(process.argv[3]){
        songs.push(...randomSongFactory(process.argv[3]))
    } else {
        songs.push(createRandomSong())
    }
    writeJSONFile("./data", "playlist.json", songs)
}

run()