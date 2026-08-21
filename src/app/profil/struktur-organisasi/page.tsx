export default function StrukturOrganisasi() {
  return (
    <>
      <section className="bg-neutral-50 py-20 md:py-28 border-b border-border">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-heading font-medium mb-4">Struktur Organisasi</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Sistem kepemimpinan dan manajerial yang menggerakkan setiap operasional TRICIPTA LAND.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative w-full rounded-xl overflow-hidden shadow-sm border border-border bg-white">
              <img 
                src="/assets/temporary/bagan_organisasi.jfif" 
                alt="Bagan Struktur Organisasi TRICIPTA LAND" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
