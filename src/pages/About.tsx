import heroBackground from "../assets/capa.png"
import authorizedMundial from "../assets/autorizado/autorizado-mundial.png"
import authorizedStaleks from "../assets/autorizado/autorizado-staleks.png"
import { Carousel } from "../components/Carousel"
import { Button } from "../components/shared/Button"

export const About = () => {
    const desktopTextFirst = (
        <>
            <span className="mb-4 block text-2xl font-semibold text-yellow-primary sm:text-3xl">
                Mais precisão no seu dia a dia
            </span>
            <span className="block">
                Quando o alicate puxa ou mastiga, o atendimento fica mais difícil. A afiação especializada do afiador autorizado Staleks e Mundial ajuda a recuperar o desempenho do instrumento para você trabalhar com mais controle.
            </span>
        </>
    )

    const desktopTextSecond = (
        <>
            <span className="mb-4 block text-2xl font-semibold text-yellow-primary sm:text-3xl">
                Confiança nos seus instrumentos
            </span>
            <span className="block">
                Seus instrumentos fazem parte da qualidade do seu trabalho. Conte com a Doctor Cut para cuidar da manutenção e preservar ferramentas importantes para a sua rotina profissional.
            </span>
        </>
    )

    const mobileText = (
        <div className="flex aspect-square h-auto w-full flex-col justify-center rounded-lg border border-yellow-primary/20 bg-[#1A1A1A]/95 px-5 text-center text-sm text-[#D1D1D1] sm:px-8 sm:text-base">
            <span className="mb-4 block text-2xl font-semibold text-yellow-primary sm:text-3xl">
                Seu trabalho merece instrumentos à altura
            </span>
            <span className="block">
                Afiação especializada do afiador autorizado Staleks e Mundial para ajudar você a trabalhar com mais precisão, controle e confiança em cada atendimento.
            </span>
        </div>
    )

    // Classes compartilhadas pelos cards e pelas imagens das certificações.
    const cardClassName =
        "aspect-square w-full overflow-hidden rounded-lg border border-yellow-primary/20 bg-[#1A1A1A] md:aspect-[5/3]"
    const textCardClassName =
        "about-text-card flex aspect-square min-h-0 min-w-0 items-center overflow-hidden rounded-lg border border-yellow-primary/20 bg-[#1A1A1A]/95 md:aspect-[5/3]"

    return (
        <section
            id="about"
            className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-[#0A0A0A] px-3 py-24"
        >
            {/* Imagem de fundo da página. */}
            <img
                src={heroBackground}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Sobreposições escurecem a imagem para melhorar o contraste do conteúdo. */}
            <div className="absolute inset-0 bg-linear-to-r from-[#0A0A0A] via-[#0A0A0A]/50 to-[#0A0A0A]/70" />
            <div className="absolute inset-0 bg-[#0A0A0A]/40" />

            <div className="about-grid-shell relative z-10 mx-auto w-full max-w-220 px-2 sm:px-4 lg:px-8">
                <h2 className="mb-5 text-center text-xl text-white sm:text-2xl">
                    Cuidado especializado para seus instrumentos
                </h2>

                {/* Layout desktop: grade 2x2 com textos e certificações alternados. */}
                <div className="hidden md:grid grid-cols-2 gap-4 lg:gap-6">
                    <div className={`${textCardClassName} p-5 text-sm leading-relaxed text-[#D1D1D1] lg:p-6 lg:text-base`}>
                        <div>{desktopTextFirst}</div>
                    </div>
                    <div className={cardClassName}>
                        <img
                            src={authorizedMundial}
                            alt="Certificação Mundial autorizada Doctor Cut"
                            className="h-full w-full object-contain"
                        />
                    </div>
                    <div className={cardClassName}>
                        <img
                            src={authorizedStaleks}
                            alt="Certificação Staleks autorizada Doctor Cut"
                            className="h-full w-full object-contain"
                        />
                    </div>
                    <div className={`${textCardClassName} p-5 text-sm leading-relaxed text-[#D1D1D1] lg:p-6 lg:text-base`}>
                        <div>{desktopTextSecond}</div>
                    </div>
                </div>

                {/* Layout mobile: as certificações e o texto são exibidos em um carrossel. */}
                <div className="md:hidden">
                    <Carousel initialIndex={1} loop={false} slideClassName="w-[64vw]">
                        <div className={cardClassName}>
                            <img
                                src={authorizedMundial}
                                alt="Certificação Mundial autorizada Doctor Cut"
                                className="h-full w-full object-contain"
                            />
                        </div>
                        {mobileText}
                        <div className={cardClassName}>
                            <img
                                src={authorizedStaleks}
                                alt="Certificação Staleks autorizada Doctor Cut"
                                className="h-full w-full object-contain"
                            />
                        </div>
                    </Carousel>
                </div>

                {/* Ação de contato disponível em todos os tamanhos de tela. */}
                <div className="relative z-10 mt-5 flex justify-center">
                    <Button
                        variant="primary"
                        onClick={() =>
                            window.open("https://wa.me/5511930012717", "_blank")
                        }
                    >
                        Falar sobre meus instrumentos
                    </Button>
                </div>
            </div>
        </section>
    )
}