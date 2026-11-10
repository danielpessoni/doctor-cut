interface SliderProps {
    title: string,
    description: string,
    price?: string,
    image?: string
    className?: string
}

export const Slider = ({ image, title, description, price, className = "" }: SliderProps) => {
    return (
        <div className={`${className} max-h-full overflow-hidden md:h-auto md:max-h-none bg-[#1A1A1A] border border-[rgba(212,175,55,0.2)] rounded-lg p-2 sm:p-4 hover:border-yellow-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] group`}>

            <div className="flex h-full min-h-0 flex-col gap-1 sm:gap-3">
                {image && (
                    <img
                        src={image}
                        alt={title}
                        className="h-[30%] sm:h-60 w-full shrink-0 rounded object-contain"
                    />
                )}

                <div className="flex min-h-0 flex-1 flex-col items-center gap-2 overflow-hidden text-center">
                    <h3 className="line-clamp-2 text-white text-sm sm:text-base">{title}</h3>
                    <p className="line-clamp-4 text-[#A0A0A0] text-xs sm:text-sm">{description}</p>
                </div>

                <div className="mt-auto shrink-0 pt-1 sm:pt-2 border-t border-[rgba(212,175,55,0.1)] text-center">
                    <span className="text-yellow-primary">{price}</span>
                </div>

            </div>
        </div>
    )
}