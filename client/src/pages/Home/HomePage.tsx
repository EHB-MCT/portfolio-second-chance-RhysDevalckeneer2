import { useEffect, useState } from 'react'
import { Container, MovieCard } from '../../components/';

import { FaEye, FaHeart, FaAlignLeft, FaStar, FaThLarge, FaCalendar } from 'react-icons/fa';

function HomePage () {
    const [popularMovies, setPopularMovies]:any = useState([]);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2U5NjU1OWI4ZmIwZGQ2MTNmZGZkNDgwMjNhZmE4NCIsInN1YiI6IjVmOWJmNWYzMjljNjI2MDAzNzU3MjQ4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qXfNM2Xqp5d6aQ0jfssatlcWCKQeKcqlOGLcsrq_q-E'
        }
    };

    const fetchPopularMovies = () => {
        fetch('https://api.themoviedb.org/3/movie/popular', options)
            .then(response => response.json())
            .then(response => setPopularMovies(response.results))
            .catch(err => console.error(err));        
    }

    useEffect(() => {
        fetchPopularMovies();
    }, [])

    return (
        <div className="bg-gray-50">
            <Container>
                <header className="home_header w-full h-[45vh] rounded relative">
                    <h1 className="font-serif absolute -bottom-14 center-0 inset-x-0 bottom-0 text-center font-bold text-4xl text-slate-700">
                        Track films you've watched.<br />
                        Save those you want to see.<br />
                        Tell your friends what's good.
                    </h1>
                </header>
                <div className="pt-32 pb-12">
                    <p className="uppercase mb-1 text-base text-slate-700 font-semibold">Movieclub lets you...</p>
                    <div className="grid grid-cols-3 gap-2">
                        <div className="bg-slate-100 flex flex-row">
                            <div className="p-4">
                                <FaEye className="mt-1 text-3xl text-slate-500"/>
                            </div>
                            <div className="p-4 px-1 pr-4">
                                <p className=" text-slate-500">Keep track of every film you’ve ever watched (or just start from the day you join)</p>
                            </div>
                        </div>

                        <div className="bg-slate-100 flex flex-row">
                            <div className="p-4">
                                <FaHeart className="mt-1 text-3xl text-slate-500"/>
                            </div>
                            <div className="p-4 px-1 pr-4">
                                <p className=" text-slate-500">Show some love for your favorite films, lists and reviews with a “like”</p>
                            </div>
                        </div>

                        <div className="bg-slate-100 flex flex-row">
                            <div className="p-4">
                                <FaAlignLeft className="mt-1 text-3xl text-slate-500"/>
                            </div>
                            <div className="p-4 px-1 pr-4">
                                <p className=" text-slate-500">Write and share reviews, and follow friends and other members to read theirs</p>
                            </div>
                        </div>

                        <div className="bg-slate-100 flex flex-row">
                            <div className="p-4">
                                <FaStar className="mt-1 text-3xl text-slate-500"/>
                            </div>
                            <div className="p-4 px-1 pr-4">
                                <p className=" text-slate-500">Rate each film on a five-star scale (with halves) to record and share your reaction</p>
                            </div>
                        </div>

                        <div className="bg-slate-100 flex flex-row">
                            <div className="p-4">
                                <FaCalendar className="mt-1 text-3xl text-slate-500"/>
                            </div>
                            <div className="p-4 px-1 pr-4">
                                <p className=" text-slate-500">Keep a diary of your film watching (and upgrade to <strong>Pro</strong> for comprehensive stats)</p>
                            </div>
                        </div>

                        <div className="bg-slate-100 flex flex-row">
                            <div className="p-4">
                                <FaThLarge className="mt-1 text-3xl text-slate-500"/>
                            </div>
                            <div className="p-4 px-1 pr-4">
                                <p className="text-slate-500">Compile and share lists of films on any topic and keep a watchlist of films to see</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-8">
                    <p className="uppercase mb-1 text-base text-slate-700 font-semibold mb-2">Recently added...</p>
                    <div className="overflow-x-auto flex flex-row">
                        {
                            popularMovies.map((movie) => (
                                <MovieCard key={movie.id} poster_path={movie.poster_path} score={movie.vote_average} movie_id={movie.id}/>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HomePage;