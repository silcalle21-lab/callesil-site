import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from "react-router";
import { shop } from 'virtual:content';
const ETSY_URL = 'https://www.etsy.com/shop/CALLESIL';
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut' as const
    }
  }
};
const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

// Product image slots in order
const productSlots = ['/airo-assets/images/pages/shop/product-1', '/airo-assets/images/pages/shop/product-2', '/airo-assets/images/pages/shop/product-3', '/airo-assets/images/pages/shop/product-4', '/airo-assets/images/pages/shop/product-5', '/airo-assets/images/pages/shop/product-6', '/airo-assets/images/pages/shop/product-7', '/airo-assets/images/pages/shop/product-8'];
export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filteredProducts = activeFilter === 'All' ? shop.products : shop.products.filter(p => p.category === activeFilter);
  const site = 'https://callesilcallelis.com';
  const url = `${site}/shop`;
  const title = 'Shop — CALLESIL Premium Graphic T-Shirts';
  const description = 'Browse the full CALLESIL collection — premium graphic T-shirts, oversized essentials, and limited edition drops. All crafted with intention.';
  const ogImage = `${site}/og-image.png`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#webpage`,
    name: title,
    url,
    description,
    isPartOf: {
      '@id': `${site}/#website`
    },
    about: {
      '@id': `${site}/#organization`
    }
  };
  return <>
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
        {/* ── HERO BANNER ──────────────────────────────────────────────────── */}
        <section className="relative w-full overflow-hidden" style={{
        height: '55vh',
        minHeight: '380px'
      }}>
          <img src="/airo-assets/images/pages/shop/hero" alt="CALLESIL shop collection editorial" className="absolute inset-0 w-full h-full object-cover object-center" loading="eager" fetchPriority="high" width={1920} height={600} />
          <div className="absolute inset-0 pointer-events-none" style={{
          background: 'linear-gradient(to bottom, rgba(10,10,10,0.25) 0%, rgba(10,10,10,0.65) 100%)'
        }} />
          <div className="absolute inset-0 flex flex-col justify-end pb-14 px-6 md:px-16 lg:px-24 pointer-events-none">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="pointer-events-auto">
              <motion.p variants={fadeUp} className="text-[10px] tracking-[0.3em] uppercase text-white/60 mb-3">
                {shop.hero.label}
              </motion.p>
              <motion.h1 variants={fadeUp} className="text-white leading-tight" style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
              fontWeight: 300,
              letterSpacing: '0.01em'
            }}>
                {shop.hero.headline}
              </motion.h1>
              <motion.p variants={fadeUp} className="text-white/60 text-sm tracking-wide font-light mt-3 max-w-md">
                {shop.hero.subheadline}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── FILTER BAR ───────────────────────────────────────────────────── */}
        <section className="bg-white border-b border-[#e8e0d0] sticky top-16 md:top-20 z-40">
          <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
            <div className="flex items-center gap-6 md:gap-10 overflow-x-auto py-4 scrollbar-none" role="group" aria-label="Filter products by category">
              {shop.filters.map(filter => <button key={filter} onClick={() => setActiveFilter(filter)} className={`text-[10px] tracking-[0.2em] uppercase whitespace-nowrap transition-all duration-200 pb-0.5 ${activeFilter === filter ? 'text-[#0a0a0a] border-b border-[#0a0a0a]' : 'text-[#9a9a9a] hover:text-[#0a0a0a]'}`}>
                  {filter}
                </button>)}
            </div>
          </div>
        </section>

        {/* ── PRODUCT GRID ─────────────────────────────────────────────────── */}
        <section className="bg-white py-16 md:py-20 px-6 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
            {/* Product count */}
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#9a9a9a] mb-10">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>

            <motion.div key={activeFilter} initial="hidden" animate="visible" variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-14">
              {/* Product 1 */}
              {filteredProducts.some(p => p.id === 'p-1') && <ProductCard product={shop.products[0]} imgSrc={productSlots[0]} etsy={ETSY_URL} />}
              {/* Product 2 */}
              {filteredProducts.some(p => p.id === 'p-2') && <ProductCard product={shop.products[1]} imgSrc={productSlots[1]} etsy={ETSY_URL} />}
              {/* Product 3 */}
              {filteredProducts.some(p => p.id === 'p-3') && <ProductCard product={shop.products[2]} imgSrc={productSlots[2]} etsy={ETSY_URL} />}
              {/* Product 4 */}
              {filteredProducts.some(p => p.id === 'p-4') && <ProductCard product={shop.products[3]} imgSrc={productSlots[3]} etsy={ETSY_URL} />}
              {/* Product 5 */}
              {filteredProducts.some(p => p.id === 'p-5') && <ProductCard product={shop.products[4]} imgSrc={productSlots[4]} etsy={ETSY_URL} />}
              {/* Product 6 */}
              {filteredProducts.some(p => p.id === 'p-6') && <ProductCard product={shop.products[5]} imgSrc={productSlots[5]} etsy={ETSY_URL} />}
              {/* Product 7 */}
              {filteredProducts.some(p => p.id === 'p-7') && <ProductCard product={shop.products[6]} imgSrc={productSlots[6]} etsy={ETSY_URL} />}
              {/* Product 8 */}
              {filteredProducts.some(p => p.id === 'p-8') && <ProductCard product={shop.products[7]} imgSrc={productSlots[7]} etsy={ETSY_URL} />}
            </motion.div>

            {/* Empty state */}
            {filteredProducts.length === 0 && <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} className="py-24 text-center">
                <p className="text-[#0a0a0a] text-2xl font-light mb-3" style={{
              fontFamily: 'var(--font-heading)'
            }}>
                  Nothing here yet.
                </p>
                <p className="text-[#9a9a9a] text-xs tracking-wide">
                  Check back soon for new drops.
                </p>
              </motion.div>}
          </div>
        </section>

        {/* ── EDITORIAL DIVIDER ────────────────────────────────────────────── */}
        <section className="bg-[#f5f0e8] py-20 md:py-24 px-6 md:px-16 lg:px-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: '-80px'
        }} variants={stagger} className="max-w-3xl mx-auto text-center">
            <motion.p variants={fadeUp} className="text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] mb-6">
              {shop.cta.headline}
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#0a0a0a]/70 text-sm tracking-wide leading-relaxed font-light mb-10 max-w-md mx-auto">
              {shop.cta.subtext}
            </motion.p>
            <motion.div variants={fadeUp}>
              <a href={ETSY_URL} target="_blank" rel="noopener noreferrer" className="inline-block text-[10px] tracking-[0.25em] uppercase px-8 py-3.5 border border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-all duration-300">
                {shop.cta.button}
              </a>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>;
}

// ── Product Card Component ────────────────────────────────────────────────────
interface ProductCardProps {
  product: {
    id: string;
    name: string;
    category: string;
    price: string;
    tag: string;
    description: string;
    sizes: string[];
  };
  imgSrc: string;
  etsy: string;
}

// Slug map — matches content/data/products.json slugs
const productSlugs: Record<string, string> = {
  'p-1': 'like-a-butterfly',
  'p-2': 'stay-fresh-stay-bloom',
  'p-3': 'imperfect',
  'p-4': 'money-maker',
  'p-5': 'wild-west-disco',
  'p-6': 'salty-hair',
  'p-7': 'haunted-season',
  'p-8': 'sailor-dreams'
};
function ProductCard({
  product,
  imgSrc,
  etsy
}: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const slug = productSlugs[product.id];
  const internalHref = slug ? `/shop/${slug}` : null;
  return <motion.article variants={{
    hidden: {
      opacity: 0,
      y: 16
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const
      }
    }
  }} className="group" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {/* Image — links to internal product page */}
      {internalHref ? <Link to={internalHref} aria-label={`View ${product.name}`} className="block overflow-hidden relative" style={{
      aspectRatio: '3/4'
    }}>
          <img src={imgSrc} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" loading="lazy" width={600} height={800} />
          {/* Hover overlay */}
          <div className={`absolute inset-0 bg-[#0a0a0a]/70 flex flex-col justify-end p-5 transition-opacity duration-300 pointer-events-none ${hovered ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-white/70 text-xs leading-relaxed tracking-wide font-light mb-3">
              {product.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {product.sizes.map(size => <span key={size} className="text-[9px] tracking-[0.15em] uppercase border border-white/30 text-white/70 px-2 py-0.5">
                  {size}
                </span>)}
            </div>
          </div>
        </Link> : <a href={etsy} target="_blank" rel="noopener noreferrer" aria-label={`Shop ${product.name} on Etsy`} className="block overflow-hidden relative" style={{
      aspectRatio: '3/4'
    }}>
          <img src={imgSrc} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" loading="lazy" width={600} height={800} />
        </a>}

      {/* Info row */}
      <div className="mt-4">
        <div className="flex justify-between items-baseline">
          {internalHref ? <Link to={internalHref} className="text-[#0a0a0a] text-sm font-light hover:opacity-60 transition-opacity duration-200" style={{
          fontFamily: 'var(--font-heading)'
        }}>
              {product.name}
            </Link> : <span className="text-[#0a0a0a] text-sm font-light" style={{
          fontFamily: 'var(--font-heading)'
        }}>
              {product.name}
            </span>}
        </div>
        <p className="text-[9px] tracking-[0.18em] uppercase text-[#9a9a9a] mt-1">
          {product.category}
        </p>
        {/* Etsy CTA — only this links to Etsy */}
        <a href={etsy} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-[9px] tracking-[0.2em] uppercase text-[#9a9a9a] hover:text-[#0a0a0a] border-b border-transparent hover:border-[#0a0a0a] transition-all duration-200 pb-px">
          Shop on Etsy
        </a>
      </div>
    </motion.article>;
}
