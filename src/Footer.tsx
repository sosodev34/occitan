import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Coeur d'Occitanie logo" className="w-8 h-8 object-contain" />
              <h3 className="text-white">Cœur d'Occitanie</h3>
            </div>
            <p className="text-gray-400">
              Promouvoir les produits locaux et créer du lien entre producteurs et consommateurs en Occitanie.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500" />
                <span className="text-gray-400">asso.coeurdoccitanie@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500" />
                <span className="text-gray-400">05 61 00 00 00</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <span className="text-gray-400">Montpellier, Occitanie</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-white">Horaires</h3>
            <div className="text-gray-400 space-y-2">
              <p>Lundi - Vendredi: 9h - 18h</p>
              <p>Samedi: 9h - 13h</p>
              <p>Dimanche: Fermé</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Cœur d'Occitanie. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
