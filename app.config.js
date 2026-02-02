import "dotenv/config";

export default {
  expo: {
    name: "Movie App",
    slug: "movie-app",
    version: "1.1.0",
    android: {
      package: "com.kirito666.movieapp",
    },
    extra: {
      movieApiKey: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
      eas: {
        projectId: "fa4ecef3-716c-4743-bb4f-efa0f6da403c",
      },
    },
  },
};
