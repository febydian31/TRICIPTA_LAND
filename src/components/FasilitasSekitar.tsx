"use client";

import { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";

const fasilitasData = {
  "Sekolah": [
    { name: "SDN 01 Percontohan", distance: "1.2 km (5mnt)", position: { top: "25%", left: "20%" }, color: "bg-yellow-400", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop" },
    { name: "SMP Internasional", distance: "3.5 km (10mnt)", position: { bottom: "35%", right: "25%" }, color: "bg-blue-400", image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop" },
    { name: "SMA Harapan Bangsa", distance: "4.0 km (12mnt)", position: { top: "30%", right: "15%" }, color: "bg-red-400", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop" },
    { name: "SMK Kejuruan Mandiri", distance: "5.2 km (15mnt)", position: { bottom: "20%", left: "30%" }, color: "bg-green-400", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=600&auto=format&fit=crop" },
  ],
  "Rumah Sakit": [
    { name: "RS Medika Utama", distance: "2.5 km (8mnt)", position: { top: "20%", right: "30%" }, color: "bg-red-400", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop" },
    { name: "RSIA Bunda", distance: "4.1 km (12mnt)", position: { bottom: "25%", left: "20%" }, color: "bg-purple-400", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=600&auto=format&fit=crop" },
    { name: "Klinik 24 Jam Setia", distance: "1.0 km (3mnt)", position: { top: "40%", left: "15%" }, color: "bg-green-400", image: "https://images.unsplash.com/photo-1576091160550-2173ff9e5fe3?q=80&w=600&auto=format&fit=crop" },
  ],
  "Universitas": [
    { name: "Universitas Negeri", distance: "6.0 km (15mnt)", position: { top: "30%", left: "20%" }, color: "bg-blue-500", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop" },
    { name: "Institut Teknologi", distance: "8.5 km (25mnt)", position: { bottom: "25%", right: "20%" }, color: "bg-orange-400", image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&auto=format&fit=crop" },
  ],
  "Rumah Makan": [
    { name: "Resto Cita Rasa", distance: "0.5 km (2mnt)", position: { top: "40%", right: "25%" }, color: "bg-yellow-500", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop" },
    { name: "Cafe Senja", distance: "1.2 km (5mnt)", position: { bottom: "35%", left: "25%" }, color: "bg-pink-400", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop" },
    { name: "Sentra Kuliner", distance: "3.0 km (10mnt)", position: { top: "20%", left: "30%" }, color: "bg-orange-500", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop" },
  ],
  "Gedung Olahraga": [
    { name: "Sports Center", distance: "2.0 km (7mnt)", position: { bottom: "25%", left: "20%" }, color: "bg-blue-400", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop" },
    { name: "Lapangan Tenis Raya", distance: "3.5 km (10mnt)", position: { top: "25%", right: "20%" }, color: "bg-green-500", image: "https://images.unsplash.com/photo-1554068865-24cecd4e34f8?q=80&w=600&auto=format&fit=crop" },
  ],
  "Perumahan Sekitar": [
    { name: "Cluster Harmoni", distance: "1.5 km (5mnt)", position: { top: "35%", left: "15%" }, color: "bg-teal-400", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop" },
    { name: "Residensi Sentosa", distance: "3.0 km (10mnt)", position: { bottom: "30%", right: "25%" }, color: "bg-indigo-400", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop" },
  ],
};

type Category = keyof typeof fasilitasData;
const categories = Object.keys(fasilitasData) as Category[];

interface FasilitasSekitarProps {
  projectLocation?: string;
}

export default function FasilitasSekitar({ projectLocation = "Bogor, Jawa Barat" }: FasilitasSekitarProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("Sekolah");

  const items = fasilitasData[activeCategory];
  
  // Construct a dynamic Google Maps URL using the project's location
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(projectLocation)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="mb-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-border pb-6">
        <h2 className="text-2xl font-heading font-medium text-foreground tracking-tight">Lokasi & Akses</h2>
        
        {/* Dropdown Container */}
        <div className="relative w-full md:w-64 z-10">
          <select 
            className="w-full appearance-none bg-white border border-border px-4 py-2 pr-10 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-sm font-medium text-muted-foreground cursor-pointer shadow-sm"
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value as Category)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-muted-foreground">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Dynamic List based on Dropdown */}
        <div className="w-full lg:w-1/3 order-2 lg:order-1">
          <h3 className="font-heading text-lg font-medium mb-4">{activeCategory}</h3>
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-neutral-50 p-3 rounded-lg border border-border">
                <div className="w-12 h-12 rounded-md overflow-hidden shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale-[20%]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1 leading-tight">{item.name}</p>
                  <p className="text-xs text-primary font-medium flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> ± {item.distance.split("(")[1]?.replace(")", "") || item.distance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full lg:w-2/3 h-[400px] rounded-xl overflow-hidden bg-neutral-900 order-1 lg:order-2 relative group">
          <iframe 
            src={mapUrl} 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full z-0 opacity-40 mix-blend-luminosity pointer-events-auto"
          />
          
          {/* Fake UI for radar / distances */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
            <div className="w-32 h-32 border border-white/20 rounded-full animate-ping absolute opacity-30"></div>
            <div className="w-64 h-64 border border-white/10 rounded-full absolute"></div>
            <div className="w-96 h-96 border border-white/5 rounded-full absolute"></div>
            
            <div className="w-3 h-3 bg-white rounded-full mb-2 shadow-[0_0_15px_rgba(255,255,255,1)]"></div>
            <span className="bg-black/80 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-full border border-white/20 font-bold tracking-widest uppercase shadow-lg">Lokasi Project</span>
          </div>

          {/* Dynamic Distance markers */}
          {items.map((item, index) => (
            <div 
              key={index}
              className="absolute z-20 bg-black/70 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 hover:bg-black/90 transition-colors shadow-lg animate-in fade-in zoom-in duration-500"
              style={item.position}
            >
              <span className={`w-2 h-2 rounded-full ${item.color} shadow-[0_0_8px_currentColor]`}></span> 
              {item.name} ({item.distance.split("(")[1]?.replace(")", "") || item.distance})
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
