🎯 GITHUB PROFILE FINDER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔧 A blazing-fast and stylish web app to search GitHub users, show profiles, and list their repositories.

🛠 Built with: React + TypeScript + Vite + Tailwind CSS + React Query

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ FEATURES
━━━━━━━━━━━━━━━━
🔍 Search GitHub users by username  
👤 Display user details: avatar, name, bio, followers, following  
📂 List repositories with stars and descriptions  
⏩ Pagination support for repositories  
⚡ Real-time loading & error states with React Query  
🧠 Fully typed logic using TypeScript  
📱 Responsive, mobile-friendly UI with TailwindCSS  

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🗂️ FOLDER STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
github-profile-finder/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json

├── public/
│   └── favicon.ico                  # App icon

├── src/
│   ├── api/
│   │   └── github.ts                # Axios GitHub API calls
│
│   ├── components/
│   │   ├── ProfileCard.tsx          # User profile display
│   │   ├── RepoList.tsx             # Repository list section
│   │   └── SearchBar.tsx            # GitHub username input
│
│   ├── types/
│   │   └── github.ts                # TypeScript types (GitHubUser, GitHubRepo)
│
│   ├── App.tsx                      # Main application logic
│   ├── main.tsx                     # Entry point with ReactDOM & QueryClient
│   └── vite-env.d.ts                # Vite-specific type declarations

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📦 DEPENDENCIES & INSTALLATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 React & Vite Setup
➤ npm install react react-dom typescript vite

🔹 Tailwind CSS
➤ npm install -D tailwindcss postcss autoprefixer  
➤ npx tailwindcss init -p

🔹 Axios + React Query
➤ npm install axios @tanstack/react-query

🔹 Type Definitions
➤ npm install -D @types/react @types/react-dom

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ GETTING STARTED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
➤ Start the server:
npm run dev

➤ Open in browser:
http://localhost:5173

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


