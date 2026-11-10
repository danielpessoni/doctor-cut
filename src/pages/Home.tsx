import { Link } from "react-router-dom";
import heroBackground from "../assets/capa.png";
import { Button } from "../components/shared/Button";

export const Home = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <main
            id="hero"
            className="h-screen w-full flex items-center bg-[#0A0A0A] relative overflow-hidden">

            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBackground}
                    alt="Afiação de instrumentos profissionais"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-r from-[#0A0A0A] via-[#0A0A0A]/50 to-[#0A0A0A]/70">
                </div>
                <div className="absolute inset-0 bg-[#0A0A0A]/40">
                </div>
            </div>

            <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
                    {/* Text Content */}
                    <div className="flex flex-col gap-6 lg:gap-8">
                        <h1 className="text-white drop-shadow-lg text-[1.75rem] md:text-[2.5rem]">
                            Garanta o corte ideal que seus clientes exigem e evite o estresse de alicates que mastigam
                        </h1>

                        <p className="text-[#A0A0A0] text-[1.125rem] md:text-[1.5rem] max-w-xl drop-shadow-md">
                            Afiação especializada para manicures, pedicures e podólogos trabalharem com mais precisão, confiança e tranquilidade em cada atendimento.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                variant="primary"
                                onClick={() =>
                                    window.open("https://wa.me/5511930012717?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20afia%C3%A7%C3%A3o%20dos%20meus%20instrumentos.", "_blank")
                                }
                            >
                                Solicitar uma avaliação
                            </Button>
                            <Link to="services" className="w-full sm:w-auto">
                                <Button
                                    variant="secondary"
                                    className="w-full sm:w-auto"
                                    onClick={() => scrollToSection("services")}
                                >
                                    Conhecer os serviços
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
}