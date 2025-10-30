import { useState } from 'react';
import { X } from 'lucide-react';

interface Rice {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

const rices: Rice[] = [
  { id: '01', title: 'Current Workhorse', subtitle: 'Default Cosmic on CachyOS', image: '/images/rice/01.png' },
  { id: '02', title: 'One time i touched KDE', subtitle: 'KDE Plasma 6 on Arch Linux', image: '/images/rice/02.png' },
  { id: '03', title: 'The best XFCE setup', subtitle: 'XFCE on Arch', image: '/images/rice/05.png' },
  { id: '04', title: 'Hyprslop Shit', subtitle: 'So ashamed of ever using Hyrpland', image: '/images/rice/06.png' },
  { id: '05', title: 'Qtile in its glory', subtitle: 'One of the first customizations i did mon linux', image: '/images/rice/07.png' },
  { id: '06', title: 'Trying out Fedora with I3', subtitle: 'PLZ ignore terminal contents', image: '/images/rice/08.png' },
  { id: '07', title: 'Either Qtile or I3, its so old...', subtitle: 'From high school times', image: '/images/rice/09.png' },
  { id: '08', title: 'Nordic Qtile', subtitle: 'Qtile my beloved <3 Also from high school', image: '/images/rice/10.png' },
  { id: '09', title: 'Qtile AGAIN', subtitle: 'This one is insanely old, one of the first in fact.', image: '/images/rice/11.png' },
];

export default function Rices() {
  const [selectedRice, setSelectedRice] = useState<Rice | null>(null);

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-4 sm:space-y-6">
        <div className="brand-border">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-accent-blue">[ Rices ]</h1>
          <p className="mb-4 sm:mb-6 opacity-90 text-sm sm:text-base">
            A collection of my Linux desktop customizations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {rices.map((rice) => (
            <button
              key={rice.id}
              onClick={() => setSelectedRice(rice)}
              className="brand-border hover:bg-accent-blue hover:text-white transition-colors duration-200 text-left group cursor-pointer"
            >
              <div className="aspect-video w-full overflow-hidden mb-3 bg-background">
                <img
                  src={rice.image}
                  alt={rice.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  loading="lazy"
                />
              </div>
              <h2 className="text-base sm:text-lg font-bold mb-1">{rice.title}</h2>
              <p className="text-xs sm:text-sm opacity-75">{rice.subtitle}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedRice && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedRice(null)}
        >
          <button
            onClick={() => setSelectedRice(null)}
            className="absolute top-4 right-4 button-like bg-accent-blue text-white p-2"
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <div className="max-w-7xl max-h-[90vh] flex flex-col items-center">
            <img
              src={selectedRice.image}
              alt={selectedRice.title}
              className="max-w-full max-h-[80vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-4 text-center text-white">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">{selectedRice.title}</h2>
              <p className="text-sm sm:text-base opacity-90">{selectedRice.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
