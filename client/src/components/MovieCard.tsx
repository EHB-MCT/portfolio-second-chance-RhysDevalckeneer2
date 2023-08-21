const MovieCard = (props: {poster_path: string, score: number, movie_id: any}) => {
    return (
        <a href={"/movie/"+props.movie_id}>
            <div className="bg-slate-200 rounded w-[120px] h-44 mr-2 relative">
                <p className="bg-slate-700/70 text-white font-semibold rounded absolute px-2 py-1 text-xs top-2 right-2">{props.score}</p>
                <img src={'https://image.tmdb.org/t/p/original'+props.poster_path} className="w-full h-full object-cover rounded"/>
            </div>
        </a>
    );
}

export default MovieCard;