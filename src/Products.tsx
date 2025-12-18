export function Products() {
  const products = [
    {
      title: 'Fromages fermiers',
      description: 'Découvrez nos fromages artisanaux issus de fermes locales',
      image:
        'https://images.unsplash.com/photo-1758369908837-38166bca7e1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMGNoZWVzZSUyMHByb2R1Y3RzfGVufDF8fHx8MTc2NTkxMzcxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Légumes de saison',
      description: 'Produits frais cueillis le jour même par nos maraîchers',
      image:
        'https://images.unsplash.com/photo-1748342319942-223b99937d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBtYXJrZXR8ZW58MXx8fHwxNzY1ODgxMzUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Pains artisanaux',
      description: 'Pains au levain naturel, pétris et cuits selon la tradition',
      image:
        'https://images.unsplash.com/photo-1627308593341-d886acdc06a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnJlYWQlMjBiYWtlcnl8ZW58MXx8fHwxNzY1ODExNjY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Vins du terroir',
      description: "Sélection de vins issus des vignobles d'Occitanie",
      image:
        'https://images.unsplash.com/photo-1682789217729-8a3a931953de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwdmluZXlhcmQlMjBmcmFuY2V8ZW58MXx8fHwxNzY1OTEzNzE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <section id="produits" className="py-20 bg-gradient-to-b from-amber-50 via-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-4">
            Sélection locale
          </p>
          <h2 className="mb-4 text-3xl md:text-4xl font-semibold text-red-800">Nos Produits Locaux</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Une sélection rigoureuse de produits authentiques, cultivés et transformés avec passion par nos producteurs
            locaux.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_10px_45px_rgba(0,0,0,0.08)] border border-red-100/60 hover:-translate-y-2 hover:shadow-[0_18px_60px_rgba(239,68,68,0.25)] transition duration-300"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-red-800">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
                <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-amber-400 rounded-full group-hover:w-20 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
