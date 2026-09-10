import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { about } from 'virtual:content';

const ETSY_URL = 'https://www.etsy.com/shop/CALLESIL';

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const site = 'https://callesilcallelis.com';
const url = `${site}/about`;
const title = 'About — CALLESIL | Premium Graphic T-Shirts';
const description =
  'The story behind CALLESIL — an independent apparel brand built on intentional design, premium organic cotton, and the belief that a T-shirt can say something worth saying.';
const ogImage = `${site}/og-image.png`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${url}#webpage`,
  name: title,
  url,
  description,
  isPartOf: { '@id': `${site}/#website` },
  about: { '@id': `${site}/#organization` },
};

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main>
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section
          className="relative w-full overflow-hidden"
          style={{ height: '60vh', minHeight: '420px' }}
        >
          <img
            src="/callesil-site/assets/images/about-hero.png"
            alt="CALLESIL studio — where every piece begins"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
            width={1920}
            height={700}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to bottom, rgba(10,10,10,0.18) 0%, rgba(10,10,10,0.62) 100%)',
            }}
          />
          <div className="absolute inset-0 flex flex-col justify-end pb-14 px-6 md:px-16 lg:px-24 pointer-events-none">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="pointer-events-auto"
            >
              <motion.p
                variants={fadeUp}
                className="text-[10px] tracking-[0.3em] uppercase text-white/55 mb-3"
              >
                {about.hero.label}
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="text-white leading-tight"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.4rem, 5.5vw, 5rem)',
                  fontWeight: 300,
                  letterSpacing: '0.01em',
                }}
              >
                {about.hero.headline}
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-white/60 text-sm md:text-base tracking-wide font-light mt-4 max-w-xl leading-relaxed"
              >
                {about.hero.subheadline}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── STORY — split layout ─────────────────────────────────────────── */}
        <section className="bg-white py-20 md:py-28 px-6 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="overflow-hidden"
              style={{ aspectRatio: '4/5' }}
            >
              <img
                src="/callesil-site/assets/images/about-creative-process.png"
                alt="CALLESIL — the creative process"
                className="w-full h-full object-cover"
                loading="lazy"
                width={900}
                height={1100}
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                className="text-[10px] tracking-[0.28em] uppercase text-[#9a9a9a] mb-5"
              >
                {about.story.eyebrow}
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-[#0a0a0a] leading-tight mb-8"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                  fontWeight: 300,
                }}
              >
                {about.story.heading}
              </motion.h2>
              {about.story.paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  className="text-[#0a0a0a]/65 text-sm md:text-base leading-relaxed font-light mb-5 last:mb-0"
                >
                  {para}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── VALUES ───────────────────────────────────────────────────────── */}
        <section className="bg-[#f5f0e8] py-20 md:py-28 px-6 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
              className="mb-16 md:mb-20"
            >
              <motion.p
                variants={fadeUp}
                className="text-[10px] tracking-[0.28em] uppercase text-[#9a9a9a] mb-4"
              >
                What We Stand For
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-[#0a0a0a] leading-tight max-w-lg"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                  fontWeight: 300,
                }}
              >
                Four principles. No compromises.
              </motion.h2>
            </motion.div>

            {/* Values grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
            >
              {about.values.map((value, i) => (
                <motion.div key={value.id} variants={fadeUp} className="flex flex-col">
                  <span
                    className="text-[#c8bfaf] mb-5 select-none"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '3.5rem',
                      lineHeight: 1,
                      fontWeight: 300,
                    }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className="text-[#0a0a0a] text-base mb-3"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-[#0a0a0a]/60 text-sm leading-relaxed font-light">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── FABRIC / TEXTURE IMAGE BREAK ─────────────────────────────────── */}
        <div className="w-full overflow-hidden" style={{ height: '40vh', minHeight: '260px' }}>
          <motion.img
            src="/airo-assets/images/pages/about/values"
            alt="Premium organic cotton — the material behind every CALLESIL piece"
            className="w-full h-full object-cover"
            loading="lazy"
            width={1920}
            height={600}
            initial={{ scale: 1.06 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        </div>

        {/* ── MANIFESTO ────────────────────────────────────────────────────── */}
        <section className="bg-[#0a0a0a] py-24 md:py-32 px-6 md:px-16 lg:px-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.p
              variants={fadeUp}
              className="text-[10px] tracking-[0.3em] uppercase text-white/35 mb-8"
            >
              {about.manifesto.eyebrow}
            </motion.p>
            <motion.blockquote
              variants={fadeUp}
              className="text-white leading-tight mb-8"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 4.5vw, 4rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                letterSpacing: '0.01em',
              }}
            >
              "{about.manifesto.quote}"
            </motion.blockquote>
            <motion.p
              variants={fadeUp}
              className="text-white/45 text-sm tracking-wide font-light"
            >
              {about.manifesto.body}
            </motion.p>
          </motion.div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="bg-white py-20 md:py-24 px-6 md:px-16 lg:px-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="max-w-xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="text-[#0a0a0a] leading-tight mb-4"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.6rem, 3vw, 2.6rem)',
                fontWeight: 300,
              }}
            >
              {about.cta.heading}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[#9a9a9a] text-sm tracking-wide font-light mb-10"
            >
              {about.cta.subtext}
            </motion.p>
            <motion.div variants={fadeUp}>
              <a
                href={ETSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[10px] tracking-[0.25em] uppercase px-8 py-3.5 border border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
              >
                {about.cta.button}
              </a>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
