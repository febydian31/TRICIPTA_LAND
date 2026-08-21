import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { projectsData } from "@/lib/projectsData";

export default function Home() {
  return (
    <>
      {/* HERO SECTION (Editorial Layout) */}
      <section className="relative pt-28 pb-16 overflow-hidden bg-neutral-50">
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-8">
            
            <div className="w-full lg:w-5/12 pr-4 lg:pr-12 lg:pt-12">
              <span className="text-accent uppercase tracking-[0.3em] font-semibold text-xs mb-8 block">
                TRICIPTA LAND
              </span>
              <h1 className="text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-heading font-medium leading-[1.2] md:leading-[1.1] tracking-tight mb-6 md:max-w-3xl lg:max-w-none">
                Hunian <span className="italic font-light text-primary">Berkualitas,</span> Hidup Lebih <span className="italic font-light text-primary">Bermakna.</span>
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-lg md:max-w-2xl lg:max-w-md mb-10 md:mb-12 leading-relaxed font-light">
                Ekosistem residensial dan komersial yang meredefinisi standar kemewahan modern melalui desain esensial dan kelestarian alam.
              </p>
              
              <div className="flex flex-wrap gap-6 items-center">
                <Link href="/project" className="group flex items-center text-sm font-medium uppercase tracking-widest text-primary hover:text-accent transition-colors">
                  Lihat Proyek Kami <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-7/12 relative">
              <div className="aspect-[4/5] md:aspect-video lg:aspect-auto lg:h-[70vh] max-h-[600px] w-full relative overflow-hidden rounded-md">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
                  alt="Mansion architecture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION (Minimal Manifesto) */}
      <section className="py-32 md:py-48 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-12 leading-tight tracking-tight">
              Tidak sekadar menyusun struktur, kami merancang <span className="italic text-primary font-light">ruang di mana kehidupan bertumbuh.</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              TRICIPTA LAND hadir sebagai pengembang properti terpercaya yang memadukan presisi struktural dengan estetika kontemporer yang tenang. Tanpa ornamen berlebih, kami berfokus pada esensi ruang, cahaya alami, dan material autentik.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 mt-32 border-t border-border pt-16">
            <div className="group">
              <span className="text-4xl font-heading text-neutral-200 mb-6 block group-hover:text-accent transition-colors">01</span>
              <h3 className="font-heading font-medium text-2xl mb-4 tracking-tight">Desain Presisi</h3>
              <p className="text-muted-foreground font-light leading-relaxed">Arsitektur yang timeless, mengutamakan proporsi, pencahayaan alami, dan material terbaik yang menua dengan anggun.</p>
            </div>
            <div className="group">
              <span className="text-4xl font-heading text-neutral-200 mb-6 block group-hover:text-accent transition-colors">02</span>
              <h3 className="font-heading font-medium text-2xl mb-4 tracking-tight">Lokasi Tepat</h3>
              <p className="text-muted-foreground font-light leading-relaxed">Penempatan strategis di titik pertumbuhan urban yang memastikan nilai investasi terus menguat seiring waktu.</p>
            </div>
            <div className="group">
              <span className="text-4xl font-heading text-neutral-200 mb-6 block group-hover:text-accent transition-colors">03</span>
              <h3 className="font-heading font-medium text-2xl mb-4 tracking-tight">Ekosistem Hijau</h3>
              <p className="text-muted-foreground font-light leading-relaxed">Integrasi lanskap natural dan pendekatan ramah lingkungan untuk menjaga sirkulasi udara dan harmoni dengan alam.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS (Editorial Staggered Grid) */}
      <section className="py-32 bg-neutral-50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-heading font-medium text-foreground tracking-tight mb-6">
                Proyek Unggulan
              </h2>
              <p className="text-muted-foreground font-light text-lg">Eksplorasi mahakarya residensial dan komersial kami yang didesain secara spesifik untuk menyatu dengan karakter lingkungannya.</p>
            </div>
            <Link href="/project" className="group flex items-center text-sm font-medium uppercase tracking-widest text-primary hover:text-accent transition-colors shrink-0">
              Seluruh Proyek <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24">
            {projectsData.slice(0, 2).map((project, idx) => (
              <Link 
                key={project.id} 
                href={`/project/${project.id}`} 
                className={cn(
                  "group cursor-pointer block", 
                  idx === 1 ? "md:mt-32" : "" // Stagger the second project down
                )}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden mb-8 rounded-md">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-start justify-between border-b border-border pb-6">
                  <div>
                    <span className="text-accent uppercase tracking-widest text-[10px] font-bold block mb-3">
                      {project.status === 'Upcoming' ? 'Coming Soon' : project.status === 'Completed' ? 'Completed' : project.status}
                    </span>
                    <h3 className="font-heading text-3xl font-medium tracking-tight mb-2 group-hover:text-primary transition-colors">{project.name}</h3>
                    <p className="text-muted-foreground font-light">{project.location}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all shrink-0">
                    <ArrowRight className="w-4 h-4 -rotate-45" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>



      {/* CTA SECTION (Refined) */}
      <section className="py-32 bg-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent uppercase tracking-widest font-semibold text-xs mb-8 block">
              Langkah Selanjutnya
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-white mb-10 tracking-tight leading-tight">
              Siap Membangun <br />
              <span className="italic font-light">Masa Depan Anda?</span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl font-light mb-12 leading-relaxed">
              Diskusikan kebutuhan investasi atau hunian eksklusif Anda dengan tim penasihat properti kami.
            </p>
            <Link href="/kontak" className={cn(buttonVariants({ size: "lg" }), "bg-accent hover:bg-white hover:text-primary text-white rounded-none px-12 h-14 text-sm tracking-widest uppercase transition-colors")}>
              Jadwalkan Konsultasi
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
