import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import RepoList from "./components/RepoList";
import { fetchUser, fetchRepos } from "./api/github";

const App = () => {
  const [username, setUsername] = useState("");
  const [page, setPage] = useState(1);

  const {
    data: user,
    isLoading: userLoading,
    error: userError,
  } = useQuery({
    queryKey: ["user", username],
    queryFn: () => fetchUser(username),
    enabled: !!username,
  });

  const { data: repos, isLoading: reposLoading } = useQuery({
    queryKey: ["repos", username, page],
    queryFn: () => fetchRepos(username, page),
    enabled: !!username,
  });

  const isLastPage = repos?.length < 5;

  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">
        GitHub Profile Finder
      </h1>

      <SearchBar
        onSearch={(name) => {
          setUsername(name);
          setPage(1);
        }}
      />

      {userLoading && <p className="text-center">Loading user...</p>}
      {userError && <p className="text-center text-red-500">User not found.</p>}
      {user && <ProfileCard user={user} />}

      {reposLoading && <p className="text-center mt-4">Loading repos...</p>}

      {repos && repos.length > 0 && (
        <>
          <RepoList repos={repos} />

          {isLastPage && (
            <p className="text-center text-sm text-gray-500 mt-2">
              ✅ You’ve reached the end of the repositories list.
            </p>
          )}

          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              className="bg-gray-300 px-3 py-1 rounded disabled:opacity-50"
              disabled={page === 1}
            >
              Prev
            </button>

            <span className="text-gray-700">Page {page}</span>

            <button
              onClick={() => setPage((p) => p + 1)}
              className="bg-gray-300 px-3 py-2 rounded disabled:opacity-50"
              disabled={isLastPage}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
