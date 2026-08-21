export default function StrukturOrganisasi() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-neutral-50 py-20 md:py-28 border-b border-border">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-medium mb-4">Struktur Organisasi</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tim profesional di balik kesuksesan dan keberlanjutan proyek-proyek TRICIPTA LAND.
          </p>
        </div>
      </section>

      {/* Org Chart Concept */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              
              {/* Komisaris */}
              <div className="bg-primary text-white p-6 md:w-64 text-center border-b-4 border-accent shadow-sm">
                <h3 className="font-heading text-xl font-medium">Dewan Komisaris</h3>
                <p className="text-white/70 text-sm mt-1">TRICIPTA LAND</p>
              </div>
              
              <div className="w-px h-12 bg-border"></div>
              
              {/* Direktur */}
              <div className="bg-white border border-border p-6 md:w-64 text-center shadow-sm">
                <h3 className="font-heading text-xl font-medium text-foreground">Direktur Utama</h3>
                <p className="text-muted-foreground text-sm mt-1">TRICIPTA LAND</p>
              </div>

              <div className="w-px h-12 bg-border"></div>
              <div className="w-full max-w-2xl h-px bg-border"></div>

              {/* Subsidiaries / Divisions */}
              <div className="flex flex-col md:flex-row justify-between w-full max-w-2xl pt-12 gap-8 md:gap-4 relative">
                {/* Connector lines (Desktop) */}
                <div className="hidden md:block absolute top-0 left-1/4 w-px h-12 bg-border"></div>
                <div className="hidden md:block absolute top-0 left-1/2 w-px h-12 bg-border"></div>
                <div className="hidden md:block absolute top-0 left-3/4 w-px h-12 bg-border"></div>

                <div className="bg-neutral-50 border border-border p-6 text-center w-full shadow-sm">
                  <h3 className="font-heading text-lg font-medium">PT CML 1</h3>
                  <p className="text-muted-foreground text-xs mt-1">Divisi Residensial</p>
                </div>
                <div className="bg-neutral-50 border border-border p-6 text-center w-full shadow-sm">
                  <h3 className="font-heading text-lg font-medium">PT CML 2</h3>
                  <p className="text-muted-foreground text-xs mt-1">Divisi Komersial</p>
                </div>
                <div className="bg-neutral-50 border border-border p-6 text-center w-full shadow-sm">
                  <h3 className="font-heading text-lg font-medium">PT CML 3</h3>
                  <p className="text-muted-foreground text-xs mt-1">Manajemen Properti</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
