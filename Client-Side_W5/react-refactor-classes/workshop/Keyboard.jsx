import React from "react";

// class Keyboard extends React.Component {
//   state = {
//     key: "",
//   };
//   handleKeyDown = (event) => {
//     this.setState({ key: event.key });
//   };
//   componentDidMount() {
//     window.addEventListener("keydown", this.handleKeyDown);
//   }
//   componentWillUnmount() {
//     // stops the event listener continuing to fire
//     // when the component has left the page
//     window.removeEventListener("keydown", this.handleKeyDown);
//   }
//   render() {
//     return <div>{this.state.key || "Press any key"}</div>;
//   }
// }

function Keyboard () {
  const [key, setKey] = React.useState("");
  React.useEffect(() => {
    const handleKeyDown = (e) => setKey(e);
    window.addEventListener("keydown", handleKeyDown);
    
  })
  return <div>{this.state.key || "Press any key"}</div>;


}

export default Keyboard;
