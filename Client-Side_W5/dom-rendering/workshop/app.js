import cats from "./dogs";

// Challenge 4 - Template

const cardTemplate = document.querySelector("#cardTemplate");
const allDogs = cats.map((dog) => {
  const clone = template.content.cloneNode(true);
  clone.querySelector("h1").append(dog.name);
  clone.querySelector("img").src = dog.image;
  clone.querySelector("img").alt = `Image of ${dog.image}`;
  return clone;
});

const pageTemplate = document.querySelector("#pageTemplate");
const clone = pageTemplate.content.cloneNode(true);
clone.querySelector("ul").append(...allDogs);

document.querySelector("#app").append(clone);

// Challenge 3 - inner html

// const allDog = cats.map((dog) => {
//   return html`
//     <li class="card">
//       <h1>${dog.name}</h1>
//       <img src="${dog.image}" alt="Image of ${dog.name}" />
//     </li>
//   `;
// });

// document.querySelector("#app").innerHTML = html`
//   <h1>All the dogs</h1>
//   <ul>
//     ${dogElements.join("\n")}
//   </ul>
// `;

// Challenge 2

// const allDogs = cats.map((dog) => {
//   const h1 = createEl("h1", {}, dog.name);
//   const img = createEl("img", {
//     src: dog.image,
//     alt: `Image of ${dog.name}`,
//     width: 500,
//     height: 300,
//   });
//   return createEl("li", { className: "card" }, h1, img);
// });

// const title = createEl("h1", {}, "All the dogs");

// const list = createEl("ul", {}, ...allDogs);

// document.querySelector("#app").append(title, list);
