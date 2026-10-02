import { useEffect, useState } from 'react';
import { Calendar, Phone, Star, ShieldCheck, Clock, ChevronRight, Stethoscope, Bone, Ear, Activity, MapPin } from 'lucide-react';
import type { Route } from '@/App';
import { clinic } from '@/data/clinic';

export default function HeroHome({ onNavigate }: { onNavigate: (r: Route) => void }) {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute top-0 -right-40 w-[500px] h-[500px] bg-primary-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] bg-teal-100/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 rounded-full text-sm font-medium text-ink-light shadow-sm mb-6 animate-fade-up"
              style={{ animationDelay: '0s', opacity: 0 }}
            >
              <span className="flex items-center gap-0.5 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </span>
              <span>Trusted by 2,000+ patients in Gurugram</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] animate-fade-up"
              style={{ animationDelay: '0.1s', opacity: 0 }}
            >
              Expert{' '}
              <span className="font-display italic text-primary-600">ENT</span> &amp;{' '}
              <span className="font-display italic text-teal-600">Orthopedic</span>{' '}
              care in Dhankot
            </h1>

            <p
              className="mt-6 text-lg lg:text-xl text-ink-light max-w-xl mx-auto lg:mx-0 animate-fade-up leading-relaxed"
              style={{ animationDelay: '0.2s', opacity: 0 }}
            >
              {clinic.name} brings together specialist doctors for comprehensive ear, nose,
              throat, and orthopedic care — right here in Sector 102, Gurugram.
            </p>

            <div
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-fade-up"
              style={{ animationDelay: '0.3s', opacity: 0 }}
            >
              <button onClick={() => onNavigate('contact')} className="btn-primary text-base group">
                <Calendar className="w-5 h-5" />
                Book an Appointment
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a href={`tel:${clinic.phoneRaw}`} className="btn-secondary text-base group">
                <Phone className="w-4 h-4" />
                {clinic.phone}
              </a>
            </div>

            <div
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 justify-center lg:justify-start text-sm animate-fade-up"
              style={{ animationDelay: '0.4s', opacity: 0 }}
            >
              <div className="flex items-center gap-2 text-ink-light">
                <ShieldCheck className="w-5 h-5 text-teal-500" />
                <span>Board-certified specialists</span>
              </div>
              <div className="flex items-center gap-2 text-ink-light">
                <Clock className="w-5 h-5 text-primary-500" />
                <span>Mon–Sat consultations</span>
              </div>
              <div className="flex items-center gap-2 text-ink-light">
                <MapPin className="w-5 h-5 text-amber-500" />
                <span>Sector 102, Gurugram</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/15 border border-slate-200/60">
              <img
                src="https://images.pexels.com/photos/7904406/pexels-photo-7904406.jpeg?auto=compress&cs=tinysrgb&h=750&w=940"
                alt="Doctor at Shree Ortho & ENT Clinic"
                className="w-full h-[420px] lg:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-transparent" />
            </div>

            <div className="absolute -top-5 -left-5 bg-white rounded-2xl shadow-xl border border-slate-200/80 p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-ink leading-none">2 Specialists</div>
                  <div className="text-xs text-ink-soft mt-1">ENT &amp; Orthopedics</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl border border-slate-200/80 p-4 animate-float-slow">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                  <Star className="w-6 h-6 text-amber-500 fill-amber-400" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-ink leading-none">4.9</div>
                  <div className="text-xs text-ink-soft mt-1">Patient rating</div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-3 lg:-right-5 -translate-y-1/2 bg-teal-500 text-white rounded-full px-3 py-1.5 text-xs font-semibold shadow-lg flex items-center gap-1.5 animate-pulse-soft">
              <span className="w-2 h-2 rounded-full bg-white" />
              Open today
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
