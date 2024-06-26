import axios from "axios";

axios.defaults.baseURL = `https://api.themoviedb.org`;

export const getTrandingMovies = async (page) => {
  const url = "/3/trending/movie/day";
  const options = {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTkzMjVhOTAzZGMyMmM5ZDI0ZGUxMjRiZDRlYzJjNyIsInN1YiI6IjY2MjdhMWIzNjNlNmZiMDE3ZWZkY2EwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x-KuWUIz479j2eqEG3Tx_TXqkv-_QOpTnYYL_IzpEhU`,
    },
    params: {
      language: "uk",
      page: page,
    },
  };

  const response = await axios.get(url, options);
  return response.data.results;
};

export const getMovieDetails = async (movieId) => {
  const url = `/3/movie/${movieId}`;

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTkzMjVhOTAzZGMyMmM5ZDI0ZGUxMjRiZDRlYzJjNyIsInN1YiI6IjY2MjdhMWIzNjNlNmZiMDE3ZWZkY2EwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x-KuWUIz479j2eqEG3Tx_TXqkv-_QOpTnYYL_IzpEhU",
    },
    params: {
      language: "uk",
    },
  };

  const response = await axios.get(url, options);
  return response.data;
};

export const getMovieCast = async (movieId) => {
  const url = `/3/movie/${movieId}/credits`;

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTkzMjVhOTAzZGMyMmM5ZDI0ZGUxMjRiZDRlYzJjNyIsInN1YiI6IjY2MjdhMWIzNjNlNmZiMDE3ZWZkY2EwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x-KuWUIz479j2eqEG3Tx_TXqkv-_QOpTnYYL_IzpEhU",
    },
    params: {
      language: "uk",
    },
  };

  const response = await axios.get(url, options);
  return response.data;
};

export const getMovieReview = async (movieId) => {
  const url = `/3/movie/${movieId}/reviews`;

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTkzMjVhOTAzZGMyMmM5ZDI0ZGUxMjRiZDRlYzJjNyIsInN1YiI6IjY2MjdhMWIzNjNlNmZiMDE3ZWZkY2EwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x-KuWUIz479j2eqEG3Tx_TXqkv-_QOpTnYYL_IzpEhU",
    },
  };

  const response = await axios.get(url, options);
  return response.data;
};

export const getMovies = async (query, page) => {
  const url = "/3/search/movie?";

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTkzMjVhOTAzZGMyMmM5ZDI0ZGUxMjRiZDRlYzJjNyIsInN1YiI6IjY2MjdhMWIzNjNlNmZiMDE3ZWZkY2EwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x-KuWUIz479j2eqEG3Tx_TXqkv-_QOpTnYYL_IzpEhU",
    },
    params: {
      language: "uk",
      query: query,
      page: page,
    },
  };

  const response = await axios.get(url, options);
  return response.data;
};

export const getNewestMovies = async (page) => {
  const url = "/3/movie/upcoming";

  const options = {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTkzMjVhOTAzZGMyMmM5ZDI0ZGUxMjRiZDRlYzJjNyIsInN1YiI6IjY2MjdhMWIzNjNlNmZiMDE3ZWZkY2EwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x-KuWUIz479j2eqEG3Tx_TXqkv-_QOpTnYYL_IzpEhU`,
    },
    params: {
      language: "uk",
      page: page,
    },
  };

  const response = await axios.get(url, options);
  return response.data.results;
};

export const getMovieTrailerUK = async (movieId) => {
  const url = `/3/movie/${movieId}/videos`;

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTkzMjVhOTAzZGMyMmM5ZDI0ZGUxMjRiZDRlYzJjNyIsInN1YiI6IjY2MjdhMWIzNjNlNmZiMDE3ZWZkY2EwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x-KuWUIz479j2eqEG3Tx_TXqkv-_QOpTnYYL_IzpEhU",
    },
    params: {
      language: "uk",
    },
  };

  const response = await axios.get(url, options);
  return response.data;
};

export const getMovieTrailerUS = async (movieId) => {
  const url = `/3/movie/${movieId}/videos`;

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTkzMjVhOTAzZGMyMmM5ZDI0ZGUxMjRiZDRlYzJjNyIsInN1YiI6IjY2MjdhMWIzNjNlNmZiMDE3ZWZkY2EwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x-KuWUIz479j2eqEG3Tx_TXqkv-_QOpTnYYL_IzpEhU",
    },
    params: {
      language: "en-US",
    },
  };

  const response = await axios.get(url, options);
  return response.data;
};
