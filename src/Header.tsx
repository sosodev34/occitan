import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Coeur d'Occitanie logo" className="w-10 h-10 object-contain" />
            <div>
              <h1 className="text-red-700">Cœur d'Occitanie</h1>
              <p className="text-xs text-gray-600">Produits locaux & Marchés</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('accueil')} className="text-gray-700 hover:text-red-600 transition-colors">
              Accueil
            </button>
            <button onClick={() => scrollToSection('association')} className="text-gray-700 hover:text-red-600 transition-colors">
              L'Association
            </button>
            <button onClick={() => scrollToSection('produits')} className="text-gray-700 hover:text-red-600 transition-colors">
              Nos Produits
            </button>
            <button onClick={() => scrollToSection('evenements')} className="text-gray-700 hover:text-red-600 transition-colors">
              Événements
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('accueil')} className="text-gray-700 hover:text-red-600 transition-colors text-left">
                Accueil
              </button>
              <button onClick={() => scrollToSection('association')} className="text-gray-700 hover:text-red-600 transition-colors text-left">
                L'Association
              </button>
              <button onClick={() => scrollToSection('produits')} className="text-gray-700 hover:text-red-600 transition-colors text-left">
                Nos Produits
              </button>
              <button onClick={() => scrollToSection('evenements')} className="text-gray-700 hover:text-red-600 transition-colors text-left">
                Événements
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
