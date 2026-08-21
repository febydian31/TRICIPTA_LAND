import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { foundersData } from "../page";
import CVViewer from "@/components/CVViewer";

export default async function ProfilDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const founder = foundersData.find(f => f.id === id);

  if (!founder) {
    notFound();
  }

  return (
    <>
      <section className="bg-neutral-50 py-20 md:py-28 border-b border-border">
        <div className="container">
          <Link href="/profil/profil-pendiri" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Profil Pendiri
          </Link>
          <h1 className="text-4xl md:text-5xl font-heading font-medium mb-4">{founder.name}</h1>
          <p className="text-primary text-xl font-medium tracking-wide uppercase">{founder.title}</p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="container max-w-6xl">
          <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-start">
            <div className="w-full md:w-2/5 shrink-0">
              <div className="aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-xl bg-neutral-100 relative">
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            
            <div className="w-full md:w-3/5 pt-4">
              <h2 className="text-3xl md:text-4xl font-heading font-medium mb-8 text-foreground leading-tight">
                {founder.vision}
              </h2>
              <blockquote className="text-2xl text-muted-foreground font-heading italic mb-10 leading-relaxed border-l-2 border-accent pl-8 py-2">
                "{founder.quote}"
              </blockquote>
              
              <div className="prose prose-neutral max-w-none text-muted-foreground text-lg leading-relaxed mb-12">
                <p>
                  Sebagai {founder.title}, {founder.name} mendedikasikan pengalaman dan keahliannya untuk 
                  membawa TRICIPTA LAND ke tingkat yang lebih tinggi. Kepemimpinan yang kuat dan visi strategisnya 
                  memainkan peran kunci dalam memastikan setiap proyek memberikan nilai tambah yang maksimal 
                  bagi pemangku kepentingan.
                </p>
              </div>

              {/* Komponen Tombol CV */}
              <CVViewer cvImage={founder.cvImage} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
