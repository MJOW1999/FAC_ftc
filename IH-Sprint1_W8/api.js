const searchForm = document.querySelector("#albumForm");

searchForm.addEventListener("submit", (event) => {
  const section = document.querySelector("#albumResults");
  section.innerHTML = "";
  arr = [];
  event.preventDefault();
  const formData = new FormData(searchForm);
  const album = formData.get("album");
  fetch(
    `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${album}&api_key=e836ddbce95921744c7e9efe110bcd54&format=json`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Not a valid album");
      }
      return response.json();
    })
    .then((data) => AlbumData(data.results.albummatches.album));
});

let arr = [];

async function AlbumData(album) {
  for (let i = 0; i < 5; i++) {
    console.log(album[i]);
    let image = album[i].image[1][`#text`];
    let name = album[i].name;
    let artist = album[i].artist;
    let link = album[i].url;
    arr.push({ image, name, artist, link });
    await fetch(
      `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=e836ddbce95921744c7e9efe110bcd54&artist=${artist}&album=${name}&format=json`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Not a valid album");
        }
        return response.json();
      })
      .then((data) => console.log(data));
  }
  console.log(arr);
  arr.forEach(createCardUsingTemplate);
}

const results = document.querySelector("#albumResults");

function createCardUsingTemplate(e) {
  const { image, name, artist, link } = e;
  const template = document.querySelector("#template");
  const domFragment = template.content.cloneNode(true);
  let card = domFragment.querySelector("#templateCard");
  card.setAttribute("data-name", `${name}`);
  domFragment.querySelector("img").src = image;
  domFragment.querySelector("#album_name").textContent = name;
  domFragment.querySelector("#album_artist").textContent = artist;
  domFragment.querySelector("#album_link").href = link;
  results.append(domFragment);
}

// fetch(
//   `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=e836ddbce95921744c7e9efe110bcd54&artist=Cher&album=Believe&format=json`
// )
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Not a valid album");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data));
