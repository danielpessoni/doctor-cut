import { MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';


export const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 z-50 flex flex-row bg-[#0A0A0A] border-t border-[rgba(212,175,55,0.2)] py-4 md:py-5">
            <div className="w-full max-w-361 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* copyright */}
                    <div className="w-full text-center text-[#A0A0A0] text-sm md:w-auto md:text-left">
                        &copy; {new Date().getFullYear()} Doctor Cut. Todos os direitos reservados.
                    </div>

                    {/* social links  */}

                    <ul className="flex flex-row items-center gap-6">
                        <li>
                            <a
                                href="https://www.instagram.com/doctorcutoficial/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="flex text-[#A0A0A0] hover:text-yellow-primary transition-colors duration-300"
                            >
                                <FaInstagram size={20} />
                                <span className="hidden text-sm ml-2 md:inline">Instagram</span>
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.facebook.com/Comoafiaralicates/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="flex text-[#A0A0A0] hover:text-yellow-primary transition-colors duration-300"
                            >
                                <FaFacebook size={20} />
                                <span className="hidden text-sm ml-2 md:inline">Facebook</span>
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.youtube.com/@doctorcutoficial/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube"
                                className="flex text-[#A0A0A0] hover:text-yellow-primary transition-colors duration-300"
                            >
                                <FaYoutube size={20} />
                                <span className="hidden text-sm ml-2 md:inline">YouTube</span>
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://wa.me/5511930012717"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="flex text-[#A0A0A0] hover:text-yellow-primary transition-colors duration-300"
                            >
                                <FaWhatsapp size={20} />
                                <span className="hidden text-sm ml-2 md:inline">WhatsApp</span>
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.google.com/maps/place/Afia%C3%A7%C3%A3o+Doctor+Cut+Mooca/@-23.5550053,-46.607099,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5937da16fb95:0x948a46b275eaaff3!8m2!3d-23.5550102!4d-46.6045241!16s%2Fg%2F11f32wyyq5?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex text-[#A0A0A0] hover:text-yellow-primary transition-colors duration-300"
                            >
                                <MapPin size={20} />
                                <span className="text-sm ml-2">Localização</span>
                            </a>
                        </li>


                    </ul>
                </div>
            </div>

        </footer>
    );
};