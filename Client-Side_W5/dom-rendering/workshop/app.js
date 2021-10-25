import cats from "./dogs";
import createEl from "./create-element";

const allDogs = cats.map((dog) => {
  const h1 = createEl("h1", {}, dog.name);
  const img = createEl("img", {
    src: dog.image,
    alt: `Image of ${dog.name}`,
    width: 500,
    height: 300,
  });
  return createEl("li", { className: "card" }, h1, img);
});

const title = createEl("h1", {}, "All the dogs");

const list = createEl("ul", {}, ...allDogs);

document.querySelector("#app").append(title, list);
