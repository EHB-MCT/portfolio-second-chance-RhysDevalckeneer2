import { Container } from '../../components'
// import { FaBeer, FaMagnifyingGlass } from 'react-icons/fa';

function SearchPage () {
    return (
        <Container>
            <form className="flex align-center justify-between">
                <input placeholder="Banshees of Inisherin, Blade Runner 2049, ..." className="w-11/12 border border-slate-300 p-2 px-3 rounded mr-1"/>
                <button type="submit" className="w-1/12 flex align-center content-center justify-center bg-slate-700 text-white rounded p-2">
                    Search
                </button>
            </form>

            <main>
                <p>results</p>
            </main>
        </Container>
    )
}

export default SearchPage;