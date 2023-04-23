import axios from 'axios';

class Api {
  #API_KEY = '9c2993dc2441e19b5ee9fa98ee7764c5';
  #BASE_URL = 'https://api.themoviedb.org/3/';
  #TRENDING_PATH_URL = 'trending/movie/day';
  #SEARCH_PATH_URL = 'search/movie';
  #GET_MOVIE_DETAILS_PATH_URL = 'movie/';
  #GET_CREDIT_URL = '/credits';
  #GET_REVIEWS_URL = '/reviews';
  // #IMAGE_BASE_API_URL = `https://image.tmdb.org/t/p/w500`;
  // #FALLBACK_IMAGE_URL = `https://i.postimg.cc/htSNfpBY/movie-card-plug.jpg`;

  async getTrendingMovies() {
    const url = `${this.#BASE_URL}${this.#TRENDING_PATH_URL}`;

    try {
      const response = await axios.get(url, {
        params: {
          api_key: this.#API_KEY,
        },
      });

      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  }

  async searchByWord(query) {
    const url = `${this.#BASE_URL}${this.#SEARCH_PATH_URL}`;

    try {
      const response = await axios.get(url, {
        params: {
          api_key: this.#API_KEY,
          query: query,
          page: 1,
        },
      });
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  }

  async getMovieDetailsById(movieId) {
    const url = `${this.#BASE_URL}${
      this.#GET_MOVIE_DETAILS_PATH_URL
    }${movieId}`;

    try {
      const response = await axios.get(url, {
        params: { api_key: this.#API_KEY },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getMovieCreditsById(movieId) {
    const url = `${this.#BASE_URL}${
      this.#GET_MOVIE_DETAILS_PATH_URL
    }${movieId}${this.#GET_CREDIT_URL}`;

    try {
      const response = await axios.get(url, {
        params: { api_key: this.#API_KEY },
      });
      return response.data.cast;
    } catch (error) {
      console.error(error);
    }
  }

  async getMovieReviewsById(movieId) {
    const url = `${this.#BASE_URL}${
      this.#GET_MOVIE_DETAILS_PATH_URL
    }${movieId}${this.#GET_REVIEWS_URL}`;

    try {
      const response = await axios.get(url, {
        params: {
          api_key: this.#API_KEY,
          page: 1,
        },
      });
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  }
}

export const apiService = new Api();
