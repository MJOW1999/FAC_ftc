import React from "react";

function TitleFilter(props){
    <input
        type="text"
          id="min-price"
          min="0.5"
          max="9"
          step="0.25"
          value={props.min}
          onChange={(event) => props.setMin(event.target.value)}>
    </input>
}

export default TitleFilter;