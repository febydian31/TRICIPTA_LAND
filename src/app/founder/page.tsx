import { Button } from "@/components/ui/button";

export default function Founder() {
  return (
    <>
      <section className="bg-background pt-32 pb-20 border-b border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            
            {/* Foto Founder */}
            <div className="md:w-5/12">
              <div className="aspect-[3/4] bg-neutral-200 w-full relative">
                 <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                  alt="Founder TRICIPTA LAND" 
                  className="w-full h-full object-cover grayscale-[20%]"
                />
              </div>
            </div>

            {/* Konten */}
            <div className="md:w-7/12 pt-8">
              <h1 className="text-4xl md:text-5xl font-heading font-medium mb-2">Nama Founder</h1>
              <p className="text-xl text-primary font-medium mb-8 uppercase tracking-wider text-sm">Founder & Direktur Utama</p>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed mb-12 text-lg">
                <p>
                  Dengan pengalaman lebih dari 20 tahun di industri properti Indonesia, beliau telah mendedikasikan hidupnya untuk merancang dan membangun ekosistem hunian yang tidak hanya estetik, tetapi juga fungsional.
                </p>
                <p>
                  Perjalanan karirnya diawali dari... [Admin dapat mengisi profil ringkas ini melalui CMS nanti]. Filosofi kepemimpinannya berpusat pada integritas, inovasi tanpa henti, serta komitmen untuk selalu memberikan yang terbaik bagi konsumen dan lingkungan.
                </p>
              </div>

              {/* CV Data Table */}
              <h3 className="font-heading text-2xl font-medium mb-6 text-foreground border-b border-border pb-4">Riwayat Profesional</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 border-b border-neutral-100 pb-4">
                  <div className="text-muted-foreground font-medium">Pendidikan</div>
                  <div className="md:col-span-3 text-foreground">[Isian CMS - Universitas & Gelar]</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 border-b border-neutral-100 pb-4">
                  <div className="text-muted-foreground font-medium">Pengalaman</div>
                  <div className="md:col-span-3 text-foreground">[Isian CMS - Riwayat Karir]</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 border-b border-neutral-100 pb-4">
                  <div className="text-muted-foreground font-medium">Prestasi</div>
                  <div className="md:col-span-3 text-foreground">[Isian CMS - Penghargaan]</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
