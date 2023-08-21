import { useEffect, useState } from 'react'
import axios from "axios"
import { FaEye } from 'react-icons/fa';
import { Container } from '../../components';
import { useParams } from 'react-router-dom';

function DetailsPage () {
   
    const [ movie, setMovie ] :any = useState()
    const [isLoading, setLoading] = useState(true)
    let { id } = useParams();

    const getMovieDetails = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=ace96559b8fb0dd613fdfd48023afa84&language=en-US`)
        .then((data) => {
            setMovie(data?.data);
            if(data && data.data) setLoading(false);
        })
    }

    useEffect(getMovieDetails, [id])


    const addWatched = () => {
        axios.post(`http://localhost:6200/movies`, { 
            movie_id: movie.id,
            poster_path: movie.poster_path,
            runtime: movie.runtime
         })
        .then((res) => {
            console.log(res);
            console.log(res.data);
        })
    };

    return (
        <>
        {isLoading ? (<p>Loading</p>) : (
        <>
            <div className="bg-slate-50">
                <Container> 
                    <header className="w-full h-64 rounded bg-slate-100 mb-4">
                        <img src={'https://www.themoviedb.org/t/p/original'+movie.backdrop_path} className="h-full w-full object-cover rounded" />
                    </header>
                    <div className="flex flex-row">
                        <div className="mr-6 w-2/12">
                            <img 
                                src={'https://www.themoviedb.org/t/p/w1280'+movie.poster_path} 
                                className="rounded w-42"/>
                        </div>
                        <div className="w-10/12">
                            <div className="flex flex-row align-center justify-start">
                                <h1 className="font-bold text-3xl text-slate-700 font-serif mr-4">{movie.title}</h1>
                                <p className="text-lg text-slate-400 font-sans font-light mt-1">(2023)</p>
                            </div>
                            <div className="flex flex-row mt-4">
                                <button onClick={addWatched} className='border border-slate-200 p-2 rounded'>
                                    <FaEye className="text-slate-400"/>
                                </button>
                            </div>
                            <div className="my-4">
                                <h3 className="font-serif text-base text-slate-700 font-bold">Tagline</h3>
                                <p className="text-slate-400 font-light">{movie.tagline}</p>
                            </div>
                            <div className="mt-4">
                                <h3 className="font-serif text-base text-slate-700 font-bold">Overview</h3>
                                <p className="text-slate-400 font-light">{movie.overview}</p>
                            </div>
                            
                        </div>
                    </div>
                    <main>
                        <div className="my-4">
                            <h3 className="font-serif text-2xl text-slate-700 font-bold">Cast</h3>
                        </div>
                        <div className="my-4">
                            <h3 className="font-serif text-2xl text-slate-700 font-bold">Recommendations</h3>
                        </div>
                    </main>
                </Container>
            </div>
        </>)}
        </>
    )
}

export default DetailsPage;