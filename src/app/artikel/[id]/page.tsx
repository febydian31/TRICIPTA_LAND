import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const articlesData = [
  {
    id: "1",
    title: "TRICIPTA LAND Meluncurkan Masterplan Terbaru di Kawasan Selatan",
    category: "Berita Perusahaan",
    date: "12 Agustus 2026",
    readTime: "5 min read",
    content: "Acara peluncuran sukses digelar dengan menghadirkan para investor dan stakeholder kunci dalam pengembangan kawasan residensial berkelanjutan. Masterplan ini mencakup area seluas 50 hektar yang akan difokuskan pada hunian hijau yang terintegrasi dengan transportasi publik massal. Pembangunan tahap pertama akan dimulai pada kuartal ketiga tahun ini.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Progres Pembangunan The Green Valley Capai 80%",
    category: "Update Proyek",
    date: "05 Agustus 2026",
    readTime: "4 min read",
    content: "Pembangunan tahap pertama dari The Green Valley berjalan lebih cepat dari target yang direncanakan berkat adopsi teknologi konstruksi terbaru. Saat ini, instalasi utilitas utama dan jalan kawasan telah sepenuhnya selesai. Serah terima unit diproyeksikan bisa dilakukan dua bulan lebih awal dari jadwal awal kepada para konsumen.",
    image: "https://images.unsplash.com/photo-1541888081622-15f791789c09?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Mengapa Hunian Berkelanjutan Semakin Diminati di Bogor?",
    category: "Insight Properti",
    date: "28 Juli 2026",
    readTime: "6 min read",
    content: "Semakin banyak keluarga muda yang mencari hunian hijau. Berikut analisis pakar kami mengenai pergeseran tren properti tahun ini. Pergeseran preferensi konsumen pasca-pandemi terus menunjukkan peningkatan permintaan untuk hunian dengan sirkulasi udara optimal dan ruang terbuka hijau pribadi yang menunjang kesehatan fisik dan mental.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Tricipta Business Park Raih Penghargaan Best Commercial Design",
    category: "Berita Perusahaan",
    date: "15 Juli 2026",
    readTime: "3 min read",
    content: "Inovasi desain Tricipta Business Park mendapatkan apresiasi tertinggi pada ajang Property Awards bergengsi skala nasional. Penghargaan ini menjadi bukti komitmen kami untuk terus menghadirkan fasilitas komersial yang tidak hanya estetis, tetapi juga sangat fungsional bagi para pelaku bisnis.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=2061&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "Tips Jitu Memilih Unit Residensial Pertama Anda",
    category: "Insight Properti",
    date: "02 Juli 2026",
    readTime: "7 min read",
    content: "Panduan komprehensif bagi milenial dan keluarga muda yang sedang menyusun rencana pembelian hunian idaman mereka di kawasan satelit. Keputusan membeli rumah pertama adalah pencapaian finansial yang besar, sehingga diperlukan riset mendalam terkait lokasi, reputasi developer, hingga fasilitas pembiayaan.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "6",
    title: "Serah Terima Kunci Cluster B di Tricipta Residence",
    category: "Update Proyek",
    date: "20 Juni 2026",
    readTime: "4 min read",
    content: "Kabar gembira bagi para pembeli Cluster B, serah terima unit telah dimulai bulan ini dengan berbagai fasilitas publik yang siap digunakan. Kami memastikan setiap unit telah melewati proses quality control yang ketat sebelum kunci diserahkan kepada pemilik.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop",
  }
];

export default async function ArtikelDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const article = articlesData.find(a => a.id === id) || articlesData[0];
  const recentArticles = articlesData.filter(a => a.id !== article.id).slice(0, 3);

  return (
    <div className="bg-white">
      <section className="pt-32 pb-16">
        <div className="container max-w-7xl">
          <Link href="/artikel" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary mb-12 inline-flex items-center transition-colors">
            <ArrowLeft className="mr-2 w-4 h-4" /> Kembali ke Artikel
          </Link>
          
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
              <span className="text-accent">{article.category}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-heading font-medium tracking-tight mb-8 leading-[1.15]">
              {article.title}
            </h1>
            
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-12">
              <span>{article.date}</span>
              <span className="text-border">&middot;</span>
              <span>{article.readTime}</span>
            </div>
          </div>

          <div className="aspect-[16/9] md:aspect-[2.2/1] w-full overflow-hidden rounded-sm bg-neutral-100 mb-16">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Main Content */}
            <div className="lg:w-8/12">
              <div className="prose prose-lg max-w-[760px] text-foreground/90 font-light text-[17px] md:text-[18px] leading-[1.8]">
                <p className="first-letter:text-7xl first-letter:font-heading first-letter:text-primary first-letter:mr-4 first-letter:float-left">
                  {article.content}
                </p>
                <p>
                  Sebagai komitmen perusahaan terhadap standar keberlanjutan lingkungan, pengembangan properti kami di masa depan akan secara konsisten memprioritaskan efisiensi energi dan pengelolaan limbah yang sirkular. Hal ini sejalan dengan target pencapaian kualitas hidup yang lebih baik bagi seluruh penghuni. Ruang terbuka hijau tidak sekadar menjadi ornamen, melainkan ekosistem mandiri yang mendukung gaya hidup selaras dengan alam.
                </p>
                <p>
                  Lebih lanjut, fasilitas pendukung di kawasan ini dirancang agar dapat memfasilitasi gaya hidup aktif dan komunitas yang sehat. Jalur pejalan kaki dan lintasan sepeda disiapkan untuk saling terhubung dari satu klaster ke klaster lainnya, meminimalisir penggunaan kendaraan bermotor untuk mobilitas jarak dekat serta meningkatkan interaksi sosial antar tetangga.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-4/12 space-y-12 lg:sticky lg:top-32 h-fit">
              
              {/* Recent Articles Widget */}
              <div>
                <h3 className="font-heading text-xl font-medium mb-6 border-b border-border pb-4">Artikel Terbaru</h3>
                <div className="space-y-6">
                  {recentArticles.map(a => (
                    <Link key={a.id} href={`/artikel/${a.id}`} className="group flex gap-4 items-center">
                      <div className="w-20 h-20 shrink-0 bg-neutral-200 overflow-hidden rounded-sm">
                        <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale-[10%]" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-accent font-bold block mb-1">{a.date}</span>
                        <h4 className="font-heading font-medium text-base leading-tight group-hover:text-primary transition-colors line-clamp-2">{a.title}</h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Widget */}
              <div className="bg-neutral-50 p-8 rounded-sm border border-border">
                <h4 className="font-heading text-xl font-medium mb-3">Tertarik dengan proyek kami?</h4>
                <p className="text-muted-foreground text-sm font-light mb-8">Konsultasikan kebutuhan hunian atau portofolio investasi Anda bersama tim spesialis kami.</p>
                <Link href="/kontak" className="inline-flex items-center justify-center w-full py-4 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-primary/90 transition-colors group">
                  Hubungi Kami <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
