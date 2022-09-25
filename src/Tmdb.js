const API_KEY = "68e73652dc8b1bce903002249e21b981";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Netflix Originals",
        type: "tv",
        items: await basicFetch(
          `/discover/tv?with_network=213&language=en&api_key=${API_KEY}`
        ),
      },
      {
        slug: "trending",
        title: "Recommended for you",
        type: "tv",
        items: await basicFetch(
          `/trending/all/week?language=en&api_key=${API_KEY}`
        ),
      },
      {
        slug: "toprated",
        title: "Toprated",
        type: "movie",
        items: await basicFetch(
          `/movie/top_rated?language=en&api_key=${API_KEY}`
        ),
      },
      {
        slug: "action",
        title: "Action",
        type: "movie",
        items: await basicFetch(
          `/discover/movie?with_genres=28&language=en&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comedy",
        type: "movie",
        items: await basicFetch(
          `/discover/movie?with_genres=35&language=en&api_key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        type: "movie",
        items: await basicFetch(
          `/discover/movie?with_genres=27&language=en&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        type: "movie",
        items: await basicFetch(
          `/discover/movie?with_genres=10749&language=en&api_key=${API_KEY}`
        ),
      },
      // {
      //   slug: "documentary",
      //   title: "Documentários",
      //   type: "movie",
      //   items: await basicFetch(
      //     `/discover/movie?with_genres=99&language=en&api_key=${API_KEY}`
      //   ),
      // },
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case "movie":
          info = await basicFetch(
            `/movie/${movieId}?language=en&api_key=${API_KEY}`
          );
          break;
        case "tv":
          info = await basicFetch(
            `/tv/${movieId}?language=en&api_key=${API_KEY}`
          );
          break;
        default:
          info = null;
          break;
      }
    }
    return info;
  },
  getTrailerVideo: async (movieId, type) => {
    let trailer = {};

    if (movieId) {
      switch (type) {
        case "movie":
          trailer = await basicFetch(
            `/movie/${movieId}/videos?language=en&api_key=${API_KEY}`
          );
          break;
        case "tv":
          trailer = await basicFetch(
            `/tv/${movieId}/videos?language=en&api_key=${API_KEY}`
          );
          break;
        default:
          trailer = null;
          break;
      }
    }
    return trailer;
  },
};
