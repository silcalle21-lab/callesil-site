import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { collections } from 'virtual:content';

const ETSY_URL = 'https://www.etsy.com/shop/CALLESIL';

// Image slots in collection order
const collectionImages = [
  './assets/images/halloween-collection.png',
  './assets/images/summer-ocean-collection.png',
  './assets/images/retro-vintage-collection.png',
  './assets/images/best-sellers-collection.png',
  './assets/images/more-to-come.png',
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const site = 'https://callesilcallelis.com';
const url = `${site}/collections`;
const title = 'Collections — CALLESIL | Premium Apparel';
const description =
  'Explore every CALLESIL collection — graphic T-shirts, oversized tees, hoodies, sweatshirts, and more. Premium organic cotton, intentional design, small-batch production.';
const ogImage = `${site}/og-image.png`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${url}#webpage`,
  name: title,
  url,
  description,
  isPartOf: { '@id': `${site}/#website` },
  about: { '@id': `${site}/#organization` },
};

export default function CollectionsPage() {
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
          style={{ height: '55vh', minHeight: '380px' }}
        >
          <img
            src="./assets/images/collections-hero.png"
            alt="CALLESIL collections — premium apparel editorial"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
            width={1920}
            height={600}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to bottom, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.68) 100%)',
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
                {collections.hero.label}
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="text-white leading-tight"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
                  fontWeight: 300,
                  letterSpacing: '0.01em',
                }}
              >
                {collections.hero.headline}
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-white/60 text-sm md:text-base tracking-wide font-light mt-4 max-w-xl leading-relaxed"
              >
                {collections.hero.subheadline}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── COLLECTIONS LIST ─────────────────────────────────────────────── */}
        <section className="bg-white py-20 md:py-24 px-6 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto flex flex-col gap-0">
            {collections.collections.map((col, idx) => {
              const imgSrc = collectionImages[idx];
              const isEven = idx % 2 === 0;

              return (
                <motion.article
                  key={col.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  variants={stagger}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-0 border-b border-[#e8e0d0] ${
                    idx === 0 ? 'border-t' : ''
                  }`}
                >
                  {/* Image — alternates left/right on desktop */}
                  {imgSrc ? (
                    <motion.div
                      variants={fadeUp}
                      className={`overflow-hidden ${isEven ? 'md:order-1' : 'md:order-2'}`}
                      style={{ aspectRatio: '4/3' }}
                    >
                      <img
                        src={imgSrc}
                        alt={col.name}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                        loading="lazy"
                        width={960}
                        height={720}
                      />
                    </motion.div>
                  ) : (
                    /* "More to Come" placeholder */
                    <motion.div
                      variants={fadeUp}
                      className={`overflow-hidden bg-[#f5f0e8] flex items-center justify-center ${
                        isEven ? 'md:order-1' : 'md:order-2'
                      }`}
                      style={{ aspectRatio: '4/3' }}
                    >
                      <p
                        className="text-[#c8bfaf] text-center"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                          fontWeight: 300,
                          fontStyle: 'italic',
                        }}
                      >
                        In Development
                      </p>
                    </motion.div>
                  )}

                  {/* Text */}
                  <motion.div
                    variants={stagger}
                    className={`flex flex-col justify-center px-8 py-12 md:px-12 lg:px-16 ${
                      isEven ? 'md:order-2' : 'md:order-1'
                    }`}
                  >
                    {/* Badge */}
                    {col.badge && <motion.span
                      variants={fadeUp}
                      className={`self-start text-[9px] tracking-[0.22em] uppercase px-2.5 py-1 mb-6 ${
                        col.available
                          ? 'bg-[#0a0a0a] text-white'
                          : 'border border-[#c8bfaf] text-[#9a9a9a]'
                      }`}
                    >
                      {col.badge}
                    </motion.span>}

                    {/* Name */}
                    <motion.h2
                      variants={fadeUp}
                      className="text-[#0a0a0a] leading-tight mb-2"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                        fontWeight: 300,
                      }}
                    >
                      {col.name}
                    </motion.h2>

                    {/* Tagline */}
                    <motion.p
                      variants={fadeUp}
                      className="text-[#9a9a9a] text-sm tracking-wide font-light italic mb-6"
                    >
                      {col.tagline}
                    </motion.p>

                    {/* Description */}
                    <motion.p
                      variants={fadeUp}
                      className="text-[#0a0a0a]/60 text-sm leading-relaxed font-light mb-8 max-w-sm"
                    >
                      {col.description}
                    </motion.p>

                    {/* Detail chips */}
                    <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-10">
                      {col.details.map((detail) => (
                        <span
                          key={detail}
                          className="text-[9px] tracking-[0.15em] uppercase border border-[#e8e0d0] text-[#9a9a9a] px-3 py-1.5"
                        >
                          {detail}
                        </span>
                      ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.div variants={fadeUp}>
                      {col.available ? (
                        <a
                          href={ETSY_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase px-7 py-3.5 bg-[#0a0a0a] text-white hover:bg-[#2a2a2a] transition-colors duration-300"
                        >
                          Shop on Etsy
                          <ArrowUpRight size={13} strokeWidth={1.5} />
                        </a>
                      ) : (
                        <a
                          href={ETSY_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase px-7 py-3.5 border border-[#c8bfaf] text-[#9a9a9a] hover:border-[#0a0a0a] hover:text-[#0a0a0a] transition-all duration-300"
                        >
                          Follow for Updates
                          <ArrowUpRight size={13} strokeWidth={1.5} />
                        </a>
                      )}
                    </motion.div>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* ── BOTTOM CTA ───────────────────────────────────────────────────── */}
        <section className="bg-[#0a0a0a] py-24 md:py-28 px-6 md:px-16 lg:px-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="text-white leading-tight mb-4"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
                fontWeight: 300,
              }}
            >
              {collections.cta.heading}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-white/45 text-sm tracking-wide font-light mb-10 max-w-md mx-auto leading-relaxed"
            >
              {collections.cta.subtext}
            </motion.p>
            <motion.div variants={fadeUp}>
              <a
                href={ETSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.25em] uppercase px-8 py-4 border border-white/40 text-white hover:bg-white hover:text-[#0a0a0a] transition-all duration-300"
              >
                {collections.cta.button}
                <ArrowUpRight size={13} strokeWidth={1.5} />
              </a>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
