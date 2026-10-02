import { useReveal } from '@/hooks/useReveal';
import {
  GraduationCap,
  Award,
  Briefcase,
  BadgeCheck,
  Phone,
  Calendar,
  Star,
  CheckCircle2,
} from 'lucide-react';
import type { Route } from '@/App';
import { doctors } from '@/data/clinic';

export default function DoctorsPage({ onNavigate }: { onNavigate: (r: Route) => void }) {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative pt-12 pb-12 lg:pt-16 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div className="absolute top-0 -left-40 w-[400px] h-[400px] bg-teal-100/40 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="eyebrow justify-center">
            <Award className="w-4 h-4" />
            Our Doctors
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Meet our{' '}
            <span className="font-display italic text-primary-600">specialists</span>
          </h1>
          <p className="mt-5 text-lg text-ink-light max-w-2xl mx-auto leading-relaxed">
            Experienced, board-certified doctors dedicated to your health and well-being.
          </p>
        </div>
      </section>

      {/* Doctor profiles */}
      {doctors.map((doc, idx) => {
        const { ref, visible } = useReveal();
        return (
          <section
            key={doc.id}
            className={`relative py-12 lg:py-16 ${idx % 2 === 1 ? 'bg-surface-alt' : ''}`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                  {/* Left: Photo & quick info */}
                  <div className="lg:col-span-1">
                    <div className="sticky top-24 space-y-4">
                      <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200/60">
                        <img
                          src={doc.image}
                          alt={doc.name}
                          className="w-full h-72 lg:h-80 object-cover"
                        />
                      </div>
                      <div className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm">
                        <div className="text-xs font-semibold uppercase tracking-wider text-primary-600 mb-1">
                          {doc.specialty}
                        </div>
                        <h2 className="text-xl font-extrabold text-ink mb-1">{doc.name}</h2>
                        <p className="text-sm text-ink-soft mb-3">{doc.fullSpecialty}</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-ink-light">
                            <BadgeCheck className="w-4 h-4 text-primary-500 shrink-0" />
                            {doc.qualifications}
                          </div>
                          <div className="flex items-center gap-2 text-ink-light">
                            <Briefcase className="w-4 h-4 text-teal-500 shrink-0" />
                            {doc.experience}
                          </div>
                        </div>
                        <div className="mt-4 flex gap-2">
                          <button onClick={() => onNavigate('contact')} className="btn-primary text-sm py-2.5 px-4 flex-1 justify-center">
                            <Calendar className="w-4 h-4" />
                            Book
                          </button>
                          <a href={`tel:${doc.phone.replace(/\s/g, '')}`} className="btn-secondary text-sm py-2.5 px-4">
                            <Phone className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Full details */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* About */}
                    <div>
                      <h3 className="text-xl font-bold text-ink mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary-600" />
                        About
                      </h3>
                      <p className="text-ink-light leading-relaxed">{doc.about}</p>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h3 className="text-lg font-bold text-ink mb-3">Highlights</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {doc.highlights.map((h) => (
                          <div key={h} className="flex items-center gap-2 p-3 bg-surface-alt rounded-xl border border-slate-200/60">
                            <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                            <span className="text-sm font-medium text-ink-light">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Education */}
                    <div>
                      <h3 className="text-lg font-bold text-ink mb-3 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-primary-600" />
                        Education &amp; Training
                      </h3>
                      <div className="space-y-2">
                        {doc.education.map((e, i) => (
                          <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200/80">
                            <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 shrink-0" />
                            <div className="flex-1">
                              <div className="font-semibold text-sm text-ink">{e.degree}</div>
                              <div className="text-sm text-ink-light">{e.institute}</div>
                              {e.year && <div className="text-xs text-ink-soft mt-0.5">{e.year}</div>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Experience */}
                    <div>
                      <h3 className="text-lg font-bold text-ink mb-3 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-teal-600" />
                        Experience
                      </h3>
                      <div className="space-y-2">
                        {doc.experienceList.map((exp, i) => (
                          <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200/80">
                            <div className="w-2 h-2 rounded-full bg-teal-500 mt-2 shrink-0" />
                            <div className="flex-1">
                              <div className="font-semibold text-sm text-ink">{exp.role}</div>
                              <div className="text-sm text-ink-light">{exp.org}</div>
                              <div className="text-xs text-ink-soft mt-0.5">{exp.period}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Memberships */}
                    <div>
                      <h3 className="text-lg font-bold text-ink mb-3">Memberships</h3>
                      <div className="flex flex-wrap gap-2">
                        {doc.memberships.map((m) => (
                          <span key={m} className="px-3 py-1.5 bg-primary-50 border border-primary-100 rounded-lg text-sm font-medium text-primary-700">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Treatments */}
                    <div>
                      <h3 className="text-lg font-bold text-ink mb-3">Treatments &amp; Procedures</h3>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {doc.treatments.map((t) => (
                          <div key={t} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-200/60">
                            <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                            <span className="text-sm text-ink-light">{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
