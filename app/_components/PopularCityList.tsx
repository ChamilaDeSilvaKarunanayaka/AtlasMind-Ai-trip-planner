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
    category: "Bali, Indonesia",
    title: "Tropical Paradise – Beaches, Temples & Sunset Views",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "London, United Kingdom",
    title: "Royal Adventures – Big Ben, London Eye & Buckingham Palace",
    src: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=2000&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Kyoto, Japan",
    title: "Cultural Escape – Shrines, Gardens & Traditional Streets",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Santorini, Greece",
    title: "Blue Domes & Sunsets – Discover the Beauty of the Aegean",
    src: "https://images.unsplash.com/photo-1505731132164-cca9a43d7608?q=80&w=2000&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Cappadocia, Turkey",
    title: "Hot Air Balloons & Fairy Chimneys – A Dreamlike Adventure",
    src: "https://images.unsplash.com/photo-1549887534-3db1bd59dcca?q=80&w=2000&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Maldives",
    title: "Overwater Villas – Crystal Waters & Endless Relaxation",
    src: "https://images.unsplash.com/photo-1501117716987-c8e2a9ce6cf8?q=80&w=2000&auto=format&fit=crop",
    content: <DummyContent />,
  },
];


