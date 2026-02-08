"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Premium SVG Icons
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;
const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
const ChevronRightIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>;
const HeartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>;
const ShieldIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.8 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>;
const StarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>;
const ArrowRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>;
const PlayIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>;
const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>;
const XIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>;
const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>;

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDept, setActiveDept] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const departments = [
    { name: "Heart Specialist", img: "/heart-care.jpg", desc: "Expert cardiac care with advanced monitoring including ECG and 2D Echo.", icon: "❤️" },
    { name: "Internal Medicine", img: "/internal1.jpg", desc: "Holistic physician managing cardiac, pulmonary, renal, and endocrine conditions.", icon: "🩺" },
    { name: "Laparoscopic Surgery", img: "/laparoscopic2.jpg", desc: "Minimally invasive safe and modern surgical care for quick recovery.", icon: "🔬" },
    { name: "Diagnostic Services", img: "/Diagnostic3.jpg", desc: "Full-spectrum diagnostics with high-resolution imaging and lab tests.", icon: "🔍" },
    { name: "IVF & Fertility Treatment", img: "/IVF2.jpg", desc: "Supporting your journey to parenthood with advanced medical solutions.", icon: "👶" },
    { name: "Womans Health", img: "/raj/gyne-2.jpg", desc: "Comprehensive gynecological care and maternity services available 24/7.", icon: "💗" },
  ];

  const doctors = [
    { name: "Dr. Vipin Kumar Sharma", role: "MD Medicine, Ex-Safdarjung Hospital", exp: "28+ Years", img: "/raj/dr.Vipin.jpg", speciality: "Holistic Physician" },
    { name: "Dr. Srishti Bhardwaj", role: "MS Obstetrics & Gynecology", exp: "10+ Years", img: "/raj/dr-Srishti.jpg", speciality: "Gynaecologist & Pregnancy Specialist" },
    { name: "Dr. M.C. Sharma", role: "Senior Laparoscopic Surgeon", exp: "35+ Years", img: "/raj/M.C.Sharma.jpg", speciality: "Surgical Expert" },
  ];

  const facilities = [
    { title: "Modular OT", img: "/raj/ot.jpg", desc: "Zero-infection advanced operation theatres for safe surgeries" },
    { title: "Advanced ICU", img: "/raj/raj-nursing-home-icu.jpg", desc: "24/7 critical care support with modern monitoring equipment" },
    { title: "Ultrasound Center", img: "/raj/ultrasound.jpg", desc: "High-resolution diagnostics and 2D Echo imaging" },
    { title: "Premium Rooms", img: "/raj/cabin3.jpg", desc: "Luxury patient suites for comfortable medical recovery" },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden pt-[110px] md:pt-[130px]">
      {/* ═══════════════════════════════════════════════════════════════════════════
          HEADER & NAVBAR - Fixed structure
      ═══════════════════════════════════════════════════════════════════════════ */}
      <nav className="fixed top-0 w-full z-50">
        {/* Top Header Bar */}
        <div className="bg-[#9d174d] text-white py-2 px-6 lg:px-12 border-b border-white/10">
          <div className="max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-1">
            {/* Need Urgent Care */}
            <a href="tel:+916397970802" className="flex items-center gap-3 hover:text-red-100 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <PhoneIcon />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold opacity-70 uppercase tracking-widest">Need Urgent Care?</span>
                <span className="text-sm font-black">+91 63979 70802</span>
              </div>
            </a>

            {/* Send us a Mail */}
            <a href="mailto:drvipinkumarsharma@gmail.com" className="hidden lg:flex items-center gap-3 hover:text-red-100 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <MailIcon />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold opacity-70 uppercase tracking-widest">Send us a Mail</span>
                <span className="text-sm font-black">drvipinkumar@gmail.com</span>
              </div>
            </a>

            {/* Our Location */}
            <div className="hidden md:flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <MapPinIcon />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold opacity-70 uppercase tracking-widest">Our Location</span>
                <span className="text-sm font-black italic">Kavi Nagar, Hapur, UP</span>
              </div>
            </div>

            {/* Working Hours */}
            <div className="hidden xl:flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <ClockIcon />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold opacity-70 uppercase tracking-widest">Working Hours</span>
                <span className="text-sm font-black">Mon - Sun 08:00 - 19:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className={`w-full transition-all duration-500 bg-white border-b border-gray-100 ${isScrolled ? 'shadow-[0_10px_30px_rgba(157,23,77,0.1)] py-2' : 'py-4'}`}>
          <div className="max-w-[1700px] mx-auto px-6 md:px-12 flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-4 group">
              <div className="relative w-14 h-14 md:w-16 md:h-16 transition-transform group-hover:rotate-[360deg] duration-1000">
                <Image src="/RNH logo.png" alt="RNH Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#9d174d] tracking-tight leading-none uppercase">RAJ NURSING HOME</h1>
                <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Excellence in Healthcare since 1999</p>
              </div>
            </a>

            {/* Nav Links */}
            <div className="hidden xl:flex items-center gap-1">
              <a href="#home" className="px-5 py-3 text-lg font-bold text-gray-700 hover:text-[#9d174d] hover:bg-red-50 rounded-2xl transition-all">Home</a>
              <a href="#about" className="px-5 py-3 text-lg font-bold text-gray-700 hover:text-[#9d174d] hover:bg-red-50 rounded-2xl transition-all">About</a>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="px-5 py-3 text-lg font-bold text-gray-700 hover:text-[#9d174d] hover:bg-red-50 rounded-2xl transition-all flex items-center gap-2">
                  Services
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="absolute top-full left-0 w-72 pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                  <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(157,23,77,0.15)] border border-gray-100 p-3 overflow-hidden">
                    {[
                      { name: "Heart Specialist", slug: "heart-specialist" },
                      { name: "Internal Medicine", slug: "internal-medicine" },
                      { name: "Laparoscopic Surgery", slug: "laparoscopic-surgery" },
                      { name: "Diagnostic Services", slug: "diagnostic-services" },
                      { name: "Ultrasound & Imaging", slug: "ultrasound-and-imaging" },
                      { name: "2D Echo & ECG", slug: "2d-echo-and-ecg" },
                      { name: "PFT Testing", slug: "pft-testing" },
                      { name: "Digital X-Ray", slug: "digital-x-ray" },
                      { name: "IVF & Fertility Treatment", slug: "ivf-and-fertility" },
                      { name: "Heart & Chest Care", slug: "heart-and-chest-care" },
                      { name: "Woman's Health", slug: "woman-health" }
                    ].map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block px-6 py-3.5 text-base font-bold text-gray-600 hover:text-[#9d174d] hover:bg-red-50 rounded-2xl transition-all"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <a href="#doctors" className="px-5 py-3 text-lg font-bold text-gray-700 hover:text-[#9d174d] hover:bg-red-50 rounded-2xl transition-all">Doctors</a>
              <a href="#testimonials" className="px-5 py-3 text-lg font-bold text-gray-700 hover:text-[#9d174d] hover:bg-red-50 rounded-2xl transition-all">Testimonials</a>
              <a href="#contact" className="px-5 py-3 text-lg font-bold text-gray-700 hover:text-[#9d174d] hover:bg-red-50 rounded-2xl transition-all">Contact</a>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <button className="hidden sm:flex px-10 py-5 bg-[#9d174d] hover:bg-[#831843] text-white text-lg font-black rounded-2xl shadow-xl shadow-red-500/25 transition-all hover:-translate-y-1 flex items-center gap-3">
                Admission Now
                <ArrowRightIcon />
              </button>

              <button
                onClick={() => setIsMenuOpen(true)}
                className="xl:hidden p-3 text-gray-900 bg-gray-50 hover:bg-red-50 hover:text-[#9d174d] rounded-2xl transition-all border border-gray-100"
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div className={`fixed inset-0 z-[100] transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible xl:invisible'}`}>
        <div className={`absolute inset-0 bg-gray-900/60 backdrop-blur-md transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsMenuOpen(false)} />
        <div className={`absolute top-0 right-0 bottom-0 w-full xs:w-[350px] bg-white transition-transform duration-500 ease-out shadow-2xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-8 border-b border-gray-100">
              <span className="font-black text-2xl text-[#9d174d]">MENU</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-4 bg-gray-100 hover:bg-red-600 hover:text-white text-gray-900 rounded-2xl transition-all hover:rotate-90 shadow-lg"
              >
                <XIcon />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-4">
              {["Home", "About", "Services", "Doctors", "Testimonials", "Contact"].map((item) => (
                <div key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between px-6 py-5 text-2xl font-black text-gray-800 hover:text-[#9d174d] hover:bg-red-50 rounded-3xl transition-all group border border-transparent hover:border-red-100"
                  >
                    {item}
                    <ChevronRightIcon className="opacity-0 group-hover:opacity-100 transition-all transform -translate-x-4 group-hover:translate-x-0" />
                  </a>
                </div>
              ))}

              <div className="mt-12 pt-12 border-t border-gray-100">
                <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Contact Us</p>
                <a href="tel:+916397970802" className="flex items-center gap-5 p-4 bg-gray-50 rounded-3xl group">
                  <div className="w-14 h-14 bg-[#9d174d] text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500">Emergency Call</p>
                    <p className="text-xl font-black text-gray-900">+91 63979</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-8 bg-gray-50 border-t border-gray-100">
              <button className="w-full py-6 bg-gradient-to-r from-[#9d174d] to-[#f43f5e] text-white font-black text-xl rounded-3xl shadow-2xl shadow-red-500/30 flex items-center justify-center gap-4 transition-transform active:scale-95">
                Admission Now
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section id="home" className="relative h-[700px] md:h-[850px] flex items-center overflow-hidden">
        <Image src="/Banner_1c.webp" alt="Raj Nursing Home Banner" fill className="object-cover z-0" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50 z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-3xl space-y-10">
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-red-50 border border-red-100 text-[#9d174d] text-sm font-black rounded-full shadow-sm">
              <span className="w-3 h-3 bg-red-600 rounded-full animate-ping"></span>
              HAPUR'S TRUSTED MULTI-SPECIALTY PARTNER
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-gray-900 leading-[0.9] tracking-tighter">
              Where Healing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d174d] via-[#f43f5e] to-[#9d174d]">Meets Excellence.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
              Providing advanced medical expertise for over <strong>15 years</strong>. From expert <strong>MD Medicine</strong> and <strong>Laparoscopic Surgery</strong> to 24/7 <strong>Emergency Care</strong>.
            </p>

            <div className="flex flex-wrap gap-6">
              <button className="px-12 py-6 bg-[#9d174d] hover:bg-[#831843] text-white font-black text-xl rounded-2xl shadow-2xl shadow-red-500/40 transition-all hover:-translate-y-2 flex items-center gap-4">
                Book Consultation <ArrowRightIcon />
              </button>
              <button className="px-12 py-6 bg-white border-2 border-gray-200 text-gray-800 font-bold text-xl rounded-2xl hover:border-red-500/50 hover:bg-red-50 transition-all flex items-center gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-[#9d174d]">
                  <PlayIcon />
                </div>
                Virtual Tour
              </button>
            </div>

            <div className="grid grid-cols-3 gap-10 pt-10 border-t border-gray-200">
              {[
                { v: "15+", l: "Years of Trust" },
                { v: "10K+", l: "Happy Deliveries" },
                { v: "50K+", l: "Successful Cases" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-5xl font-black text-[#9d174d]">{s.v}</p>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-2">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SERVICES */}
      <section className="py-10 bg-[#9d174d]">
        <div className="max-w-[1700px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { i: "🚑", t: "24/7 Emergency", d: "Always Ready" },
              { i: "🏥", t: "Advanced ICU", d: "Critical Support" },
              { i: "🩺", t: "OPD Services", d: "Expert Doctors" },
              { i: "🧪", t: "Modern Labs", d: "Quick Reports" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-5 text-white">
                <span className="text-4xl">{s.i}</span>
                <div>
                  <p className="font-black text-xl leading-none">{s.t}</p>
                  <p className="text-red-200 text-sm mt-1 uppercase tracking-tighter">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="relative h-64 rounded-[3rem] overflow-hidden shadow-2xl"><Image src="/raj/ot.jpg" alt="OT" fill className="object-cover" /></div>
                <div className="relative h-80 rounded-[3rem] overflow-hidden shadow-2xl"><Image src="/medical.jpg" alt="Raj Nursing Home" fill className="object-cover" /></div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="relative h-80 rounded-[3rem] overflow-hidden shadow-2xl"><Image src="/ultrasound.jpg" alt="Ultrasound" fill className="object-cover" /></div>
                <div className="relative h-64 rounded-[3rem] overflow-hidden shadow-2xl"><Image src="/raj/cabin3.jpg" alt="Patient Room" fill className="object-cover" /></div>
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <span className="text-[#9d174d] font-black tracking-[0.3em] uppercase text-sm">Hapur's Trusted Destination</span>
                <h2 className="text-5xl md:text-7xl font-black text-gray-900 mt-4 leading-tight">Expert Care for <span className="text-[#9d174d]">Everyone</span></h2>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed">
                Located on Swarg Ashram Road, Hapur, <strong>Raj Hospital and Nursing Home</strong> combines 15+ years of clinical expertise with modern medical technology. Our patient-first philosophy ensures you receive personalized, compassionate treatment for all your healthcare needs.
              </p>

              <div className="grid grid-cols-2 gap-8">
                {[
                  { t: "Expert Team", d: "Senior specialists only", icon: <ShieldIcon /> },
                  { t: "Compassionate", d: "Personalized attention", icon: <HeartIcon /> },
                ].map((f, i) => (
                  <div key={i} className="flex gap-6 p-6 bg-white rounded-3xl shadow-lg border border-gray-100">
                    <div className="w-14 h-14 bg-red-50 text-[#9d174d] rounded-2xl flex items-center justify-center shrink-0">{f.icon}</div>
                    <div>
                      <h4 className="font-black text-lg text-gray-900">{f.t}</h4>
                      <p className="text-gray-500 text-sm mt-1">{f.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="px-10 py-5 bg-gray-900 text-white font-black text-lg rounded-2xl hover:bg-black transition-all flex items-center gap-4">
                Experience Excellence <ChevronRightIcon />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-24">
          <span className="text-[#9d174d] font-black tracking-[0.3em] uppercase text-sm">Our Medical Services</span>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mt-4">Advanced Medical <span className="text-[#9d174d]">Solutions</span></h2>
        </div>

        <div className="max-w-[1700px] mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            { name: "Heart Specialist", slug: "heart-specialist", img: "/heart-care.jpg", desc: "Expert cardiac care with advanced monitoring including ECG and 2D Echo.", icon: "❤️" },
            { name: "Internal Medicine", slug: "internal-medicine", img: "/internal1.jpg", desc: "Holistic physician managing cardiac, pulmonary, renal, and endocrine conditions.", icon: "🩺" },
            { name: "Laparoscopic Surgery", slug: "laparoscopic-surgery", img: "/laparoscopic2.jpg", desc: "Minimally invasive safe and modern surgical care for quick recovery.", icon: "🔬" },
            { name: "Diagnostic Services", slug: "diagnostic-services", img: "/Diagnostic3.jpg", desc: "Full-spectrum diagnostics with high-resolution imaging and lab tests.", icon: "🔍" },
            { name: "IVF & Fertility Treatment", slug: "ivf-and-fertility", img: "/IVF2.jpg", desc: "Supporting your journey to parenthood with advanced medical solutions.", icon: "👶" },
            { name: "Woman's Health", slug: "woman-health", img: "/raj/gyne-2.jpg", desc: "Comprehensive gynecological care and maternity services available 24/7.", icon: "💗" },
          ].map((d, i) => (
            <div key={i} className="group relative bg-white border border-gray-100 rounded-[3rem] overflow-hidden shadow-xl hover:shadow-[0_40px_80px_rgba(157,23,77,0.15)] transition-all duration-700 hover:-translate-y-4">
              <div className="relative h-72 overflow-hidden">
                <Image src={d.img} alt={d.name} fill className="object-cover group-hover:scale-125 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute bottom-6 left-8 text-5xl drop-shadow-2xl">{d.icon}</span>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-black text-gray-900 mb-4">{d.name}</h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">{d.desc}</p>
                <Link href={`/services/${d.slug}`} className="flex items-center gap-3 text-[#9d174d] font-black text-lg group-hover:gap-6 transition-all">
                  Book Service <ArrowRightIcon />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DOCTORS */}
      {/* DOCTORS SECTION - 3 Columns Horizontal Cards */}
      <section id="doctors" className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <span className="text-[#9d174d] font-black tracking-[0.3em] uppercase text-sm">Meet Our Expert Team</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 tracking-tighter">Legacy of <span className="text-[#9d174d]">Expertise</span></h2>
        </div>

        <div className="max-w-[1780px] mx-auto px-4 grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Doctor 1: Dr. Vipin Kumar Sharma */}
          <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 flex p-6 gap-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group min-h-[520px]">
            {/* Left side: Content */}
            <div className="flex-1 flex flex-col gap-4 min-w-0">
              <div>
                <h3 className="text-2xl font-black text-gray-900 leading-tight">Dr. Vipin Kumar Sharma</h3>
                <p className="text-[#9d174d] text-sm font-black uppercase tracking-tight mt-1">MD Medicine Specialist and General Physician in Hapur</p>
              </div>

              <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                <p className="text-[10px] text-gray-600 leading-relaxed font-bold">
                  Dr. Vipin Sharma (MBBS, MD Medicine), formerly of Safdarjung Hospital Delhi, brings 15+ years of holistic internal medicine expertise to Raj Nursing Home. As Hapur’s leading systemic health physician, he manages interconnected conditions: cardiac (hypertension, heart failure), pulmonary (asthma, COPD), renal disorders, and endocrine diseases (diabetes/thyroid).
                </p>
                <p className="text-[10px] text-gray-500 leading-relaxed italic font-medium">
                  His "Whole-Body Health Protocol" combines advanced diagnostics (ECG, 2D Echo, PFT) with personalized lifestyle plans – "Dr. Sharma spotted my kidney issue during a routine BP check and prevented dialysis" (Priya M., Pilkhuwa). He oversees RNH’s free community health initiatives, including monsoon fever camps and air pollution impact workshops near Ganga College.
                </p>
              </div>

              <div className="space-y-1 mt-auto">
                {[
                  { l: "Reg. No:", v: "Pediatrics" },
                  { l: "Consultant:", v: "DMC/R/7973" },
                  { l: "Specialty:", v: "Cardiac Physician" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-[10px] bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100/50">
                    <span className="font-black text-gray-400 uppercase tracking-widest text-[9px]">{item.l}</span>
                    <span className="font-bold text-gray-900">{item.v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Photo */}
            <div className="w-36 shrink-0 flex flex-col gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image src="/raj/dr.Vipin.jpg" alt="Dr. Vipin" fill className="object-cover object-top" />
              </div>
              <button className="w-full py-3.5 bg-[#9d174d] text-white font-black text-[10px] rounded-xl uppercase tracking-widest hover:bg-[#831843] transition-all shadow-lg active:scale-95">
                Book Appt
              </button>
            </div>
          </div>

          {/* Doctor 2: Dr. Srishti Bhardwaj */}
          <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 flex p-6 gap-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group min-h-[520px]">
            <div className="flex-1 flex flex-col gap-4 min-w-0">
              <div>
                <h3 className="text-2xl font-black text-gray-900 leading-tight">Dr. Srishti Bhardwaj</h3>
                <p className="text-[#9d174d] text-sm font-black uppercase tracking-tight mt-1">Best Gynaecologist and Pregnancy Specialist In Hapur</p>
              </div>
              <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                <p className="text-[10px] text-gray-600 leading-relaxed font-bold">
                  Dr. Srishti Bhardwaj (MS Obstetrics & Gynecology), with 10+ years of expertise, leads RNH’s Women’s Health Wing. She specializes in high-risk pregnancy care, PCOS management, and minimally invasive surgeries (fibroid removal, ovarian cysts). Her patient-centric approach includes birth plans in local dialects and post-delivery Ayurvedic nutrition guides.
                </p>
                <p className="text-[10px] text-gray-500 leading-relaxed italic font-medium">
                  Credited with 2,000+ safe deliveries, Dr. Bhardwaj introduced Hapur’s first 24/7 fetal monitoring system. Her landmark study on rural menstrual health won the UP Medical Innovation Award (2024). Patients affirm: "She held my hand during delivery and spoke in our Kavi Nagar dialect" (Sunita T.).
                </p>
              </div>
              <div className="space-y-1 mt-auto">
                {[
                  { l: "Reg. No:", v: "96831" },
                  { l: "Consultant:", v: "Obstetrics & Gynae" },
                  { l: "Specialty:", v: "Pregnancy Specialist" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-[10px] bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100/50">
                    <span className="font-black text-gray-400 uppercase tracking-widest text-[9px]">{item.l}</span>
                    <span className="font-bold text-gray-900">{item.v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-36 shrink-0 flex flex-col gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white grayscale group-hover:grayscale-0 transition-all">
                <Image src="/raj/dr-Srishti.jpg" alt="Dr. Srishti" fill className="object-cover object-top" />
              </div>
              <button className="w-full py-3.5 bg-[#9d174d] text-white font-black text-[10px] rounded-xl uppercase tracking-widest hover:bg-[#831843] transition-all shadow-lg active:scale-95">
                Book Appt
              </button>
            </div>
          </div>

          {/* Doctor 3: Dr. M.C. Sharma */}
          <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 flex p-6 gap-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group min-h-[520px]">
            {/* Left side: Content */}
            <div className="flex-1 flex flex-col gap-4 min-w-0">
              <div>
                <h3 className="text-2xl font-black text-gray-900 leading-tight">Dr. M.C. Sharma</h3>
                <p className="text-[#9d174d] text-sm font-black uppercase tracking-tight mt-1">Senior Laparoscopic & General Surgeon – Raj Nursing Home, Hapur</p>
              </div>

              <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar max-h-[350px]">
                <p className="text-[10px] text-gray-600 leading-relaxed font-bold">
                  With over 20 years of surgical excellence in Hapur, Dr. M.C. Sharma (MBBS, MS - Surgery) is a pioneer in minimally invasive procedures at Raj Nursing Home. Trained at premier institutions, he has performed 1,500+ successful laparoscopic surgeries for appendicitis, gallstones, hernia, and gynecological conditions. His signature "Stitchless Technique" ensures scars under 1cm, 70% faster recovery, and same-day discharge for 90% of patients.
                </p>
                <p className="text-[10px] text-gray-500 leading-relaxed italic font-medium">
                  Dr. Sharma leads our 24/7 emergency surgical unit, handling complex trauma cases from across Western Uttar Pradesh. Patients praise his compassionate approach – "He explained my gallbladder surgery in simple Hindi and visited me hourly post-op" (Ramesh K., Hapur). Beyond the OT, he conducts free surgical camps in rural Ghaziabad and mentors medical students.
                </p>
                <p className="text-[10px] text-gray-600 leading-relaxed font-bold">
                  With decades of surgical experience and a reputation for clinical excellence, Dr. M. C. Sharma is one of the most trusted laparoscopic surgeons in Hapur. He brings precision, skill, and compassion to every procedure, offering patients minimally invasive surgical solutions.
                </p>
              </div>

              <div className="space-y-1 mt-auto">
                {[
                  { l: "Reg. No:", v: "49495" },
                  { l: "OPD Hours:", v: "9 AM - 2 PM (Mon-Sat)" },
                  { l: "Expertise:", v: "Stitchless Tech" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-[10px] bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100/50">
                    <span className="font-black text-gray-400 uppercase tracking-widest text-[9px]">{item.l}</span>
                    <span className="font-bold text-gray-900">{item.v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Photo */}
            <div className="w-36 shrink-0 flex flex-col gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image src="/raj/M.C.Sharma.jpg" alt="Dr. M.C. Sharma" fill className="object-cover object-top" />
              </div>
              <button className="w-full py-3.5 bg-gray-900 text-white font-black text-[10px] rounded-xl uppercase tracking-widest hover:bg-black transition-all shadow-lg active:scale-95">
                Book Appt
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* DEPARTMENT SECTION - Exact Match as per Image */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Department</h2>
            <div className="h-1 w-12 bg-[#9d174d] mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start justify-between">
            {/* Left Tabs */}
            <div className="w-full md:w-[320px] space-y-2">
              {[
                "Surgery Department",
                "Internal Medicine Department",
                "Gynaecological Department"
              ].map((name, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDept(idx)}
                  className={`w-full text-center py-2.5 px-6 text-sm font-bold transition-all duration-300 rounded-md border ${activeDept === idx
                    ? "bg-[#9d174d] text-white border-[#9d174d]"
                    : "bg-white text-[#9d174d] border-[#9d174d]/40 hover:bg-red-50"
                    }`}
                >
                  {name}
                </button>
              ))}
            </div>

            {/* Right Content */}
            <div className="flex-1 pt-1">
              <div key={activeDept} className="animate-in fade-in duration-500">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {activeDept === 0 && "Surgical Care You Can Trust"}
                  {activeDept === 1 && "Expert Medical Diagnosis & Care"}
                  {activeDept === 2 && "Compassionate Care for Women"}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-8">
                  {activeDept === 0 && "Our surgical department is equipped to handle a wide range of procedures with safety, precision, and care. Whether it’s planned surgery or an emergency operation, our team of skilled surgeons and trained staff work together to ensure a smooth experience and a faster recovery. We follow strict hygiene protocols and use modern techniques for the best possible outcomes."}
                  {activeDept === 1 && "Our internal medicine wing specializes in the prevention, diagnosis, and treatment of adult diseases. From chronic condition management like diabetes and hypertension to acute illness care, we provide comprehensive health solutions tailored to each patient's unique needs."}
                  {activeDept === 2 && "Dedicated to every stage of a woman’s life, our gynaecology department provides expert care for maternity, high-risk pregnancies, PCOS, and minimally invasive surgeries. We combine advanced medical technology with a sensitive, patient-centric approach."}
                </p>

                <button className="px-8 py-2.5 bg-[#ebebeb] hover:bg-gray-200 text-gray-800 font-bold text-sm rounded-lg transition-all shadow-sm">
                  Get Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION - Interactive & Centered */}
      <section id="testimonials" className="py-24 bg-[#ebebeb]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Section Title */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Testimonials</h2>
            <div className="h-1 w-8 bg-[#9d174d] mx-auto rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div key={activeTestimonial} className="animate-in fade-in zoom-in duration-700">
              {/* Profile Image */}
              <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white shadow-md">
                <Image
                  src={[
                    "/raj/test1.jpg",
                    "/raj/test2.jpg",
                    "/raj/test3.jpg"
                  ][activeTestimonial]}
                  alt="Patient"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 font-medium px-4">
                {[
                  "I had been struggling with a constant cough and chest tightness for months. Dr. Vipin Kumar Sharma, diagnosed it correctly as a lung infection and started the treatment immediately. I could feel the improvement within days. Their attention to detail made all the difference.",
                  "\"My wife delivered our first baby here, and we couldn't have asked for a better experience. The gynecologist, Dr. Shruti Bhardwaj , was kind and explained everything clearly. The Hospital and Nursing Home staff was also very caring throughout the stay.\"",
                  "I had to undergo an emergency appendix surgery and was really nervous, but the doctors and nurses made me feel completely safe. The surgery went smoothly, and I was back on my feet in just a few days. Very grateful for the care I received.\""
                ][activeTestimonial]}
              </p>

              {/* Patient Name */}
              <h4 className="text-lg font-bold text-gray-900 mb-8">
                {[
                  "Sabiya Anjum, 46",
                  "Akhil Joshi, 35",
                  "Ramesh Verma, 52"
                ][activeTestimonial]}
              </h4>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-3">
                {[0, 1, 2].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`transition-all duration-300 rounded-md flex items-center justify-center ${activeTestimonial === idx
                      ? "w-6 h-6 border-[1.5px] border-black"
                      : "w-2.5 h-2.5 bg-gray-300 hover:bg-[#9d174d]"
                      }`}
                  >
                    {activeTestimonial === idx && (
                      <div className="w-3 h-3 rounded-[2px] bg-[#9d174d]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-24">
          <span className="text-[#9d174d] font-black tracking-[0.3em] uppercase text-sm">Our Facilities</span>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mt-4">Modern Medical <span className="text-[#9d174d]">Infrastructure</span></h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((f, i) => (
            <div key={i} className="premium-card p-4">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <Image src={f.img} alt={f.title} fill className="object-cover" />
              </div>
              <h4 className="text-xl font-black text-gray-900 mb-2">{f.title}</h4>
              <p className="text-gray-500 text-sm font-bold uppercase tracking-tighter">{f.desc}</p>
            </div>
          ))}
        </div>
      </section >

      {/* FOOTER */}
      < footer id="contact" className="bg-gray-950 text-white pt-32 pb-16" >
        <div className="max-w-[1700px] mx-auto px-6 grid lg:grid-cols-4 gap-20 border-b border-gray-900 pb-24 mb-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Image src="/RNH logo.png" alt="RNH Logo" width={60} height={60} className="brightness-200" />
              <h3 className="text-3xl font-black tracking-tighter">RAJ NURSING HOME</h3>
            </div>
            <p className="text-gray-500 text-xl font-medium leading-relaxed">Western Uttar Pradesh's most trusted medical landmark for 15+ years.</p>
            <div className="flex gap-6 mt-8">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer"><FacebookIcon /></div>
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer"><InstagramIcon /></div>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-2xl font-black">Quick Links</h4>
            <ul className="space-y-5 text-gray-500 text-xl font-bold">
              <li><a href="#about" className="hover:text-red-500 transition-colors">Our Story</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-colors">Medical Services</a></li>
              <li><a href="#doctors" className="hover:text-red-500 transition-colors">Expert Team</a></li>
              <li><a href="#testimonials" className="hover:text-red-500 transition-colors">Patient Stories</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-2xl font-black">Contact Info</h4>
            <ul className="space-y-8 text-gray-500 text-xl font-bold">
              <li className="flex items-start gap-5"><MapPinIcon /> Swarg Ashram Road, Hapur, UP</li>
              <li className="flex items-center gap-5"><PhoneIcon /> +91 63979 70802</li>
              <li className="flex items-center gap-5"><MailIcon /> drvipinkumar@gmail.com</li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-2xl font-black">Working Hours</h4>
            <div className="p-8 bg-white/5 rounded-[2rem] border border-white/5">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-400 font-bold">Emergency Case</span>
                <span className="text-red-500 font-black">24 / 7</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-400 font-bold">Pharmacy</span>
                <span className="text-white font-black text-right">24 / 7</span>
              </div>
              <p className="text-xs text-gray-600 font-medium mt-6">Open all days including holidays.</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center text-gray-700 font-bold">
          <p>© 2024 Raj Nursing Home. Serving Hapur with Trust.</p>
        </div>
      </footer>

      {/* WhatsApp Button */}
      < a
        href="https://wa.me/916397970802"
        target="_blank"
        className="fixed bottom-10 right-10 w-20 h-20 bg-green-500 rounded-[2.5rem] shadow-2xl flex items-center justify-center text-white z-[100] hover:scale-110 transition-all hover:rotate-12"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
      </a>
    </div>
  );
}
