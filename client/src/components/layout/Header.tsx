import { Container } from '../index';
import { Link } from "react-router-dom";
import { FaEye, FaHeart, FaHome, FaSearch } from 'react-icons/fa';
import logo from '../../assets/images/movieclub-logo.svg'

const Header = () => {
    return (
        <header className="bg-white py-4">
            <Container>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex content-center justify-start">
                        <img src={logo} alt="log MovieClub" className="w-20" /> 
                    </div>
                    <nav className="flex content-center justify-end">
                        <ul className="flex flex-row align-center content-center justify-end list-none mt-2">
                            <li>
                                <Link to="/" className="flex flex-row content-center text-sm font-semibold text-slate-400 mr-10 hover:text-slate-500">
                                    <FaHome className="mt-[6px] mr-[6px] text-xs"/>Home</Link>
                            </li>
                            <li>
                                <Link to="/search" className="flex flex-row content-center text-sm font-semibold text-slate-400 mr-10 hover:text-slate-500">
                                    <FaSearch className="mt-[6px] mr-[6px] text-xs"/>Search</Link>
                            </li>
                            <li>
                                <Link to="/watched" className="flex flex-row content-center text-sm font-semibold text-slate-400 mr-10 hover:text-slate-500"> 
                                    <FaEye className="mt-[6px] mr-[6px] text-xs"/>Watched</Link>
                            </li>
                            <li>
                                <Link to="/favorites" className="flex flex-row content-center text-sm font-semibold text-slate-400 hover:text-slate-500">
                                    <FaHeart className="mt-[6px] mr-[6px] text-xs"/>Favorites</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Container>
        </header>
    );
}

export default Header;