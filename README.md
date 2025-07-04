🎯 𝗚𝗜𝗧𝗛𝗨𝗕 𝗣𝗥𝗢𝗙𝗜𝗟𝗘 𝗙𝗜𝗡𝗗𝗘𝗥
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔧 A blazing-fast and stylish web app to search GitHub users, show profiles, and list their repositories.

🛠 Built with: ⚛️ React + 🟦 TypeScript + ⚡ Vite + 🎨 Tailwind CSS + 🧩 React Query

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ 𝗙𝗘𝗔𝗧𝗨𝗥𝗘𝗦
━━━━━━━━━━━━━━━━
🔍 Search GitHub users by username  
👤 Display user details: avatar, name, bio, followers, following  
📂 List repositories with stars and descriptions  
⏩ Pagination support for repositories  
⚡ Real-time loading & error states with React Query  
🧠 Fully typed logic using TypeScript  
📱 Responsive, mobile-friendly UI with TailwindCSS  

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🗂️ 𝗙𝗢𝗟𝗗𝗘𝗥 𝗦𝗧𝗥𝗨𝗖𝗧𝗨𝗥𝗘
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📁 github-profile-finder/
│
├── 📄 index.html
├── 📄 package.json
├── 📄 tailwind.config.js
├── 📄 vite.config.ts
├── 📄 tsconfig.json
│
├── 📁 public/
│   └── 🎨 favicon.ico
│
├── 📁 src/
│   ├── 📁 api/
│   │   └── github.ts             → Axios GitHub API calls
│   ├── 📁 components/
│   │   ├── ProfileCard.tsx       → Profile display UI
│   │   ├── RepoList.tsx          → Repository list section
│   │   └── SearchBar.tsx         → Username search input
│   ├── 📁 types/
│   │   └── github.ts             → TypeScript types (GitHubUser, GitHubRepo)
│   ├── App.tsx                   → Core application logic
│   ├── main.tsx                  → Entry point with ReactDOM & QueryClient
│   └── vite-env.d.ts             → Vite-specific type declarations

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📦 𝗗𝗘𝗣𝗘𝗡𝗗𝗘𝗡𝗖𝗜𝗘𝗦 & 𝗜𝗡𝗦𝗧𝗔𝗟𝗟𝗔𝗧𝗜𝗢𝗡
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔹 React & Vite Setup  
  ➤ `npm install react react-dom typescript vite`

🔹 Tailwind CSS  
  ➤ `npm install -D tailwindcss postcss autoprefixer`  
  ➤ `npx tailwindcss init -p`

🔹 Axios + React Query  
  ➤ `npm install axios @tanstack/react-query`

🔹 Type Definitions  
  ➤ `npm install -D @types/react @types/react-dom`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ All set! Start your server using:
👉 `npm run dev` → Open `http://localhost:5173`


