import { useState, useEffect } from 'react'
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { LucideRocket, LucideChevronRight, LucideRefreshCcw, LucideGlobe, LucideHeart, LucideShare2, LucideX, LucideCheckCircle, LucideXCircle, LucideAlertCircle, LucideShieldCheck, LucideApple, LucidePlay } from 'lucide-react'
import { LEGAL_CONTENT } from './content/legal'

// Mock Data / Content (Static UI strings)
const UI_CONTENT = {
  help: {
    title: "How can we help you?",
    description: "Search for answers or browse our FAQs.",
    faqs: [
      { id: "faq1", q: "How do I recover my account?", a: "Go to the login screen, select 'Forgot Password,' and follow the prompts sent to your registered email or phone number." },
      { id: "faq2", q: "What are badges and can I spend them?", a: "Badges are digital rewards for achieving your goals. Per our Terms, these have no real-world monetary value and cannot be redeemed for cash." }
    ]
  },
  homeFaqs: [
    {
      q: "How can I join the beta version of FinishD?",
      a: "You can join our beta by entering your email in the 'Join the Waitlist' section at the bottom of this page. We're rolling out access in waves to ensure the best experience for everyone."
    },
    {
      q: "Is FinishD available on both iOS and Android?",
      a: "Yes! FinishD is designed for both platforms. While we're currently in beta, the full release will be available on both the Apple App Store and Google Play Store."
    },
    {
      q: "Does FinishD cost anything to use?",
      a: "The core social features of FinishD are completely free. We want to make sure everyone can join the conversation about their favorite films and shows."
    },
    {
      q: "Can I sync FinishD with my favorite streaming services?",
      a: "Absolutely. FinishD is designed to integrate with major streaming platforms, allowing you to react in real-time and sync your watch history seamlessly."
    },
    {
      q: "How does the real-time discussion work?",
      a: "FinishD uses 'Sync Points' to allow you and your friends to react at the exact same moment in a movie, creating a virtual theater experience no matter where you are."
    }
  ]
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-surface text-on-surface selection:bg-primary-container selection:text-white mesh-gradient">
      <ScrollToTop />
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled || pathname !== '/' ? 'bg-black/80 backdrop-blur-xl border-white/10' : 'bg-transparent border-transparent'}`}>
        <div className="max-w-[1440px] mx-auto px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center">
              <img src="/Finishdlogo.png" alt="FinishD" className="h-10 w-auto" />
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={`font-bold transition-colors ${pathname === '/' ? 'text-mint-400 border-b-2 border-mint-400' : 'text-white/70 hover:text-white'}`}>Home</Link>
            <Link to="/help" className={`font-bold transition-colors ${pathname === '/help' ? 'text-mint-400' : 'text-white/70 hover:text-white'}`}>Help Center</Link>
            <Link to="/guidelines" className={`font-bold transition-colors ${pathname === '/guidelines' ? 'text-mint-400' : 'text-white/70 hover:text-white'}`}>Guidelines</Link>
            <Link to="/contact" className={`font-bold transition-colors ${pathname === '/contact' ? 'text-mint-400' : 'text-white/70 hover:text-white'}`}>Contact Us</Link>
          </nav>
          <button className="bg-vibrant-green text-deep-black px-6 py-2 rounded-full font-bold hover:scale-105 transition-all focus-visible:ring-2 focus-visible:ring-vibrant-green outline-none">Get App</button>
        </div>
      </header>

      <main className="pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 pt-16 pb-8 bg-black mt-20">
        <div className="max-w-[1440px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-4">
            <img src="/Finishdlogo.png" alt="FinishD" className="h-8 w-auto opacity-70" />
            <p className="text-sm text-white/40">© 2026 FinishD. Built for the fast.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <Link to="/privacy" className="text-sm text-white/40 hover:text-mint-400 transition-colors">Privacy</Link>
            <Link to="/terms" className="text-sm text-white/40 hover:text-mint-400 transition-colors">Terms of Use</Link>
            <Link to="/guidelines" className="text-sm text-white/40 hover:text-mint-400 transition-colors">Guidelines</Link>
            <Link to="/contact" className="text-sm text-white/40 hover:text-mint-400 transition-colors">Contact Us</Link>
          </div>
          <div className="flex gap-6">
            <LucideGlobe className="text-white/40 hover:text-white cursor-pointer" size={20} />
            <LucideHeart className="text-white/40 hover:text-white cursor-pointer" size={20} />
            <LucideShare2 className="text-white/40 hover:text-white cursor-pointer" size={20} />
          </div>
        </div>
      </footer>
    </div>
  )
}

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative px-8 py-20 overflow-hidden">
        <div className="hero-glow absolute inset-0 -z-10"></div>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/10 border border-secondary-container/20 text-secondary text-sm font-bold">
              <LucideRocket size={14} />
              NEXT-GEN MOVIE PLATFORM
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white leading-[1.05] tracking-tighter">
              Don't Just Watch. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-secondary-container">Discuss.</span>
            </h2>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
              The cinematic experience reimagined for the social age. Sync your streams, react in real-time, and join the global conversation on the films that matter.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all">
                <LucideApple size={20} fill="currentColor" />
                App Store
              </button>
              <button className="flex items-center gap-3 glass-card text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
                <LucidePlay size={20} fill="currentColor" />
                Play Store
              </button>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[600px] rounded-[3rem] border-[8px] border-surface-container-highest shadow-2xl overflow-hidden bg-black ring-1 ring-white/20">
              <img 
                className="w-full h-full object-cover" 
                src="/photo1.jpg"
                alt="FinishD App Interface"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-container/20 blur-[80px] rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary-container/20 blur-[80px] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-8 py-12">
        <div className="max-w-[1440px] mx-auto flex flex-wrap justify-center gap-4">
          {['Sci-Fi Night', 'Indie Gems', 'Noir Rewind', 'Action Pulse', 'Docs & Reality'].map((cat, i) => (
            <span key={i} className="px-6 py-2 rounded-full glass-card border-white/10 text-white/80 text-sm font-bold">
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Trailer Grid */}
      <section className="px-8 py-24 bg-surface-container-lowest/50">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-white">Fresh Trailers</h3>
              <p className="text-on-surface-variant">Curated for your cinematic taste.</p>
            </div>
            <button className="text-primary font-bold flex items-center gap-2 hover:opacity-80">
              View All <LucideChevronRight size={18} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Electric Dreams 2049', tag: 'SCI-FI / DRAMA', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6xHp1JV3f19vZof6JjmPiiGZPT0Ush17Fr2Z2fkuEC_K66axoOHofUi_S-YULs2XSzzn0E4CNob6GQHCUi6II7EJlSgeG8h_CxG9d5i7vIcY02Dzui8XGOi9K3x-RFtz2k7AGPQgdFXUTN7LO6d-ZSSUg675cWe667deGVOwWxOVEjU5_3Dqlb7uY3uKtuVCKmtqiPcv1XCq3NTw8jJUaX9c45BNLYAX7xFzkpJxYPsB2BhZZ-tvZa9mhxYD4J3TGVIDFRHObaDFm' },
              { title: 'Shadow Protocol', tag: 'NOIR / MYSTERY', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHWn84TkIK2qB3QUto0saijUJUWVNItNzDf06U3lNxZHcsZ-Xxs9RkwtssbU8HXMuF4AGFukvmAFPR0f4sTXNHCOpfmPHB5HdPMkMbUAe0m2IRODPp0X23KbgThlP19duOLyFgxT0oXYbUSIMMDef7dEYQK8dy1vhkSz419-2RQ3X59w1kfaeHifU7t5lqt7dES2xK344TgyMqbEfo0_bp3PXo1Gau1OXukyySTyJZErgKvYLFhJBb9tVcNAiep0ZYf8DFXnEbMIzJ' },
              { title: 'Terminal Velocity', tag: 'ACTION / THRILLER', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbutA7ZbssvM7rn69yjEiC-LlA6L3laGv_ZHfVU99XwXH3S9PUOvBYi01RpZJNFnyW0NZKdbQbw7FxnaR-l2TvsunQMOJi7kqf9u58ZlM91m68w5YybhUWEvFXTu_Bz-R4dWNcYWvhPPRPJUEp2h6_CnT_jnkvTTMvqogfdVvgYyo90lzwmRWbkyo14pwpSsCNikATS0za2fB18Yyvlp0GiBEd3TtQp-Dauo73AEUgOcVt4ph9GwrefbddvmS1bUIaf0xmM-LXC3Jk' }
            ].map((card, i) => (
              <div key={i} className="group relative aspect-[16/10] rounded-2xl overflow-hidden glass-card ring-1 ring-white/10 hover:ring-primary/50 transition-all duration-500">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={card.img} alt={card.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs font-bold text-secondary mb-1 uppercase tracking-wider">{card.tag}</p>
                  <h4 className="text-xl font-bold text-white">{card.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-32">
        <div className="max-w-[1100px] mx-auto rounded-[3rem] bg-gradient-to-br from-primary-container/20 to-secondary-container/20 border border-white/10 p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 backdrop-blur-[40px] -z-10"></div>
          <div className="relative z-10 space-y-8">
            <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter">Ready for the Premiere?</h3>
            <p className="text-on-surface-variant text-xl max-w-2xl mx-auto">Join 2M+ cinephiles today and start experiencing movies the way they were meant to be: together.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-primary-container text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all">Start Watching Now</button>
              <button className="glass-card text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function HelpPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 md:p-20 space-y-12">
      <div className="animated-hero-banner text-white py-16 px-8 rounded-[2rem] text-center shadow-2xl">
        <h1 className="text-5xl font-black mb-8 tracking-tighter">How can we help you?</h1>
        <div className="max-w-xl mx-auto relative">
          <input type="text" placeholder="Search for answers..." className="w-full p-5 rounded-2xl bg-white text-black focus:ring-4 focus:ring-mint-400/20 outline-none" />
          <button className="absolute right-3 top-3 bg-mint-600 text-white px-6 py-2 rounded-xl font-bold">Search</button>
        </div>
      </div>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
        {UI_CONTENT.help.faqs.map(faq => (
          <div key={faq.id} className="bg-white/5 rounded-2xl border border-white/10 p-8 hover:border-mint-400/30 transition-colors">
            <h3 className="text-xl font-bold text-white mb-4">{faq.q}</h3>
            <p className="text-on-surface-variant text-lg leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function GuidelinesPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 md:p-20 space-y-16">
      <div className="border-l-4 border-mint-500 pl-8">
        <h1 className="text-5xl font-black text-white mb-4 tracking-tighter">{LEGAL_CONTENT.guidelines.title}</h1>
        <p className="text-xl text-on-surface-variant">{LEGAL_CONTENT.guidelines.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {LEGAL_CONTENT.guidelines.encouraged.map((item, i) => (
          <div key={i} className="glass-card p-8 rounded-3xl border border-mint-400/20">
            <h3 className="font-bold text-mint-400 mb-2 flex items-center gap-2">
              <LucideCheckCircle size={18} /> {item.title}
            </h3>
            <p className="text-sm text-on-surface-variant">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Zero Tolerance Policy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {LEGAL_CONTENT.guidelines.prohibited.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10 flex items-start gap-4">
              <LucideXCircle className="text-red-400 shrink-0" size={20} />
              <div>
                <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function LegalPage({ type }) {
  const content = LEGAL_CONTENT[type]
  const navigate = useNavigate()

  if (!content) return <div className="p-20 text-center text-white">Document Not Found</div>

  return (
    <div className="max-w-4xl mx-auto p-8 md:p-20 space-y-16">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint-500/10 border border-mint-500/20 text-mint-400 text-xs font-bold mb-6">
          <LucideShieldCheck size={14} />
          OFFICIAL POLICY
        </div>
        <h1 className="text-6xl font-black text-white mb-4 tracking-tighter">
          {content.title}
        </h1>
        <p className="text-on-surface-variant">Last Updated: {content.lastUpdated}</p>
      </div>

      {content.atAGlance && (
        <div className="grid md:grid-cols-3 gap-6">
          {content.atAGlance.map((text, i) => (
            <div key={i} className="p-6 rounded-3xl bg-mint-400/5 border border-mint-400/10">
              <p className="text-sm text-on-surface-variant leading-relaxed">
                <span className="text-mint-400 font-bold mr-2">•</span>
                {text}
              </p>
            </div>
          ))}
        </div>
      )}

      {content.introduction && (
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
          <p className="text-on-surface-variant text-lg leading-relaxed whitespace-pre-wrap italic">
            {content.introduction}
          </p>
        </div>
      )}

      <div className="space-y-12">
        {content.sections.map((section, i) => (
          <section key={i} className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm font-mono text-mint-400 border border-white/10">
                {i + 1}
              </span>
              {section.title}
            </h2>
            <div className="pl-11">
              <p className="text-on-surface-variant text-lg leading-relaxed whitespace-pre-wrap">
                {section.content}
              </p>
            </div>
          </section>
        ))}
      </div>

      <div className="p-12 rounded-[3rem] bg-gradient-to-br from-mint-500/10 to-transparent border border-mint-500/20 text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Have questions?</h3>
        <p className="text-on-surface-variant mb-8">We're here to help you understand your rights and our responsibilities.</p>
        <button 
          onClick={() => navigate('/contact')}
          className="bg-white text-black px-8 py-3 rounded-2xl font-bold hover:scale-105 transition-all"
        >
          Contact Legal Team
        </button>
      </div>
    </div>
  )
}

function ContactPage() {
  const [status, setStatus] = useState('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Technical Support',
    message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const response = await fetch('/functions/v1/store-deletion-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (response.ok) setStatus('success')
      else setStatus('error')
    } catch (error) {
      console.error('Submission error:', error)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" aria-live="polite" className="max-w-3xl mx-auto text-center py-20 space-y-6">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-vibrant-green/20 text-vibrant-green mb-4">
          <LucideCheckCircle size={48} aria-hidden="true" />
        </div>
        <h2 className="text-4xl font-bold text-white">Message Sent!</h2>
        <p className="text-on-surface-variant text-lg">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
        <button onClick={() => setStatus('idle')} className="text-mint-400 font-bold hover:underline">Send another message</button>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto p-8 md:p-20 space-y-12">
      <div className="text-center">
        <h1 className="text-5xl font-black text-white mb-4 tracking-tighter">Get in Touch</h1>
        <p className="text-xl text-on-surface-variant">Our team typically responds within 24 hours.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-8 glass-card p-8 md:p-12 rounded-[3rem]">
        {status === 'error' && (
          <div role="alert" className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3 text-red-400">
            <LucideAlertCircle size={20} />
            <p className="text-sm font-bold">Something went wrong. Please try again later.</p>
          </div>
        )}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Full Name</label>
            <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-mint-400 outline-none text-white" required />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Email Address</label>
            <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-mint-400 outline-none text-white" required />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="subject" className="text-xs font-bold text-deep-black/40 uppercase tracking-widest ml-1">Subject</label>
          <div className="relative">
            <select value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="w-full p-4 bg-surface-container-highest border border-white/10 rounded-2xl focus:ring-2 focus:ring-mint-400 outline-none text-white appearance-none">
              <option>Account Recovery</option>
              <option>Technical Support</option>
              <option>Feature Request</option>
              <option>Request deletion of my account</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40"><LucideChevronRight size={18} className="rotate-90" /></div>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Message</label>
          <textarea rows="5" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-mint-400 outline-none text-white" placeholder="Tell us what's going on..." required></textarea>
        </div>
        <button type="submit" disabled={status === 'loading'} className="w-full bg-primary-container text-white font-black py-5 rounded-2xl hover:opacity-90 transition-all text-lg uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-3">
          {status === 'loading' ? <><LucideRefreshCcw className="animate-spin" size={20} />Sending...</> : 'Send Message'}
        </button>
      </form>
    </div>
  )
}

function DeepLinkRedirect() {
  const location = useLocation()
  
  useEffect(() => {
    // Attempt to redirect to the app using the custom scheme
    // This provides a fallback if Universal Links / App Links don't automatically intercept
    const appUrl = `finishd:/${location.pathname}${location.search}`
    
    // We use a short timeout to allow the UI to render before attempting the redirect
    const timer = setTimeout(() => {
      window.location.href = appUrl;
    }, 100);
    
    return () => clearTimeout(timer);
  }, [location])

  return (
    <div className="max-w-3xl mx-auto p-8 md:p-20 text-center space-y-8 mt-12">
      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-mint-500/20 text-mint-400 mb-4 animate-pulse">
        <LucideRocket size={48} />
      </div>
      <h1 className="text-5xl font-black text-white mb-4 tracking-tighter">Opening FinishD...</h1>
      <p className="text-xl text-on-surface-variant">
        If nothing happens, you might not have the app installed.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
        <button className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all">
          <LucideApple size={20} fill="currentColor" />
          Download on App Store
        </button>
        <button className="flex items-center justify-center gap-3 glass-card text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
          <LucidePlay size={20} fill="currentColor" />
          Get it on Google Play
        </button>
      </div>
    </div>
  )
}

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/guidelines" element={<GuidelinesPage />} />
        <Route path="/privacy" element={<LegalPage type="privacy" />} />
        <Route path="/terms" element={<LegalPage type="terms" />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Deep Link Fallback Routes */}
        <Route path="/show/:id" element={<DeepLinkRedirect />} />
        <Route path="/post/:id" element={<DeepLinkRedirect />} />
        <Route path="/community/:id" element={<DeepLinkRedirect />} />
        <Route path="/u/:id" element={<DeepLinkRedirect />} />
        
        {/* Catch-all route */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  )
}

export default App


