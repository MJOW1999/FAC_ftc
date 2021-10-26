import React from "react";
import dishes from "../data";

function DishList(props){
    return (
        <ul className="grid">
            {dishes.filter((item) => props.category === 'all' || item.category === props.category).filter((item) => item.price > props.min && item.price < props.max)
          .map((item) => (
            <li key={item.id} className="card">
              <ul><li>{item.name}</li></ul>
              <ul><li>{item.description}</li></ul>
              <ul><li>{item.price}</li></ul>
            </li>
            ))}
        
        </ul>
    )
}

export default DishList;