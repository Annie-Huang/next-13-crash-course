async function fetchRepo(name) {
  const response = await fetch(
    `https://api.github.com/repos/bradtraversy/${name}`
  );
  const repo = await response.json();
  return repo;
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);
  console.log(repo);

  return <div>Repo</div>;
};

export default Repo;
