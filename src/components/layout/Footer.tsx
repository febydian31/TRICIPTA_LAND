import Link from "next/link";

export function Footer() {
  const footerLinks = [
    {
      title: "Perusahaan",
      links: [
        { name: "Tentang Kami", href: "/profil/tentang-kami" },
        { name: "Pendiri", href: "/profil/profil-pendiri" },
        { name: "Legalitas", href: "/profil/legalitas-perusahaan" },
      ],
    },
    {
      title: "Project",
      links: [
        { name: "Semua Project", href: "/project" },
        { name: "Portofolio", href: "/portfolio" },
      ],
    },
    {
      title: "Info",
      links: [
        { name: "Artikel", href: "/artikel" },
      ],
    },
  ];

  return (
    <footer className="bg-[#163D19] text-white pt-12 pb-6 border-t border-green-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-4 group mb-4">
              <img src="/assets/logo.png" alt="TRICIPTA LAND Logo" className="h-10 w-10 object-cover bg-white rounded-full shadow-md group-hover:scale-105 transition-transform" />
              <span className="text-white font-heading font-bold text-xl tracking-wide">
                TRICIPTA LAND
              </span>
            </Link>
            <p className="text-white/80 text-sm max-w-xs leading-relaxed">
              Hunian Berkualitas, Hidup Lebih Bermakna. Kami adalah pengembang properti terpercaya yang berdedikasi membangun masa depan yang lebih baik.
            </p>
          </div>

          {/* Links Cols */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-heading font-semibold text-lg mb-4 text-white">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-white/50 text-xs">
          <p>&copy; {new Date().getFullYear()} Tricipta Land. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <span>&middot;</span>
            <Link href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
