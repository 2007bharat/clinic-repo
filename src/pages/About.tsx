import { useReveal } from '@/hooks/useReveal';
import { HeartHandshake, Stethoscope, Award, ShieldCheck, Clock, MapPin, Phone, Users, Microscope, Star } from 'lucide-react';
import { clinic } from '@/data/clinic';

const values = [
  {
    icon: HeartHandshake,
    title: 'Compassionate Care',
    desc: 'We treat every patient like family — listening, explaining, and supporting throughout your journey.',
  },
  {
    icon: ShieldCheck,
    title: 'Evidence-Based Treatment',
    desc: 'Our doctors use the latest medical evidence and advanced technology for accurate diagnosis and treatment.',
  },
  {
    icon: Award,
    title: 'Experienced Specialists',
    desc: 'Board-certified ENT and orthopedic surgeons with 10+ years of experience and international training.',
  },
  {
    icon: Microscope,
    title: 'Advanced Technology',
    desc: 'From endoscopic surgery to robotic joint replacement, we invest in the best tools for better outcomes.',
  },
];

export default function AboutPage() {
  const { ref, visible } = useReveal();

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div className="absolute top-0 -right-40 w-[400px] h-[400px] bg-primary-100/40 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div ref={ref} className={`max-w-3xl reveal ${visible ? 'is-visible' : ''}`}>
            <span className="eyebrow">
              <Stethoscope className="w-4 h-4" />
              About Our Clinic
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              {clinic.name}
            </h1>
            <p className="mt-5 text-lg lg:text-xl text-ink-light leading-relaxed">
              A multi-specialty clinic in Dhankot, Sector 102, Gurugram — bringing together
              expert ENT and orthopedic care under one roof. We are committed to providing
              high-quality, compassionate, and affordable healthcare to our community.
            </p>
          </div>
        </div>
      </section>

      {/* Image section */}
      <section className="relative py-12 lg:py-16 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/60">
              <img
                src="https://images.pexels.com/photos/8459996/pexels-photo-8459996.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Modern clinic waiting room"
                className="w-full h-[350px] lg:h-[420px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
                Serving the community of{' '}
                <span className="font-display italic text-primary-600">Dhankot &amp; beyond</span>
              </h2>
              <p className="text-ink-light leading-relaxed mb-5">
                Located near Om Indu Eye Hospital on Khakri Majra Road, our clinic is easily
                accessible from Sector 102, Dwarka Expressway, and surrounding areas of Gurugram.
                We welcome walk-in consultations and offer flexible appointment scheduling.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200/80">
                  <MapPin className="w-5 h-5 text-primary-600 shrink-0" />
                  <span className="text-sm font-medium text-ink-light">{clinic.address}</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200/80">
                  <Phone className="w-5 h-5 text-teal-600 shrink-0" />
                  <span className="text-sm font-medium text-ink-light">{clinic.phone}</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200/80">
                  <Clock className="w-5 h-5 text-amber-600 shrink-0" />
                  <div className="text-sm">
                    <div className="font-medium text-ink">Mon – Sat: 1:00 PM – 2:00 PM &amp; 7:00 PM – 8:45 PM</div>
                    <div className="text-ink-soft text-xs mt-0.5">Sunday: Closed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow justify-center">
              <Star className="w-4 h-4" />
              Why Choose Us
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Our promise to{' '}
              <span className="font-display italic text-primary-600">every patient</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => {
              const { ref: cardRef, visible: cardVis } = useReveal();
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  ref={cardRef}
                  className={`reveal ${cardVis ? 'is-visible' : ''} p-6 bg-white rounded-2xl border border-slate-200/80 hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300 hover:-translate-y-1`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-600" strokeWidth={2} />
                  </div>
                  <h3 className="text-base font-bold mb-2 text-ink">{v.title}</h3>
                  <p className="text-sm text-ink-light leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="relative py-16 bg-primary-600 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '2,000+', label: 'Patients treated' },
              { value: '500+', label: 'Surgeries performed' },
              { value: '2', label: 'Specialist doctors' },
              { value: '26+', label: 'Years combined experience' },
            ].map((s, i) => {
              const { ref: cardRef, visible: cardVis } = useReveal();
              return (
                <div key={s.label} ref={cardRef} className={`reveal ${cardVis ? 'is-visible' : ''}`} style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="text-3xl lg:text-5xl font-extrabold tracking-tight mb-1">{s.value}</div>
                  <div className="text-sm text-primary-100 font-medium">{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
