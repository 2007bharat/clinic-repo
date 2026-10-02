import { useEffect, useState } from 'react';
import { Menu, X, Stethoscope, Calendar, Phone } from 'lucide-react';
import type { Route } from '@/App';
import { clinic } from '@/data/clinic';

const links: { label: string; route: Route }[] = [
  { label: 'Home', route: 'home' },
  { label: 'About', route: 'about' },
  { label: 'Our Doctors', route: 'doctors' },
  { label: 'Services', route: 'services' },
  { label: 'Contact', route: 'contact' },
];

export default function Navbar({
  current,
  onNavigate,
}: {
  current: Route;
  onNavigate: (r: Route) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (r: Route) => {
    onNavigate(r);
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-slate-200/60 shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <button onClick={() => handleNav('home')} className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-primary-600 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3">
            <Stethoscope className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-none text-left">
            <span className="font-extrabold text-base tracking-tight text-ink">Shree Ortho &amp; ENT</span>
            <span className="text-[11px] font-medium text-ink-soft tracking-wide">Clinic, Dhankot</span>
          </div>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.route}
              onClick={() => handleNav(l.route)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                current === l.route
                  ? 'text-primary-700 bg-primary-50'
                  : 'text-ink-light hover:text-primary-700 hover:bg-primary-50'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href={`tel:${clinic.phoneRaw}`} className="text-sm font-semibold text-ink-light hover:text-ink transition-colors flex items-center gap-1.5">
            <Phone className="w-4 h-4" />
            {clinic.phone}
          </a>
          <button onClick={() => handleNav('contact')} className="btn-primary text-sm py-2.5 px-5">
            <Calendar className="w-4 h-4" />
            Book Appointment
          </button>
        </div>

        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 glass border-b border-slate-200/60 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <button
              key={l.route}
              onClick={() => handleNav(l.route)}
              className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors text-left ${
                current === l.route
                  ? 'text-primary-700 bg-primary-50'
                  : 'text-ink-light hover:text-primary-700 hover:bg-primary-50'
              }`}
            >
              {l.label}
            </button>
          ))}
          <div className="h-px bg-slate-200 my-2" />
          <a href={`tel:${clinic.phoneRaw}`} className="px-4 py-3 text-sm font-semibold text-ink hover:bg-slate-100 rounded-lg flex items-center gap-2">
            <Phone className="w-4 h-4" />
            {clinic.phone}
          </a>
          <button onClick={() => handleNav('contact')} className="btn-primary text-sm justify-center">
            <Calendar className="w-4 h-4" />
            Book Appointment
          </button>
        </div>
      </div>
    </header>
  );
}
