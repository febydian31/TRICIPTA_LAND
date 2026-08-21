"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const articlesData = [
  {
    id: 1,
    title: "TRICIPTA LAND Meluncurkan Masterplan Terbaru di Kawasan Selatan",
    category: "Berita Perusahaan",
    date: "12 Agustus 2026",
    excerpt: "Acara peluncuran sukses digelar dengan menghadirkan para investor dan stakeholder kunci dalam pengembangan kawasan residensial berkelanjutan.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Progres Pembangunan The Green Valley Capai 80%",
    category: "Update Proyek",
    date: "05 Agustus 2026",
    excerpt: "Pembangunan tahap pertama dari The Green Valley berjalan lebih cepat dari target yang direncanakan berkat adopsi teknologi konstruksi terbaru.",
    image: "https://images.unsplash.com/photo-1541888081622-15f791789c09?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Mengapa Hunian Berkelanjutan Semakin Diminati di Bogor?",
    category: "Insight Properti",
    date: "28 Juli 2026",
    excerpt: "Semakin banyak keluarga muda yang mencari hunian hijau. Berikut analisis pakar kami mengenai pergeseran tren properti tahun ini.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Tricipta Business Park Raih Penghargaan Best Commercial Design",
    category: "Berita Perusahaan",
    date: "15 Juli 2026",
    excerpt: "Inovasi desain Tricipta Business Park mendapatkan apresiasi tertinggi pada ajang Property Awards bergengsi skala nasional.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=2061&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Tips Jitu Memilih Unit Residensial Pertama Anda",
    category: "Insight Properti",
    date: "02 Juli 2026",
    excerpt: "Panduan komprehensif bagi milenial dan keluarga muda yang sedang menyusun rencana pembelian hunian idaman mereka di kawasan satelit.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Serah Terima Kunci Cluster B di Tricipta Residence",
    category: "Update Proyek",
    date: "20 Juni 2026",
    excerpt: "Kabar gembira bagi para pembeli Cluster B, serah terima unit telah dimulai bulan ini dengan berbagai fasilitas publik yang siap digunakan.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop",
  }
];

export default function Artikel() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["Semua", "Berita Perusahaan", "Update Proyek", "Insight Properti"];

  const filteredArticles = articlesData.filter((article) => {
    const matchesCategory = activeCategory === "Semua" || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <section className="bg-neutral-50 pt-40 pb-16 border-b border-border">
        <div className="container max-w-7xl">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary/80 block mb-4">Newsroom</span>
          <h1 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-4">Artikel & Insight</h1>
          <p className="text-muted-foreground text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            Cerita, perkembangan proyek, dan wawasan seputar properti dari Tricipta Land.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-7xl">
          {/* Categories and Search */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-border pb-6">
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "ghost"}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full transition-colors font-medium ${
                    activeCategory === category
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "border border-transparent hover:border-border text-muted-foreground hover:text-foreground hover:bg-transparent"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <div className="relative w-full md:w-[280px] lg:w-[320px]">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                placeholder="Cari berdasarkan judul atau topik..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-border pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors rounded-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <Link href={`/artikel/${article.id}`} key={article.id} className="group cursor-pointer flex flex-col h-full">
                  <div className="relative aspect-[3/2] w-full overflow-hidden mb-6 rounded-sm bg-neutral-200">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03] grayscale-[10%]"
                    />
                  </div>
                  <div className="flex items-center text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-3">
                    <span className="text-accent">{article.category}</span>
                    <span className="mx-2">&middot;</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="font-heading text-2xl font-medium mb-3 group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground font-light text-sm mb-6 line-clamp-2 flex-grow">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors mt-auto">
                    Baca Artikel <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-16 text-muted-foreground">
                <p>Belum ada artikel yang cocok dengan pencarian Anda.</p>
              </div>
            )}
          </div>
          
          {filteredArticles.length > 0 && (
            <div className="mt-16 flex items-center justify-center gap-2">
              <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-border text-muted-foreground hover:text-primary hover:border-primary shadow-sm" disabled>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="default" className="w-10 h-10 rounded-full bg-primary text-white hover:bg-primary/90 shadow-sm">
                1
              </Button>
              <Button variant="ghost" className="w-10 h-10 rounded-full text-muted-foreground hover:text-primary hover:bg-neutral-100">
                2
              </Button>
              <Button variant="ghost" className="w-10 h-10 rounded-full text-muted-foreground hover:text-primary hover:bg-neutral-100 hidden sm:flex">
                3
              </Button>
              <span className="text-muted-foreground px-1 hidden sm:inline-block">...</span>
              <Button variant="ghost" className="w-10 h-10 rounded-full text-muted-foreground hover:text-primary hover:bg-neutral-100">
                8
              </Button>
              <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-border text-muted-foreground hover:text-primary hover:border-primary shadow-sm">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
