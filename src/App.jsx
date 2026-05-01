import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LucideRocket, LucideChevronRight, LucideRefreshCcw, LucideGlobe, LucideHeart, LucideShare2, LucideX, LucideCheckCircle, LucideXCircle, LucideAlertCircle, LucideShieldCheck } from 'lucide-react'
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

function App() {
  const [activeModal, setActiveModal] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const [waitlistEmail, setWaitlistEmail] = useState('')
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openModal = (page) => {
    setActiveModal(page)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setActiveModal(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <div className="min-h-screen bg-white text-deep-black selection:bg-vibrant-green selection:text-white mesh-gradient">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-white/95 backdrop-blur-xl border-soft-grey' : 'bg-transparent border-transparent'}`}>
        <div className="max-w-[1440px] mx-auto px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center">
              <img src="/Finishdlogo.png" alt="FinishD" className="h-10 w-auto" />
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-bold text-vibrant-green border-b-2 border-vibrant-green py-1 focus-visible:ring-2 focus-visible:ring-vibrant-green outline-none rounded-sm"
            >
              Home
            </button>
            <button
              onClick={() => openModal('help')}
              className="text-deep-black/70 hover:text-deep-black transition-colors focus-visible:ring-2 focus-visible:ring-vibrant-green outline-none rounded-sm px-1"
            >
              Help Center
            </button>
            <button
              onClick={() => openModal('guidelines')}
              className="text-deep-black/70 hover:text-deep-black transition-colors focus-visible:ring-2 focus-visible:ring-vibrant-green outline-none rounded-sm px-1"
            >
              Guidelines
            </button>
            <button
              onClick={() => openModal('contact')}
              className="text-deep-black/70 hover:text-deep-black transition-colors focus-visible:ring-2 focus-visible:ring-vibrant-green outline-none rounded-sm px-1"
            >
              Contact Us
            </button>
          </nav>
          <button className="bg-vibrant-green text-deep-black px-6 py-2 rounded-full font-bold hover:scale-105 transition-all focus-visible:ring-2 focus-visible:ring-vibrant-green outline-none">Get App</button>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative px-8 py-20 overflow-hidden">
          <div className="hero-glow absolute inset-0 -z-10"></div>
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vibrant-green/10 border border-vibrant-green/20 text-vibrant-green text-sm font-bold">
                <LucideRocket size={14} />
                NEXT-GEN MOVIE PLATFORM
              </div>
              <h2 className="text-6xl md:text-8xl font-black text-deep-black leading-[1.05] tracking-tighter">
                Don't Just Watch. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-vibrant-green to-vibrant-green/80">Discuss.</span>
              </h2>
              <p className="text-lg md:text-xl text-deep-black/60 max-w-xl leading-relaxed">
                The cinematic experience reimagined for the social age. Sync your streams, react in real-time, and join the global conversation on the films that matter.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="flex items-center gap-3 bg-deep-black text-white px-6 py-3 rounded-xl font-bold border border-deep-black/20 hover:scale-105 transition-all shadow-lg shadow-deep-black/10">
                  <svg viewBox="0 0 384 512" className="w-6 h-6" fill="currentColor">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] uppercase leading-none font-medium opacity-70">Download on the</div>
                    <div className="text-xl leading-none">App Store</div>
                  </div>
                </button>
                <button className="flex items-center gap-3 bg-deep-black text-white px-6 py-3 rounded-xl font-bold border border-deep-black/20 hover:scale-105 transition-all shadow-lg shadow-deep-black/10">
                  <svg viewBox="0 0 512 512" className="w-6 h-6" fill="currentColor">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-10.3 18-28.5-1.2-40.8zM325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] uppercase leading-none font-medium opacity-70">GET IT ON</div>
                    <div className="text-xl leading-none">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-[300px] h-[600px] rounded-[3rem] border-[8px] border-soft-grey shadow-2xl overflow-hidden bg-deep-black ring-1 ring-deep-black/10">
                <img 
                  className="w-full h-full object-cover" 
                  src="/photo1.jpg"
                  alt="FinishD App Interface"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-vibrant-green/20 blur-[80px] rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-vibrant-green/20 blur-[80px] rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="px-8 py-12">
          <div className="max-w-[1440px] mx-auto flex flex-wrap justify-center gap-4">
            {['Sci-Fi Night', 'Indie Gems', 'Noir Rewind', 'Action Pulse', 'Docs & Reality'].map((cat, i) => (
              <span key={i} className="px-6 py-2 rounded-full bg-white border border-soft-grey text-deep-black text-sm font-bold">
                {cat}
              </span>
            ))}
          </div>
        </section>

        {/* Trailer Grid */}
        <section className="px-8 py-24 bg-soft-grey/50">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div className="space-y-2">
                <h3 className="text-4xl font-bold text-deep-black">Fresh Trailers</h3>
                <p className="text-deep-black/60">Curated for your cinematic taste.</p>
              </div>
              <button className="text-primary font-bold flex items-center gap-2 hover:opacity-80"></button>
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
                    <p className="text-xs font-bold text-vibrant-green mb-1 uppercase tracking-wider">{card.tag}</p>
                    <h4 className="text-xl font-bold text-white">{card.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App Gallery Section */}
        <section className="px-8 py-24 bg-white">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h3 className="text-5xl font-black text-deep-black tracking-tighter">App Gallery</h3>
              <p className="text-xl text-deep-black/60 max-w-2xl mx-auto">Take a peek inside the FinishD experience.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-[9/16] rounded-[2.5rem] bg-soft-grey border border-soft-grey overflow-hidden relative group">
                  <div className="absolute inset-0 flex items-center justify-center text-deep-black/20 font-bold italic">
                    Screenshot Placeholder {i}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deep-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-8 py-24 bg-soft-grey/30">
          <div className="max-w-[1000px] mx-auto">
            <h3 className="text-4xl font-bold text-deep-black mb-12 text-center">Frequently Asked Questions</h3>
            <div className="grid gap-6">
              {UI_CONTENT.homeFaqs.map((faq, i) => (
                <div key={i} className="glass-card p-8 rounded-3xl border border-soft-grey hover:border-primary-container/30 transition-colors">
                  <h4 className="text-xl font-bold text-white mb-4">{faq.q}</h4>
                  <p className="text-deep-black/60 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-8 py-32">
          <div className="max-w-[1100px] mx-auto rounded-[3rem] bg-gradient-to-br from-vibrant-green/20 to-vibrant-green/80/20 border border-soft-grey p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-deep-black/40 backdrop-blur-[40px] -z-10"></div>
            <div className="relative z-10 space-y-8">
              <h3 className="text-5xl md:text-6xl font-black text-deep-black tracking-tighter">Join the Waitlist</h3>
              <p className="text-deep-black/60 text-xl max-w-2xl mx-auto">Get early access to the beta version and start experiencing movies the social way. Limited spots available.</p>

              {!waitlistSubmitted ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setWaitlistSubmitted(true);
                  }}
                  className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto"
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    className="flex-grow bg-white px-6 py-4 rounded-2xl bg-soft-grey border border-deep-black/20 text-deep-black placeholder:text-deep-black/40 focus:outline-none focus:ring-2 focus:ring-primary-container"
                  />
                  <button type="submit" className="bg-vibrant-green text-deep-black px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all whitespace-nowrap">
                    Join Beta
                  </button>
                </form>
              ) : (
                <div className="bg-vibrant-green/20 border border-primary-container/30 rounded-2xl p-8 max-w-lg mx-auto">
                  <LucideCheckCircle className="mx-auto text-primary-container mb-4" size={48} />
                  <h4 className="text-2xl font-bold text-deep-black mb-2">You're on the list!</h4>
                  <p className="text-deep-black/70">Thank you for joining our waitlist. We'll notify you as soon as a spot opens up.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer openModal={openModal} />

      {/* Modal */}
      <AnimatePresence>
        {activeModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-deep-black"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="w-full h-full overflow-y-auto flex flex-col"
            >
              <div className="w-full border-b border-white/5 sticky top-0 bg-deep-black z-20">
                <div className="max-w-[1440px] mx-auto px-8 py-8 flex justify-between items-center">
                  <img src="/Finishdlogo.png" alt="FinishD" className="h-8 w-auto" />
                  <button
                    onClick={closeModal}
                    aria-label="Close modal"
                    className="w-12 h-12 rounded-full bg-soft-grey flex items-center justify-center hover:bg-soft-grey transition-colors focus-visible:ring-2 focus-visible:ring-vibrant-green outline-none"
                  >
                    <LucideX className="text-deep-black" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="w-full max-w-4xl mx-auto p-8 md:p-20 flex-grow bg-white">
                {activeModal === 'help' && (
                  <div className="space-y-12">
                    <div className="animated-hero-banner text-deep-black py-16 px-8 rounded-[2rem] text-center shadow-2xl">
                      <h1 id="modal-title" className="text-5xl font-black mb-8 tracking-tighter">How can we help you?</h1>
                      <div className="max-w-xl mx-auto relative">
                        <input type="text" placeholder="Search for answers..." className="w-full p-5 rounded-2xl bg-white text-black focus:ring-4 focus:ring-mint-400/20 outline-none" />
                        <button className="absolute right-3 top-3 bg-mint-600 text-deep-black px-6 py-2 rounded-xl font-bold">Search</button>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold text-deep-black">Frequently Asked Questions</h2>
                      {UI_CONTENT.help.faqs.map(faq => (
                        <div key={faq.id} className="bg-soft-grey rounded-2xl border border-soft-grey p-8 hover:border-vibrant-green/30 transition-colors">
                          <h3 className="text-xl font-bold text-deep-black mb-4">{faq.q}</h3>
                          <p className="text-deep-black/60 text-lg leading-relaxed">{faq.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeModal === 'guidelines' && (
                  <div className="space-y-16">
                    <div className="border-l-4 border-vibrant-green pl-8">
                      <h1 id="modal-title" className="text-5xl font-black text-deep-black mb-4 tracking-tighter">{LEGAL_CONTENT.guidelines.title}</h1>
                      <p className="text-xl text-deep-black/60">{LEGAL_CONTENT.guidelines.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {LEGAL_CONTENT.guidelines.encouraged.map((item, i) => (
                        <div key={i} className="glass-card p-8 rounded-3xl border border-vibrant-green/20">
                          <h3 className="font-bold text-vibrant-green mb-2 flex items-center gap-2">
                            <LucideCheckCircle size={18} /> {item.title}
                          </h3>
                          <p className="text-sm text-deep-black/60">{item.text}</p>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-deep-black">Zero Tolerance Policy</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {LEGAL_CONTENT.guidelines.prohibited.map((item, i) => (
                          <div key={i} className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10 flex items-start gap-4">
                            <LucideXCircle className="text-red-400 shrink-0" size={20} />
                            <div>
                              <h4 className="font-bold text-deep-black text-sm mb-1">{item.title}</h4>
                              <p className="text-xs text-deep-black/60 leading-relaxed">{item.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeModal === 'contact' && (
                  <div className="space-y-12">
                    <div className="text-center">
                      <h1 id="modal-title" className="text-5xl font-black text-deep-black mb-4 tracking-tighter">Get in Touch</h1>
                      <p className="text-xl text-deep-black/60">Our team typically responds within 24 hours.</p>
                    </div>
                    <ContactForm hideTitle />
                  </div>
                )}

                {(activeModal === 'privacy' || activeModal === 'terms') && (
                  <div className="max-w-4xl mx-auto space-y-16">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vibrant-green/10 border border-vibrant-green/20 text-vibrant-green text-xs font-bold mb-6">
                        <LucideShieldCheck size={14} />
                        OFFICIAL POLICY
                      </div>
                      <h1 id="modal-title" className="text-6xl font-black text-deep-black mb-4 tracking-tighter">
                        {LEGAL_CONTENT[activeModal].title}
                      </h1>
                      <p className="text-deep-black/60">Last Updated: {LEGAL_CONTENT[activeModal].lastUpdated}</p>
                    </div>

                    {LEGAL_CONTENT[activeModal].introduction && (
                      <div className="p-8 rounded-3xl bg-soft-grey border border-soft-grey">
                        <p className="text-deep-black/60 text-lg leading-relaxed whitespace-pre-wrap italic">
                          {LEGAL_CONTENT[activeModal].introduction}
                        </p>
                      </div>
                    )}

                    {activeModal === 'privacy' && (
                      <div className="grid md:grid-cols-3 gap-6">
                        {LEGAL_CONTENT.privacy.atAGlance.map((text, i) => (
                          <div key={i} className="p-6 rounded-3xl bg-vibrant-green/10 border border-vibrant-green/10">
                            <p className="text-sm text-deep-black/60 leading-relaxed">
                              <span className="text-vibrant-green font-bold mr-2">•</span>
                              {text}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="space-y-12">
                      {LEGAL_CONTENT[activeModal].sections.map((section, i) => (
                        <section key={i} className="space-y-4">
                          <h2 className="text-2xl font-bold text-deep-black flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-soft-grey flex items-center justify-center text-sm font-mono text-vibrant-green border border-soft-grey">
                              {i + 1}
                            </span>
                            {section.title}
                          </h2>
                          <div className="pl-11">
                            <p className="text-deep-black/60 text-lg leading-relaxed whitespace-pre-wrap">
                              {section.content}
                            </p>
                          </div>
                        </section>
                      ))}
                    </div>

                    <div className="p-12 rounded-[3rem] bg-gradient-to-br from-vibrant-green/10 to-transparent border border-vibrant-green/20 text-center">
                      <h3 className="text-2xl font-bold text-deep-black mb-2">Have questions?</h3>
                      <p className="text-deep-black/60 mb-8">We're here to help you understand your rights and our responsibilities.</p>
                      <button 
                        onClick={() => setActiveModal('contact')}
                        className="bg-white text-black px-8 py-3 rounded-2xl font-bold hover:scale-105 transition-all"
                      >
                        Contact Legal Team
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <Footer openModal={openModal} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function ContactForm({ hideTitle = false }) {
  const [status, setStatus] = useState('idle') // idle, loading, success, error
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
      // Points to the Vercel rewrite /functions/v1/store-deletion-request
      const response = await fetch('/functions/v1/store-deletion-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
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
        <h2 className="text-4xl font-bold text-deep-black">Message Sent!</h2>
        <p className="text-deep-black/60 text-lg">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-vibrant-green font-bold hover:underline focus-visible:ring-2 focus-visible:ring-vibrant-green rounded outline-none"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto space-y-12">
      {!hideTitle && (
        <div className="text-center">
          <h1 className="text-5xl font-black text-deep-black mb-4 tracking-tighter">Get in Touch</h1>
          <p className="text-xl text-deep-black/60">Our team typically responds within 24 hours.</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-8 glass-card p-8 md:p-12 rounded-[3rem]">
        {status === 'error' && (
          <div role="alert" className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3 text-red-400">
            <LucideAlertCircle size={20} />
            <p className="text-sm font-bold">Something went wrong. Please try again later.</p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs font-bold text-deep-black/40 uppercase tracking-widest ml-1">Full Name</label>
            <input 
              id="name"
              type="text" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full p-4 bg-soft-grey border border-soft-grey rounded-2xl focus:ring-2 focus:ring-mint-400 outline-none text-deep-black transition-shadow"
              required 
              aria-required="true"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-xs font-bold text-deep-black/40 uppercase tracking-widest ml-1">Email Address</label>
            <input 
              id="email"
              type="email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full p-4 bg-soft-grey border border-soft-grey rounded-2xl focus:ring-2 focus:ring-mint-400 outline-none text-deep-black transition-shadow"
              required 
              aria-required="true"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="subject" className="text-xs font-bold text-deep-black/40 uppercase tracking-widest ml-1">Subject</label>
          <div className="relative">
            <select 
              id="subject"
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
              className="w-full p-4 bg-white-container-highest border border-soft-grey rounded-2xl focus:ring-2 focus:ring-mint-400 outline-none text-deep-black appearance-none transition-shadow"
            >
              <option>Account Recovery</option>
              <option>Technical Support</option>
              <option>Feature Request</option>
              <option>Request deletion of my account</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
              <LucideChevronRight size={18} className="rotate-90" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-xs font-bold text-deep-black/40 uppercase tracking-widest ml-1">Message</label>
          <textarea 
            id="message"
            rows="5" 
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full p-4 bg-soft-grey border border-soft-grey rounded-2xl focus:ring-2 focus:ring-mint-400 outline-none text-deep-black transition-shadow"
            placeholder="Tell us what's going on..."
            required
            aria-required="true"
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={status === 'loading'}
          className="w-full bg-vibrant-green text-deep-black font-black py-5 rounded-2xl hover:opacity-90 transition-all text-lg uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-3"
        >
          {status === 'loading' ? (
            <>
              <LucideRefreshCcw className="animate-spin" size={20} />
              Sending...
            </>
          ) : 'Send Message'}
        </button>
      </form>
    </div>
  )
}

export default App

function Footer({ openModal }) {
  return (
    <footer className="w-full border-t border-soft-grey pt-20 pb-12 bg-gradient-to-b from-[#18181F] to-[#121217]">
      <div className="max-w-[1440px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col gap-6 items-center md:items-start">
          <img src="/Finishdlogo.png" alt="FinishD" className="h-10 w-auto opacity-90" />
          <p className="text-base text-soft-grey/60">© 2026 FinishD. Built for the fast.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          <button onClick={() => openModal('privacy')} className="text-base text-soft-grey/60 hover:text-vibrant-green transition-colors">Privacy</button>
          <button onClick={() => openModal('terms')} className="text-base text-soft-grey/60 hover:text-vibrant-green transition-colors">Terms of Use</button>
          <button onClick={() => openModal('guidelines')} className="text-base text-soft-grey/60 hover:text-vibrant-green transition-colors">Guidelines</button>
          <button onClick={() => openModal('contact')} className="text-base text-soft-grey/60 hover:text-vibrant-green transition-colors">Contact Us</button>
        </div>
        <div className="flex gap-8">
          <button aria-label="Visit our website" className="text-soft-grey/60 hover:text-vibrant-green transition-colors focus-visible:ring-2 focus-visible:ring-vibrant-green rounded outline-none p-2">
            <LucideGlobe size={24} aria-hidden="true" />
          </button>
          <button aria-label="Favorite" className="text-soft-grey/60 hover:text-vibrant-green transition-colors focus-visible:ring-2 focus-visible:ring-vibrant-green rounded outline-none p-2">
            <LucideHeart size={24} aria-hidden="true" />
          </button>
          <button aria-label="Share" className="text-soft-grey/60 hover:text-vibrant-green transition-colors focus-visible:ring-2 focus-visible:ring-vibrant-green rounded outline-none p-2">
            <LucideShare2 size={24} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}
