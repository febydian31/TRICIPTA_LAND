import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight, MapPin, Building2, Calendar, LayoutDashboard, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import ProjectGallery from "@/components/ProjectGallery";
import FasilitasSekitar from "@/components/FasilitasSekitar";

import { projectsData } from "@/lib/projectsData";

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Find project or default to first
  const project = projectsData.find(p => p.id === id) || projectsData[0];
  const otherProjects = projectsData.filter(p => p.id !== project.id);

  return (
    <>
      <section className="bg-neutral-50 pt-40 pb-16 border-b border-border">
        <div className="container">
          <div className="flex flex-col items-start gap-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary/80">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tight leading-tight text-foreground">
              {project.name}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light mt-2">
              {project.location}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        
        {/* Gallery Section */}
        <div className="container mb-8">
          <Link href="/project" className="text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-primary inline-flex items-center">
            <ArrowRight className="mr-2 w-4 h-4 rotate-180" /> Semua Project
          </Link>
        </div>
        <ProjectGallery projectName={project.name} images={project.gallery} />

        <div className="container mt-12">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Main Content */}
            <div className="lg:w-2/3">

              {/* Project Overview */}
              <div className="prose prose-lg max-w-none text-muted-foreground font-light leading-relaxed mb-12">
                <h2 className="text-2xl font-heading font-medium text-foreground tracking-tight mb-4">Tentang Project</h2>
                <p>{project.description}</p>
                <p>
                  Kami memprioritaskan privasi dan kenyamanan bagi setiap penghuni. Dilengkapi dengan sistem keamanan 24 jam, fasilitas komunal eksklusif, dan infrastruktur kabel bawah tanah yang memastikan estetika lingkungan tetap terjaga.
                </p>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 border-y border-border py-8">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">Lokasi</p>
                  <p className="font-medium text-foreground text-sm">{project.location}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">Tipe</p>
                  <p className="font-medium text-foreground text-sm">{project.type}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">Luas Area</p>
                  <p className="font-medium text-foreground text-sm">{project.area}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">Tahun</p>
                  <p className="font-medium text-foreground text-sm">{project.year.replace("-", "—")}</p>
                </div>
              </div>

              <FasilitasSekitar projectLocation={project.location} />

            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-12 lg:sticky lg:top-32 h-fit">
              
              {/* Widget CTA */}
              <div className="bg-neutral-50 p-8 border border-border rounded-xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${project.status === 'Sold Out' ? 'bg-neutral-800' : project.status === 'Upcoming' ? 'bg-amber-500' : 'bg-green-500'}`} />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-foreground">
                      {project.status === 'Upcoming' ? 'Coming Soon' : project.status === 'Completed' ? 'Completed' : project.status}
                    </span>
                  </div>
                  <button className="text-muted-foreground hover:text-primary transition-colors" title="Bagikan Proyek">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
                
                {project.inventory && project.inventory.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-4">Inventory</h3>
                    <ul className="space-y-3 border-l-2 border-border pl-4">
                      {project.inventory.map((item, idx) => (
                        <li key={idx} className="text-sm text-foreground leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="border-t border-border pt-6 flex flex-col gap-3">
                  <Link href="/kontak" className="flex items-center justify-center w-full py-3.5 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-primary/90 transition-colors">
                    Hubungi Kami
                  </Link>
                  <Link href="/portfolio" className="flex items-center justify-center w-full py-3.5 bg-white border border-border text-foreground text-xs font-bold uppercase tracking-widest rounded-sm hover:border-primary transition-colors">
                    Portofolio
                  </Link>
                </div>
              </div>

              {/* Widget Other Projects */}
              <div>
                <h3 className="font-heading text-xl font-medium mb-6 border-b border-border pb-4">Project Lainnya</h3>
                <div className="space-y-6">
                  {otherProjects.slice(0, 3).map(p => (
                    <Link key={p.id} href={`/project/${p.id}`} className="group flex gap-4 items-center">
                      <div className="w-20 h-20 shrink-0 bg-neutral-200 overflow-hidden rounded-md">
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale-[20%]" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold block mb-1">{p.category || p.type}</span>
                        <h4 className="font-heading font-medium text-base leading-tight group-hover:text-primary transition-colors">{p.name}</h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
