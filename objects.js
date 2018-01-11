var playlist = {
  GregIsakov: "That Moon Song"
};

function updatePlaylist(object, artist, song) {
  object.artist = song;
  return object;
}

function removeFromPlaylist(object, artist) {
  delete object.artist;
  return object;
}