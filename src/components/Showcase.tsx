import { useReveal } from '@/hooks/useReveal';
import { Award, GraduationCap, Star, Quote, ChevronRight } from 'lucide-react';
import type { Route } from '@/App';
import { doctors } from '@/data/clinic';

export default function ShowcaseHome({ onNavigate }: { onNavigate: (r: Route) => void }) {
  const { ref, visible } = useReveal();

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className={`text-center max-w-2xl mx-auto mb-14 reveal ${visible ? 'is-visible' : ''}`}>
          <span className="eyebrow justify-center">
            <Star className="w-4 h-4" />
            Our Specialists
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Meet your{' '}
            <span className="font-display italic text-primary-600">doctors</span>
          </h2>
          <p className="mt-4 text-lg text-ink-light leading-relaxed">
            Experienced, compassionate, and dedicated to your health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {doctors.map((doc, i) => {
            const { ref: cardRef, visible: cardVis } = useReveal();
            return (
              <div
                key={doc.id}
                ref={cardRef}
                className={`reveal ${cardVis ? 'is-visible' : ''} group bg-white rounded-3xl border border-slate-200/80 overflow-hidden hover:shadow-2xl hover:shadow-primary-900/8 transition-all duration-300 hover:-translate-y-1`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-2/5 relative overflow-hidden">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-56 sm:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="sm:w-3/5 p-6 lg:p-7">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 rounded-full text-xs font-semibold text-primary-700 mb-3">
                      {doc.specialty}
                    </div>
                    <h3 className="text-xl font-extrabold text-ink mb-1">{doc.name}</h3>
                    <p className="text-sm text-ink-soft mb-3">{doc.qualifications} · {doc.experience}</p>
                    <p className="text-sm text-ink-light leading-relaxed line-clamp-3 mb-4">{doc.about}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {doc.highlights.slice(0, 2).map((h) => (
                        <span key={h} className="text-xs px-2.5 py-1 bg-surface-alt rounded-lg text-ink-light font-medium">
                          {h}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => onNavigate('doctors')}
                      className="flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:gap-2 transition-all"
                    >
                      View full profile
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
