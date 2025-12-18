import { Calendar, MapPin, Clock } from 'lucide-react';

export function Events() {
  const events = [
    {
      title: 'Marché de Montpellier',
      date: '13 avril 2025',
      time: '9h00 - 14h00',
      location: 'Esplanade Charles de Gaulle, Montpellier',
      description: "Découvrez les saveurs authentiques de l'Occitanie"
    }
  ];

  return (
    <section id="evenements" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-4">
            À vos agendas
          </p>
          <h2 className="mb-4 text-3xl md:text-4xl font-semibold text-red-800">Prochains Événements & Marchés</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Retrouvez-nous sur nos marchés locaux et venez à la rencontre de nos producteurs.
          </p>
        </div>

        <div className="flex justify-center">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative bg-amber-50 rounded-2xl p-8 border border-red-100 shadow-[0_12px_45px_rgba(0,0,0,0.08)] max-w-xl w-full overflow-hidden"
            >
              <div className="absolute -right-20 -top-20 w-56 h-56 bg-gradient-to-br from-red-500/15 via-orange-400/10 to-transparent rounded-full blur-3xl" />
              <div className="relative space-y-6">
                <h3 className="text-2xl font-semibold text-red-800">{event.title}</h3>

                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>{event.date}</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>{event.time}</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-gray-600">{event.description}</p>

                <div className="flex gap-3 pt-2">
                  <span className="px-3 py-1 rounded-full bg-white text-red-700 text-sm font-medium border border-red-100">Dégustations</span>
                  <span className="px-3 py-1 rounded-full bg-white text-red-700 text-sm font-medium border border-red-100">Producteurs locaux</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
