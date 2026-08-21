"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText, X } from "lucide-react";

export default function CVViewer({ cvImage }: { cvImage: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="mt-8 border-t border-border pt-10">
      {!isOpen ? (
        <Button onClick={() => setIsOpen(true)} className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12">
          <FileText className="w-4 h-4 mr-2" />
          Lihat CV
        </Button>
      ) : (
        <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-heading font-medium flex items-center gap-2">
              <FileText className="w-6 h-6 text-accent" /> Curriculum Vitae
            </h3>
            <Button variant="outline" onClick={() => setIsOpen(false)} className="rounded-full hover:bg-red-50 hover:text-red-600 hover:border-red-200">
              <X className="w-4 h-4 mr-2" /> Tutup CV
            </Button>
          </div>
          <div 
            className="border border-border rounded-2xl overflow-hidden bg-neutral-50 p-2 shadow-inner cursor-pointer hover:shadow-md transition-shadow group relative"
            onClick={() => setIsModalOpen(true)}
            title="Klik untuk melihat ukuran penuh"
          >
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center pointer-events-none">
               <span className="bg-black/70 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm shadow-xl">Klik untuk perbesar</span>
            </div>
            <img src={cvImage} alt="CV" className="w-full h-auto object-contain rounded-xl" />
          </div>
        </div>
      )}

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:bg-white/20 rounded-full z-[110]"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(false);
            }}
          >
            <X className="w-8 h-8" />
          </Button>
          <img 
            src={cvImage} 
            alt="CV Full Size" 
            className="w-auto h-auto max-w-[90vw] max-h-[85vh] object-contain shadow-2xl rounded bg-white" 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
