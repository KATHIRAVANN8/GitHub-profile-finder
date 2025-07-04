import type { GitHubUser } from "../types/github";

const ProfileCard = ({ user }: { user: GitHubUser }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-4">
      <img
        src={user.avatar_url}
        alt="avatar"
        className="w-24 h-24 rounded-full"
      />
      <div>
        <h2 className="text-2xl font-bold">
          {user.name} (@{user.login})
        </h2>
        <p className="text-gray-700 mt-1">{user.bio}</p>
        <div className="mt-2 text-sm text-gray-600 space-y-1 sm:space-y-0 sm:space-x-4">
          <span>👥 {user.followers} followers</span>
          <span>🔁 {user.following} following</span>
          <span>📦 {user.public_repos} repos</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;




