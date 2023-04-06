async function fetchRepos() {
  const response = await fetch(
    'https://api.github.com/users/bradtraversy/repos'
  );
  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await fetchRepos();
  console.log('repos=', repos); // This will print out in terminal, not console in chrome devtool

  return <div>{repos[0].name}</div>;
};

export default ReposPage;
