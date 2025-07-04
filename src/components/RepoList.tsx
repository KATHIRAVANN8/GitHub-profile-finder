import type { GitHubRepo } from "../types/github";

const RepoList = ({ repos }: { repos: GitHubRepo[] }) => {
  return (
    <div className="mt-6">
      <h3 className="text-lg sm:text-xl font-semibold mb-4">Repositories:</h3>
      {repos.map((repo) => (
        <div key={repo.name} className="bg-white p-4 rounded shadow mb-3">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-700 font-medium text-base sm:text-lg"
          >
            {repo.name}
          </a>
          <p className="text-gray-600 text-sm sm:text-base">
            {repo.description}
          </p>
          <p className="text-yellow-600 text-sm mt-1">
            ⭐ {repo.stargazers_count}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RepoList;
