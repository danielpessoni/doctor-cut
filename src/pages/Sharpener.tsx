import { Slider } from "../components/Slider"
import { Button } from "../components/shared/Button"
import heroBackground from "../assets/capa.png"
import logoDoctorCut from "../../public/logo-doctorcut.png"
import certha from "../assets/maquina/certha.jpg"
import eixo from "../assets/maquina/eixo.jpg"
import { Carousel } from "../components/Carousel"

export const Sharpener = () => {
    const sharper = [
        {
            title: "Curso de Afiador",
            description: "Conheça uma profissão técnica e desenvolva habilidades para trabalhar com afiação profissional.",
            price: "R$ 12",
            image: logoDoctorCut
        },
        {
            title: "Máquina Certha",
            description: "Conheça uma opção de maquinário para estruturar sua oficina de afiação.",
            price: "R$ 20",
            image: certha
        },
        {
            title: "Kit Eixo Mancais, Suporte e Falanges",
            description: "Um conjunto alinhado e pronto para instalar, pensado para simplificar a montagem do seu equipamento.",
            price: "R$ 12",
            image: eixo
        }
    ]

    return (
        <section
            id="sharp"
            className="relative h-screen w-full flex flex-col justify-start overflow-y-auto bg-[#0A0A0A] px-3 pt-24 pb-24 md:justify-center md:overflow-hidden md:pt-20 md:pb-20"
        >
            <img
                src={heroBackground}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#0A0A0A] via-[#0A0A0A]/50 to-[#0A0A0A]/70" />
            <div className="absolute inset-0 bg-[#0A0A0A]/40" />

            <div className="relative z-10 max-w-360 mx-auto w-full px-2 sm:px-4 lg:px-8 mb-3">
                <div className="text-center">
                    <h2 className="text-white text-xl sm:text-2xl mb-2">Aprenda uma profissão técnica e construa novas possibilidades</h2>
                    <p className="mx-auto mb-4 max-w-2xl text-sm text-[#D1D1D1] sm:text-base">
                        Descubra como uma habilidade manual pode se tornar uma nova profissão. Conheça o curso e os equipamentos para começar com conhecimento técnico e responsabilidade.
                    </p>
                </div>

                <div className="hidden md:grid grid-cols-3 gap-2 sm:gap-5">
                    {sharper.map((service, index) => (
                        <Slider
                            key={index}
                            title={service.title}
                            description={service.description}
                            // price={service.price}
                            image={service.image}
                            className="h-[50dvh]"
                        />
                    ))}
                </div>
                <div className="md:hidden">
                    <Carousel loop={true}>
                        {sharper.map((service, index) => (
                            <Slider
                                key={index}
                                title={service.title}
                                description={service.description}
                                // price={service.price}
                                image={service.image}
                                className="h-[34dvh] min-[380px]:h-[32dvh] sm:h-[40dvh] [&>div>img]:h-[40%]! [&_h3]:text-base! [&_p]:text-sm! max-[379px]:[&>div>img]:h-[30%]! max-[379px]:[&_h3]:text-base! max-[379px]:[&_p]:text-sm! sm:[&>div>img]:h-[35%]! sm:[&_h3]:text-lg! sm:[&_p]:text-base! md:[&>div>img]:h-[30%]! md:[&_h3]:text-base! md:[&_p]:text-sm!"
                            />
                        ))}
                    </Carousel>
                    
                </div>
            </div>


                <div className="relative z-10 flex justify-center pt-3 max-[379px]:-mt-2 max-[379px]:pt-0">
                    <Button
                        variant="primary"
                        className="max-[379px]:px-2! max-[379px]:py-1! max-[379px]:text-xs!"
                        onClick={() => window.open('https://wa.me/5511930012717', '_blank')}
                    >
                        Quero conhecer o curso e os equipamentos
                    </Button>
                </div>

        </section>
    )
}