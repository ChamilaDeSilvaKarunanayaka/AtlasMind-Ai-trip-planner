import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import React from "react";

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
        <Button size={"icon"} 
        className="absolute bottom-6 right-6">
          <Send className="h-4 w-4 text-white" />
        </Button>
        </div>
      </div>

      {/* Suggestiopn list */}

      {/* Video section */}
    </div>
  );
}

export default Hero;
