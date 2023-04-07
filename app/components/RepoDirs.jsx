async function fetchRepoContents(name) {
  const response = await fetch(
    `https://api.github.com/repos/bradtraversy/${name}/contents`
  );
  const repo = await response.json();
  return repo;
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name);
  return <div></div>;
};

export default RepoDirs;
