import { Slider } from "../components/Slider"
import { Button } from "../components/shared/Button"
import heroBackground from "../assets/capa.png"
import { Carousel } from "../components/Carousel"

export const Services = () => {
    const generalServices = [
        {
            title: "Alicate de Cutícula",
            description: "Mais precisão no corte e controle para cuidar das cutículas durante o atendimento.",
            price: "R$ 15"
        },
        {
            title: "Alicate de Unha",
            description: "Afiação para recuperar o desempenho do seu instrumento de trabalho.",
            price: "R$ 20"
        },
        {
            title: "Espátula/Cureta/Bisturi",
            description: "Manutenção especializada para instrumentos usados em diferentes procedimentos.",
            price: "R$ 12"
        }
    ]

    const staleksServices = [
        {
            title: "Alicate de Cutícula",
            description: "Cuidado especializado para seu alicate Staleks manter o desempenho no atendimento.",
            price: "R$ 35"
        },
        {
            title: "Alicate de Unha",
            description: "Afiação para instrumentos Staleks, com atenção ao uso profissional.",
            price: "R$ 50"
        },
        {
            title: "Espátula/Cureta/Bisturi",
            description: "Manutenção para seus instrumentos Staleks de trabalho.",
            price: "R$ 20"
        }
    ]

    return (
        <section
            id="services"
            className="relative h-screen w-full flex flex-col justify-start overflow-y-auto bg-[#0A0A0A] px-3 pt-20 pb-24 md:justify-center md:overflow-hidden"
        >
            <img
                src={heroBackground}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#0A0A0A] via-[#0A0A0A]/50 to-[#0A0A0A]/70" />
            <div className="absolute inset-0 bg-[#0A0A0A]/40" />

            <div className="relative z-10 max-w-360 mx-auto w-full px-2 sm:px-4 lg:px-8 mb-1 md:mb-20">
                <div className="text-center">
                    <h2 className="text-white text-xl sm:text-2xl mb-1 md:mb-8">Afiação para seus instrumentos</h2>
                </div>

                <div className="hidden md:grid grid-cols-3 gap-3 sm:gap-4">
                    {generalServices.map((service, index) => (
                        <Slider
                            key={index}
                            title={service.title}
                            description={service.description}
                            price={service.price}
                            className="h-[18dvh]"
                        />
                    ))}
                </div>
                <div className="md:hidden">
                    <Carousel loop={true}>
                        {generalServices.map((service, index) => (
                            <Slider
                                key={index}
                                title={service.title}
                                description={service.description}
                                price={service.price}
                                className="h-[18dvh]"
                            />
                        ))}
                    </Carousel>
                </div>
            </div>


            <div className="relative z-10 max-w-360 mx-auto w-full px-2 sm:px-4 lg:px-8">
                <div className="text-center">
                    <h2 className="text-white text-xl sm:text-2xl mb-1 md:mb-5">Afiação especializada Staleks</h2>
                </div>

                <div className="hidden md:grid grid-cols-3 gap-3 sm:gap-4">
                    {staleksServices.map((service, index) => (
                        <Slider
                            key={index}
                            title={service.title}
                            description={service.description}
                            price={service.price}
                            className="h-[18dvh]"
                        />
                    ))}
                </div>
                <div className="md:hidden">
                    <Carousel loop={true}>
                        {staleksServices.map((service, index) => (
                            <Slider
                                key={index}
                                title={service.title}
                                description={service.description}
                                price={service.price}
                                className="h-[18dvh]"
                            />
                        ))}
                    </Carousel>
                </div>


                <div className="relative z-10 flex justify-center pt-1 md:pt-3">
                    <Button
                        variant="primary"
                        onClick={() => window.open('https://wa.me/5511930012717', '_blank')}
                    >
                        Tire suas dúvidas pelo WhatsApp
                    </Button>
                </div>

            </div>
        </section>
    )
}