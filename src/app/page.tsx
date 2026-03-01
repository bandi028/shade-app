import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Users, Target, BookOpen, Clock, HeartHandshake, TrendingUp, BarChart3, PieChart, Activity, Zap } from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">

            {/* 
        ===========================================
        HERO SECTION - Dashboard Hybrid Design
        ===========================================
      */}
            <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 z-0">
                    {/* Subtle grid pattern for technical/dashboard feel */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
                    {/* Ambient glow */}
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] mix-blend-screen" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                        {/* Hero Copy */}
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 mb-6">
                                <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
                                <span className="text-xs font-medium text-slate-300 tracking-wide uppercase">Advisory & Consulting Excellence</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white tracking-tight mb-8 leading-tight">
                                Master your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">financial</span> trajectory.
                            </h1>
                            <p className="mt-4 text-xl text-slate-400 mb-10 leading-relaxed font-light">
                                We combine expert guidance with cutting-edge analytical tools. Elevate your business with strategic insights, personalized advice, and comprehensive planning.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="#contact"
                                    className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide uppercase rounded-lg text-slate-900 bg-amber-500 hover:bg-amber-400 shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)] transition-all hover:-translate-y-1"
                                >
                                    Schedule Consultation
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                                <Link
                                    href="#services"
                                    className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide uppercase rounded-lg text-white bg-slate-800/50 hover:bg-slate-800 border border-slate-700 backdrop-blur-sm transition-all hover:-translate-y-1"
                                >
                                    Explore Capabilities
                                </Link>
                            </div>
                        </div>

                        {/* Hero Dashboard Abstract Graphic */}
                        <div className="relative hidden lg:block h-[500px]">
                            {/* Main Glass Panel */}
                            <div className="absolute top-10 right-0 w-[450px] h-[380px] bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-700/50">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                                    </div>
                                    <p className="text-xs text-slate-400 font-mono">Q3_PERFORMANCE_METRICS</p>
                                </div>

                                {/* Mock Chart Area */}
                                <div className="h-40 w-full flex items-end justify-between gap-2 mb-6">
                                    {[40, 65, 45, 80, 55, 90, 75, 100].map((h, i) => (
                                        <div key={i} className="w-full relative group">
                                            <div className={`absolute bottom-0 w-full rounded-t-sm transition-all duration-700 ${i === 7 ? 'bg-amber-500' : 'bg-blue-500/40 group-hover:bg-blue-500/60'}`} style={{ height: `${h}%` }}></div>
                                        </div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30">
                                        <p className="text-xs text-slate-400 mb-1">Tax Optimized</p>
                                        <p className="text-xl font-medium text-emerald-400 border-l-2 border-emerald-500 pl-2">100%</p>
                                    </div>
                                    <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30">
                                        <p className="text-xs text-slate-400 mb-1">Capital Growth</p>
                                        <p className="text-xl font-medium text-white border-l-2 border-amber-500 pl-2">+24.8%</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Abstract Element */}
                            <div className="absolute top-32 -left-12 w-64 bg-slate-900/60 backdrop-blur-2xl border border-slate-600/40 rounded-xl p-5 shadow-2xl shadow-black/50 animate-bounce" style={{ animationDuration: '6s' }}>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                                        <Activity className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-white">Audit Readiness</p>
                                        <p className="text-xs text-slate-400">Continuous Monitoring Active</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Trust Bar below Hero */}
                <div className="absolute bottom-0 left-0 w-full bg-slate-900/80 backdrop-blur-md border-t border-slate-800 py-4 z-20 hidden md:block">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm font-medium text-slate-400 uppercase tracking-widest font-mono">
                        <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Independent Audits</span>
                        <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> End-to-End Compliance</span>
                        <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Strategic Advisory</span>
                    </div>
                </div>
            </section>

            {/* 
        ===========================================
        SERVICES - Bento Box / Dashboard Grid
        ===========================================
      */}
            <section id="services" className="py-24 bg-slate-50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 md:flex md:justify-between md:items-end">
                        <div className="max-w-2xl">
                            <h2 className="text-sm text-blue-600 font-bold tracking-widest uppercase mb-2 flex items-center gap-2"><Zap className="h-4 w-4" /> Core Capabilities</h2>
                            <p className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                                Precision engineering for your financial architecture.
                            </p>
                        </div>
                        <p className="mt-6 md:mt-0 text-slate-600 max-w-sm border-l-2 border-amber-500 pl-4 text-sm leading-relaxed">
                            We deploy highly structured, data-driven methodologies to ensure compliance, mitigate risk, and engineer growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">

                        {/* Service 1: Assurance (Tall Card) */}
                        <div className="md:row-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all group flex flex-col justify-between overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-8 relative z-10">
                                    <Shield className="h-6 w-6 text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Assurance Services</h3>
                                <ul className="space-y-5 relative z-10">
                                    <li className="relative pl-6">
                                        <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                        <span className="font-semibold text-slate-900 block text-sm mb-1">Statutory Audit</span>
                                        <span className="text-slate-500 text-sm leading-relaxed block">Independent audits under Indian and International GAAP protocols.</span>
                                    </li>
                                    <li className="relative pl-6">
                                        <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                        <span className="font-semibold text-slate-900 block text-sm mb-1">Internal Audit</span>
                                        <span className="text-slate-500 text-sm leading-relaxed block">Evaluating internal controls and business processes rigorously.</span>
                                    </li>
                                    <li className="relative pl-6">
                                        <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                        <span className="font-semibold text-slate-900 block text-sm mb-1">Certifications</span>
                                        <span className="text-slate-500 text-sm leading-relaxed block">Execution of specialized audits tailored to regulatory mandates.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-8 pt-6 border-t border-slate-100 relative z-10 flex justify-between items-center text-sm font-medium text-blue-600">
                                <span>Explore Assurance</span>
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>

                        {/* Service 2: Taxation (Wide Card) */}
                        <div className="md:col-span-2 bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-800 group relative overflow-hidden">
                            {/* Dashboard styling accent */}
                            <div className="absolute right-0 bottom-0 opacity-10 flex gap-2 p-6">
                                <BarChart3 className="w-32 h-32 text-blue-400" />
                            </div>
                            <div className="grid md:grid-cols-2 gap-8 relative z-10 h-full">
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-6">
                                            <PieChart className="h-6 w-6 text-indigo-400" />
                                        </div>
                                        <h3 className="text-2xl font-serif font-bold text-white mb-4">Taxation Frameworks</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed mb-6">End-to-end support for corporates and individuals navigating dynamic tax laws and international obligations.</p>
                                    </div>
                                    <div className="text-sm font-medium text-indigo-400 flex items-center">
                                        <span>Explore Taxation</span>
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center space-y-4">
                                    <div className="bg-slate-800/50 rounded-lg p-4 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800 transition-colors">
                                        <span className="text-indigo-300 font-semibold text-sm">Direct taxation:</span>
                                        <span className="text-slate-300 text-sm pl-2">Income tax, transfer pricing.</span>
                                    </div>
                                    <div className="bg-slate-800/50 rounded-lg p-4 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800 transition-colors">
                                        <span className="text-indigo-300 font-semibold text-sm">Indirect taxation:</span>
                                        <span className="text-slate-300 text-sm pl-2">GST, legacy taxes, and foreign trade.</span>
                                    </div>
                                    <div className="bg-slate-800/50 rounded-lg p-4 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800 transition-colors">
                                        <span className="text-indigo-300 font-semibold text-sm">Litigation:</span>
                                        <span className="text-slate-300 text-sm pl-2">Appeals and legal representation.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service 3: Regulatory (Square) */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-emerald-200 transition-all group flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mb-6">
                                    <BookOpen className="h-5 w-5 text-emerald-600" />
                                </div>
                                <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Regulatory Governance</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6">Compliance management under Companies Act, FEMA, labour laws, and setup/closure advisory.</p>
                            </div>
                            <div className="border-t border-slate-100 pt-4 mt-auto">
                                <ul className="text-xs text-slate-500 space-y-2">
                                    <li className="flex items-center"><CheckCircle2 className="h-3 w-3 text-emerald-500 mr-2" /> Business Setup</li>
                                    <li className="flex items-center"><CheckCircle2 className="h-3 w-3 text-emerald-500 mr-2" /> Statutory Filings</li>
                                </ul>
                            </div>
                        </div>

                        {/* Service 4: Accounting (Square) */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-amber-200 transition-all group flex flex-col justify-between md:order-last lg:order-none">
                            <div>
                                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center mb-6">
                                    <TrendingUp className="h-5 w-5 text-amber-600" />
                                </div>
                                <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Accounting & Bookkeeping</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6">Full-service outsourced accounting, audit assistance, and comprehensive year-end closure preparations.</p>
                            </div>
                            <div className="border-t border-slate-100 pt-4 mt-auto">
                                <ul className="text-xs text-slate-500 space-y-2">
                                    <li className="flex items-center"><CheckCircle2 className="h-3 w-3 text-amber-500 mr-2" /> Reconciliations</li>
                                    <li className="flex items-center"><CheckCircle2 className="h-3 w-3 text-amber-500 mr-2" /> ROC Returns</li>
                                </ul>
                            </div>
                        </div>

                        {/* Service 5: Advisory (Square) */}
                        <div className="bg-slate-100 rounded-3xl p-8 shadow-inner border border-slate-200 hover:bg-white hover:shadow-xl hover:border-rose-200 transition-all group flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center mb-6">
                                    <Target className="h-5 w-5 text-rose-600" />
                                </div>
                                <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Strategic Advisory</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6">GAAP transition support, complex financial reporting architecture, and customized finance team training.</p>
                            </div>
                            <div className="border-t border-slate-200 pt-4 mt-auto">
                                <ul className="text-xs text-slate-500 space-y-2">
                                    <li className="flex items-center"><CheckCircle2 className="h-3 w-3 text-rose-500 mr-2" /> Ind-AS & IFRS</li>
                                    <li className="flex items-center"><CheckCircle2 className="h-3 w-3 text-rose-500 mr-2" /> Finance Manuals</li>
                                </ul>
                            </div>
                        </div>

                        {/* Service 6: Virtual CFO (Premium Wide) */}
                        <div className="md:col-span-2 bg-gradient-to-br from-amber-600 to-amber-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
                            {/* Decorative background vectors */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-transform duration-700"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black opacity-10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

                            <div className="flex flex-col md:flex-row gap-8 relative z-10 h-full items-center">
                                <div className="flex-1">
                                    <div className="inline-block px-3 py-1 bg-amber-900/40 border border-amber-500/30 rounded-full text-xs font-bold text-amber-200 tracking-wider uppercase mb-4">
                                        Premium Engagement
                                    </div>
                                    <h3 className="text-3xl font-serif font-bold text-white mb-4">Virtual CFO</h3>
                                    <p className="text-amber-100/80 text-base leading-relaxed mb-6 max-w-md">
                                        Steering strategy, enabling success. Access top-tier CFO talent on a sophisticated retainer model, keeping costs variable while maximizing impact.
                                    </p>
                                    <button className="bg-white text-amber-700 hover:bg-amber-50 px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg transition-colors inline-flex items-center">
                                        Discover the impact <ArrowRight className="ml-2 w-4 h-4" />
                                    </button>
                                </div>

                                <div className="md:w-1/3 w-full bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <div className="p-1 bg-amber-500/20 rounded mr-3 mt-0.5"><CheckCircle2 className="h-4 w-4 text-amber-300" /></div>
                                            <span className="text-white text-sm">Strategic finance partner tailored to your goals.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="p-1 bg-amber-500/20 rounded mr-3 mt-0.5"><CheckCircle2 className="h-4 w-4 text-amber-300" /></div>
                                            <span className="text-white text-sm">Flexible scale from 2 to 35 hours per week.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 
        ===========================================
        VALUES - Structural Data List
        ===========================================
      */}
            <section id="values" className="py-24 bg-white border-t border-slate-200 relative overflow-hidden">
                {/* Abstract background structure */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-3/4 bg-slate-200 hidden lg:block ml-[10%]"></div>
                <div className="absolute left-0 top-1/4 w-12 h-px bg-slate-200 hidden lg:block ml-[10%]"></div>
                <div className="absolute left-0 top-1/2 w-12 h-px bg-slate-200 hidden lg:block ml-[10%]"></div>
                <div className="absolute left-0 top-3/4 w-12 h-px bg-slate-200 hidden lg:block ml-[10%]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/3 pt-12">
                            <div className="sticky top-32">
                                <h2 className="text-sm text-amber-600 font-bold tracking-widest uppercase mb-2">Our Architecture</h2>
                                <p className="text-4xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                                    The foundational values that drive our precision.
                                </p>
                                <p className="text-slate-600 leading-relaxed mb-8">
                                    We believe that exceptional consulting relies heavily on an unwavering moral and professional compass. These are our immutable parameters.
                                </p>
                                <div className="w-16 h-1 bg-amber-500 rounded-full"></div>
                            </div>
                        </div>

                        <div className="lg:w-2/3">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                                {[
                                    { title: "Integrity", icon: Shield, desc: "Upholding high ethical standards acting with absolute honesty and transparency in all financial interactions." },
                                    { title: "Confidentiality", icon: HeartHandshake, desc: "A strict protocol protecting the sensitive data and trust embedded in our client relationships." },
                                    { title: "Objectivity", icon: Target, desc: "Providing unbiased advice based strictly on thorough analysis and verifiable research data." },
                                    { title: "Expertise", icon: BookOpen, desc: "Continuous adaptation to industry trends, tax regulations, and accounting best practices." },
                                    { title: "Relationships", icon: Users, desc: "Engineering long-term client engagements founded on mutual respect and open communication." },
                                    { title: "Accountability", icon: Clock, desc: "Rigorous monitoring of progress, reviewing strategies to ensure clients stay on an optimized track." }
                                ].map((val, idx) => (
                                    <div key={idx} className="group flex gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center group-hover:bg-slate-900 group-hover:border-slate-800 transition-colors duration-300">
                                                <val.icon className="h-5 w-5 text-slate-500 group-hover:text-amber-500 transition-colors" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{val.title}</h3>
                                            <p className="text-sm text-slate-500 leading-relaxed">
                                                {val.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        ===========================================
        CONTACT / CTA - Terminal Dashboard Style
        ===========================================
      */}
            <section id="contact" className="py-24 bg-slate-950 relative border-t border-slate-800">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

                        {/* Left Info Panel */}
                        <div className="md:w-5/12 bg-slate-900 border-r border-slate-800 p-10 lg:p-16 flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
                            <div>
                                <h3 className="text-3xl font-serif font-bold text-white mb-4">Initialize<br />Consultation</h3>
                                <p className="text-slate-400 mb-10 text-sm leading-relaxed">
                                    Deploy our expertise for your business. Provide your coordinates, and our team will synthesize a strategy tailored to your parameters.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="p-2 bg-slate-800 rounded-md text-amber-500 mr-4 border border-slate-700">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">Direct Line / WhatsApp</p>
                                        <a href="tel:+919148353052" className="text-lg text-white hover:text-amber-400 transition-colors">+91 91483 53052</a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="p-2 bg-slate-800 rounded-md text-blue-400 mr-4 border border-slate-700">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">Secure Email</p>
                                        <a href="mailto:info@hsngandco.com" className="text-lg text-white hover:text-blue-400 transition-colors">info@hsngandco.in</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Form Panel */}
                        <div className="md:w-7/12 bg-slate-900 border-t md:border-t-0 md:border-l border-slate-800 p-10 lg:p-16">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                    <div className="relative">
                                        <label htmlFor="first-name" className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block">First name</label>
                                        <input type="text" name="first-name" id="first-name" className="block w-full bg-slate-950 border border-slate-800 rounded-lg py-3 px-4 text-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none" placeholder="Jane" />
                                    </div>
                                    <div className="relative">
                                        <label htmlFor="last-name" className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block">Last name</label>
                                        <input type="text" name="last-name" id="last-name" className="block w-full bg-slate-950 border border-slate-800 rounded-lg py-3 px-4 text-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none" placeholder="Doe" />
                                    </div>
                                    <div className="sm:col-span-2 relative">
                                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block">Business Email</label>
                                        <input id="email" name="email" type="email" className="block w-full bg-slate-950 border border-slate-800 rounded-lg py-3 px-4 text-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none" placeholder="jane@company.com" />
                                    </div>
                                    <div className="sm:col-span-2 relative">
                                        <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block">Phone Number (WhatsApp)</label>
                                        <div className="flex rounded-lg shadow-sm">
                                            <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-slate-800 bg-slate-900 text-slate-400 sm:text-sm font-mono">
                                                +91
                                            </span>
                                            <input type="text" name="phone" id="phone" className="flex-1 min-w-0 block w-full bg-slate-950 px-4 py-3 rounded-none rounded-r-lg border border-slate-800 text-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none" placeholder="91483 53052" />
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-4 border border-transparent rounded-lg text-sm font-bold tracking-wide uppercase text-slate-900 bg-amber-500 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 focus:ring-offset-slate-900 transition-all">
                                        Transmit Request
                                        <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}
