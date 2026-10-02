import { useReveal } from '@/hooks/useReveal';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh K.',
    role: 'Septoplasty patient',
    quote: 'Dr. Monika Sharma diagnosed my breathing problem accurately and performed septoplasty. I can finally breathe freely. Excellent care at the clinic.',
    rating: 5,
    delay: 0,
  },
  {
    name: 'Priya S.',
    role: 'Knee replacement patient',
    quote: 'Dr. Mohapatra did my knee replacement surgery. His expertise and care were outstanding. I am walking pain-free within weeks. Highly recommend!',
    rating: 5,
    delay: 100,
  },
  {
    name: 'Amit G.',
    role: 'Tonsillitis patient',
    quote: 'My son had recurring tonsillitis. Dr. Monika performed bloodless tonsil surgery and the recovery was very smooth. Great experience at Shree Clinic.',
    rating: 5,
    delay: 200,
  },
];

const stats = [
  { value: '2,000+', label: 'Patients treated' },
  { value: '500+', label: 'Surgeries performed' },
  { value: '4.9/5', label: 'Patient rating' },
  { value: '26+', label: 'Years combined experience' },
];

export default function StatsHome() {
  const { ref, visible } = useReveal();

  return (
    <section className="relative py-20 lg:py-28 bg-ink text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className={`text-center max-w-2xl mx-auto mb-14 reveal ${visible ? 'is-visible' : ''}`}>
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-teal-300">
            <Star className="w-4 h-4 fill-teal-300" />
            Patient Stories
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Trusted by{' '}
            <span className="font-display italic text-teal-300">our community</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {testimonials.map((t) => {
            const { ref: cardRef, visible: cardVis } = useReveal();
            return (
              <div
                key={t.name}
                ref={cardRef}
                className={`reveal ${cardVis ? 'is-visible' : ''} relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300`}
                style={{ transitionDelay: `${t.delay}ms` }}
              >
                <Quote className="w-8 h-8 text-primary-400/40 mb-4" />
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-5">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-teal-500 flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-8 border-t border-white/10">
          {stats.map((s, i) => {
            const { ref: cardRef, visible: cardVis } = useReveal();
            return (
              <div
                key={s.label}
                ref={cardRef}
                className={`reveal ${cardVis ? 'is-visible' : ''} text-center`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-3xl lg:text-5xl font-extrabold tracking-tight mb-1 text-white">
                  {s.value}
                </div>
                <div className="text-sm text-slate-400 font-medium">{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
