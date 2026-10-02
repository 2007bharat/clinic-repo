import { useReveal } from '@/hooks/useReveal';
import { Ear, Bone, Wind, Activity, ChevronRight } from 'lucide-react';
import type { Route } from '@/App';

const specialties = [
  {
    icon: Ear,
    title: 'Hearing Loss & Tinnitus',
    desc: 'Comprehensive audiometric testing, hearing aid fitting, and tinnitus management.',
    color: 'primary',
    delay: 0,
  },
  {
    icon: Wind,
    title: 'Chronic Sinusitis',
    desc: 'FESS, balloon sinuplasty, and medical management for ongoing sinus inflammation.',
    color: 'teal',
    delay: 80,
  },
  {
    icon: Bone,
    title: 'Knee & Hip Pain',
    desc: 'Robotic joint replacement, arthroscopy, and conservative treatment options.',
    color: 'amber',
    delay: 160,
  },
  {
    icon: Activity,
    title: 'Fractures & Trauma',
    desc: 'Emergency fracture care, Ilizarov surgery, and limb reconstruction.',
    color: 'rose',
    delay: 240,
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  primary: { bg: 'bg-primary-50', border: 'border-primary-100', text: 'text-primary-600' },
  teal: { bg: 'bg-teal-50', border: 'border-teal-100', text: 'text-teal-600' },
  amber: { bg: 'bg-amber-50', border: 'border-amber-100', text: 'text-amber-600' },
  rose: { bg: 'bg-rose-50', border: 'border-rose-100', text: 'text-rose-500' },
};

export default function UseCasesHome({ onNavigate }: { onNavigate: (r: Route) => void }) {
  const { ref, visible } = useReveal();

  return (
    <section className="relative py-20 lg:py-28 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className={`max-w-2xl mb-14 reveal ${visible ? 'is-visible' : ''}`}>
          <span className="eyebrow">
            <Activity className="w-4 h-4" />
            Conditions We Treat
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Specialized treatment for{' '}
            <span className="font-display italic text-teal-600">every need</span>
          </h2>
          <p className="mt-4 text-lg text-ink-light leading-relaxed">
            Whether it's an earache, sinus issue, or bone fracture, our specialists have
            the expertise to help you heal.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {specialties.map((s) => {
            const { ref: cardRef, visible: cardVis } = useReveal();
            const Icon = s.icon;
            const c = colorMap[s.color];
            return (
              <div
                key={s.title}
                ref={cardRef}
                className={`reveal ${cardVis ? 'is-visible' : ''} group p-6 bg-white rounded-2xl border border-slate-200/80 hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
                style={{ transitionDelay: `${s.delay}ms` }}
                onClick={() => onNavigate('services')}
              >
                <div className={`w-12 h-12 rounded-xl ${c.bg} ${c.border} border flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                  <Icon className={`w-6 h-6 ${c.text}`} strokeWidth={2} />
                </div>
                <h3 className="text-base font-bold mb-1.5 text-ink">{s.title}</h3>
                <p className="text-sm text-ink-light leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
