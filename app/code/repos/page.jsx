async function fetchRepos() {
  const response = await fetch(
    'https://api.github.com/users/bradtraversy/repos'
  );
  const repos = await response.json();
  return repos;
}

const ReposPage = () => {
  return <div>ReposPage</div>;
};

export default ReposPage;
