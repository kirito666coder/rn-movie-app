# Movie App (Expo + TMDB)

[![Download Android APK](https://img.shields.io/badge/Download-Android%20APK-brightgreen?style=for-the-badge&logo=android)](https://github.com/kirito666coder/rn-movie-app/releases/download/v1.0/application-b7622ab9-76d5-4ff9-b03e-4c4dd9ce4821.apk)

A React Native movie browsing app built with **Expo Router**, **TypeScript**, and **NativeWind**. It pulls movie data from **TMDB** and includes a home feed, search, and a movie details screen.

## Features

- **Browse popular movies** (discover feed)
- **Search movies** with debounce (500ms)
- **Movie details**: poster, rating, runtime, overview, genres, budget/revenue, production companies
- **Tabs navigation**: Home, Search, Saved, Profile

## Tech stack

- **Expo** + **Expo Router** (file-based navigation)
- **React Native** + **TypeScript**
- **NativeWind / TailwindCSS** (utility-first styling)
- **TMDB API** (movie data)

## Screens / Routes

- `app/(tabs)/index.tsx`: Home (discover/latest)
- `app/(tabs)/search.tsx`: Search
- `app/movies/[id].tsx`: Movie details
- `app/(tabs)/saved.tsx`: Saved (placeholder)
- `app/(tabs)/profile.tsx`: Profile (placeholder)

## Getting started

### Prerequisites

- Node.js (LTS recommended)
- Expo Go on your phone **or** Android Studio Emulator / iOS Simulator

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables (TMDB)

This app expects a TMDB token in an Expo public env var:

- `EXPO_PUBLIC_MOVIE_API_KEY`

Create a `.env` file in the project root:

```bash
EXPO_PUBLIC_MOVIE_API_KEY="YOUR_TMDB_TOKEN"
```

Get your TMDB credentials from the TMDB dashboard.

> Note: Expo only exposes variables prefixed with `EXPO_PUBLIC_` to the client.

### 3) Run the app

```bash
npx expo start
```

Then choose one:

- Press `a` for Android emulator
- Press `i` for iOS simulator (macOS)
- Scan QR to open in Expo Go

## Scripts

```bash
npm run start     # start metro / expo dev server
npm run android   # start + open Android
npm run ios       # start + open iOS
npm run web       # start web
npm run lint      # run eslint (expo)
```

## Project structure

```text
app/                # Expo Router screens (routes)
  (tabs)/           # Tab routes
  movies/[id].tsx   # Movie details route
components/         # Reusable UI components (MovieCard, Searchbar, TabIcon)
services/           # API + data fetching hooks
constants/          # Icons and images exports
assets/             # Images, icons, fonts
```

## Credits

- Data provided by **TMDB**. This project is not affiliated with TMDB.

## License

MIT (or update this section with your preferred license).
