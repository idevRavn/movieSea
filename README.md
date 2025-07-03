# 🎬 movieSea - Smart Movie Discovery Without the Hassle
<div align="center">
  <a href="https://movie-sea-omega.vercel.app/" target="_blank">
    <img src="src/assets/hero.png" alt="MovieSense Banner" />
  </a>
  <br />
  <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logo=react&logoColor=white&color=61DAFB" />
  <img src="https://img.shields.io/badge/-Firebase-black?style=for-the-badge&logo=firebase&logoColor=white&color=FFCA28" />
  <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logo=tailwindcss&logoColor=white&color=06B6D4" />
  <img src="https://img.shields.io/badge/-Vite-black?style=for-the-badge&logo=vite&logoColor=white&color=646CFF" />
  <img src="https://img.shields.io/badge/-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white&color=000000" />
  <img src="https://img.shields.io/badge/-TMDB_API-black?style=for-the-badge&logo=themoviedatabase&logoColor=white&color=01B4E4" />
</div>

## 🤖 Introduction

**movieSea** is a smart and responsive movie recommendation web app built with React, Firebase, and TailwindCSS. It allows users to search for movies using the TMDB API, and also tracks movie popularity using Firestore to surface top trending titles.

![movieSea Preview](./src/assets/readme/preview1.png)
![movieSea Preview](./src/assets/readme/preview2.png)
![movieSea Preview](./src/assets/readme/preview3.png)

## 🚀 Live Demo

[👉 View Live](https://movie-sea-omega.vercel.app/)

## Features

- 🔍 Debounced movie search (no redundant API calls)
- 📊 Popularity tracking with Firestore (auto-increment count)
- 🔝 Fetch and display top 5 trending movies
- 🎬 Movie card UI with poster, title, language, year, rating

## 🤸 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/idevRavn/movieSea.git
cd movieSea
npm install
```

### 2️⃣ Setup Environment Variables
Create a `.env.local` file in the root:

```bash
VITE_TMBD_API_KEY=
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=
```

### 3️⃣ Development Mode

```bash
npm run dev
```

📌 Open **http://localhost:5173** in your browser to view the site.

## 🛠️ Tech Stack

- React.js
- Vite
- Firebase Firestore Database
- Tailwind CSS
- TMDB API
- Vercel

## 🤝 Contributing

Contributions are welcome! If you have ideas for improvement or want to add features, please fork the repository and submit a pull request.