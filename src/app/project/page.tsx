"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

import { projectsData } from "@/lib/projectsData";

export default function ProjectListing() {
  const [activeFilter, setActiveFilter] = useState("Semua Proyek");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = ["Semua Proyek", "Completed", "Upcoming", "Sold Out"];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = activeFilter === "Semua Proyek" || project.status === activeFilter;
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Page Header */}
      <section className="bg-neutral-50 py-20 md:py-28 border-b border-border">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-heading font-medium mb-4">Proyek Kami</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Eksplorasi mahakarya residensial dan komersial dari TRICIPTA LAND yang didesain untuk kualitas hidup terbaik.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container">
          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12 border-b border-border pb-6">
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "ghost"}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full transition-colors lowercase ${
                    activeFilter === filter
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "hover:text-accent border border-transparent hover:border-border"
                  }`}
                >
                  {filter}
                </Button>
              ))}
            </div>
            
            <div className="relative w-full md:w-64 lg:w-80">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                placeholder="Cari proyek atau lokasi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-border pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary rounded-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <Link href={`/project/${project.id}`} key={project.id} className="group cursor-pointer block">
                  <div className="relative aspect-[3/2] w-full overflow-hidden mb-5 rounded-sm">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className={`absolute bottom-4 right-4 text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider rounded-sm shadow-sm backdrop-blur-md ${project.status === 'Sold Out' ? 'bg-neutral-900/80 text-white' : project.status === 'Upcoming' ? 'bg-white/90 text-neutral-800' : 'bg-primary/90 text-white'}`}>
                      {project.status}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-primary/80 mb-2">
                      {project.category}
                    </div>
                    <h3 className="font-heading text-2xl font-medium group-hover:text-primary transition-colors leading-tight">
                      {project.name}
                    </h3>
                    <p className="text-muted-foreground text-sm font-light mt-1">
                      {project.location}
                    </p>
                    <p className="text-muted-foreground text-sm font-medium">
                      {project.type}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    Lihat Proyek <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-muted-foreground">
                Belum ada proyek untuk kategori ini.
              </div>
            )}
          </div>

          {/* Pagination Navigation */}
          {filteredProjects.length > 0 && (
            <div className="mt-16 flex items-center justify-center gap-2">
              <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-border text-muted-foreground hover:text-primary hover:border-primary shadow-sm" disabled>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="default" className="w-10 h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm">
                1
              </Button>
              <Button variant="ghost" className="w-10 h-10 rounded-full text-muted-foreground hover:text-primary hover:bg-neutral-100">
                2
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
