/* eslint-disable import/no-anonymous-default-export */
const API_KEY = process.env.API_KEY;

export default {
	fetchTrending: {
		title: 'Trending',
		url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	},
	fetchTopRated: {
		title: 'Top Rated',
		url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	},
	fetchActionMovie: {
		title: 'Action',
		url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	},
	fetchComedyMovie: {
		title: 'Comedy',
		url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	},
	fetchHorrorMovie: {
		title: 'Horror',
		url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	},
	fetchRomanceMovie: {
		title: 'Romance',
		url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	},
	fetchMystry: {
		title: 'Mystry',
		url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
	},
	fetchSciFi: {
		title: 'Sci-Fi',
		url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
	},
	fetchWestern: {
		title: 'Western',
		url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
	},
	fetchAnimation: {
		title: 'Animation',
		url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
	},
	fetchTV: {
		title: 'TV Movie',
		url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
	},
};
