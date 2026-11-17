import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, BrainCircuit, BriefcaseBusiness, GraduationCap, Menu, MessageCircle, Sparkles, Users, X, Zap, Globe, Award } from 'lucide-react';
import './landing-page.css';
import './landing-roadmap.css';
import './landing-organizations.css';
import './landing-editorial.css';
import './landing-hero.css';

const learningSteps = [
  { title: 'Choose your academic home', text: 'Set your university and faculty, then explore subjects built around your academic path.', label: 'Your university. Your faculty.', icon: GraduationCap },
  { title: 'Pick the subjects you need', text: 'Compare available instructors and choose the course versions that fit your way of learning.', label: 'Subjects, made clearer.', icon: BookOpen },
  { title: 'Keep moving with support', text: 'Study with lessons, practice, an AI tutor, and a roadmap shaped around your goals.', label: 'Learn toward what comes next.', icon: BrainCircuit },
];

const journeys = [
  { title: 'Find your faculty', label: 'START WITH YOUR UNIVERSITY', text: 'Choose your university, faculty, and program to find learning that matches your academic structure.', to: '/academic', detail: 'Explore academic learning', alt: 'University students exploring their academic path', icon: GraduationCap },
  { title: 'Choose subjects and instructors', label: 'MAKE YOUR COURSE PLAN', text: 'Browse available instructors for your subjects and build a bundle that fits your study plan.', to: '/subscription', detail: 'See plans and subject options', alt: 'Students studying course materials together', icon: BookOpen },
  { title: 'Learn with a tutor and peers', label: 'GET SUPPORT AS YOU STUDY', text: 'Ask questions about your course material, keep your progress, and join paid communities when subscribed.', to: '/academic', detail: 'See academic courses', alt: 'University classmates sharing ideas around a course', icon: Users },
  { title: 'Connect learning with work', label: 'PLAN YOUR NEXT STEP', text: 'Explore career roadmaps that explain how your courses, skills, and interests connect to possible roles.', to: '/learning-path', detail: 'Explore career planning', alt: 'A student mapping university learning to a future career', icon: BriefcaseBusiness },
];

const highlights = [
  { title: 'An AI tutor for your study questions', text: 'Get help with concepts and course materials. Free access includes 10 questions per calendar month; the one-time three-day trial includes 30 questions total.', icon: BrainCircuit },
  { title: 'Keep your progress as you learn', text: 'Lessons, notes, and learning history stay with your account so you can continue your work later.', icon: BookOpen },
  { title: 'Learn alongside your academic community', text: 'Paid faculty and course communities open with a paid subscription, giving students a place to discuss their learning.', icon: MessageCircle },
];

const illustrationAssets = {
  academic: 'subject-study.png',
  study: 'hero-student-man.png',
  tutor: 'ai-tutor.png',
  career: 'career-path.png',
  community: 'community-study.png',
  organizations: 'instructor-class.png',
  closing: 'project-learner.png',
};

const EARLY_ACCESS_URL = import.meta.env.VITE_EARLY_ACCESS_URL || '/early-access/';
const earlyAccessLink = `${EARLY_ACCESS_URL.replace(/\/$/, '')}/`;

const HERO_MARQUEE_ITEMS = ['University Programs', 'AI-Powered Learning', 'Arabic & English', 'Verified Certificates', 'Academic Courses', 'Community-Driven'];

function LandingIllustration({ scene, alt, className = '' }: { scene: keyof typeof illustrationAssets; alt: string; className?: string }) {
  return <img className={`nl-landing-illustration nl-illustration-${scene} ${className}`} src={`/assets/images/${illustrationAssets[scene]}`} alt={alt} loading="lazy" />;
}

export const LandingPage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return <div className="nudra-landing">
    <a className="nl-skip" href="#main-content">Skip to content</a>
    <div className="nl-hero-v2">
      {/* Decorative grid */}
      <div className="nl-hero-grid-overlay" aria-hidden="true" />

      <header className="nl-header nl-container">
        <a href="#top" className="nl-brand" aria-label="Nudra home"><img src="/assets/images/favicon.png" alt="" width="36" height="36" /><span>nudra<span className="nl-brand-dot">.</span></span></a>
        <nav className="nl-desktop-nav" aria-label="Main navigation"><a href="#explore">How it works</a><a href="#academic">Academic</a><a href="#support">Student support</a><a href="#contact">Contact</a></nav>
        <div className="nl-header-actions"><a href={earlyAccessLink} className="nl-button nl-button-lime nl-header-cta">Early access <ArrowUpRight size={16} aria-hidden="true" /></a><button className="nl-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="nl-mobile-nav" aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button></div>
      </header>

      {menuOpen && <><button className="nl-mobile-scrim" aria-label="Close menu" onClick={closeMenu} /><nav className="nl-mobile-nav" id="nl-mobile-nav" aria-label="Mobile navigation"><div className="nl-mobile-nav-heading"><span>Explore Nudra</span><button onClick={closeMenu} aria-label="Close menu"><X size={20} /></button></div><a href="#explore" onClick={closeMenu}>How it works <ArrowUpRight size={16} /></a><a href="#academic" onClick={closeMenu}>Academic <ArrowUpRight size={16} /></a><a href="#support" onClick={closeMenu}>Student support <ArrowUpRight size={16} /></a><a href="#contact" onClick={closeMenu}>Contact <ArrowUpRight size={16} /></a><div className="nl-mobile-nav-actions"><a href={earlyAccessLink} className="nl-button nl-button-lime" onClick={closeMenu}>Early access <ArrowUpRight size={17} /></a></div></nav></>}

      {/* Split-grid hero content */}
      <div className="nl-hero-v2-content">
        {/* Left column: Text */}
        <div className="nl-hero-v2-text">
          <div className="nl-hero-v2-eyebrow">
            <span className="nl-hero-v2-eyebrow-dot" />
            <span>Nudra for university students</span>
          </div>

          <h1 id="hero-title" className="nl-hero-v2-title">
            <span className="nl-hero-v2-title-line">Your subjects.</span>
            <span className="nl-hero-v2-title-line">Your <span className="nl-hero-v2-title-em">next</span></span>
            <span className="nl-hero-v2-title-line"><span className="nl-hero-v2-title-accent">step</span><span className="nl-hero-v2-period">.</span></span>
          </h1>

          <p className="nl-hero-v2-sub">
            Choose instructors for your university courses, study with AI support
            grounded in your material, and connect what you learn to future possibilities.
          </p>

          <div className="nl-hero-v2-actions">
            <a href={earlyAccessLink} className="nl-hero-v2-cta-primary">
              <span>Start learning</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a href="#explore" className="nl-hero-v2-cta-ghost">
              <span>How it works</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="nl-hero-v2-proof">
            <div className="nl-hero-v2-proof-avatars">
              <div className="nl-hero-v2-proof-avatar">M</div>
              <div className="nl-hero-v2-proof-avatar">S</div>
              <div className="nl-hero-v2-proof-avatar">A</div>
              <div className="nl-hero-v2-proof-avatar">N</div>
            </div>
            <div className="nl-hero-v2-proof-text">
              <strong>University students</strong>
              Building their future with Nudra
            </div>
          </div>
        </div>

        {/* Right column: Visual */}
        <div className="nl-hero-v2-visual">
          <div className="nl-hero-v2-orb" aria-hidden="true" />
          <div className="nl-hero-v2-ring nl-hero-v2-ring-1" aria-hidden="true" />
          <div className="nl-hero-v2-ring nl-hero-v2-ring-2" aria-hidden="true" />

          <div className="nl-hero-v2-img-frame">
            <img
              src="/assets/images/hero-student-woman.png"
              alt="A university student with notebook, looking toward her future"
              width="1024"
              height="1536"
              fetchPriority="high"
            />
          </div>

          {/* Floating feature cards */}
          <div className="nl-hero-v2-float-card nl-hero-v2-float-card-1">
            <div className="nl-hero-v2-float-card-icon"><Zap size={16} /></div>
            <div>
              <strong>AI-Powered Tutor</strong>
              <span>Arabic &amp; English support</span>
            </div>
          </div>

          <div className="nl-hero-v2-float-card nl-hero-v2-float-card-2">
            <div className="nl-hero-v2-float-card-icon"><Award size={16} /></div>
            <div>
              <strong>Academic Courses</strong>
              <span>University instructors</span>
            </div>
          </div>

          <div className="nl-hero-v2-float-card nl-hero-v2-float-card-3">
            <div className="nl-hero-v2-float-card-icon"><Globe size={16} /></div>
            <div>
              <strong>Learn Anywhere</strong>
              <span>On any device, anytime</span>
            </div>
          </div>

          <div className="nl-hero-v2-badge">
            <Sparkles size={14} />
            <span>✦ University Platform</span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="nl-hero-v2-scroll" aria-hidden="true">
        <span>SCROLL</span>
        <div className="nl-hero-v2-scroll-line" />
      </div>

      {/* Marquee trust strip */}
      <div className="nl-hero-v2-marquee" aria-label="Platform highlights">
        <div className="nl-hero-v2-marquee-track">
          {[0, 1].map(copy => (
            <div className="nl-hero-v2-marquee-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {HERO_MARQUEE_ITEMS.map((item, i) => (
                <span className="nl-hero-v2-marquee-item" key={i}>
                  <span className="nl-hero-v2-marquee-sparkle">{'\u2726'}</span>
                  <span>{item}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
    <main id="main-content">
      <section className="nl-trust" aria-labelledby="trust-title"><div className="nl-container nl-trust-heading"><span className="nl-eyebrow">A CLEARER WAY TO STUDY AT UNIVERSITY</span><h2 id="trust-title">Your studies, with<br /><span>the support around them.</span></h2><p>Choose your university path, find instructors for your subjects, and keep your learning organized in one place.</p></div><div className="nl-marquee"><div className="nl-marquee-track">{[0, 1].map(copy => <div className="nl-marquee-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>{[{name:'University and faculty paths',detail:'Find your academic home',icon:GraduationCap},{name:'Selected subjects and instructors',detail:'Build your course bundle',icon:BookOpen},{name:'AI study support',detail:'Ask about what you are learning',icon:BrainCircuit},{name:'Student communities',detail:'Discuss courses with peers',icon:Users}].map(item => <div className="nl-trust-item" key={item.name} tabIndex={copy===0?0:-1}><item.icon size={32} strokeWidth={1.4} aria-hidden="true" /><div><strong>{item.name}</strong><span>{item.detail}</span></div></div>)}</div>)}</div></div></section>
      <section className="nl-section nl-container" id="academic" aria-labelledby="journey-title"><div className="nl-section-heading"><div><span className="nl-eyebrow">FROM PROFILE TO PROGRESS</span><h2 id="journey-title">Build a plan for<br /><span>the subjects you study.</span></h2></div><div className="nl-journey-aside"><p>Choose your faculty.<br />Find your instructors.<br />Learn at your pace.</p></div></div><div className="nl-steps">{learningSteps.map((step,i)=><article key={step.title}><div className={`nl-step-art nl-step-art-${i}`}><div className="nl-step-halo" aria-hidden="true"/><LandingIllustration scene={i===0?'academic':i===1?'study':'tutor'} alt={step.label}/><span className="nl-step-art-label">{step.label}</span></div><div className="nl-step-line"><span>0{i+1}</span><div/></div><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section>
      <section className="nl-explore nl-section" id="explore" aria-labelledby="explore-title"><div className="nl-container"><div className="nl-section-heading"><div><span className="nl-eyebrow">YOUR UNIVERSITY LEARNING JOURNEY</span><h2 id="explore-title">From your faculty<br /><span>to your future.</span></h2></div><p>Every step connects to the next: academic context, focused courses, support while you study, and ideas for where your skills may lead.</p></div><div className="nl-life-map"><div className="nl-map-start">START WITH WHAT YOU’RE STUDYING</div><ol className="nl-life-road">{journeys.map((journey,i)=><li className={`nl-life-stop nl-life-stop-${i}`} key={journey.title}><span className="nl-life-marker">0{i+1}</span><a href={i===3?'#contact':'#academic'} className="nl-life-chapter"><div className="nl-life-photo"><LandingIllustration scene={i===0?'academic':i===1?'study':i===2?'community':'career'} alt={journey.alt}/><span><journey.icon size={24} aria-hidden="true"/></span></div><div className="nl-life-copy"><span className="nl-eyebrow">{journey.label}</span><h3>{journey.title}</h3><p>{journey.text}</p><span className="nl-text-link">{journey.detail}<ArrowUpRight size={17} aria-hidden="true"/></span></div></a></li>)}</ol><div className="nl-map-future"><BookOpen size={26} aria-hidden="true"/><div><strong>Your learning stays yours.</strong><p>Keep your notes, progress, and history as you continue through your studies.</p></div><a href="#academic" className="nl-text-link">Browse academic learning <ArrowUpRight size={18} aria-hidden="true"/></a></div></div></div></section>
      <section className="nl-org nl-section" id="organizations" aria-labelledby="organizations-title"><div className="nl-container"><div className="nl-org-layout"><div className="nl-org-copy"><span className="nl-eyebrow">NUDRA FOR UNIVERSITIES AND FACULTIES</span><h2 id="organizations-title">Bring academic<br /><span>learning together.</span></h2><p>Organize your academic structure, connect instructors with courses, and give students a clear way to find learning for their university and faculty.</p><div className="nl-org-actions"><a href="#contact" className="nl-button nl-button-lime">Explore organizations <ArrowUpRight size={18} aria-hidden="true"/></a></div></div><div className="nl-org-visual"><LandingIllustration scene="organizations" alt="A university instructor teaching a small group of learners"/></div></div></div></section>
      <section className="nl-section nl-container nl-experience" id="support" aria-labelledby="experience-title"><div className="nl-experience-visual"><LandingIllustration scene="community" alt="Two university classmates discussing course materials through a learning community"/><div className="nl-study-caption"><span><BrainCircuit size={20} aria-hidden="true"/></span><div><strong>Support that follows your course.</strong><p>Study with your materials and your goals in view.</p></div></div></div><div className="nl-experience-copy"><span className="nl-eyebrow">BUILT AROUND YOUR STUDIES</span><h2 id="experience-title">A tutor for questions.<br /><span>A community for learning.</span></h2><p>Get help as you work through university subjects, and keep your study activity connected to the courses you chose.</p>{highlights.map(item=><div className="nl-feature" key={item.title}><item.icon aria-hidden="true"/><div><h3>{item.title}</h3><p>{item.text}</p></div></div>)}<a href={earlyAccessLink} className="nl-text-link">View plans and access <ArrowUpRight size={20} aria-hidden="true"/></a></div></section>
      <div className="nl-closing"><section className="nl-contact nl-section" id="contact" aria-labelledby="contact-title"><div className="nl-container"><div className="nl-contact-heading"><span className="nl-eyebrow">QUESTIONS ABOUT NUDRA?</span><h2 id="contact-title">Let’s talk about<br /><span>your academic path.</span></h2><p>Ask about student access, teaching on Nudra, or bringing your university community onto the platform.</p></div><div className="nl-contact-layout"><div className="nl-contact-map"><LandingIllustration scene="career" alt="A course-to-career diagram showing learning connected to future possibilities" className="nl-contact-map-art"/><div className="nl-map-label"><GraduationCap size={18} aria-hidden="true"/><div><small>MADE FOR UNIVERSITY LEARNING</small><strong>Academic paths, in one place.</strong></div></div><a className="nl-contact-email" href="mailto:support@nudra.org"><div><small>CONTACT NUDRA</small><strong>support@nudra.org</strong></div><ArrowUpRight size={18} aria-hidden="true"/></a><span className="nl-map-note">Students, instructors, and organizations.</span></div><form className="nl-contact-form" onSubmit={event=>{event.preventDefault();const data=new FormData(event.currentTarget);window.location.href=`mailto:support@nudra.org?subject=${encodeURIComponent(String(data.get('subject')))}&body=${encodeURIComponent(`From: ${data.get('name')} (${data.get('email')})\n\n${data.get('message')}`)}`;}}><h3>How can we help?</h3><p>Send a question to our support team.</p><div className="nl-contact-fields"><label>Your name<input name="name" autoComplete="name" placeholder="Your name" required/></label><label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required/></label></div><label>Topic<select name="subject"><option>Student access</option><option>Teaching with Nudra</option><option>University or faculty partnership</option><option>Other question</option></select></label><label>Your message<textarea name="message" rows={4} placeholder="Tell us what you need…" required/></label><button className="nl-button nl-button-dark" type="submit">Contact support <ArrowUpRight size={17} aria-hidden="true"/></button><small>Opens your email app with the message ready to send.</small></form></div></div></section>
      <section className="nl-cta nl-container"><div className="nl-cta-copy"><span className="nl-eyebrow">START WITH YOUR UNIVERSITY</span><h2>Choose your subjects.<br /><span>Make progress your way.</span></h2><p>Set your academic profile, explore instructors, and find the right starting point for your studies.</p><a href={earlyAccessLink} className="nl-button nl-button-lime">Start learning <ArrowUpRight size={19} aria-hidden="true"/></a><a href="#contact" className="nl-cta-secondary">Contact Nudra <ArrowUpRight size={16} aria-hidden="true"/></a></div><div className="nl-cta-visual"><LandingIllustration scene="closing" alt="A learner building a hands-on technology project"/></div></section></div>
    </main>
    <footer className="nl-footer"><div className="nl-container nl-footer-top"><div><a href="#top" className="nl-brand"><img src="/assets/images/favicon.png" alt="" width="36" height="36"/><span>nudra<span className="nl-brand-dot">.</span></span></a><p>University learning, shaped around you.</p></div><div><h3>Explore</h3><a href="#academic">Academic learning</a><a href="#explore">Your learning journey</a><a href="#support">Student support</a></div><div><h3>Get started</h3><a href={earlyAccessLink}>Request early access</a><a href="#contact">Contact Nudra</a></div><div><h3>Support</h3><a href="mailto:support@nudra.org">support@nudra.org</a></div></div><div className="nl-container nl-footer-bottom"><span>© {new Date().getFullYear()} Nudra. University learning, connected.</span><span>Learn with purpose. <ArrowUpRight size={14} aria-hidden="true"/></span></div></footer>
  </div>;
};
