import { Container } from '../index';

const Footer = () => {
    return (
        <footer className="bg-white py-8">
            <Container>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex content-center justify-start">
                        <p className="text-xs text-slate-300">&copy;2023 M. All rigths reserved.</p>
                    </div>
                    <div className="flex content-center justify-end">
                        <a href="#" className="text-xs text-slate-300 mr-6 underline underline-offset-2">Terms of Sevice</a>
                        <a href="#" className="text-xs text-slate-300 mr-6 underline underline-offset-2">Privacy Policy</a>
                        <a href="#" className="text-xs text-slate-300 underline underline-offset-2">Cookie Policy</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;