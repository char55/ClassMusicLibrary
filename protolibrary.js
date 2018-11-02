let Library = function(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlist = [];
}

let Playlist = function(name) {
  this.name = name;
  this.tracks = [];
}

let Track = function(name, rating, length) {
  this.title = name;
  this.rating = rating;
  this.time = length;
}


Library.prototype.addPlaylist = function(playlistObj){
  this.playlist.push(playlistObj)
}

Library.prototype.displayPlaylist = function(playlistName){
  let index = 0;
  for(let i = 0; i < this.playlist.length; i++) {
    if (this.playlist[i].name === playlistName) {
      index = i;
    }
  }
  console.log(this.playlist[index])
}


Playlist.prototype.addTrack = function(trackObj) {
  this.tracks.push(trackObj)
}

Playlist.prototype.overallRating = function() {
  let average = 0
  this.tracks.forEach((musicTrack) => {
    average += musicTrack.rating;
  })
  console.log(average/this.tracks.length)
}

Playlist.prototype.totalDuration = function() {
    let average = 0
    this.tracks.forEach((musicTrack) => {
      average += musicTrack.time;
    })
  console.log(average/this.tracks.length)
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

musicals.overallRating()
musicals.totalDuration()

let char = new Library('char', 'charas')

char.addPlaylist(awesome)
char.addPlaylist(musicals)
console.log('From the library',)
char.displayPlaylist('musicals')