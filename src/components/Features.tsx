import { useReveal } from '@/hooks/useReveal';
import { Ear, Bone, Wind, Activity, Stethoscope, ChevronRight } from 'lucide-react';
import type { Route } from '@/App';

const services = [
  {
    icon: Ear,
    title: 'ENT Care & Surgery',
    desc: 'Endoscopic ear & nose surgeries, bloodless tonsil removal, sinus surgery, hearing evaluation, and more.',
    color: 'text-primary-600',
    bg: 'bg-primary-50',
    border: 'border-primary-100',
    delay: 0,
    size: 'lg:col-span-2',
  },
  {
    icon: Bone,
    title: 'Joint Replacement',
    desc: 'Robotic knee & hip replacement, shoulder replacement, and revision arthroplasty.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
    delay: 100,
    size: '',
  },
  {
    icon: Activity,
    title: 'Trauma & Fracture Care',
    desc: 'Emergency fracture surgery, Ilizarov limb reconstruction, and deformity correction.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    delay: 200,
    size: '',
  },
  {
    icon: Wind,
    title: 'Sinus & Allergy',
    desc: 'FESS, balloon sinuplasty, septoplasty, allergy testing, and immunotherapy.',
    color: 'text-primary-600',
    bg: 'bg-primary-50',
    border: 'border-primary-100',
    delay: 300,
    size: '',
  },
  {
    icon: Stethoscope,
    title: 'Arthroscopy & Sports Injury',
    desc: 'Minimally invasive joint surgery, sports injury treatment, and rehabilitation.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
    delay: 400,
    size: 'lg:col-span-2',
  },
];

export default function FeaturesHome({ onNavigate }: { onNavigate: (r: Route) => void }) {
  const { ref, visible } = useReveal();

  return (
    <section className="relative py-20 lg:py-28 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className={`max-w-2xl mb-14 reveal ${visible ? 'is-visible' : ''}`}>
          <span className="eyebrow">
            <Stethoscope className="w-4 h-4" />
            Our Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Comprehensive care across{' '}
            <span className="font-display italic text-primary-600">two specialties</span>
          </h2>
          <p className="mt-4 text-lg text-ink-light leading-relaxed">
            From ENT surgeries to orthopedic trauma and joint replacement — our clinic offers
            advanced, evidence-based treatment under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:auto-rows-fr">
          {services.map((s) => {
            const { ref: cardRef, visible: cardVis } = useReveal();
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                ref={cardRef}
                className={`reveal ${cardVis ? 'is-visible' : ''} ${s.size} group relative p-6 lg:p-7 card hover:shadow-xl hover:shadow-primary-900/5 hover:-translate-y-1 hover:border-primary-200 cursor-pointer`}
                style={{ transitionDelay: `${s.delay}ms` }}
                onClick={() => onNavigate('services')}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${s.bg} ${s.border} border flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon className={`w-6 h-6 ${s.color}`} strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-1.5 text-ink">{s.title}</h3>
                <p className="text-sm text-ink-light leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
