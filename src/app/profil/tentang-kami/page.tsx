import Image from "next/image";

export default function TentangKami() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-neutral-50 py-20 md:py-28 border-b border-border">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-heading font-medium mb-4">Tentang Kami</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Mengenal lebih dekat TRICIPTA LAND, perusahaan pengembang properti terpercaya dengan konsep hunian modern dan bergaya kekinian.
          </p>
        </div>
      </section>

      {/* Profil Perusahaan */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-heading font-medium mb-6">Tentang Perusahaan</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                TRICIPTA LAND adalah perusahaan yang bergerak di bidang property meliputi pengembangan lahan, pembangunan rumah serta design interior dengan konsep dan berwawasan modern dan trendy.
              </p>
            </div>
            <div className="md:w-1/2 bg-neutral-200 aspect-video relative flex items-center justify-center">
              <span className="text-muted-foreground text-sm uppercase tracking-widest">[Image Placeholder: Gedung Tricipta]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <h3 className="text-accent text-sm font-semibold uppercase tracking-widest mb-6 flex items-center">
                  <span className="w-8 h-px bg-accent mr-3"></span> Visi Kami
                </h3>
                <p className="font-heading text-2xl md:text-3xl font-medium leading-snug text-foreground">
                  "Menjadi perusahaan pengembang properti terpercaya yang menciptakan hunian dan kawasan bernilai tinggi, berkelanjutan, serta memberikan manfaat jangka panjang bagi masyarakat dan lingkungan."
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <h3 className="text-accent text-sm font-semibold uppercase tracking-widest mb-8 flex items-center">
                <span className="w-8 h-px bg-accent mr-3"></span> Misi Kami
              </h3>
              <ul className="space-y-12">
                <li className="flex items-start">
                  <span className="text-accent mr-6 font-bold font-heading text-2xl pt-0.5">01.</span>
                  <div>
                    <h4 className="font-heading font-medium text-xl mb-3 text-foreground">Menciptakan produk properti berkualitas</h4>
                    <p className="text-muted-foreground leading-relaxed text-lg">Menghadirkan hunian dan bangunan dengan perencanaan matang, kualitas konstruksi unggul, serta desain yang fungsional dan estetis.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-6 font-bold font-heading text-2xl pt-0.5">02.</span>
                  <div>
                    <h4 className="font-heading font-medium text-xl mb-3 text-foreground">Menjunjung tinggi integritas dan kepercayaan</h4>
                    <p className="text-muted-foreground leading-relaxed text-lg">Menjalankan setiap proyek dengan transparansi, profesionalisme, dan tanggung jawab kepada konsumen, mitra, dan pemangku kepentingan.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-6 font-bold font-heading text-2xl pt-0.5">03.</span>
                  <div>
                    <h4 className="font-heading font-medium text-xl mb-3 text-foreground">Mengembangkan kawasan yang berkelanjutan</h4>
                    <p className="text-muted-foreground leading-relaxed text-lg">Memperhatikan keseimbangan antara pembangunan, lingkungan, dan kebutuhan sosial demi masa depan yang lebih baik.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-6 font-bold font-heading text-2xl pt-0.5">04.</span>
                  <div>
                    <h4 className="font-heading font-medium text-xl mb-3 text-foreground">Berinovasi dalam konsep dan teknologi pembangunan</h4>
                    <p className="text-muted-foreground leading-relaxed text-lg">Mengadaptasi inovasi desain, material, dan sistem pembangunan yang efisien serta ramah lingkungan.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-6 font-bold font-heading text-2xl pt-0.5">05.</span>
                  <div>
                    <h4 className="font-heading font-medium text-xl mb-3 text-foreground">Memberikan nilai tambah bagi masyarakat</h4>
                    <p className="text-muted-foreground leading-relaxed text-lg">Menciptakan ruang hidup yang aman, nyaman, dan mendukung pertumbuhan komunitas yang harmonis.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
