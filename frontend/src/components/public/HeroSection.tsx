"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import BookingBar from "./BookingBar";

const SLIDES = [
  {
    id: 1,
    image: "/hero.png",
    fallback: "/hero.png",
    word: "BOUTIQUE",
    caption: "A tranquil sanctuary nestled at the foothills of Dharan",
  },
  {
    id: 2,
    image: "/hero-2.png",
    fallback:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&auto=format&fit=crop&q=85",
    word: "HORIZONS",
    caption: "Panoramic vistas of Bhedetar and eastern mountain ridges",
  },
  {
    id: 3,
    image: "/hero-3.png",
    fallback:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&auto=format&fit=crop&q=85",
    word: "SANCTUARY",
    caption: "Infinity swimming pool reflecting the mountain sky",
  },
  {
    id: 4,
    image: "/hero-4.png",
    fallback:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&auto=format&fit=crop&q=85",
    word: "ELEGANCE",
    caption: "Thoughtfully crafted suites with local craftsmanship",
  },
  {
    id: 5,
    image: "/hero-5.png",
    fallback:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&auto=format&fit=crop&q=85",
    word: "RETREAT",
    caption: "Authentic eastern Nepali dining under the evening stars",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  // Automatic slideshow cycle (5.5 seconds)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5500);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const activeSlideData = SLIDES[currentSlide];

  return (
    <section
      className="relative w-full h-screen min-h-[640px] max-h-[1080px] bg-[#092328] text-[#F5F5F1] overflow-hidden select-none flex flex-col justify-between"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 5 BACKGROUND SLIDES WITH KEN BURNS & CROSSFADE */}
      <div className="absolute inset-0 z-0">
        {SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlide;
          const imgSrc = imageErrors[idx] ? slide.fallback : slide.image;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={imgSrc}
                alt={slide.word}
                fill
                priority={idx === 0}
                onError={() => handleImageError(idx)}
                className={`object-cover object-center transition-transform duration-[7000ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
                sizes="100vw"
              />
              {/* NATURAL VIGNETTE: DEEP PINE BASE #092328 */}
              <div className="absolute inset-0 bg-[#092328]/45" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#092328] via-[#092328]/30 to-black/40" />
            </div>
          );
        })}
      </div>

      {/* TOP HEADER: BRAND, CAROUSEL DOTS, STRATEGIC NON-WORKING CTAS */}
      <header className="relative z-30 w-full px-6 sm:px-12 lg:px-16 pt-7 pb-4 flex items-center justify-between">
        
        {/* LEFT: HOTEL BOUTIQUE BRAND & SOCIAL ICONS */}
        <div className="flex items-center gap-6">
          <span className="font-semibold text-xs sm:text-sm tracking-[0.28em] uppercase text-[#F5F5F1] cursor-default">
            HOTEL BOUTIQUE
          </span>

          {/* ACTUAL SOCIAL MEDIA ICONS (CLEAN VECTOR SVGS IN OFF-WHITE) */}
          <div className="hidden sm:flex items-center gap-3.5 pl-4 border-l border-white/20">
            {/* Instagram */}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              aria-label="Instagram"
              className="text-[#F5F5F1]/70 hover:text-[#F5F5F1] transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.449-1.44z" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              aria-label="Facebook"
              className="text-[#F5F5F1]/70 hover:text-[#F5F5F1] transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z" />
              </svg>
            </a>
            {/* WhatsApp */}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              aria-label="WhatsApp"
              className="text-[#F5F5F1]/70 hover:text-[#F5F5F1] transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </a>
          </div>
        </div>

        {/* CENTER: 5 CAROUSEL PAGINATION DOTS (MATCHING REFERENCE) */}
        <div className="flex items-center gap-2 bg-[#092328]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
          {SLIDES.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentSlide(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`rounded-full transition-all duration-300 ${
                dotIdx === currentSlide
                  ? "w-6 h-1.5 bg-[#F5F5F1]"
                  : "w-1.5 h-1.5 bg-[#F5F5F1]/30 hover:bg-[#F5F5F1]/60"
              }`}
            />
          ))}
        </div>

        {/* RIGHT: STRATEGIC NON-WORKING CTA "GET IN TOUCH" IN OFF-WHITE */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="text-xs font-semibold tracking-[0.22em] uppercase text-[#092328] bg-[#F5F5F1] hover:bg-[#EAEAE4] transition-all px-5 py-2.5 rounded-full border border-[#E5E5DF] shadow-md"
          >
            GET IN TOUCH
          </a>
        </div>
      </header>

      {/* LOWER HALF: MONUMENTAL TYPOGRAPHY + INTEGRATED FLOATING OFF-WHITE BOOKING BAR */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-end pb-8 sm:pb-12 text-center px-4">
        
        {/* SLIDE CAPTION */}
        <p className="text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-[#F5F5F1]/90 mb-2 drop-shadow-md">
          {activeSlideData.caption}
        </p>

        {/* MONUMENTAL TITLE OVER THE LANDSCAPE */}
        <h1 className="text-[15vw] sm:text-[14vw] lg:text-[13.5vw] font-normal tracking-[-0.02em] text-[#F5F5F1] uppercase leading-[0.85] font-sans drop-shadow-[0_12px_30px_rgba(0,0,0,0.8)] select-none">
          {activeSlideData.word}
        </h1>

        {/* LOCATION FOOTNOTE */}
        <div className="flex items-center gap-3 my-4 text-[10px] sm:text-xs tracking-[0.28em] uppercase text-[#F5F5F1]/80 font-medium">
          <span>Dharan Hills</span>
          <span className="w-1 h-1 rounded-full bg-[#8BBB92]" />
          <span>Koshi Province</span>
          <span className="w-1 h-1 rounded-full bg-[#8BBB92]" />
          <span>Nepal</span>
        </div>

        {/* FLOATING WARM OFF-WHITE BOOKING BAR DOCKED IN LOWER HALF */}
        <div className="w-full mt-2">
          <BookingBar />
        </div>
      </div>
    </section>
  );
}
