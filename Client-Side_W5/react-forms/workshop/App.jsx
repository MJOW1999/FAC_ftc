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
  return (
    <main>
      <section className="filters">
        <h1>Burger Place</h1>
        <form>Inputs go here</form>
      </section>
      <section className="dishes">
        <h2>Dishes</h2>
        <ul className="grid">
          {dishes.map((burger) => (
          <li key={burger.id} className="card">
            <ul><li>{burger.name}</li></ul>
            <ul><li>{burger.description}</li></ul>
            <ul><li>{burger.price}</li></ul>
            </li>
            ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
