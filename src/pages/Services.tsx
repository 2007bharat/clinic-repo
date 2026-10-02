import { useReveal } from '@/hooks/useReveal';
import {
  Ear,
  Wind,
  Mic2,
  Baby,
  Moon,
  ShieldAlert,
  Bone,
  Activity,
  Scissors,
  HeartPulse,
  Stethoscope,
  ChevronRight,
  Calendar,
} from 'lucide-react';
import type { Route } from '@/App';

const entServices = [
  { icon: Ear, title: 'Endoscopic Ear & Nose Surgery', desc: 'Minimally invasive procedures for chronic ear and nasal conditions.' },
  { icon: Scissors, title: 'Bloodless Tonsil & Adenoid Surgery', desc: 'Advanced technique for painless removal with quick recovery.' },
  { icon: Wind, title: 'Functional Endoscopic Sinus Surgery (FESS)', desc: 'Treatment for chronic sinusitis and nasal polyps.' },
  { icon: Ear, title: 'Tympanoplasty & Myringotomy', desc: 'Ear membrane repair and fluid drainage with tube placement.' },
  { icon: Wind, title: 'Septoplasty & Balloon Sinuplasty', desc: 'Correction of deviated septum and minimally invasive sinus opening.' },
  { icon: Mic2, title: 'Voice & Laryngoscopy', desc: 'Diagnosis and treatment of vocal cord and throat disorders.' },
  { icon: Baby, title: 'Pediatric ENT Care', desc: 'Gentle treatment for children\u2019s ear, nose, and throat conditions.' },
  { icon: Moon, title: 'Sleep Apnea & Snoring', desc: 'Comprehensive evaluation and surgical solutions for better sleep.' },
  { icon: ShieldAlert, title: 'Allergy Testing & Immunotherapy', desc: 'Identifying triggers and long-term allergy management.' },
];

const orthoServices = [
  { icon: Bone, title: 'Robotic Knee Replacement', desc: 'Precision robotic-assisted surgery for faster recovery and better outcomes.' },
  { icon: Bone, title: 'Robotic Hip Replacement', desc: 'Advanced hip replacement with precise alignment and reduced pain.' },
  { icon: Activity, title: 'Shoulder Replacement', desc: 'Restoring strength and mobility for better arm movement.' },
  { icon: Activity, title: 'Fracture Surgery & Deformity Correction', desc: 'Surgical care for fractures and bone deformity realignment.' },
  { icon: Bone, title: 'Ilizarov Surgery', desc: 'Specialized limb reconstruction for complex fractures and deformities.' },
  { icon: Activity, title: 'Arthroscopy & Sports Injury', desc: 'Minimally invasive joint diagnostics and treatment for athletes.' },
  { icon: HeartPulse, title: 'Joint Replacement (Primary & Revision)', desc: 'Complete joint replacement and revision arthroplasty services.' },
  { icon: Activity, title: 'Ankle Surgery & Sports Injury', desc: 'Restoring stability and pain-free movement for ankle conditions.' },
  { icon: Bone, title: 'Limb Lengthening & Deformity Correction', desc: 'Advanced Ilizarov technique for limb reconstruction.' },
];

export default function ServicesPage({ onNavigate }: { onNavigate: (r: Route) => void }) {
  const { ref, visible } = useReveal();

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative pt-12 pb-12 lg:pt-16 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div className="absolute top-0 -right-40 w-[400px] h-[400px] bg-primary-100/40 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="eyebrow justify-center">
            <Stethoscope className="w-4 h-4" />
            Our Services
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Treatments &amp;{' '}
            <span className="font-display italic text-primary-600">procedures</span>
          </h1>
          <p className="mt-5 text-lg text-ink-light max-w-2xl mx-auto leading-relaxed">
            Comprehensive medical and surgical care across ENT and orthopedic specialties.
          </p>
        </div>
      </section>

      {/* ENT Services */}
      <section ref={ref} className={`relative py-16 lg:py-20 reveal ${visible ? 'is-visible' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center">
              <Ear className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">ENT Services</h2>
              <p className="text-sm text-ink-soft">Dr. Monika Sharma — MBBS, MS (ENT)</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {entServices.map((s, i) => {
              const { ref: cardRef, visible: cardVis } = useReveal();
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  ref={cardRef}
                  className={`reveal ${cardVis ? 'is-visible' : ''} group p-6 bg-white rounded-2xl border border-slate-200/80 hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300 hover:-translate-y-1`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-11 h-11 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                    <Icon className="w-5.5 h-5.5 text-primary-600" strokeWidth={2} />
                  </div>
                  <h3 className="text-base font-bold mb-1.5 text-ink">{s.title}</h3>
                  <p className="text-sm text-ink-light leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Orthopedic Services */}
      <section className="relative py-16 lg:py-20 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center">
              <Bone className="w-6 h-6 text-teal-600" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Orthopedic Services</h2>
              <p className="text-sm text-ink-soft">Dr. S. S. Mohapatra — MBBS, MS (Orthopaedics)</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {orthoServices.map((s, i) => {
              const { ref: cardRef, visible: cardVis } = useReveal();
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  ref={cardRef}
                  className={`reveal ${cardVis ? 'is-visible' : ''} group p-6 bg-white rounded-2xl border border-slate-200/80 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 hover:-translate-y-1`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                    <Icon className="w-5.5 h-5.5 text-teal-600" strokeWidth={2} />
                  </div>
                  <h3 className="text-base font-bold mb-1.5 text-ink">{s.title}</h3>
                  <p className="text-sm text-ink-light leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Need help deciding which treatment is right for you?
          </h2>
          <p className="text-lg text-ink-light mb-8">
            Book a consultation with our specialists and get personalized advice.
          </p>
          <button onClick={() => onNavigate('contact')} className="btn-primary text-base group">
            <Calendar className="w-5 h-5" />
            Book an Appointment
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>
    </div>
  );
}
