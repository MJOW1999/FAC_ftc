import React from "react";
import dishes from "../data";

// const categories = [
//   "all",
//   "burger",
//   "hot dog",
//   "sandwich",
//   "fries",
//   "topping",
//   "drink",
//   "extra",
// ];

function App() {
  const [min, setMin] = React.useState(0);
  const [max, setMax] = React.useState(9);
  return (
    <main>
      <section className="filters">
        <h1>Burger Place</h1>
        <form>
          <fieldset>
          <legend>Price</legend>
          <label htmlFor="min-price">
            Min price
            <input
          type="range"
          id="min-price"
          min="0.5"
          max="9"
          step="0.25"
          value={min}
          onChange={(event) => setMin(event.target.value)}
          />
          </label>
          <label htmlFor="max-price">
          Max price
          <input
          type="range"
          id="max-price"
          min="0.5"
          max="9"
          step="0.25"
          value={max}
          onChange={(event) => setMax(event.target.value)}
          />
         </label>
          </fieldset>
        </form>
      </section>
      <section className="dishes">
        <h2>Dishes</h2>
        <ul className="grid">
          {dishes.filter((item) => item.price > min && item.price < max)
          .map((item) => (
            <li key={item.id} className="card">
              <ul><li>{item.name}</li></ul>
              <ul><li>{item.description}</li></ul>
              <ul><li>{item.price}</li></ul>
            </li>
            ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
