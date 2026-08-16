import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/data/store";

/**
 * Full-width poster slider for the homepage hero.
 * Auto-advances every 6s, pauses on hover/focus, supports arrows + dots.
 */
export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = heroSlides.length;
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number) => setIndex(((next % count) + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => setIndex((i) => (i + 1) % count), 6000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, count]);

  return (
    <section
      className="relative overflow-hidden bg-background"
      aria-roledescription="carousel"
      aria-label="Featured collections"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative h-[78vh] min-h-[440px] w-full sm:h-[86vh]">
        {heroSlides.map((slide, i) => {
          const active = i === index;
          return (
            <div
              key={slide.id}
              aria-hidden={!active}
              className={`absolute inset-0 transition-opacity duration-[900ms] ease-out ${
                active ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                width={1600}
                height={1008}
                loading={i === 0 ? "eager" : "lazy"}
                className={`h-full w-full object-cover transition-transform duration-[7000ms] ease-out ${
                  active ? "scale-105" : "scale-100"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/10 sm:to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
                  <div
                    className={`max-w-xl transition-all duration-700 ${
                      active ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                    }`}
                  >
                    <p className="eyebrow text-accent">{slide.eyebrow}</p>
                    <h1 className="mt-4 text-5xl leading-[1.03] text-foreground sm:text-6xl lg:text-7xl">
                      {slide.title}
                    </h1>
                    <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {slide.subtitle}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link
                        to="/shop/$category"
                        params={{ category: slide.ctaCategory ?? "gold" }}
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:shadow-lift"
                      >
                        {slide.ctaLabel}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <Link
                        to="/shop"
                        className="inline-flex items-center rounded-full border border-border px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:border-accent"
                      >
                        All bracelets
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Arrows */}
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-border bg-card/70 text-foreground backdrop-blur transition-colors hover:bg-card sm:left-6"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-border bg-card/70 text-foreground backdrop-blur transition-colors hover:bg-card sm:right-6"
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-10 bg-accent" : "w-4 bg-foreground/30 hover:bg-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
