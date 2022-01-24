import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Results from '../components/Results';
import requestes from '../utils/requestes';
const Home = ({ results }) => {
	return (
		<div>
			<Head>
				<title>Hulu</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<Nav />
			<Results results={results} />
		</div>
	);
};

export default Home;

export async function getServerSideProps(content) {
	const genre = content.query.genre;
	const req = await fetch(
		`https://api.themoviedb.org/3${
			requestes[genre]?.url || requestes.fetchTrending
		}`,
	).then((res) => res.json());

	return {
		props: {
			results: req.results,
		},
	};
}
