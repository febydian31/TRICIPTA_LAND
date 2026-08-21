import { Building2, Home } from "lucide-react";

export default function Portfolio() {
  return (
    <>
      <section className="bg-neutral-50 py-20 md:py-28 border-b border-border">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-heading font-medium mb-4 text-center">Portofolio & Rekam Jejak</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-center">
            Pencapaian dan pengembangan properti yang telah diwujudkan oleh TRICIPTA LAND beserta anak perusahaan.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container max-w-5xl space-y-12">
          
          {/* All Projects Grid */}
          <div className="pt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 0: Cakrawala */}
            <div className="border-2 border-primary/20 rounded-3xl p-6 relative bg-white shadow-sm flex flex-col hover:border-primary/50 transition-colors">
              <div className="flex gap-4 mb-4">
                <div className="w-16 h-16 shrink-0 rounded flex flex-col items-center justify-center text-primary border-2 border-primary/20 bg-green-50">
                  <span className="font-bold text-xs text-green-700">CML</span>
                  <span className="font-bold text-[8px] tracking-widest text-green-600">GROUP</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground leading-tight">PT Cakrawala Mutiara Land Group</h3>
                  <p className="font-bold text-foreground text-sm mt-2">Holding Company Summary</p>
                  <p className="italic text-muted-foreground text-sm">(All Projects)</p>
                </div>
              </div>
              <div className="space-y-2 mt-auto pt-4 border-t border-border">
                <div className="font-bold text-primary text-lg">36 Ha</div>
                <div className="flex items-center gap-2 font-medium text-foreground text-sm">
                  <Home className="w-5 h-5 shrink-0" />
                  <span>2.982 FLPP, 96 RKT, 13 Ruko</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-foreground text-sm">
                  <div className="w-5 h-5 rounded-full border-2 border-foreground flex items-center justify-center text-[10px] shrink-0">Rp</div>
                  <span>620,1 bio</span>
                </div>
                <div className="pt-2 font-bold text-sm">
                  <span className="text-red-600">SOLD OUT</span> - <span className="text-primary">EXISTING</span>
                </div>
              </div>
            </div>

            {/* Card 1 */}
            <div className="border-2 border-red-500 rounded-3xl p-6 relative bg-red-50/10 shadow-sm flex flex-col hover:border-red-600 transition-colors">
              <div className="flex gap-4 mb-4">
                <div className="w-16 h-16 shrink-0 bg-red-100 rounded flex items-center justify-center text-red-500">
                  <Building2 className="w-8 h-8 opacity-50" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground leading-tight">PT Cahaya Mutiara Land</h3>
                  <p className="font-bold text-foreground text-sm mt-2">Grand Mutiara Cibungbulang Tahap 1</p>
                  <p className="italic text-muted-foreground text-sm">(2024-2025)</p>
                </div>
              </div>
              <div className="space-y-2 mt-auto pt-4 border-t border-red-200">
                <div className="font-bold text-primary text-lg">4,7 Ha</div>
                <div className="flex items-center gap-2 font-medium text-foreground text-sm">
                  <Home className="w-5 h-5 shrink-0" />
                  <span>384 FLPP, 14 RKT, 3 Ruko</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-foreground text-sm">
                  <div className="w-5 h-5 rounded-full border-2 border-foreground flex items-center justify-center text-[10px] shrink-0">Rp</div>
                  <span>81,8 bio</span>
                </div>
                <div className="pt-2 font-bold text-red-600">SOLD OUT</div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border-2 border-primary/20 rounded-3xl p-6 relative bg-white shadow-sm flex flex-col hover:border-primary/50 transition-colors">
              <div className="flex gap-4 mb-4">
                <div className="w-16 h-16 shrink-0 bg-neutral-100 rounded flex items-center justify-center text-primary">
                  <Building2 className="w-8 h-8 opacity-50" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground leading-tight">PT Cakra Manggala Lestari</h3>
                  <p className="font-bold text-foreground text-sm mt-2">Grand Mutiara Cibungbulang Tahap 2</p>
                  <p className="italic text-muted-foreground text-sm">(2025-2027)</p>
                </div>
              </div>
              <div className="space-y-2 mt-auto pt-4 border-t border-border">
                <div className="font-bold text-primary text-lg">4,3 Ha</div>
                <div className="flex items-center gap-2 font-medium text-foreground text-sm">
                  <Home className="w-5 h-5 shrink-0" />
                  <span>394 FLPP</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-foreground text-sm">
                  <div className="w-5 h-5 rounded-full border-2 border-foreground flex items-center justify-center text-[10px] shrink-0">Rp</div>
                  <span>72,2 bio</span>
                </div>
                <div className="pt-2 font-bold text-primary">EXISTING</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border-2 border-primary/20 rounded-3xl p-6 relative bg-white shadow-sm flex flex-col hover:border-primary/50 transition-colors">
              <div className="flex gap-4 mb-4">
                <div className="w-16 h-16 shrink-0 bg-neutral-100 rounded flex items-center justify-center text-primary">
                  <Building2 className="w-8 h-8 opacity-50" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground leading-tight">PT Catu Manikam Lestari</h3>
                  <p className="font-bold text-foreground text-sm mt-2">Grand Dramaga City</p>
                  <p className="italic text-muted-foreground text-sm">(2025-2027)</p>
                </div>
              </div>
              <div className="space-y-2 mt-auto pt-4 border-t border-border">
                <div className="font-bold text-primary text-lg">4,7 Ha</div>
                <div className="flex items-center gap-2 font-medium text-foreground text-sm">
                  <Home className="w-5 h-5 shrink-0" />
                  <span>308 FLPP, 43 RKT, 5 Ruko</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-foreground text-sm">
                  <div className="w-5 h-5 rounded-full border-2 border-foreground flex items-center justify-center text-[10px] shrink-0">Rp</div>
                  <span>92,9 bio</span>
                </div>
                <div className="pt-2 font-bold text-primary">EXISTING</div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="border-2 border-primary/20 rounded-3xl p-6 relative bg-white shadow-sm flex flex-col hover:border-primary/50 transition-colors">
              <div className="flex gap-4 mb-4">
                <div className="w-16 h-16 shrink-0 bg-neutral-100 rounded flex items-center justify-center text-primary">
                  <Building2 className="w-8 h-8 opacity-50" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground leading-tight">PT Catu Manikam Lestari</h3>
                  <p className="font-bold text-foreground text-sm mt-2">Grand Mutiara Bogor</p>
                  <p className="italic text-muted-foreground text-sm">(2026-2028)</p>
                </div>
              </div>
              <div className="space-y-2 mt-auto pt-4 border-t border-border">
                <div className="font-bold text-primary text-lg">10,3 Ha</div>
                <div className="flex items-center gap-2 font-medium text-foreground text-sm">
                  <Home className="w-5 h-5 shrink-0" />
                  <span>810 FLPP</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-foreground text-sm">
                  <div className="w-5 h-5 rounded-full border-2 border-foreground flex items-center justify-center text-[10px] shrink-0">Rp</div>
                  <span>148,4 bio</span>
                </div>
                <div className="pt-2 font-bold text-primary">EXISTING</div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="border-2 border-red-500 rounded-3xl p-6 relative bg-red-50/30 flex flex-col hover:bg-red-50/50 transition-colors shadow-sm">
              <div className="flex gap-4 mb-4">
                <div className="w-16 h-16 shrink-0 bg-red-100 rounded flex items-center justify-center text-red-500">
                  <Building2 className="w-8 h-8 opacity-50" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground leading-tight">PT Parama Mulia Propertindo</h3>
                  <p className="text-red-700 italic font-bold text-xs">JO with Investor</p>
                  <p className="font-bold text-foreground text-sm mt-2">Mulia Land Bogor Sektor 1</p>
                  <p className="italic text-muted-foreground text-sm">(2021-2022)</p>
                </div>
              </div>
              <div className="space-y-2 mt-auto pt-4 border-t border-red-200">
                <div className="font-bold text-primary text-lg">2,3 Ha</div>
                <div className="flex items-center gap-2 font-medium text-foreground text-sm">
                  <Home className="w-5 h-5 shrink-0" />
                  <span>179 FLPP, 16 RKT</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-foreground text-sm">
                  <div className="w-5 h-5 rounded-full border-2 border-foreground flex items-center justify-center text-[10px] shrink-0">Rp</div>
                  <span>41,95 bio</span>
                </div>
                <div className="pt-2 font-bold text-red-600">SOLD OUT</div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="border-2 border-red-500 rounded-3xl p-6 relative bg-red-50/30 flex flex-col hover:bg-red-50/50 transition-colors shadow-sm">
              <div className="flex gap-4 mb-4">
                <div className="w-16 h-16 shrink-0 bg-red-100 rounded flex items-center justify-center text-red-500">
                  <Building2 className="w-8 h-8 opacity-50" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground leading-tight">PT Parama Mulia Propertindo</h3>
                  <p className="text-red-700 italic font-bold text-xs">JO with Investor</p>
                  <p className="font-bold text-foreground text-sm mt-2">Mulia Land Bogor Sektor 2</p>
                  <p className="italic text-muted-foreground text-sm">(2023-2025)</p>
                </div>
              </div>
              <div className="space-y-2 mt-auto pt-4 border-t border-red-200">
                <div className="font-bold text-primary text-lg">10,2 Ha</div>
                <div className="flex items-center gap-2 font-medium text-foreground text-sm">
                  <Home className="w-5 h-5 shrink-0" />
                  <span>907 FLPP, 23 RKT, 5 Ruko</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-foreground text-sm">
                  <div className="w-5 h-5 rounded-full border-2 border-foreground flex items-center justify-center text-[10px] shrink-0">Rp</div>
                  <span>182,9 bio</span>
                </div>
                <div className="pt-2 font-bold text-red-600">SOLD OUT</div>
              </div>
            </div>

          </div>

          {/* Pagination */}
          <div className="pt-12 flex justify-center">
            <nav className="flex items-center gap-2" aria-label="Pagination">
              <button className="px-4 py-2 text-sm font-medium text-muted-foreground bg-white border border-border rounded-lg hover:bg-neutral-50 transition-colors cursor-not-allowed opacity-50" disabled>
                Previous
              </button>
              <button className="w-10 h-10 flex items-center justify-center text-sm font-bold text-white bg-primary rounded-lg shadow-sm">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center text-sm font-medium text-foreground bg-white border border-border rounded-lg hover:bg-neutral-50 transition-colors">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center text-sm font-medium text-foreground bg-white border border-border rounded-lg hover:bg-neutral-50 transition-colors">
                3
              </button>
              <button className="px-4 py-2 text-sm font-medium text-foreground bg-white border border-border rounded-lg hover:bg-neutral-50 transition-colors">
                Next
              </button>
            </nav>
          </div>

        </div>
      </section>
    </>
  );
}
