import { Container } from '../../components/';

import { FaEye, FaHeart, FaAlignLeft, FaStar, FaThLarge, FaCalendar } from 'react-icons/fa';

function HomePage () {
    return (
        <div className="bg-gray-50">
            <Container>
                <header className="home_header w-full h-[45vh] rounded relative">
                    <h1 className="font-serif absolute -bottom-10 center-0 inset-x-0 bottom-0 text-center font-bold text-4xl text-slate-700">
                        Track films you’ve watched.<br />
                        Save those you want to see.<br />
                        Tell your friends what’s good.
                    </h1>
                </header>
                <div className="py-24">
                    <p className="uppercase mb-1 text-base">lets you...</p>
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
            </Container>
        </div>
    )
}

export default HomePage;