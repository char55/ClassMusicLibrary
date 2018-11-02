class Library {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlist = [];
  }
  addPlaylist(playlistObj) {
    this.playlist.push(playlistObj)
  }
  displayPlaylist(playlistName) {
    let index = 0;
    for(let i = 0; i < this.playlist.length; i++) {
      if (this.playlist[i].name === playlistName) {
        index = i;
      }
    }
    return this.playlist[index]

  }

}


class Playlist {
  constructor(name) {
    this.name = name;
    this.tracks = [];
  }

  addTrack(trackObj) {
    this.tracks.push(trackObj);
  }

  get overallRating() {
    let average = 0
    this.tracks.forEach((musicTrack) => {
      average += musicTrack.rating;
    })
    return average/this.tracks.length
  }

  get totalDuration() {
    let average = 0
    this.tracks.forEach((musicTrack) => {
      average += musicTrack.time;
    })
    return average/this.tracks.length
  }
}


class Track {
  constructor(name, rating, length) {
    this.title = name;
    this.rating = rating;
    this.time = length;
  }

}

// ///
// testing the code
// ///

let abba = new Track('Mammamia', 5, 2)
let lala = new Track('LaLaLand', 1, 2)
let ham = new Track('My Shot', 5, 5)
let side = new Track('My Brightside', 5, 2)

let musicals = new Playlist('musicals')
let awesome = new Playlist('awesome')

musicals.addTrack(ham)
musicals.addTrack(abba)
musicals.addTrack(lala)

awesome.addTrack(side)

console.log('Scoring:', musicals.overallRating)
console.log('Length:', musicals.totalDuration)

let char = new Library('char', 'charas')

char.addPlaylist(awesome)
char.addPlaylist(musicals)

console.log('From the library',char.displayPlaylist('musicals'))
