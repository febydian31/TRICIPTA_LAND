import Link from "next/link";

export const foundersData = [
  {
    id: "1",
    name: "J JANER SARAGIH",
    title: "Nasional Mortgage",
    quote: "Kekuatan utama kami ada pada partnership dan pemahaman mendalam terhadap struktur pembiayaan untuk kemajuan developer.",
    image: "/assets/temporary/P1.png",
    cvImage: "/assets/temporary/CV1.png",
    vision: "Kemitraan KPR yang Mengubah Lanskap Properti"
  },
  {
    id: "2",
    name: "FAISAL NASUTION",
    title: "Regional Retail & Sales Strategy",
    quote: "Strategi penjualan yang tepat dipadukan dengan jaringan kemitraan ritel yang kuat adalah kunci dari setiap pertumbuhan proyek kami.",
    image: "/assets/temporary/P2.png",
    cvImage: "/assets/temporary/CV2.png",
    vision: "Strategi Penjualan Unggul & Berkelanjutan"
  },
  {
    id: "3",
    name: "BENEDIKTUS EDI WIBOWO",
    title: "Department Head (Strategic Planning & Quality)",
    quote: "Kualitas operasional dan perencanaan strategis yang presisi menjadi prioritas utama demi kepuasan klien dan kesempurnaan produk.",
    image: "/assets/temporary/P3.png",
    cvImage: "/assets/temporary/CV3.png",
    vision: "Eksekusi Presisi dalam Setiap Langkah"
  }
];

export default function ProfilPendiri() {
  return (
    <>
      <section className="bg-neutral-50 py-20 md:py-28 border-b border-border">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-heading font-medium mb-6 text-left">Profil Pendiri</h1>
          <p className="text-muted-foreground text-lg leading-relaxed text-justify w-full">
            Mengenal lebih dekat tiga sosok pendiri yang membawa TRICIPTA LAND menuju kesuksesan. 
            Ada 2 orang dengan latar belakang di perbankan; yang pertama memiliki jabatan terakhir sebagai <strong>Nasional Mortgage di CIMB</strong> yang sangat kuat dalam membangun bisnis partnership KPR/developer, 
            sementara yang kedua dengan jabatan terakhir sebagai <strong>Regional Retail</strong> memiliki kekuatan di partnership serta sangat menguasai strategi penjualan dan pemasarannya. 
            Orang ketiga memiliki jabatan <strong>Department Head di PT. Softex Indonesia</strong> yang bertanggung jawab penuh terhadap <em>strategic planning</em> dan kualitas operasional.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="container space-y-32">
          {foundersData.map((founder, idx) => (
            <div key={idx} className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
              <div className={`lg:w-7/12 w-full ${idx % 2 === 0 ? 'order-2 lg:order-1' : 'order-2 lg:order-2 pl-0 lg:pl-16'}`}>
                <h2 className="text-4xl md:text-5xl font-heading font-medium text-foreground tracking-tight mb-10 leading-tight">
                  {founder.vision.split(' ').slice(0, -2).join(' ')} <br /> 
                  <span className="italic font-light text-primary">{founder.vision.split(' ').slice(-2).join(' ')}</span>
                </h2>
                <blockquote className="text-xl md:text-2xl text-muted-foreground font-heading italic mb-12 leading-relaxed border-l border-accent pl-8 py-2">
                  "{founder.quote}"
                </blockquote>
                <div className="flex items-center gap-6">
                  <div>
                    <p className="text-foreground font-medium text-lg tracking-wide uppercase">{founder.name}</p>
                    <p className="text-muted-foreground font-light text-sm uppercase tracking-widest mt-1">{founder.title}</p>
                  </div>
                  <div className="h-px w-16 bg-border mx-2 hidden sm:block"></div>
                  <Link href={`/profil/profil-pendiri/${founder.id}`} className="text-sm font-medium uppercase tracking-widest text-primary hover:text-accent transition-colors shrink-0">
                    Baca Profil
                  </Link>
                </div>
              </div>
              
              <div className={`lg:w-5/12 w-full ${idx % 2 === 0 ? 'order-1 lg:order-2 pl-0 lg:pl-12' : 'order-1 lg:order-1'}`}>
                <div className="aspect-[3/4] w-full max-w-xs mx-auto bg-neutral-100 overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
