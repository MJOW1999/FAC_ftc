import React from "react";

function Profile(){
    const [profile, setProfile] = React.useState(0);

  React.useEffect(() => {
    fetch("https://api.github.com/users/mjow1999")
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  if (!profile) return <div>Loading...</div>;
  return (
    <div>
      <h1>{profile.name}</h1>
      <img src={profile.avatar_url} alt="" width="128" height="128" />
    </div>
  );
}


export default Profile;