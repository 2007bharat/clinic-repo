import { useReveal } from '@/hooks/useReveal';
import { Calendar, Phone, MapPin, Clock, ChevronRight } from 'lucide-react';
import type { Route } from '@/App';
import { clinic } from '@/data/clinic';

export default function CTAHome({ onNavigate }: { onNavigate: (r: Route) => void }) {
  const { ref, visible } = useReveal();

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-surface-alt">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} text-center`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 rounded-full text-sm font-medium text-ink-light shadow-sm mb-6">
            <Calendar className="w-4 h-4 text-primary-600" />
            <span>Book your consultation today</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Your health{' '}
            <span className="font-display italic text-primary-600">can't wait</span>
          </h2>

          <p className="mt-6 text-lg lg:text-xl text-ink-light max-w-xl mx-auto leading-relaxed">
            Visit {clinic.name} in Dhankot, Sector 102, Gurugram.
            Our specialists are ready to help you feel better.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => onNavigate('contact')} className="btn-primary text-base group">
              <Calendar className="w-5 h-5" />
              Book an Appointment
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a href={`tel:${clinic.phoneRaw}`} className="btn-secondary text-base group">
              <Phone className="w-4 h-4" />
              Call {clinic.phone}
            </a>
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200/80">
              <MapPin className="w-5 h-5 text-primary-600 shrink-0" />
              <div className="text-left">
                <div className="text-xs text-ink-soft">Location</div>
                <div className="text-sm font-semibold text-ink">Dhankot, Sec 102</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200/80">
              <Clock className="w-5 h-5 text-teal-600 shrink-0" />
              <div className="text-left">
                <div className="text-xs text-ink-soft">Timings</div>
                <div className="text-sm font-semibold text-ink">Mon–Sat: 1–2 PM, 7–8:45 PM</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200/80">
              <Phone className="w-5 h-5 text-amber-600 shrink-0" />
              <div className="text-left">
                <div className="text-xs text-ink-soft">Phone</div>
                <div className="text-sm font-semibold text-ink">{clinic.phone}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
