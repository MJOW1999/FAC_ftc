
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    if(!form.checkValidity()){
        e.preventDefault();
    }
    console.log(form.checkValidity())
})
const divs = document.querySelectorAll("div");


const inputs = document.querySelectorAll("input");
inputs.forEach(input => input.addEventListener("invalid", (event) => {
    input.setAttribute("aria-invalid", "true");
    const errorId = input.id + "Error";
    const errorContainer = form.querySelector("#" + errorId);
    errorContainer.textContent = input.validationMessage;
    input.addEventListener("input", () => {
        input.setAttribute("aria-invalid", "false");
    
        const errorId = input.id + "Error";
        const errorContainer = form.querySelector("#" + errorId);
        errorContainer.textContent = "";
      });
}))



// const form = document.querySelector("form");

// // form.setAttribute("novalidate", "");

// form.addEventListener("submit", (event) => {
//   const allInputsValid = form.checkValidity();
//   console.log(allInputsValid)
//   if (!allInputsValid) {
//     event.preventDefault();
//   }
// });