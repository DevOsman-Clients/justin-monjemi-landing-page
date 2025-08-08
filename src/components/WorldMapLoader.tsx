"use client";

import { useEffect, useState } from "react";

export default function WorldMapLoader() {
  const [showMap, setShowMap] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(false);

  useEffect(() => {
    // Check if this is the first load
    const hasVisited = localStorage.getItem("hasVisitedSite");
    
    if (!hasVisited) {
      setIsFirstLoad(true);
      setShowMap(true);
      localStorage.setItem("hasVisitedSite", "true");
      
      // Hide the map after animation completes
      const timer = setTimeout(() => {
        setShowMap(false);
      }, 4000); // 4 seconds total animation time
      
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isFirstLoad || !showMap) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-[#032445] flex items-center justify-center">
      {/* World Map Animation */}
      <div className="relative w-full h-full overflow-hidden">
        {/* Animated world map background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#032445] via-[#0a3a5c] to-[#032445]">
          {/* Animated dots representing world map */}
          <div className="absolute inset-0 opacity-20">
            {/* Europe/UK area - more concentrated dots */}
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {Array.from({ length: 50 }).map((_, i) => (
                <div
                  key={`europe-${i}`}
                  className="absolute w-1 h-1 bg-[#D29D33] rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 200 - 100}px`,
                    top: `${Math.random() * 100 - 50}px`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
            
            {/* Other continents - scattered dots */}
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={`world-${i}`}
                className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Zoom effect to London */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* London marker */}
            <div className="w-4 h-4 bg-[#D29D33] rounded-full animate-ping absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            <div className="w-2 h-2 bg-[#D29D33] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            
            {/* Zoom circles */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-32 h-32 border-2 border-[#D29D33] rounded-full animate-ping opacity-75" />
              <div className="w-64 h-64 border border-[#D29D33] rounded-full animate-ping opacity-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              <div className="w-96 h-96 border border-[#D29D33] rounded-full animate-ping opacity-25 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>

        {/* Loading text */}
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-white text-2xl font-bold mb-4 animate-pulse">
            Justin Monajemi
          </div>
          <div className="text-[#D29D33] text-lg font-semibold animate-pulse">
            British Educational Consultancy
          </div>
          <div className="text-white/70 text-sm mt-4 animate-pulse">
            Connecting Dreams to Destinations
          </div>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-64">
          <div className="w-full bg-white/20 rounded-full h-1">
            <div className="bg-[#D29D33] h-1 rounded-full animate-pulse" style={{
              animation: 'loadingProgress 4s ease-in-out forwards'
            }} />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes loadingProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}