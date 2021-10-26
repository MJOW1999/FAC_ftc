import React from "react";

function ReposList(props) {
  const [repos, setRepos] = React.useState();

  React.useEffect(() => {
    fetch(props.repos_url)
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, [props.repos_url]);

  if (!repos) return <div>Loading repos...</div>;
  return (
    <ul>
      {repos.map((repo) => (
        <li key={repo.id}>
          <a href={repo.url}>{repo.name}</a>
        </li>
      ))}
    </ul>
  );
}

export default ReposList;