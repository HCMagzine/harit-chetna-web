"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const slides = [
  { url: "/slider-1.jpg", theme: "text-white", position: "center" }, 
  { url: "/slider-2.jpg", theme: "text-amber-200", position: "center top" }, 
  { url: "/slider-3.jpg", theme: "text-emerald-200", position: "center top" }, 
  { url: "/slider-4.jpg", theme: "text-blue-100", position: "center" }, 
  { url: "/slider-5.jpg", theme: "text-orange-100", position: "center 30%" }, 
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative text-white py-32 px-4 text-center overflow-hidden border-b-8 border-emerald-700 min-h-[85vh] flex items-center justify-center perspective-[1000px]">
      {/* Background Slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform-gpu
            ${index === currentSlide ? "opacity-100 scale-105 z-0" : "opacity-0 scale-100 -z-10"}
          `}
          style={{
            backgroundImage: `url(${slide.url})`,
            backgroundSize: "cover",
            backgroundPosition: slide.position,
          }}
        >
          {/* Fallback pattern if image is missing until you put it in the public folder */}
          <div className="absolute inset-0 bg-emerald-950/40 mix-blend-overlay" />
        </div>
      ))}

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-emerald-950/60 to-emerald-950/90 z-0" />

      {/* Content */}
      <div className="container mx-auto relative z-10 flex flex-col items-center">
        <Image
          src="/logo.png"
          alt="Harit Chetna Logo"
          width={507}
          height={302}
          className="h-32 md:h-40 w-auto mb-6 animate-in zoom-in duration-700 drop-shadow-2xl"
        />

        {/* ISSN Space */}
        <div className="mb-4 bg-emerald-800/80 border border-emerald-500 text-emerald-100 text-sm font-semibold px-4 py-1.5 rounded-full backdrop-blur-sm shadow-lg animate-in fade-in duration-700">
          ISSN No: <span className="tracking-widest">XXXX-XXXX</span>
        </div>

        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight mb-2 transition-colors duration-1000 ${slides[currentSlide].theme} drop-shadow-xl`}>
          Harit Chetna 🌾
        </h1>
        {/* Smaller Hindi Font */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 text-emerald-300 drop-shadow-md">
          हरित चेतना
        </h2>

        <p className="text-xl md:text-3xl font-light mb-10 max-w-3xl mx-auto opacity-95 text-emerald-50 drop-shadow-md">
          &ldquo;Cultivating Knowledge, Empowering Agriculture&rdquo; 🚜🌱
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-md mx-auto sm:max-w-none">
          <Link href="/submit-contact" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="bg-emerald-500 text-white hover:bg-emerald-600 rounded-full px-8 text-lg w-full shadow-emerald-500/30 shadow-xl hover:scale-105 transition-transform"
            >
              Submit Article 📝
            </Button>
          </Link>
          <Link href="/archives" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="bg-white text-emerald-900 border-2 border-white hover:bg-transparent hover:text-white backdrop-blur-md rounded-full px-8 text-lg w-full shadow-xl hover:scale-105 transition-all duration-300"
            >
              Explore Issues 🔍
            </Button>
          </Link>
        </div>
      </div>
      
      {/* 3D styling elements for background */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-emerald-950 to-transparent z-0"></div>
    </section>
  );
}
