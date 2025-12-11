import React, { useState, useEffect } from 'react';
import { 
  PenTool, 
  Linkedin, 
  Mail, 
  Smartphone, 
  FileText, 
  Layout, 
  Briefcase, 
  GraduationCap, 
  ChevronDown, 
  User,
  Award,
  Menu,
  X,
  ArrowRight,
  Zap,
  Target,
  TrendingUp,
  Share2,
  Check
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [copyFeedback, setCopyFeedback] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const handleContactClick = (e, text, label) => {
    // NOTE: We intentionally do NOT call e.preventDefault().
    // We want the browser to follow the mailto: or tel: link immediately (Standard behavior).
    
    // We use document.execCommand('copy') because it is synchronous.
    // Modern navigator.clipboard.writeText is async and might be interrupted 
    // if the browser switches apps (like opening Outlook/Phone) too quickly.
    
    const textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Ensure textarea is not visible but part of DOM
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    
    textArea.select();
    
    try {
      document.execCommand('copy');
      setCopyFeedback(`${label} copied!`);
      // Hide feedback after 3 seconds
      setTimeout(() => setCopyFeedback(null), 3000);
    } catch (err) {
      console.error('Failed to copy text', err);
    }
    
    document.body.removeChild(textArea);
  };

  // --- DETAILED COPYWRITING DATA WITH SAMPLES ---
  
  const projects = [
    {
      id: 5,
      title: "The Rapido Story",
      client: "Personal Brand",
      category: "Viral Storytelling",
      icon: <Share2 size={48} className="text-blue-500" />,
      bgClass: "bg-blue-100",
      textClass: "text-blue-600",
      summary: "A personal narrative about a rainy day commute that turned into a viral lesson on resilience. 13k+ Impressions.",
      tags: ["LinkedIn Growth", "Narrative"],
      content: `
        <div class="space-y-8">
          <div>
            <h4 class="flex items-center gap-2 font-bold text-lg mb-2 text-slate-900">
              <span class="p-1 bg-blue-100 text-blue-600 rounded">The Result</span>
            </h4>
            <p class="text-slate-700 leading-relaxed">
              <strong>13,000+ Impressions.</strong> Hundreds of reactions. This post didn't just get views; it got people talking about the future of work and resilience in India.
            </p>
          </div>

          <div class="bg-slate-50 p-6 rounded-xl border border-slate-200">
             <h4 class="font-bold text-sm text-slate-500 uppercase tracking-wide mb-4 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                The Viral Post Structure
             </h4>
             <div class="grid lg:grid-cols-2 gap-8">
                
                {/* The Post Content */}
                <div class="bg-white p-6 rounded shadow-sm border border-slate-100 font-sans text-sm leading-relaxed text-slate-800">
                    <p class="mb-3 font-semibold text-slate-900">It was raining.</p>
                    <p class="mb-3">The kind of rain that makes you question if you’ll get home today.<br/>Bikes — cancelled.<br/>Cabs — unavailable.<br/>Apps — stuck on “searching for drivers.”</p>
                    <p class="mb-3">And I stood there, on my last day of college bags packed with memories, mind full of what-ifs...</p>
                    <p class="mb-3 italic text-slate-500">[...]</p>
                    <p class="mb-3">Then he smiled.<br/>And said,<br/>“I’m learning that too.”</p>
                    <p class="mb-3">Turns out he’s teaching himself software development. Between rides. Between responsibilities... No mentor. No classroom. Just the will to learn.</p>
                    <p class="mb-3 font-semibold text-blue-600">This is the India I believe in.<br/>The one that learns in motion.</p>
                </div>

                {/* The Analysis */}
                <div class="space-y-4">
                    <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                        <p class="text-xs font-bold text-blue-600 uppercase mb-1">01. The Hook (Scene Setting)</p>
                        <p class="text-sm text-slate-700">Started with sensory details ("It was raining") and a universal frustration (cancelled cabs). This instantly grabs attention because everyone relates to being stuck.</p>
                    </div>
                    <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                        <p class="text-xs font-bold text-purple-600 uppercase mb-1">02. The Pivot (The Surprise)</p>
                        <p class="text-sm text-slate-700">Subverted expectations. The driver wasn't just a driver; he was a <em>peer</em>. This creates an emotional gap that the reader wants to close.</p>
                    </div>
                    <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                        <p class="text-xs font-bold text-emerald-600 uppercase mb-1">03. The Payoff (Big Picture)</p>
                        <p class="text-sm text-slate-700">Zoomed out from a single auto ride to "The India I believe in." Turned a small moment into a motivational anthem for upskilling and grit.</p>
                    </div>
                </div>

             </div>
          </div>
        </div>
      `
    },
    {
      id: 1,
      title: "Logistics SOP Framework",
      client: "Grubgo",
      category: "Operations Strategy",
      icon: <FileText size={48} className="text-indigo-500" />,
      bgClass: "bg-indigo-100",
      textClass: "text-indigo-600",
      summary: "Chaos doesn't scale. I built the operational playbook that allowed Grubgo's fleet to expand without breaking.",
      tags: ["SOPs", "Process Engineering"],
      content: `
        <div class="space-y-8">
          <div>
            <h4 class="flex items-center gap-2 font-bold text-lg mb-2 text-slate-900">
              <span class="p-1 bg-red-100 text-red-600 rounded">The Problem</span>
            </h4>
            <p class="text-slate-700 leading-relaxed">
              <strong>Great tech, messy reality.</strong> That's the Q-commerce trap. Grubgo had the app, but the ground operations were bleeding efficiency. New sellers were confused about inventory. Riders were getting lost in pick-up zones.
            </p>
          </div>
          
          <div class="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
             <h4 class="font-bold text-sm text-indigo-800 uppercase tracking-wide mb-3 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                Copywriting Sample: Driver Protocol
             </h4>
             <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-4 rounded border border-red-100 opacity-70">
                   <p class="text-xs font-bold text-red-500 mb-2 uppercase">Before (Standard/Boring)</p>
                   <p class="text-sm text-slate-500 italic">"Drivers are requested to ensure they park in the designated areas and proceed to the counter to scan their arrival code. Failure to do so may result in delays."</p>
                </div>
                <div class="bg-white p-4 rounded border-l-4 border-indigo-500 shadow-sm">
                   <p class="text-xs font-bold text-indigo-600 mb-2 uppercase">My Version (Action-Oriented)</p>
                   <p class="text-sm text-slate-800 font-medium">"Step 1: Park in Zone B (Blue Lines). <br/>Step 2: Walk to Gate 1.<br/>Step 3: Scan QR Code immediately.<br/><br/>⚠️ No QR Scan = No Order Pickup."</p>
                </div>
             </div>
          </div>

          <div>
            <h4 class="flex items-center gap-2 font-bold text-lg mb-2 text-slate-900">
              <span class="p-1 bg-blue-100 text-blue-600 rounded">The Fix</span>
            </h4>
            <ul class="space-y-3 mt-3">
              <li class="flex gap-3">
                <span class="font-bold text-indigo-600 mt-1">01.</span>
                <span class="text-slate-700"><strong>Seller Onboarding Playbook:</strong> Cut the jargon. Created a visual, step-by-step guide that any shop owner could understand in 5 minutes.</span>
              </li>
              <li class="flex gap-3">
                <span class="font-bold text-indigo-600 mt-1">02.</span>
                <span class="text-slate-700"><strong>Routing Protocols:</strong> Documented exact decision trees for order routing. This removed the guesswork for the ops team.</span>
              </li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 2,
      title: "Grubgo App Microcopy",
      client: "Grubgo",
      category: "UX Writing",
      icon: <Layout size={48} className="text-purple-500" />,
      bgClass: "bg-purple-100",
      textClass: "text-purple-600",
      summary: "Users don't read; they scan. I rewrote the app interface to guide users effortlessly from 'Hungry' to 'Ordered'.",
      tags: ["Microcopy", "User Flow"],
      content: `
        <div class="space-y-8">
          <div>
            <h4 class="flex items-center gap-2 font-bold text-lg mb-2 text-slate-900">
              <span class="p-1 bg-red-100 text-red-600 rounded">The Problem</span>
            </h4>
            <p class="text-slate-700 leading-relaxed">
              <strong>Confused users don't buy. They leave.</strong> Grubgo's MVP was functional, but it sounded like a database talking to a human. "Error 404" and "Transaction Failed" were killing conversion rates.
            </p>
          </div>

          <div class="bg-purple-50 p-6 rounded-xl border border-purple-100">
             <h4 class="font-bold text-sm text-purple-800 uppercase tracking-wide mb-3 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                Copywriting Sample: Error States
             </h4>
             <div class="space-y-3">
                <div class="grid grid-cols-[1fr,auto,1fr] gap-2 items-center">
                    <div class="text-center">
                        <span class="block text-xs text-red-400 font-bold uppercase mb-1">Old Text</span>
                        <div class="bg-white p-3 rounded text-slate-400 text-sm border border-slate-100">"Payment Failed. Error 502."</div>
                    </div>
                    <div class="text-purple-300">➜</div>
                    <div class="text-center">
                        <span class="block text-xs text-purple-600 font-bold uppercase mb-1">My Text</span>
                        <div class="bg-white p-3 rounded text-slate-800 text-sm border-l-4 border-purple-500 shadow-sm font-medium">"Oops! Payment didn't go through. Don't worry, you haven't been charged. Try again?"</div>
                    </div>
                </div>
                <div class="grid grid-cols-[1fr,auto,1fr] gap-2 items-center">
                    <div class="text-center">
                        <span class="block text-xs text-red-400 font-bold uppercase mb-1">Old CTA</span>
                        <div class="bg-white p-3 rounded text-slate-400 text-sm border border-slate-100">"Submit Order"</div>
                    </div>
                    <div class="text-purple-300">➜</div>
                    <div class="text-center">
                        <span class="block text-xs text-purple-600 font-bold uppercase mb-1">My CTA</span>
                        <div class="bg-white p-3 rounded text-slate-800 text-sm border-l-4 border-purple-500 shadow-sm font-medium">"Get My Food 🍔"</div>
                    </div>
                </div>
             </div>
          </div>
          
          <div>
            <h4 class="flex items-center gap-2 font-bold text-lg mb-2 text-slate-900">
              <span class="p-1 bg-blue-100 text-blue-600 rounded">The Fix</span>
            </h4>
            <p class="text-slate-700 leading-relaxed">
              I humanized the interface. Microcopy isn't just small words; it's big psychological triggers. We shifted from "System Status" to "User Guidance".
            </p>
          </div>
        </div>
      `
    },
    {
      id: 3,
      title: "Wission Axis Brand Growth",
      client: "Wission Axis",
      category: "Content Strategy",
      icon: <Smartphone size={48} className="text-pink-500" />,
      bgClass: "bg-pink-100",
      textClass: "text-pink-600",
      summary: "Posting is easy. Growing is hard. I stopped the 'post for likes' mentality and started posting for leads.",
      tags: ["Brand Identity", "Growth"],
      content: `
        <div class="space-y-8">
          <div>
            <h4 class="flex items-center gap-2 font-bold text-lg mb-2 text-slate-900">
              <span class="p-1 bg-red-100 text-red-600 rounded">The Problem</span>
            </h4>
            <p class="text-slate-700 leading-relaxed">
              <strong>Noise without signal.</strong> Wission Axis needed visibility, but their feed was a graveyard of stock photos and weak hooks. There was no visual consistency, no narrative arc, and consequently—no engagement.
            </p>
          </div>

          <div class="bg-pink-50 p-6 rounded-xl border border-pink-100">
             <h4 class="font-bold text-sm text-pink-800 uppercase tracking-wide mb-3 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                Copywriting Sample: LinkedIn Hook
             </h4>
             <div class="bg-white p-5 rounded-lg border-l-4 border-pink-500 shadow-sm relative">
                <span class="absolute top-2 right-2 text-6xl text-slate-100 font-serif leading-none z-0">”</span>
                <p class="text-sm font-bold text-slate-900 mb-2 z-10 relative">Headline:</p>
                <p class="text-slate-800 font-medium mb-4 z-10 relative text-lg">"Most startups die because they build products nobody wants."</p>
                <p class="text-sm font-bold text-slate-900 mb-2 z-10 relative">Body Snippet:</p>
                <p class="text-slate-600 text-sm z-10 relative leading-relaxed">
                  "You spend 6 months coding. You launch. Crickets.<br/><br/>
                  Here is the 24-hour validation framework we used to test Wission Axis before writing a single line of code. Stop building blindly. Start asking strictly."
                </p>
             </div>
          </div>
          
          <div>
            <h4 class="flex items-center gap-2 font-bold text-lg mb-2 text-slate-900">
              <span class="p-1 bg-blue-100 text-blue-600 rounded">The Fix</span>
            </h4>
            <p class="text-slate-700 leading-relaxed">
              We shifted from "Company Updates" to "Community Value". Focused on carousel posts that taught the audience something valuable, earning saves and shares rather than just passive likes.
            </p>
          </div>
        </div>
      `
    },
    {
      id: 4,
      title: "Criminal Investigation Tracker",
      client: "Academic Project",
      category: "Product Design",
      icon: <Award size={48} className="text-emerald-500" />,
      bgClass: "bg-emerald-100",
      textClass: "text-emerald-600",
      summary: "I digitized the detective. A system that predicts suspects and tracks cases in real-time.",
      tags: ["System Design", "Logic"],
      content: `
        <div class="space-y-8">
          <div>
            <h4 class="flex items-center gap-2 font-bold text-lg mb-2 text-slate-900">
              <span class="p-1 bg-red-100 text-red-600 rounded">The Problem</span>
            </h4>
            <p class="text-slate-700 leading-relaxed">
              <strong>Justice delayed is justice denied.</strong> Traditional investigation tracking is manual, slow, and prone to human error. Filing cabinets and lost paperwork in 2025? Unacceptable.
            </p>
          </div>

          <div class="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
             <h4 class="font-bold text-sm text-emerald-800 uppercase tracking-wide mb-3 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                Copywriting Sample: Dashboard UI
             </h4>
             <div class="bg-slate-900 p-4 rounded-lg shadow-md text-emerald-400 font-mono text-xs md:text-sm">
                <div class="mb-2 border-b border-slate-700 pb-2">
                   <span class="text-slate-400">STATUS:</span> <span class="text-red-400 font-bold animate-pulse">CRITICAL MATCH FOUND</span>
                </div>
                <div class="space-y-1">
                   <p><span class="text-slate-400">SUSPECT:</span> RAJESH K.</p>
                   <p><span class="text-slate-400">PROBABILITY SCORE:</span> 87%</p>
                   <p><span class="text-slate-400">EVIDENCE LINK:</span> <span class="underline decoration-dotted">FINGERPRINT_Loc_A</span> + <span class="underline decoration-dotted">PRIOR_REC_2021</span></p>
                   <p class="mt-3 text-white bg-emerald-600 inline-block px-2 py-1 rounded">ACTION: ISSUE WARRANT</p>
                </div>
             </div>
             <p class="text-xs text-emerald-700 mt-2 text-center italic">The system doesn't guess. It calculates and commands.</p>
          </div>
          
          <div>
            <h4 class="flex items-center gap-2 font-bold text-lg mb-2 text-slate-900">
              <span class="p-1 bg-blue-100 text-blue-600 rounded">The Fix</span>
            </h4>
            <p class="text-slate-700 leading-relaxed">
              I built a digital brain for investigators. The system uses logic to link evidence (location, history, witnesses) to potential suspects automatically.
            </p>
          </div>
        </div>
      `
    }
  ];

  const NavLink = ({ id, label }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`text-sm font-medium transition-colors duration-300 hover:text-indigo-600 ${
        activeSection === id ? 'text-indigo-600' : 'text-slate-600'
      }`}
    >
      {label}
    </button>
  );

  const MobileNavLink = ({ id, label }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`block w-full text-left py-3 px-4 text-lg font-medium border-b border-slate-100 ${
        activeSection === id ? 'text-indigo-600 bg-indigo-50' : 'text-slate-600'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight flex items-center gap-2 text-slate-900">
            <span className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-serif italic">A</span>
            Akshat Varahagiri
          </div>
          
          <div className="hidden md:flex gap-8">
            <NavLink id="home" label="Home" />
            <NavLink id="about" label="Services" />
            <NavLink id="experience" label="Experience" />
            <NavLink id="portfolio" label="Case Studies" />
            <NavLink id="contact" label="Hire Me" />
          </div>

          <button 
            className="md:hidden text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden border-t border-slate-100">
            <MobileNavLink id="home" label="Home" />
            <MobileNavLink id="about" label="Services" />
            <MobileNavLink id="experience" label="Experience" />
            <MobileNavLink id="portfolio" label="Case Studies" />
            <MobileNavLink id="contact" label="Hire Me" />
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-sm font-bold tracking-wider text-indigo-600 uppercase bg-indigo-50 rounded-full border border-indigo-100">
            <Zap size={14} className="fill-indigo-600" />
            Content Strategist & Product Lead
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
            You built the Tech. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
               Now build the Trust.
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            A pretty product is useless if no one understands it. I bridge the gap between complex code and user adoption with <span className="text-slate-900 font-semibold">clear copy, intuitive UX, and data-driven strategy.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 text-lg"
            >
              See How I Work <ChevronDown size={20} />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 text-lg"
            >
              Start a Project <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Skills/Why Me Section */}
      <section id="about" className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">I Don't Just Write. I Solve.</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Most writers fill pages. Most designers fill pixels. I fill the gaps in your business logic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-slate-50 rounded-2xl hover:bg-indigo-50 transition-colors duration-300 group">
              <div className="w-14 h-14 bg-white shadow-sm text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <PenTool size={28} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Content Writing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                I don't write fluff. I write logic. Blogs that rank, newsletters that get opened, and SOPs that actually get followed.
              </p>
            </div>

            <div className="p-8 bg-slate-50 rounded-2xl hover:bg-purple-50 transition-colors duration-300 group">
              <div className="w-14 h-14 bg-white shadow-sm text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layout size={28} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">UX/UI Design</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Wireframes aren't art; they are blueprints for behavior. I design interfaces that guide users to the "Buy" button.
              </p>
            </div>

            <div className="p-8 bg-slate-50 rounded-2xl hover:bg-pink-50 transition-colors duration-300 group">
              <div className="w-14 h-14 bg-white shadow-sm text-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target size={28} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Brand Strategy</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Your brand isn't your logo. It's your voice. I define who you are, how you speak, and why people should care.
              </p>
            </div>

            <div className="p-8 bg-slate-50 rounded-2xl hover:bg-emerald-50 transition-colors duration-300 group">
              <div className="w-14 h-14 bg-white shadow-sm text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp size={28} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">Product Growth</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                A great product with bad messaging fails. I align your product roadmap with market needs to drive real adoption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-32 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end justify-between mb-16 border-b border-slate-200 pb-4">
             <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Track Record</h2>
                <p className="text-slate-600">Where I've made an impact.</p>
             </div>
             <div className="hidden md:block text-indigo-600 font-semibold">
                3+ Years Exp
             </div>
          </div>

          <div className="space-y-12">
            
            {/* Experience Item 1 */}
            <div className="group relative pl-8 border-l-2 border-indigo-200 hover:border-indigo-600 transition-colors">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-indigo-600 group-hover:bg-indigo-600 transition-colors"></div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-2xl font-bold text-slate-900">Product Lead</h3>
                <span className="font-mono text-sm text-slate-500">Dec 2023 - Nov 2025</span>
              </div>
              <div className="text-lg text-indigo-600 font-medium mb-4">Grubgo, Hyderabad</div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <p className="font-semibold text-slate-900 mb-3">The Challenge: Stabilizing a Q-commerce Ship</p>
                <ul className="space-y-3 text-slate-600">
                   <li className="flex gap-2 items-start">
                     <span className="text-indigo-600 mt-1">➞</span>
                     <span><strong>Brand Persona:</strong> Defined the voice for the entire platform. Turned a generic delivery app into a recognizable local brand.</span>
                   </li>
                   <li className="flex gap-2 items-start">
                     <span className="text-indigo-600 mt-1">➞</span>
                     <span><strong>Microcopy Overhaul:</strong> Rewrote customer app and seller dashboard copy. Result? Fewer confused users, smoother ordering flows.</span>
                   </li>
                   <li className="flex gap-2 items-start">
                     <span className="text-indigo-600 mt-1">➞</span>
                     <span><strong>Operational SOPs:</strong> Authored the "Bible" for logistics and onboarding. Streamlined operations so the team could focus on growth, not fires.</span>
                   </li>
                </ul>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="group relative pl-8 border-l-2 border-slate-200 hover:border-indigo-600 transition-colors">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-slate-300 group-hover:border-indigo-600 group-hover:bg-indigo-600 transition-colors"></div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-2xl font-bold text-slate-900">UX Designer & Content Specialist</h3>
                <span className="font-mono text-sm text-slate-500">May 2024 - Present</span>
              </div>
              <div className="text-lg text-indigo-600 font-medium mb-4">Freelance</div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <p className="font-semibold text-slate-900 mb-3">The Challenge: Helping Founders Ship Faster</p>
                <ul className="space-y-3 text-slate-600">
                   <li className="flex gap-2 items-start">
                     <span className="text-indigo-600 mt-1">➞</span>
                     <span><strong>10+ Startups Served:</strong> Delivered MVP-ready interfaces for Healthtech and Edtech founders who needed to launch <em>yesterday</em>.</span>
                   </li>
                   <li className="flex gap-2 items-start">
                     <span className="text-indigo-600 mt-1">➞</span>
                     <span><strong>User Research:</strong> I don't guess. I ask. Conducted interviews to refine messaging and information architecture based on real feedback.</span>
                   </li>
                </ul>
              </div>
            </div>

            {/* Experience Item 3 */}
            <div className="group relative pl-8 border-l-2 border-slate-200 hover:border-indigo-600 transition-colors">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-slate-300 group-hover:border-indigo-600 group-hover:bg-indigo-600 transition-colors"></div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-2xl font-bold text-slate-900">Social Media Manager</h3>
                <span className="font-mono text-sm text-slate-500">Oct 2024 - Dec 2024</span>
              </div>
              <div className="text-lg text-indigo-600 font-medium mb-4">Wission Axis</div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <p className="font-semibold text-slate-900 mb-3">The Challenge: Creating Digital Presence</p>
                <ul className="space-y-3 text-slate-600">
                   <li className="flex gap-2 items-start">
                     <span className="text-indigo-600 mt-1">➞</span>
                     <span><strong>Strategy Spearhead:</strong> Took the reins on content strategy. Increased engagement on LinkedIn & Instagram by focusing on value, not noise.</span>
                   </li>
                   <li className="flex gap-2 items-start">
                     <span className="text-indigo-600 mt-1">➞</span>
                     <span><strong>Visual Design:</strong> Designed the graphics stack (Canva/Figma) to ensure brand consistency across all touchpoints.</span>
                   </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Portfolio/Work Section */}
      <section id="portfolio" className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Proof of Work</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Talk is cheap. Here are the systems, strategies, and designs I've actually built.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group bg-slate-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col hover:-translate-y-1">
                <div className={`h-52 ${project.bgClass} flex items-center justify-center relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-opacity-20 transition-opacity ${project.textClass.replace('text', 'bg')}`}></div>
                  {project.icon}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-slate-800 shadow-sm">
                    {project.client}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className={`text-xs font-bold tracking-wider uppercase mb-3 ${project.textClass}`}>
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-1">
                    {project.summary}
                  </p>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="w-full mt-auto py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
                  >
                    Read The Case Study <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={() => setSelectedProject(null)}></div>
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-slate-100 rounded-full transition-colors z-20"
            >
              <X size={20} />
            </button>
            <div className={`h-40 ${selectedProject.bgClass} flex items-center justify-center w-full`}>
               {React.cloneElement(selectedProject.icon, { size: 64 })}
            </div>
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-slate-100 ${selectedProject.textClass}`}>
                  {selectedProject.category}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-xs font-semibold text-slate-500 uppercase">
                  {selectedProject.client}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">{selectedProject.title}</h2>
              
              <div 
                className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-p:text-slate-600 prose-li:text-slate-600"
                dangerouslySetInnerHTML={{ __html: selectedProject.content }}
              ></div>
              
              <div className="mt-10 pt-6 border-t border-slate-100 flex justify-between items-center">
                 <p className="text-sm text-slate-400 italic">Want results like this?</p>
                 <button 
                  onClick={() => {
                    setSelectedProject(null);
                    scrollToSection('contact');
                  }}
                  className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-indigo-600 transition-colors flex items-center gap-2"
                >
                  Hire Me For This <ArrowRight size={16}/>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Education Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center shrink-0 text-slate-600">
              <GraduationCap size={32} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">The Foundation</h2>
              <h3 className="text-lg font-semibold text-indigo-600 mb-1">B.Tech in Computer Science and Engineering</h3>
              <p className="text-slate-700 mb-4">Sreenidhi Institute of Science and Technology, Hyderabad (2021 - 2025)</p>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-4">
                CGPA: 8.7/10
              </div>
              <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
                My technical background allows me to understand complex products deeply. I don't just write about tech; I understand how it works under the hood (Machine Learning, Data Structures, OOPs).
                <br/>
                <span className="font-semibold text-slate-700 mt-2 block">Certification:</span> AWS Academy Graduate - Machine Learning Foundations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-6 text-sm font-bold tracking-wider text-indigo-400 uppercase bg-indigo-900/30 rounded-full border border-indigo-800">
            Available for freelance & Full-time
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Stop letting bad copy cost you money.</h2>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto text-xl">
             You have the product. I have the words. Let's combine them and start shipping.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a 
              href="mailto:varahagirixwork@gmail.com"
              onClick={(e) => handleContactClick(e, 'varahagirixwork@gmail.com', 'Email')}
              className="group flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 bg-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <h3 className="font-bold text-lg mb-1">Email Me</h3>
              <p className="text-sm text-slate-400">varahagirixwork@gmail.com</p>
            </a>

            <a 
              href="https://linkedin.com/in/akshatvarahagiri/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Linkedin size={24} />
              </div>
              <h3 className="font-bold text-lg mb-1">LinkedIn</h3>
              <p className="text-sm text-slate-400">View Profile</p>
            </a>

            <a 
              href="tel:+917416975140"
              onClick={(e) => handleContactClick(e, '+917416975140', 'Number')}
              className="group flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Smartphone size={24} />
              </div>
              <h3 className="font-bold text-lg mb-1">Call Me</h3>
              <p className="text-sm text-slate-400">+91 7416975140</p>
            </a>
          </div>
        </div>
      </section>

      {/* Copy Toast Notification */}
      {copyFeedback && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-6 py-3 rounded-full shadow-2xl z-50 animate-in fade-in slide-in-from-bottom-4 duration-300 flex items-center gap-3 border border-slate-700">
          <div className="bg-green-500 rounded-full p-1">
            <Check size={12} className="text-slate-900 stroke-[3]" />
          </div>
          <span className="font-medium">{copyFeedback}</span>
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 bg-slate-950 text-slate-600 text-center text-sm border-t border-slate-900">
        <p>© {new Date().getFullYear()} Akshat Varahagiri. Built for conversion.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
