import React from "react";
import dishes from "../data";
import PriceFilter from "./PriceFilter";
import DishList from "./DishList";
import CategoryFilter from "./CategoryFilter";

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
  const [checked, setChecked] = React.useState(false);
  return (
    <main>
      <section className="filters">
        <h1>Burger Place</h1>
        <form>
          <PriceFilter min={min} setMin={setMin} max={max} setMax={setMax}/>
        </form>
        <form>
          <CategoryFilter checked={checked} setChecked={setChecked} />
        </form>
      </section>
      <section className="dishes">
        <h2>Dishes</h2>
        <DishList min={min} max={max} />
      </section>
    </main>
  );
}

export default App;
