import { FaClock, FaStar, FaHeartOutline } from 'react-icons/fa';
import { Container } from '../../components';

function DetailsPage () {
    return (
        <div className="">
            <Container>
                <header className="w-full h-64 rounded bg-slate-100 mb-4">
                    <img src="https://www.themoviedb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg" className="h-full w-full object-cover rounded" />
                </header>
                <div className="flex flex-row">
                    <div className="mr-6 w-2/12">
                        <img 
                            src="https://www.themoviedb.org/t/p/w1280/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg" 
                            className="rounded w-42"/>
                    </div>
                    <div className="w-6/12">
                        <div className="flex flex-row align-center justify-start">
                            <h1 className="font-bold text-3xl text-slate-700 font-serif mr-4">Oppenheimer</h1>
                            <p className="text-lg text-slate-400 font-sans font-light mt-1">(2023)</p>
                        </div>
                        <div className="flex flex-row mt-4">
                            <p className="flex align-center content-center text-base justify-start mr-2 text-slate-600 mr-6">
                                <FaClock className="mt-1 mr-2 text-blue-500"/>3u01
                            </p>
                            <p className="flex align-center content-center text-base justify-start mr-2 text-slate-600 mr-4">
                                <FaStar className="mt-1 mr-2 text-yellow-400"/>8.8
                            </p>
                        </div>
                        <div className="flex flex-row mt-4">
                            <p className="bg-slate-200 text-slate-800 py-1 px-2 rounded text-xs font-semibold mr-2">Drama</p>
                            <p className="bg-slate-200 text-slate-800 py-1 px-2 rounded text-xs font-semibold mr-2">History</p>
                        </div>
                        <div className="mt-4">
                            <p className="text-slate-400 font-light">The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.</p>
                        </div>
                        <div className="my-4">
                            <h3 className="font-serif text-base text-slate-700 font-bold">Directed by</h3>
                            <p className="text-slate-400 font-light">Christopher Nolan</p>
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
    )
}

export default DetailsPage;