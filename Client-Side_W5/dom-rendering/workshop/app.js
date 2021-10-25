import cats from "./dogs";

const allDogs = cats.map((dog) => {
  const h1 = document.createElement("h1");
  h1.textContent = dog.name;

  const img = document.createElement("h2");
  img.src = dog.image;

  const li = document.createElement("li");
  li.append(h1, img);
});

const title = document.createElement("h1");
title.textContent = "All the dogs";

const list = document.createElement("ul");
list.append(...dogElements);

document.querySelector("#app").append(title, list);
