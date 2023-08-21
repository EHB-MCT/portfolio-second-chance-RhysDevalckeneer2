import { Container } from '../../components'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { FaBeer, FaMagnifyingGlass } from 'react-icons/fa';

function SearchPage () {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    const fetchData = async () => {
        if(!query) return;
        try {
        const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ace96559b8fb0dd613fdfd48023afa84&language=en-US&query=${query}&page=1&include_adult=false`)
        setMovies(data.results)
        console.log(data.results);
        } catch (error) {
        console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [query])

    return (
        <Container>
            <form className="flex align-center justify-between mb-2">
                <input 
                    placeholder="Banshees of Inisherin, Blade Runner 2049, ..." 
                    className="w-11/12 border border-slate-300 p-2 px-3 rounded mr-1"
                    name='query' 
                    onChange={(event) => {setQuery(event.target.value)}}
                    type="search"
                    value={query}
                />
                <button type="submit" className="w-1/12 flex align-center content-center justify-center bg-slate-700 text-white rounded p-2">
                    Search
                </button>
            </form>

            <main className='mt-4'>
                <div className='grid grid-cols-6 gap-4'>
                    {movies.map(movie => (
                        <div className='col-3'>
                            <Link to={`/movie/${movie.id}`}>
                                <img 
                                    src={`https://image.tmdb.org/t/p/w300${movie?.poster_path}?api_key=ace96559b8fb0dd613fdfd48023afa84`} 
                                    alt={movie?.movie_id} 
                                    className="home-poster"
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </main>
        </Container>
    )
}

export default SearchPage;