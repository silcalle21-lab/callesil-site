import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from "react-router";
import { home } from 'virtual:content';
const ETSY_URL = 'https://www.etsy.com/shop/CALLESIL';

// Shared fade-in animation variants
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const
    }
  }
};
const fadeIn = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: 'easeOut' as const
    }
  }
};
const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

// ─── Section label ────────────────────────────────────────────────────────────
function SectionLabel({
  children
}: {
  children: string;
}) {
  return <p className="text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] mb-6">
      {children}
    </p>;
}

// ─── Etsy CTA button ──────────────────────────────────────────────────────────
function EtsyButton({
  children,
  dark = false
}: {
  children: string;
  dark?: boolean;
}) {
  return <a href={ETSY_URL} target="_blank" rel="noopener noreferrer" className={`inline-block text-[10px] tracking-[0.25em] uppercase px-8 py-3.5 border transition-all duration-300 ${dark ? 'border-white text-white hover:bg-white hover:text-[#0a0a0a]' : 'border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white'}`}>
      {children}
    </a>;
}
export default function HomePage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };
  const site = 'https://callesilcallelis.com';
  const ogImage = `${site}/og-image.png`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [{
      '@type': 'WebSite',
      '@id': `${site}/#website`,
      name: 'CALLESIL',
      url: `${site}/`
    }, {
      '@type': 'Organization',
      '@id': `${site}/#organization`,
      name: 'CALLESIL',
      url: `${site}/`,
      sameAs: ['https://www.etsy.com/shop/CALLESIL']
    }, {
      '@type': 'WebPage',
      '@id': `${site}/#webpage`,
      url: `${site}/`,
      name: 'CALLESIL — Premium Graphic T-Shirts',
      isPartOf: {
        '@id': `${site}/#website`
      },
      about: {
        '@id': `${site}/#organization`
      },
      datePublished: '2026-07-24',
      dateModified: '2026-07-24'
    }]
  };
  return <>
      <Helmet>
        <title>CALLESIL — Premium Graphic T-Shirts</title>
        <meta name="description" content="CALLESIL — original graphic T-shirts inspired by summer, ocean life, Halloween, and playful creativity. Wear the art. Make it yours." />
        <link rel="canonical" href={`${site}/`} />
        <meta property="og:title" content="CALLESIL — Premium Graphic T-Shirts" />
        <meta property="og:description" content="Premium graphic T-shirts designed for those who value simplicity, creativity, and timeless style." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={site} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main>
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
          <img src={home.hero.image} alt="CALLESIL premium graphic T-shirt editorial" className="absolute inset-0 w-full h-full object-cover object-center" loading="eager" fetchPriority="high" width={1920} height={1080} 
            />          <div className="absolute inset-0 pointer-events-none" style={{
          background: 'linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.55) 60%, rgba(10,10,10,0.75) 100%)'
        }} />

          {/* Hero content */}
          <div className="absolute inset-0 flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-16 lg:px-24 pointer-events-none">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl pointer-events-auto">
              <motion.h1 variants={fadeUp} className="text-white leading-[1.05] mb-6" style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
              fontWeight: 300,
              letterSpacing: '0.01em'
            }}>
                {home.hero.headline}
              </motion.h1>
              <motion.p variants={fadeUp} className="text-white/70 text-sm md:text-base tracking-[0.08em] font-light mb-10 max-w-xl leading-relaxed">
                {home.hero.subheadline}
              </motion.p>
              <motion.div variants={fadeUp}>
                <EtsyButton dark>{home.hero.cta}</EtsyButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── SHOP OUR DESIGNS ─────────────────────────────────────────────── */}
        <section className="bg-white py-20 md:py-28 px-6 md:px-16 lg:px-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="max-w-7xl mx-auto"
          >
            {/* Section header */}
            <motion.div variants={fadeUp} className="mb-14">
              <SectionLabel>{home.shopOurDesigns.label}</SectionLabel>
            </motion.div>

            {/* 3-column product grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {home.shopOurDesigns.products.map((product) => (
                <motion.div key={product.id} variants={fadeUp} className="flex flex-col group">
                  {/* Product image */}
                  <div className="w-full overflow-hidden mb-5 group" style={{ aspectRatio: '1/1' }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      loading="lazy"
                      width={600}
                      height={600}
                    />
                  </div>

                  {/* Product title */}
                  <p
                    className="text-foreground text-lg font-light mb-4 leading-snug"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {product.name}
                  </p>

                  {/* Shop on Etsy button */}
                  <a
                    href={product.etsyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start text-[10px] tracking-[0.25em] uppercase px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Shop on Etsy
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── BEST SELLERS ─────────────────────────────────────────────────── */}
        <section className="bg-white py-20 md:py-28 px-6 md:px-16 lg:px-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={fadeUp} className="mb-14">
              <SectionLabel>{home.bestSellers.label}</SectionLabel>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14">
              {home.bestSellers.products.map((product) => (
                <motion.div
                  key={product.id}
                  variants={fadeUp}
                  className="group flex flex-col"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2, ease: 'easeOut' as const }}
                >
                  {/* Image */}
                  <div className="overflow-hidden mb-5" style={{ aspectRatio: '3/4' }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      loading="lazy"
                      width={600}
                      height={800}
                    />
                  </div>

                  {/* Title */}
                  <p
                    className="text-foreground text-lg font-light mb-4 leading-snug"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {product.name}
                  </p>

                  {/* CTA */}
                  <a
                    href={product.etsyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start text-[10px] tracking-[0.25em] uppercase px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label={`Shop ${product.name} on Etsy`}
                  >
                    Shop on Etsy
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── NEW ARRIVALS ─────────────────────────────────────────────────── */}
        <section className="relative w-full overflow-hidden" style={{
        minHeight: '70vh'
      }}>
         <img src={home.newArrivals.image} alt="CALLESIL new arrivals editorial" className="absolute inset-0 w-full h-full object-cover object-center" loading="lazy" width={1920} height={1080} 
           />          background: 'linear-gradient(to right, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.3) 60%, rgba(10,10,10,0.1) 100%)'
        }} />
          <div className="relative flex items-center min-h-[70vh] px-6 md:px-16 lg:px-24 py-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: '-80px'
          }} variants={stagger} className="max-w-lg">
              <motion.div variants={fadeUp}>
                <SectionLabel>{home.newArrivals.label}</SectionLabel>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-white leading-tight mb-6" style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 300
            }}>
                {home.newArrivals.headline}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white/70 text-sm tracking-wide leading-relaxed mb-10 font-light">
                {home.newArrivals.subtext}
              </motion.p>
              <motion.div variants={fadeUp}>
                <EtsyButton dark>{home.newArrivals.cta}</EtsyButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── ABOUT CALLESIL ───────────────────────────────────────────────── */}
        <section className="bg-[#e8e0d0] py-20 md:py-28 px-6 md:px-16 lg:px-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: '-80px'
        }} variants={stagger} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Image */}
            <motion.div variants={fadeIn} className="overflow-hidden" style={{
            aspectRatio: '4/5'
          }}>
            <img src={home.about.image} alt="CALLESIL brand story" className="w-full h-full object-cover" loading="lazy" width={800} height={1000} />            </motion.div>

            {/* Text */}
            <motion.div variants={stagger} className="max-w-md">
              <motion.div variants={fadeUp}>
                <SectionLabel>{home.about.label}</SectionLabel>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-[#0a0a0a] leading-tight mb-8" style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 300
            }}>
                {home.about.headline}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-[#0a0a0a]/70 text-sm leading-relaxed tracking-wide font-light mb-10">
                {home.about.body}
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link to="/about" className="text-[10px] tracking-[0.25em] uppercase text-[#0a0a0a] border-b border-[#0a0a0a] pb-0.5 hover:opacity-60 transition-opacity duration-200">
                  {home.about.cta}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── CUSTOMER REVIEWS ─────────────────────────────────────────────── */}
        <section className="bg-white py-20 md:py-28 px-6 md:px-16 lg:px-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: '-80px'
        }} variants={stagger} className="max-w-7xl mx-auto">
            <motion.div variants={fadeUp} className="text-center mb-16">
              <SectionLabel>{home.reviews.label}</SectionLabel>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
              {home.reviews.items.map(review => <motion.div key={review.id} variants={fadeUp} className="flex flex-col">
                  <span className="text-[#e8e0d0] leading-none mb-4 select-none" style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '5rem',
                lineHeight: 1
              }} aria-hidden="true">
                    "
                  </span>
                  <p className="text-[#0a0a0a] text-base md:text-lg font-light leading-relaxed flex-1" style={{
                fontFamily: 'var(--font-heading)'
              }}>
                    {review.quote}
                  </p>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#9a9a9a] mt-6">
                    — <span>{review.author}</span>
                  </p>
                </motion.div>)}
            </div>
          </motion.div>
        </section>

        {/* ── NEWSLETTER ───────────────────────────────────────────────────── */}
        <section className="bg-[#0a0a0a] py-20 md:py-28 px-6 md:px-16 lg:px-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: '-80px'
        }} variants={stagger} className="max-w-2xl mx-auto text-center">
            <motion.div variants={fadeUp}>
              <SectionLabel>{home.newsletter.headline}</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-white leading-tight mb-4" style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 300
          }}>
              {home.newsletter.headline}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 text-sm tracking-wide leading-relaxed mb-10 font-light">
              {home.newsletter.subtext}
            </motion.p>
            <motion.div variants={fadeUp}>
              {subscribed ? <p className="text-white/70 text-xs tracking-[0.2em] uppercase">
                  Thank you for joining.
                </p> : <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder={home.newsletter.placeholder} required className="flex-1 bg-transparent border border-white/20 text-white placeholder:text-white/30 text-xs tracking-wide px-5 py-3.5 outline-none focus:border-white/50 transition-colors" aria-label="Email address" />
                  <button type="submit" className="text-[10px] tracking-[0.25em] uppercase bg-white text-[#0a0a0a] px-8 py-3.5 hover:bg-white/90 transition-colors duration-200 whitespace-nowrap">
                    {home.newsletter.cta}
                  </button>
                </form>}
            </motion.div>
          </motion.div>
        </section>

        {/* ── INSTAGRAM GALLERY ────────────────────────────────────────────── */}
        <section className="bg-white py-20 md:py-24 px-6 md:px-16 lg:px-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: '-80px'
        }} variants={stagger} className="max-w-7xl mx-auto">
            <motion.div variants={fadeUp} className="text-center mb-10">
              <a href="#" aria-label="CALLESIL on Instagram" className="text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] hover:text-[#0a0a0a] transition-colors duration-200">
                {home.instagram.label}
              </a>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
              {[1, 2, 3, 4, 5, 6].map(n => <motion.a key={n} href="#" aria-label={`CALLESIL Instagram post ${n}`} variants={fadeIn} className="block overflow-hidden group" style={{
              aspectRatio: '1/1'
            }}>
                  <img src={home.instagram.images[n - 1]} alt={`CALLESIL editorial ${n}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" loading="lazy" width={400} height={400} />                </motion.a>)}
            </div>
          </motion.div>
        </section>
      </main>
    </>;
}
