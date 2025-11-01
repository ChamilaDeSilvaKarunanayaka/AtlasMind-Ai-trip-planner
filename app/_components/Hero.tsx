import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Globe, Globe2, Landmark, Plane, Send } from "lucide-react";
import React from "react";

const suggestions = [
  {
    title: "Create New Trip",
    icon: <Globe2 className="text-blue-400 h-5 w-5" />,
  },
  {
    title: "Inspire Me where to go",
    icon: <Plane className="text-green-400 h-5 w-5" />,
  },
  {
    title: "Discover Hidden Gems",
    icon: <Landmark className="text-orange-400 h-5 w-5" />,
  },
  {
    title: "Adventure Destination",
    icon: <Globe2 className="text-yellow-400 h-5 w-5" />,
  },
];

function Hero() {
  return (
    <div className="mt-24 flex flex-col items-center px-4">
      {/* Content */}
      <div className="max-w-4xl w-full text-center space-y-6">
        <h1 className="text-xl md:text-5xl font-bold">
          Hey, I am your personal{" "}
          <span className="text-primary">AI trip planner</span>
        </h1>
        <p className="text-lg">
          Tell me what you want, and I'll handle the rest: Flights, Hotels, trip
          Planner - all in seconds
        </p>
      </div>

      {/* Input Box */}
      <div className="mt-6 w-full flex justify-center ">
        <div className="relative w-full max-w-2xl">
          <Textarea
            placeholder="Create a trip for Paris from New"
            className="w-full max-w-2xl h-24 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-700 focus:border-blue-700 text-gray-700 text-base p-4 resize-none"
          />
          <Button size={"icon"} className="absolute bottom-6 right-6">
            <Send className="h-4 w-4 text-white" />
          </Button>
        </div>
      </div>

      {/* Suggestiopn list */}

      <div className="flex gap-5 mt-8">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="flex items-center gap-2 border rounded-full p-2 
            cursor-pointer hover:bg-primary hover:text-white transition"
          >
            {suggestion.icon}
            <h2 className="text-xs">{suggestion.title}</h2>
          </div>
        ))}
      </div>

      {/* Video section */}
    </div>
  );
}

export default Hero;
