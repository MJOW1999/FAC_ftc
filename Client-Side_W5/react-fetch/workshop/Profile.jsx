import React from "react";

function Profile(){
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
    </div>
  );
}


export default Profile;