import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

/**
 * @typedef {Object} Slide
 * @property {string} before
 * @property {string} after
 * @property {string} quote
 * @property {string} name
 * @property {string} result
 */

/**
 * @param {{ slides: Slide[] }} props
 */
export default function TransformationSlider({ slides }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="min-w-0 flex-[0_0_100%] px-1">
              <div className="mx-auto max-w-4xl">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={slide.before}
                      alt={`${slide.name} before`}
                      className="aspect-[3/4] h-full w-full object-cover"
                    />
                    <p className="mt-2 text-center text-xs font-semibold uppercase tracking-wider text-white/50">
                      Before
                    </p>
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={slide.after}
                      alt={`${slide.name} after`}
                      className="aspect-[3/4] h-full w-full object-cover"
                    />
                    <p className="mt-2 text-center text-xs font-semibold uppercase tracking-wider text-primary">
                      After
                    </p>
                  </div>
                </div>
                <blockquote className="mt-8 text-center text-lg italic text-white/80 md:text-xl">
                  &ldquo;{slide.quote}&rdquo;
                </blockquote>
                <p className="mt-4 text-center font-semibold text-white">
                  {slide.name} &ndash; {slide.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={scrollPrev}
        className="absolute left-0 top-1/3 -translate-y-1/2 rounded-full border border-white/20 bg-dark/80 p-2 text-white transition-colors hover:border-primary hover:text-primary md:-left-12"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        type="button"
        onClick={scrollNext}
        className="absolute right-0 top-1/3 -translate-y-1/2 rounded-full border border-white/20 bg-dark/80 p-2 text-white transition-colors hover:border-primary hover:text-primary md:-right-12"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div className="mt-8 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => scrollTo(index)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              index === selectedIndex ? "bg-primary" : "bg-white/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
