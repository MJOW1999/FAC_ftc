import React from "react";
import ReposList from "./ReposList";

function Profile(props){
    const [profile, setProfile] = React.useState(0);

  React.useEffect(() => {
    fetch("https://api.github.com/users/" + props.name)
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, [props.name]);

  if (!profile) return <div>Loading...</div>;
  return (
    <div>
      <h1>{profile.name}</h1>
      <img src={profile.avatar_url} alt="" width="128" height="128" />
      <h2>Repos</h2>
      <ReposList repos_url={profile.repos_url} />
    </div>
  );
}


export default Profile;