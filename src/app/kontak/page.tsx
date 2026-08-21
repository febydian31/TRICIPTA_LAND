import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";

export default function Kontak() {
  return (
    <>
      <section className="bg-neutral-50 pt-40 pb-16 border-b border-border">
        <div className="container max-w-7xl">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary/80 block mb-4">Contact</span>
          <h1 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-4">Hubungi Kami</h1>
          <p className="text-muted-foreground text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            Punya pertanyaan mengenai project atau layanan kami? <br className="hidden md:block" />
            Tim Tricipta Land siap membantu Anda.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-10">
              <div>
                <h2 className="text-xl font-heading font-medium mb-6">Informasi Kontak</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">WhatsApp / Telepon</p>
                      <p className="font-medium text-foreground text-sm">+62 812-3456-7890</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">Email</p>
                      <p className="font-medium text-foreground text-sm">info@cmlgroup.id</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">Jam Operasional</p>
                      <p className="font-medium text-foreground text-sm">Senin — Jumat<br />08:30 — 17:30 WIB</p>
                      <p className="text-muted-foreground text-sm mt-2">Sabtu — Minggu<br />Tutup</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Inquiry */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 md:p-12 border border-border rounded-2xl shadow-sm">
                <h2 className="text-3xl font-heading font-medium mb-2">Mari Terhubung</h2>
                <p className="text-muted-foreground font-light mb-8">Punya pertanyaan mengenai project kami? Tim Tricipta Land siap membantu Anda.</p>
                
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Nama Lengkap</label>
                    <input type="text" id="name" className="w-full border-b border-border bg-transparent py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="Masukkan nama Anda" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="contact" className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Email / No. WhatsApp</label>
                    <input type="text" id="contact" className="w-full border-b border-border bg-transparent py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="contoh@email.com / 0812xxxx" />
                  </div>
                  
                  <div className="space-y-2 relative">
                    <label htmlFor="topic" className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Keperluan</label>
                    <select id="topic" className="w-full appearance-none border-b border-border bg-transparent py-3 text-sm focus:outline-none focus:border-primary transition-colors cursor-pointer">
                      <option>Informasi Project Baru</option>
                      <option>Pembelian Unit (Sales)</option>
                      <option>Kerjasama Strategis (Partnership)</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Bagaimana kami dapat membantu?</label>
                    <textarea id="message" rows={4} className="w-full border-b border-border bg-transparent py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tuliskan detail pertanyaan atau kebutuhan Anda..."></textarea>
                  </div>
                  
                  <div className="pt-4">
                    <Button type="button" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-xs uppercase tracking-widest font-bold flex items-center justify-center transition-all group">
                      Kirim Pesan <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white border-t border-border">
        <div className="container max-w-7xl">
          <div className="mb-8">
            <h2 className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">Lokasi Kami</h2>
            <h3 className="text-3xl font-heading font-medium tracking-tight mb-4">Kantor Tricipta Land</h3>
            <p className="text-muted-foreground font-light mb-4">
              Gedung Tricipta, Lantai 8<br />
              Jl. Jend. Sudirman No. 123<br />
              Jakarta Selatan, DKI Jakarta 12190
            </p>
            <Link href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              Lihat di Google Maps <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="h-[400px] w-full rounded-2xl overflow-hidden bg-neutral-200 shadow-sm border border-border relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.307374781498!2d106.8197779!3d-6.2231518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3fb7f9d8641%3A0xc3c544bd0a4805c8!2sJl.%20Jend.%20Sudirman%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full opacity-90 mix-blend-luminosity"
            />
          </div>
        </div>
      </section>
    </>
  );
}
