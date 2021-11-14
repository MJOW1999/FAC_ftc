fetch(
  `https://ws.audioscrobbler.com/2.0/?method=album.search&album=donda&api_key=e836ddbce95921744c7e9efe110bcd54&format=json`
)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Not a valid album");
    }
    return response.json();
  })
  .then((data) => console.log(data.results.albummatches.album[0]));
