

## 🌐 GitHub Profile Finder

---

### 🚀 Project Overview

Welcome to the **GitHub Profile Finder** — a sleek and lightning-fast web app to search GitHub users, view detailed profiles, and explore their repositories. Powered by the GitHub API, it offers a developer-friendly experience with real-time search, TypeScript safety, and a responsive design. 💻✨

🔗 **Live Demo:** [https://ghprofile.netlify.app/]

---

### 🛠️ Tech Stack

* **Frontend Framework:** React.js
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Routing & State:** React Query, useState, useEffect
* **API Integration:** GitHub Public REST API
* **Bundler:** Vite

---

### 📌 Features

#### 👤 User Search & Profile Display

✅ Search by username
✅ Show: Avatar, Name, Bio, Followers, Following
✅ Clean and responsive layout

#### 📂 Repository List

✅ List repositories with:

* Repo name
* Description
* Stars
  ✅ Supports pagination

#### ⚡ Real-time Experience

✅ React Query for caching, loading, and error handling
✅ Fully typed logic using TypeScript

#### 📱 Mobile-Friendly Design

✅ Fully responsive UI using Tailwind CSS
✅ Works on all screen sizes

---

### 📂 Project File Structure

```
📦 github-profile-finder
 ┣ 📂 public
 ┃ ┗ 📜 favicon.ico
 ┣ 📂 src
 ┃ ┣ 📂 api
 ┃ ┃ ┗ 📜 github.ts
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 ProfileCard.tsx
 ┃ ┃ ┣ 📜 RepoList.tsx
 ┃ ┃ ┗ 📜 SearchBar.tsx
 ┃ ┣ 📂 types
 ┃ ┃ ┗ 📜 github.ts
 ┃ ┣ 📜 App.tsx
 ┃ ┣ 📜 main.tsx
 ┃ ┗ 📜 vite-env.d.ts
 ┣ 📜 index.html
 ┣ 📜 package.json
 ┣ 📜 tailwind.config.js
 ┣ 📜 vite.config.ts
 ┣ 📜 tsconfig.json
 ┗ 📜 README.md
```

---

### ⚙️ Installation & Setup

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/KATHIRAVANN8/GitHub-profile-finder.git
cd GitHub-profile-finder
```

#### 2️⃣ Install Dependencies

```bash
npm install
```

#### 3️⃣ Run the Project

```bash
npm run dev
```

Open your browser at:
👉 [http://localhost:5173](http://localhost:5173)

---

### 🌱 Future Enhancements

🚀 Add filters for sorting repositories
🔍 Highlight top-starred or forked repos
🎨 UI enhancements and light/dark mode
🌐 Deploy to Netlify/Vercel with custom domain
🧪 Add unit testing with Jest and React Testing Library

---


