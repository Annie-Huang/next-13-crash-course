import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

async function fetchRepos() {
  // Refetch every 60 seconds.
  const response = await fetch(
    'https://api.github.com/users/bradtraversy/repos',
    {
      next: {
        revalidate: 60,
      },
    }
  );

  // Force you to wait 1 second to in order to show you the spinner.
  // If this component is a server side component, and you have the loading.jsx in the root loading, when it's loading,
  // it will that file, you don't need to do isFetching etc.
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await fetchRepos();
  console.log('repos=', repos); // This will print out in terminal, not console in chrome devtool

  return (
    <div className='repos-container'>
      <h2>Repositories</h2>
      <ul className='repo-list'>
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className='repo-details'>
                <span>
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
