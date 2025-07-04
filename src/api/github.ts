import axios from "axios";

export const fetchUser = async (username: string) => {
  const res = await axios.get(`https://api.github.com/users/${username}`);
  return res.data;
};

export const fetchRepos = async (username: string, page = 1) => {
  const res = await axios.get(
    `https://api.github.com/users/${username}/repos`,
    {
      params: { per_page: 5, page },
    }
  );
  return res.data;
};
