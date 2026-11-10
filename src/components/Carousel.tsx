import { ChevronLeft, ChevronRight } from "lucide-react";
import { Children, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface CarouselProps {
    children: ReactNode[];
    initialIndex?: number;
    loop?: boolean;
    slideClassName?: string;
}

export const Carousel = ({
    children,
    initialIndex = 0,
    loop = true,
    slideClassName = "w-[70vw]"
}: CarouselProps) => {
    const items = Children.toArray(children) as ReactNode[];
    const viewportRef = useRef<HTMLDivElement>(null);
    const animationFrameRef = useRef<number | null>(null);
    const scrollEndTimeoutRef = useRef<number | null>(null);
    const safeInitialIndex = Math.min(Math.max(initialIndex, 0), Math.max(items.length - 1, 0));
    const [activeIndex, setActiveIndex] = useState(safeInitialIndex);

    const isLoop = loop && items.length > 1;
    const displayItems = isLoop ? [items[items.length - 1], ...items, items[0]] : items;

    const scrollToIndex = (index: number, smooth = true) => {
        const viewport = viewportRef.current;
        const card = viewport?.children[index] as HTMLElement | undefined;

        if (!viewport || !card) return;

        viewport.scrollTo({
            left: card.offsetLeft - (viewport.clientWidth - card.clientWidth) / 2,
            behavior: smooth ? "smooth" : "auto"
        });
    };

    const getClosestDisplayIndex = () => {
        const viewport = viewportRef.current;
        if (!viewport) return 0;

        const center = viewport.scrollLeft + viewport.clientWidth / 2;
        let closestIndex = 0;
        let closestDistance = Number.POSITIVE_INFINITY;

        Array.from(viewport.children).forEach((element, index) => {
            const card = element as HTMLElement;
            const cardCenter = card.offsetLeft + card.clientWidth / 2;
            const distance = Math.abs(center - cardCenter);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });

        return closestIndex;
    };

    const handleScroll = () => {
        if (animationFrameRef.current !== null) {
            cancelAnimationFrame(animationFrameRef.current);
        }

        if (scrollEndTimeoutRef.current !== null) {
            window.clearTimeout(scrollEndTimeoutRef.current);
        }

        scrollEndTimeoutRef.current = window.setTimeout(() => {
            const viewport = viewportRef.current;
            if (!viewport) return;

            const closestIndex = getClosestDisplayIndex();

            if (!isLoop) {
                setActiveIndex(closestIndex);
                return;
            }

            if (closestIndex === 0) {
                setActiveIndex(items.length - 1);
                scrollToIndex(items.length, false);
            } else if (closestIndex === displayItems.length - 1) {
                setActiveIndex(0);
                scrollToIndex(1, false);
            } else {
                setActiveIndex(closestIndex - 1);
            }
        }, 120);
    };

    const move = (direction: number) => {
        if (!isLoop) {
            const nextIndex = Math.min(Math.max(activeIndex + direction, 0), items.length - 1);
            setActiveIndex(nextIndex);
            scrollToIndex(nextIndex + (isLoop ? 1 : 0));
            return;
        }

        const nextIndex = (activeIndex + direction + items.length) % items.length;
        setActiveIndex(nextIndex);

        if (direction > 0 && activeIndex === items.length - 1) {
            scrollToIndex(displayItems.length - 1);
        } else if (direction < 0 && activeIndex === 0) {
            scrollToIndex(0);
        } else {
            scrollToIndex(nextIndex + 1);
        }
    };

    const selectCard = (index: number) => {
        setActiveIndex(index);
        scrollToIndex(index + (isLoop ? 1 : 0));
    };

    useEffect(() => {
        scrollToIndex(safeInitialIndex + (isLoop ? 1 : 0), false);

        return () => {
            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            if (scrollEndTimeoutRef.current !== null) {
                window.clearTimeout(scrollEndTimeoutRef.current);
            }
        };
    }, []);

    return (
        <div>
            <div
                ref={viewportRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto snap-x snap-mandatory px-[15vw] gap-2 md:gap-3 scrollbar-none [&::-webkit-scrollbar]:hidden"
            >
                {displayItems.map((item, index) => (
                    <div key={index} className={`${slideClassName} shrink-0 snap-center`}>
                        {item}
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-center gap-2 md:gap-4 mt-1 md:mt-3">
                <div className="w-7.5 shrink-0">
                    {(isLoop || activeIndex > 0) && (
                        <button
                            type="button"
                            onClick={() => move(-1)}
                            aria-label="Card anterior"
                            className="text-white p-1"
                        >
                            <ChevronLeft size={22} />
                        </button>
                    )}
                </div>

                <div className="flex items-center gap-1 md:gap-2">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => selectCard(index)}
                            aria-label={`Mostrar card ${index + 1}`}
                            className={`h-1.5 md:h-2 rounded-full transition-all ${index === activeIndex ? "w-4 md:w-6 bg-yellow-primary" : "w-1.5 md:w-2 bg-white/50"
                                }`}
                        />
                    ))}
                </div>

                <div className="w-7.5 shrink-0">
                    {(isLoop || activeIndex < items.length - 1) && (
                        <button
                            type="button"
                            onClick={() => move(1)}
                            aria-label="Próximo card"
                            className="text-white p-1"
                        >
                            <ChevronRight size={22} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
