import { useState } from "react";
import logoDoctorCut from '../../../public/logo-doctorcut.png'
import { Button } from "../shared/Button"
import { Link } from "react-router-dom";

export const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-black backdrop-blur-sm border-b border-[rgba(212,175,55,0.2)] z-50">
            <div className="flex justify-between items-center px-4 md:px-6 py-4">
                <Link to="/" className="flex items-center gap-2">
                    <img
                        src={logoDoctorCut}
                        alt="Logo Doctor Cut"
                        className="w-10 h-10 rounded object-cover" />
                    <span
                        className="text-white text-sm md:text-base">
                        Doctor Cut</span>
                </Link>

                {/* Menu Desktop */}
                <nav className="hidden lg:flex items-center">
                    <ul className="flex items-center gap-8">
                        <li>
                            <Link
                                to="/"
                                className="text-white hover:text-yellow-primary transition-colors duration-300 cursor-pointer"
                            >Início
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="services"
                                className="text-white hover:text-yellow-primary transition-colors duration-300"
                            >
                                Serviços
                            </Link>
                        </li>

                        <li>
                            <Link
                                className="text-white hover:text-yellow-primary transition-colors duration-300 cursor-pointer"
                                to="sharpener"
                            >Curso e Maquinário
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="about"
                                className="text-white hover:text-yellow-primary transition-colors duration-300"
                            >
                                Sobre
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="contact"
                                className="text-white hover:text-yellow-primary transition-colors duration-300 cursor-pointer"
                            >Contato
                            </Link>
                        </li>

                        <li>
                            <Button
                                variant="primary"
                                onClick={() => {
                                    window.open("https://wa.me/5511930012717", "_blank");
                                }}
                            >
                                Fale com a Doctor Cut
                            </Button>
                        </li>
                    </ul>
                </nav>

                {/* Botão Hamburguer Mobile */}

                <button
                    className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span
                        className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                    ></span>
                    <span
                        className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
                            }`}
                    ></span>
                    <span
                        className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                    ></span>
                </button>
            </div>

            {/* Menu Mobile */}
            <nav
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <ul className="flex flex-col px-4 pb-4 gap-4 bg-[#0A0A0A]">
                    <li className="text-white hover:text-yellow-primary transition-colors duration-300 cursor-pointer py-2 border-b border-[rgba(212,175,55,0.1)]">
                        <Link
                            to="/"
                            onClick={() => setIsMenuOpen(false)}
                            className="block w-full text-left text-white hover:text-yellow-primary transition-colors duration-300"
                        >
                            Início
                        </Link>
                    </li>

                    <li className="py-2 border-b border-[rgba(212,175,55,0.1)]">
                        <Link
                            to="/services"
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-white hover:text-yellow-primary transition-colors duration-300"
                        >
                            Serviços
                        </Link>
                    </li>

                    <li className="py-2 border-b border-[rgba(212,175,55,0.1)]">
                        <Link
                            to="/sharpener"
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-white hover:text-yellow-primary transition-colors duration-300"
                        >
                            Curso e Maquinário
                        </Link>
                    </li>

                    <li className="py-2 border-b border-[rgba(212,175,55,0.1)]">
                        <Link
                            to="/about"
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-white hover:text-yellow-primary transition-colors duration-300"
                        >
                            Sobre
                        </Link>
                    </li>

                    <li className="py-2 border-b border-[rgba(212,175,55,0.1)]">
                        <Link
                            to="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-white hover:text-yellow-primary transition-colors duration-300"
                        >
                            Contato
                        </Link>
                    </li>

                    <li className="pt-2">
                        <Button
                            variant="primary"
                            className="w-full"
                            onClick={() => {
                                window.open("https://wa.me/5511930012717", "_blank");
                            }}
                        >
                            Fale com a Doctor Cut
                        </Button>
                    </li>
                </ul>
            </nav>

        </header >
    )
}