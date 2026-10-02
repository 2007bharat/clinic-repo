import { Stethoscope, Phone, Mail, MapPin, Facebook, Instagram, Clock } from 'lucide-react';
import type { Route } from '@/App';
import { clinic } from '@/data/clinic';

const footerLinks: { title: string; items: { label: string; route: Route }[] }[] = [
  {
    title: 'Quick Links',
    items: [
      { label: 'Home', route: 'home' },
      { label: 'About Clinic', route: 'about' },
      { label: 'Our Doctors', route: 'doctors' },
      { label: 'Services', route: 'services' },
      { label: 'Contact', route: 'contact' },
    ],
  },
];

export default function Footer({ onNavigate }: { onNavigate: (r: Route) => void }) {
  return (
    <footer className="relative bg-ink text-slate-400 pt-16 pb-8 overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary-600 flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-lg tracking-tight text-white">{clinic.name}</span>
                <span className="text-[11px] font-medium text-slate-500 tracking-wide">Dhankot, Sector 102, Gurugram</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              {clinic.tagline}. Providing expert medical care with compassion and the latest technology.
            </p>

            <div className="mt-5 space-y-2">
              <a href={`tel:${clinic.phoneRaw}`} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-primary-400" />
                {clinic.phone}
              </a>
              <a href={`mailto:${clinic.email}`} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-primary-400" />
                {clinic.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                <span>{clinic.addressShort}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Clock className="w-4 h-4 text-primary-400" />
                <span>Mon–Sat: 1–2 PM &amp; 7–8:45 PM</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-5">
              {[Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary-600 hover:border-primary-600 hover:scale-110 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-8">
            {footerLinks.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-bold text-white mb-3">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.items.map((l) => (
                    <li key={l.label}>
                      <button
                        onClick={() => onNavigate(l.route)}
                        className="text-sm text-slate-400 hover:text-primary-400 transition-colors"
                      >
                        {l.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h4 className="text-sm font-bold text-white mb-3">Specialties</h4>
              <ul className="space-y-2.5">
                {['ENT Surgery', 'Orthopedics', 'Joint Replacement', 'Trauma Care', 'Ilizarov Surgery'].map((s) => (
                  <li key={s}>
                    <button
                      onClick={() => onNavigate('services')}
                      className="text-sm text-slate-400 hover:text-primary-400 transition-colors text-left"
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-500">
            &copy; 2026 {clinic.name}. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Dhankot, Sector 102, Gurugram, Haryana
          </p>
        </div>
      </div>
    </footer>
  );
}
