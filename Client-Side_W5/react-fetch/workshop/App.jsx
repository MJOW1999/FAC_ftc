import React from "react";
import Profile from "./Profile";

function App() {
  const [user, setUser] = React.useState("mjow1999");
  return (
    <main>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setUser(event.target.username.value);
        }}>
        <input
          type="search"
          aria-label="Search users"
          placeholder="Search users"
          name="username"
        />
        </form>

      <div><Profile name={user}/></div>
    </main>
  );
}

export default App;
