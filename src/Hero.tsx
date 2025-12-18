export function Hero() {
  const scrollToEvents = () => document.getElementById('evenements')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="accueil" className="relative overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1671021748079-a06a8fad06d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2NpdGFuaWUlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzY1OTEzNzE5fDA&ixlib=rb-4.1.0&q=80&w=1600)"
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.35),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(0,0,0,0.25),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(0,0,0,0.25),transparent_35%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm shadow-lg">
          <span className="h-2 w-2 rounded-full bg-amber-300 animate-pulse" />
          <span>Marché de Montpellier · 13 avril 2025</span>
        </div>

        <div className="mt-8 grid gap-10 md:grid-cols-[1.3fr_1fr] items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
              Le meilleur du terroir occitan, à portée de main
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Producteurs engagés, saveurs authentiques et circuits courts. Retrouvez-nous sur les marchés pour
              découvrir des produits locaux choisis avec soin.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToEvents}
                className="bg-white text-red-700 px-6 py-3 rounded-full font-medium shadow-lg shadow-red-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/40 transition-transform duration-300"
              >
                Prochain marché
              </button>
              <a
                href="#produits"
                className="px-6 py-3 rounded-full border border-white/40 text-white hover:bg-white/10 transition duration-300"
              >
                Découvrir les produits
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-white/10 blur-3xl rounded-full" aria-hidden />
            <div className="relative bg-white/15 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-6">
              <div className="text-sm text-white/80 mb-4">Prochaine date</div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-lg font-semibold">Marché de Montpellier</p>
                  <p className="text-white/80 text-sm">Esplanade Charles de Gaulle</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/20 text-xs">13 avril 2025</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm text-white/80">
                <div className="p-3 rounded-xl bg-white/10">
                  <p className="text-white font-medium">9h00 - 14h00</p>
                  <p className="text-white/70">Horaires</p>
                </div>
                <div className="p-3 rounded-xl bg-white/10">
                  <p className="text-white font-medium">Producteurs locaux</p>
                  <p className="text-white/70">Dégustations & ateliers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
