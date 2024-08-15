function parseData(song) {
    return {
        type: song[0],
        name: song[1],
        duration: song[2]
    }
}

function processData(input) {
    let songs = [];
    let criteria = "no_value_set";

    for (let i = 0; i < input.length; i++) {
        let currentSong = input[i];

        if (i == input.length - 1) {
            criteria = currentSong;
            continue;
        }

        let song = parseData(currentSong);
        songs.push(song);
    }

    let filteredData = songs.filter(function (element) {
        return element.type === criteria;
    });

    return filteredData;
}

//let input = [['favourite', 'DownTown', '3:14'], ['favourite', 'Kiss', '4:16'], ['favourite', 'Smooth Criminal', '4:01'], 'favourite']
let input = [['favourite', 'DownTown', '3:14'], ['listenLater', 'Andalouse', '3:24'], ['favourite', 'Live It Up', '3:48'], 'listenLater']
let filteredSongs = processData(input);

for (let i = 0; i < filteredSongs.length; i++) {
    let currentElement = filteredSongs[i];
    console.log(currentElement.name);
}