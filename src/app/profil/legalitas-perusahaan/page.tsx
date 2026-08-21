export default function LegalitasPerusahaan() {
  return (
    <>
      <section className="bg-neutral-50 py-20 md:py-28 border-b border-border">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-heading font-medium mb-4 text-center">Legalitas Perusahaan</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-center">
            Informasi resmi terkait legalitas, perizinan, dan struktur kepengurusan TRICIPTA LAND.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="container max-w-4xl">
          <div className="space-y-16">
            
            {/* Akte Perusahaan */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-medium text-foreground mb-8 flex items-center">
                <span className="w-8 h-px bg-accent mr-4"></span> Akte Perusahaan
              </h2>
              <div className="pl-0 md:pl-12 space-y-4 text-lg text-foreground bg-neutral-50 p-8 rounded-2xl border border-border">
                <div className="grid grid-cols-[140px_1fr] md:grid-cols-[180px_1fr] gap-4">
                  <span className="font-medium text-muted-foreground">Pendirian</span>
                  <span className="font-medium">: 2901260128282 - tanggal 29/01/2026</span>
                </div>
                <div className="grid grid-cols-[140px_1fr] md:grid-cols-[180px_1fr] gap-4">
                  <span className="font-medium text-muted-foreground">Perubahan terakhir</span>
                  <span className="font-medium">: 2901260128282 - tanggal 09/03/2026</span>
                </div>
              </div>
            </div>

            {/* Nomor NPWP */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-medium text-foreground mb-8 flex items-center">
                <span className="w-8 h-px bg-accent mr-4"></span> Nomor NPWP
              </h2>
              <div className="pl-0 md:pl-12">
                <div className="bg-neutral-50 p-8 rounded-2xl border border-border inline-block min-w-full md:min-w-[400px]">
                  <p className="text-xl tracking-wider font-medium text-foreground">1000 0000 0807 6485</p>
                </div>
              </div>
            </div>

            {/* SK KEMENHUMHAM */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-medium text-foreground mb-8 flex items-center">
                <span className="w-8 h-px bg-accent mr-4"></span> SK Kemenhumham
              </h2>
              <div className="pl-0 md:pl-12">
                <div className="bg-neutral-50 p-8 rounded-2xl border border-border inline-block min-w-full md:min-w-[400px]">
                  <p className="text-lg md:text-xl font-medium text-foreground uppercase">AHU-0007925.AH.01.01.TAHUN 2026</p>
                </div>
              </div>
            </div>

            {/* Susunan Pengurus & Komposisi Saham */}
            <div className="grid md:grid-cols-2 gap-16 md:gap-12 pt-8">
              
              {/* Susunan Pengurus */}
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-medium text-foreground mb-8 flex items-center">
                  <span className="w-8 h-px bg-accent mr-4"></span> Susunan Pengurus
                </h2>
                <div className="space-y-6 text-lg text-foreground bg-neutral-50 p-8 rounded-2xl border border-border h-full">
                  <div className="grid grid-cols-[140px_1fr] md:grid-cols-[160px_1fr] gap-2 items-center">
                    <span className="font-medium text-muted-foreground">Komisaris Utama</span>
                    <span className="font-medium">: J Janer Saragih</span>
                  </div>
                  <div className="grid grid-cols-[140px_1fr] md:grid-cols-[160px_1fr] gap-2 items-center">
                    <span className="font-medium text-muted-foreground">Komisaris</span>
                    <span className="font-medium">: Faisal</span>
                  </div>
                  <div className="grid grid-cols-[140px_1fr] md:grid-cols-[160px_1fr] gap-2 items-center">
                    <span className="font-medium text-muted-foreground">Direktur Utama</span>
                    <span className="font-medium">: Benediktus Edy Wibowo</span>
                  </div>
                </div>
              </div>

              {/* Komposisi Saham */}
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-medium text-foreground mb-8 flex items-center">
                  <span className="w-8 h-px bg-accent mr-4"></span> Komposisi Saham
                </h2>
                <div className="space-y-6 text-lg text-foreground bg-neutral-50 p-8 rounded-2xl border border-border h-full">
                  <div className="flex justify-between items-center border-b border-border/50 pb-4">
                    <span className="text-muted-foreground">5.000 Lembar Saham</span>
                    <span className="font-bold text-xl text-primary">50%</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border/50 pb-4">
                    <span className="text-muted-foreground">2.500 Lembar Saham</span>
                    <span className="font-bold text-xl text-primary">25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">2.500 Lembar Saham</span>
                    <span className="font-bold text-xl text-primary">25%</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
