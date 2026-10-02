import { useReveal } from '@/hooks/useReveal';
import { Calendar, Phone, MapPin, Clock, ChevronRight, Mail, Navigation } from 'lucide-react';
import { clinic, doctors } from '@/data/clinic';

export default function ContactPage() {
  const { ref, visible } = useReveal();

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative pt-12 pb-12 lg:pt-16 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div className="absolute top-0 -left-40 w-[400px] h-[400px] bg-teal-100/40 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="eyebrow justify-center">
            <Calendar className="w-4 h-4" />
            Contact Us
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Book an{' '}
            <span className="font-display italic text-primary-600">appointment</span>
          </h1>
          <p className="mt-5 text-lg text-ink-light max-w-2xl mx-auto leading-relaxed">
            Fill out the form below or call us directly. Our team will confirm your appointment within 24 hours.
          </p>
        </div>
      </section>

      {/* Content */}
      <section ref={ref} className={`relative py-12 lg:py-16 reveal ${visible ? 'is-visible' : ''}`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Booking form */}
            <div className="bg-white rounded-3xl shadow-2xl shadow-primary-900/10 border border-slate-200/60 p-8 lg:p-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 rounded-full text-sm font-semibold text-primary-700 mb-5">
                <Calendar className="w-4 h-4" />
                Schedule your visit
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight mb-2">Appointment form</h2>
              <p className="text-ink-light text-sm mb-6">
                We'll call you within 24 hours to confirm your slot.
              </p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-1.5">First name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3 bg-surface-alt border border-slate-200 rounded-xl text-sm text-ink placeholder:text-ink-soft focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-1.5">Last name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-3 bg-surface-alt border border-slate-200 rounded-xl text-sm text-ink placeholder:text-ink-soft focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-1.5">Phone number</label>
                    <input
                      type="tel"
                      placeholder="+91 98XXX XXXXX"
                      className="w-full px-4 py-3 bg-surface-alt border border-slate-200 rounded-xl text-sm text-ink placeholder:text-ink-soft focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-1.5">Email (optional)</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-surface-alt border border-slate-200 rounded-xl text-sm text-ink placeholder:text-ink-soft focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink mb-1.5">Select doctor</label>
                  <select className="w-full px-4 py-3 bg-surface-alt border border-slate-200 rounded-xl text-sm text-ink-light focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all">
                    <option>Dr. Monika Sharma — ENT</option>
                    <option>Dr. S. S. Mohapatra — Orthopedics</option>
                    <option>Either / Not sure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink mb-1.5">Reason for visit</label>
                  <select className="w-full px-4 py-3 bg-surface-alt border border-slate-200 rounded-xl text-sm text-ink-light focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all">
                    <option>ENT consultation</option>
                    <option>Hearing evaluation</option>
                    <option>Sinus / nasal issue</option>
                    <option>Throat / voice concern</option>
                    <option>Pediatric ENT</option>
                    <option>Sleep apnea / snoring</option>
                    <option>Allergy testing</option>
                    <option>Knee / hip pain</option>
                    <option>Fracture / injury</option>
                    <option>Joint replacement</option>
                    <option>Arthroscopy</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink mb-1.5">Preferred time slot</label>
                  <select className="w-full px-4 py-3 bg-surface-alt border border-slate-200 rounded-xl text-sm text-ink-light focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all">
                    <option>Afternoon: 1:00 PM – 2:00 PM</option>
                    <option>Evening: 7:00 PM – 8:45 PM</option>
                    <option>Any available slot</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink mb-1.5">Message (optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Describe your symptoms or any questions..."
                    className="w-full px-4 py-3 bg-surface-alt border border-slate-200 rounded-xl text-sm text-ink placeholder:text-ink-soft focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary text-base w-full justify-center group">
                  Request appointment
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-xs text-ink-soft text-center">
                  No referral needed. Walk-ins also welcome during clinic hours.
                </p>
              </form>
            </div>

            {/* Right: Contact info */}
            <div className="space-y-5 lg:pl-4">
              {/* Clinic info */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-sm">
                <h3 className="text-lg font-bold text-ink mb-4">Clinic Information</h3>
                <div className="space-y-4">
                  <a href={`tel:${clinic.phoneRaw}`} className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                      <Phone className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <div className="text-xs text-ink-soft">Phone</div>
                      <div className="font-bold text-ink">{clinic.phone}</div>
                    </div>
                  </a>
                  <a href={`mailto:${clinic.email}`} className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                      <Mail className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <div className="text-xs text-ink-soft">Email</div>
                      <div className="font-bold text-ink">{clinic.email}</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <div className="text-xs text-ink-soft">Address</div>
                      <div className="font-bold text-ink">{clinic.address}</div>
                      <a
                        href={clinic.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 mt-1 hover:gap-2 transition-all"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        Get directions
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timings */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-sm">
                <h3 className="text-lg font-bold text-ink mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary-600" />
                  Consultation Timings
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-surface-alt rounded-xl border border-slate-200/60">
                    <div>
                      <div className="font-semibold text-sm text-ink">Monday – Saturday</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-ink">1:00 PM – 2:00 PM</div>
                      <div className="text-sm font-medium text-ink">7:00 PM – 8:45 PM</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-surface-alt rounded-xl border border-slate-200/60">
                    <div className="font-semibold text-sm text-ink">Sunday</div>
                    <div className="text-sm font-medium text-ink-soft">Closed</div>
                  </div>
                </div>
              </div>

              {/* Doctor direct contacts */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-sm">
                <h3 className="text-lg font-bold text-ink mb-4">Contact doctors directly</h3>
                <div className="space-y-3">
                  {doctors.map((doc) => (
                    <a
                      key={doc.id}
                      href={`tel:${doc.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-3 p-3 bg-surface-alt rounded-xl border border-slate-200/60 hover:border-primary-200 transition-all group"
                    >
                      <img src={doc.image} alt={doc.name} className="w-10 h-10 rounded-full object-cover" />
                      <div className="flex-1">
                        <div className="font-semibold text-sm text-ink">{doc.name}</div>
                        <div className="text-xs text-ink-soft">{doc.specialty}</div>
                      </div>
                      <div className="text-sm font-semibold text-primary-600 flex items-center gap-1">
                        <Phone className="w-4 h-4" />
                        {doc.phone}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
