import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container } from '../../components';

function WatchedPage () {
    const [watchedMovies, setWatchedMovies] = useState([]);

    const getWatchedMovies = () => {
        axios.get("http://localhost:6200/movies")
            .then((data) => {
                setWatchedMovies(data?.data);
            })
    }

    useEffect(() => {
        getWatchedMovies();
    }, []);

    const deleteMovie = (id) => {
        axios
           .delete(`http://localhost:6200/movies/${id}`)
           .then(getWatchedMovies)
   }
    
    return (
        <Container>
            <div className="grid grid-cols-6 gap-4">
            {watchedMovies.map((movie, i) => {
                    return (
                        <div className='movie col-3' key={`${movie.movie_id}`}>
                            <Link to={`/movie/${movie.movie_id}`}>
                                <img 
                                    src={`https://www.themoviedb.org/t/p/w300${movie?.poster_path}??api_key=ace96559b8fb0dd613fdfd48023afa84`} 
                                    alt={movie?.movie_id} 
                                    className="watched-poster"/>
                            </Link>
                            <button onClick={() => deleteMovie(movie._id)} className="btn-del">
                                    Delete
                            </button>
                        </div>
                    );
                })}
                </div>
        </Container>
    )
}

export default WatchedPage;