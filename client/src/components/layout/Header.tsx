import { Container } from '../index';
import { Link } from "react-router-dom";
import logo from '../../assets/images/movieclub-logo.svg'

const Header = () => {
    return (
        <header className="bg-white py-4">
            <Container>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex content-center justify-start">
                        {/* <img src={logo} alt="log MovieClub" className="w-20" /> */}
                        logo
                    </div>
                    <nav className="flex content-center justify-end">
                        <ul className="flex flex-row content-center justify-end list-none">
                            <li>
                                <Link to="/" className="flex flex-row content-center text-sm font-semibold text-slate-400 mr-10 hover:text-slate-500">Home</Link>
                            </li>
                            <li>
                                <Link to="/watched" className="flex flex-row content-center text-sm font-semibold text-slate-400 mr-10 hover:text-slate-500"> Watched</Link>
                            </li>
                            <li>
                                <Link to="/favorites" className="flex flex-row content-center text-sm font-semibold text-slate-400 hover:text-slate-500">Favorites</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Container>
        </header>
    );
}

export default Header;