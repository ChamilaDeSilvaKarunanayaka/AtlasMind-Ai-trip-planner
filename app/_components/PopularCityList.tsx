"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function PopularCityList() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Popular Cities to Visit
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};


const data = [
  {
    category: "Paris, France",
    title: "The City of Love – Eiffel Tower, Gardens & Sunset Views",
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2000&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Bali, Indonesia",
    title: "Island Paradise – Waterfalls, Temples & Golden Beaches",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Santorini, Greece",
    title: "Sunset Magic – White Domes & Blue Aegean Horizons",
    src: "https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?q=80&w=2000&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Kyoto, Japan",
    title: "Cultural Serenity – Cherry Blossoms & Ancient Temples",
    src: "https://images.unsplash.com/photo-1554797589-7241bb691973?q=80&w=2000&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Swiss Alps, Switzerland",
    title: "Snow Peaks & Lakes – Nature’s Winter Wonderland",
    src: "https://images.unsplash.com/photo-1508264165352-258859e62245?q=80&w=2000&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Maldives",
    title: "Turquoise Dreams – Overwater Villas & Crystal Lagoons",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Dubai, UAE",
    title: "Golden Sands – Desert Dunes & Skyscraper Skylines",
    src: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?q=80&w=2000&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Banff, Canada",
    title: "Mountain Majesty – Emerald Lakes & Forest Trails",
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop",
    content: <DummyContent />,
  },
];





