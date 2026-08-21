"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ProjectGalleryProps {
  projectName: string;
  images: string[];
}

export default function ProjectGallery({ projectName, images }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const mainImage = images[0];
  const smallImages = images.slice(1, 5); // Take up to 4 small images
  const remainingCount = images.length - 5;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <div className="container mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 md:gap-4">
          {/* Main Photo */}
          <div 
            className="lg:col-span-8 h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl cursor-pointer group relative"
            onClick={() => setSelectedIndex(0)}
          >
            <img 
              src={mainImage} 
              alt={projectName} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>
          
          {/* 4 Small Photos */}
          <div className="lg:col-span-4 grid grid-cols-2 grid-rows-2 gap-2 md:gap-4 h-[300px] md:h-[500px] lg:h-[600px]">
            {smallImages.map((img, index) => {
              const isLast = index === 3;
              const hasMore = remainingCount > 0;
              const globalIndex = index + 1;

              return (
                <div 
                  key={index} 
                  className="overflow-hidden rounded-2xl h-full cursor-pointer group relative"
                  onClick={() => setSelectedIndex(globalIndex)}
                >
                  <img 
                    src={img} 
                    alt={`${projectName} - view ${index + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  
                  {isLast && hasMore ? (
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center group-hover:bg-black/50 transition-colors">
                      <span className="text-white font-medium text-lg md:text-xl tracking-wider">
                        +{remainingCount} Foto
                      </span>
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox / Modal (Not full screen image, but large centered box) */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-12 lg:p-24" onClick={() => setSelectedIndex(null)}>
          
          <div 
            className="relative w-full max-w-6xl aspect-video md:aspect-[16/9] bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <button 
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors"
              onClick={() => setSelectedIndex(null)}
            >
              <X className="w-5 h-5" />
            </button>

            <img 
              src={images[selectedIndex]} 
              alt={`${projectName} - gallery image ${selectedIndex + 1}`}
              className="w-full h-full object-contain bg-black"
            />

            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-colors"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-colors"
              onClick={handleNext}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-1.5 rounded-full text-xs tracking-widest backdrop-blur-md">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>

        </div>
      )}
    </>
  );
}
