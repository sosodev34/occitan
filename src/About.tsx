import { Users, Target, Sprout } from 'lucide-react';

export function About() {
  const items = [
    {
      icon: <Users className="w-12 h-12 text-red-600" />,
      title: 'Communauté',
      description: 'Nous rassemblons producteurs, artisans et passionnés autour des valeurs du terroir occitan.'
    },
    {
      icon: <Target className="w-12 h-12 text-red-600" />,
      title: 'Qualité',
      description: "Nous sélectionnons des produits d'exception, cultivés et transformés avec soin dans notre région."
    },
    {
      icon: <Sprout className="w-12 h-12 text-red-600" />,
      title: 'Durabilité',
      description: "Nous favorisons les circuits courts et les pratiques respectueuses de l'environnement."
    }
  ];

  return (
    <section id="association" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-4">
            Notre mission
          </p>
          <h2 className="mb-4 text-3xl md:text-4xl font-semibold text-red-800">L'Association Cœur d'Occitanie</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Valoriser le patrimoine gastronomique de l'Occitanie en créant des liens directs entre producteurs locaux et
            consommateurs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative p-8 bg-gradient-to-b from-amber-50 to-white rounded-2xl border border-red-100 shadow-[0_12px_35px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition duration-300"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white shadow-lg border border-red-100 flex items-center justify-center">
                {item.icon}
              </div>
              <div className="mt-10 text-center space-y-3">
                <h3 className="text-xl font-semibold text-red-800">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
