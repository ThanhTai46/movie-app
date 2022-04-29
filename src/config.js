export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "599785b548051b03695ff20b291c6977";
export const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
export const urlImage = "https://image.tmdb.org/t/p/original";
export const searchUrl = "https://api.themoviedb.org/3/search/movie";
export const tmdbAPI = {
  getMovieList: (type, page = 1) =>
    `${tmdbEndpoint}/${type}?api_key=${apiKey}&page=${page}`,
  getMovieDetails: (movieId) => `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
  getMovieInfo: (movieId, type) =>
    `${tmdbEndpoint}/${movieId}/${type}?api_key=${apiKey}`,
  imageOriginal: (url) => `${urlImage}/${url}`,
  getMovieSearch: (query, page) =>
    `${searchUrl}?api_key=${apiKey}&query=${query}&page=${page}`,
};
// https://api.themoviedb.org/3/search/movie?api_key=599785b548051b03695ff20b291c6977&query=${filterDebounce}&page=${nextPage}
