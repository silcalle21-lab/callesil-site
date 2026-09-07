import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { useState } from 'react';
import { useParams, Link, Navigate } from "react-router";
import { products } from 'virtual:content';
import { ArrowLeft, ArrowUpRight, Star, Package, RefreshCw, Truck } from 'lucide-react';


const fadeUp = {
  hidden: {
    opacity: 0,
    y: 18
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
const site = 'https://callesilcallelis.com';
const ogImage = `${site}/og-image.png`;

// Per-product size selection — keyed by product id
function useSizeMap() {
  const [map, setMap] = useState<Record<string, string>>({});
  const pick = (id: string, size: string) => setMap(prev => ({
    ...prev,
    [id]: size
  }));
  const get = (id: string) => map[id] ?? '';
  return {
    pick,
    get
  };
}
export default function ProductPage() {
  const {
    slug
  } = useParams<{
    slug: string;
  }>();
  const {
    pick,
    get
  } = useSizeMap();
  const slugExists = products.some(p => p.slug === slug);
  if (!slugExists) return <Navigate to="/shop" replace />;
  return <>
      {products.map(product => {
      const isActive = product.slug === slug;
      const imgSrc = product.image ?? '';
      const pageUrl = `${site}/shop/${product.slug}`;
      const pageTitle = `${product.name} — CALLESIL`;
      const selectedSize = get(product.id);
      const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.description,
        brand: {
          '@type': 'Brand',
          name: 'CALLESIL'
        },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          url: product.etsyUrl
        }
      };
      return <div key={product.id} className={isActive ? undefined : 'hidden'} aria-hidden={!isActive}>
            {isActive && <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={product.shortDescription} />
                <link rel="canonical" href={pageUrl} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={product.shortDescription} />
                <meta property="og:type" content="product" />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:image" content={ogImage} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content={ogImage} />
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
              </Helmet>}

            <main>
              {/* ── BREADCRUMB ─────────────────────────────────────────────── */}
              <nav aria-label="Breadcrumb" className="bg-white border-b border-[#e8e0d0] px-6 md:px-16 lg:px-24 py-4">
                <div className="max-w-7xl mx-auto flex items-center gap-3">
                  <Link to="/shop" className="flex items-center gap-1.5 text-[9px] tracking-[0.2em] uppercase text-[#9a9a9a] hover:text-[#0a0a0a] transition-colors duration-200">
                    <ArrowLeft size={11} strokeWidth={1.5} />
                    Back to Shop
                  </Link>
                  <span className="text-[#d0c8be] text-xs">/</span>
                  <span className="text-[9px] tracking-[0.2em] uppercase text-[#0a0a0a]">
                    {product.name}
                  </span>
                </div>
              </nav>

              {/* ── PRODUCT DETAIL ─────────────────────────────────────────── */}
              <section className="bg-white py-12 md:py-16 px-6 md:px-16 lg:px-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                  {/* LEFT: Image */}
                  <motion.div initial="hidden" animate={isActive ? 'visible' : 'hidden'} variants={stagger} className="flex flex-col gap-4">
                    <motion.div variants={fadeUp} className="overflow-hidden bg-[#f5f0e8] relative" style={{
                  aspectRatio: '3/4'
                }}>
                      <img src={imgSrc} alt={product.name} className="w-full h-full object-cover" loading="eager" fetchPriority="high" width={800} height={1067} />
                    </motion.div>
                  </motion.div>

                  {/* RIGHT: Product info */}
                  <motion.div initial="hidden" animate={isActive ? 'visible' : 'hidden'} variants={stagger} className="flex flex-col">
                    {/* Category */}
                    <motion.p variants={fadeUp} className="text-[9px] tracking-[0.25em] uppercase text-[#9a9a9a] mb-3">
                      {product.category}
                    </motion.p>

                    {/* Name */}
                    <motion.h1 variants={fadeUp} className="text-[#0a0a0a] leading-tight mb-3" style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                  fontWeight: 300
                }}>
                      {product.name}
                    </motion.h1>

                    {/* Short description */}
                    <motion.p variants={fadeUp} className="text-[#0a0a0a]/60 text-sm leading-relaxed font-light mb-8 max-w-sm">
                      {product.shortDescription}
                    </motion.p>

                    {/* Size selector — inlined so content leaf expressions stay on the page */}
                    <motion.div variants={fadeUp} className="mb-8">
                      <div className="flex items-baseline justify-between mb-3">
                        <p className="text-[9px] tracking-[0.22em] uppercase text-[#0a0a0a]">
                          Select Size
                        </p>
                        {selectedSize && <span className="text-[9px] tracking-[0.15em] uppercase text-[#9a9a9a]">
                            Selected: {selectedSize}
                          </span>}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map(size => <button key={size} onClick={() => pick(product.id, size)} className={`text-[10px] tracking-[0.15em] uppercase px-4 py-2.5 border transition-all duration-200 ${selectedSize === size ? 'bg-[#0a0a0a] text-white border-[#0a0a0a]' : 'border-[#e8e0d0] text-[#0a0a0a] hover:border-[#0a0a0a]'}`}>
                            {size}
                          </button>)}
                      </div>
                      <p className="text-[9px] tracking-wide text-[#9a9a9a] mt-2.5 font-light">
                        {product.fit}
                      </p>
                    </motion.div>

                    {/* Buy on Etsy CTA */}
                    <motion.div variants={fadeUp} className="mb-10">
                      <a href={product.etsyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2.5 w-full text-[10px] tracking-[0.28em] uppercase py-4 bg-[#0a0a0a] text-white hover:bg-[#2a2a2a] transition-colors duration-300">
                        Buy on Etsy
                        <ArrowUpRight size={13} strokeWidth={1.5} />
                      </a>
                      <p className="text-[9px] tracking-wide text-[#9a9a9a] text-center mt-3 font-light">
                        Secure checkout via Etsy — all major cards accepted
                      </p>
                    </motion.div>

                    {/* Trust pills */}
                    <motion.div variants={fadeUp} className="grid grid-cols-3 gap-3 mb-10 border-t border-[#e8e0d0] pt-8">
                      <div className="flex flex-col items-center gap-2 text-center">
                        <Truck size={16} strokeWidth={1.5} className="text-[#9a9a9a]" />
                        <p className="text-[8px] tracking-[0.15em] uppercase text-[#9a9a9a] leading-tight">
                          Free shipping over $100
                        </p>
                      </div>
                      <div className="flex flex-col items-center gap-2 text-center">
                        <RefreshCw size={16} strokeWidth={1.5} className="text-[#9a9a9a]" />
                        <p className="text-[8px] tracking-[0.15em] uppercase text-[#9a9a9a] leading-tight">
                          14-day returns
                        </p>
                      </div>
                      <div className="flex flex-col items-center gap-2 text-center">
                        <Package size={16} strokeWidth={1.5} className="text-[#9a9a9a]" />
                        <p className="text-[8px] tracking-[0.15em] uppercase text-[#9a9a9a] leading-tight">
                          Organic certified
                        </p>
                      </div>
                    </motion.div>

                    {/* Long description */}
                    <motion.div variants={fadeUp} className="border-t border-[#e8e0d0] pt-8 mb-8">
                      <p className="text-[9px] tracking-[0.22em] uppercase text-[#9a9a9a] mb-4">
                        About this piece
                      </p>
                      <p className="text-[#0a0a0a]/65 text-sm leading-relaxed font-light">
                        {product.description}
                      </p>
                    </motion.div>

                    {/* Product details list */}
                    <motion.div variants={fadeUp} className="border-t border-[#e8e0d0] pt-8 mb-8">
                      <p className="text-[9px] tracking-[0.22em] uppercase text-[#9a9a9a] mb-4">
                        Product details
                      </p>
                      <ul className="flex flex-col gap-2">
                        {product.details.map(detail => <li key={detail} className="flex items-start gap-2.5 text-sm text-[#0a0a0a]/65 font-light">
                            <span className="mt-2 w-1 h-1 rounded-full bg-[#c8bfaf] flex-shrink-0" />
                            <span>{detail}</span>
                          </li>)}
                      </ul>
                    </motion.div>

                    {/* Shipping */}
                    <motion.div variants={fadeUp} className="border-t border-[#e8e0d0] pt-8">
                      <p className="text-[9px] tracking-[0.22em] uppercase text-[#9a9a9a] mb-3">
                        Shipping
                      </p>
                      <p className="text-[#0a0a0a]/60 text-sm font-light leading-relaxed">
                        {product.shipping}
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </section>

              {/* ── CUSTOMER REVIEWS ─────────────────────────────────────────── */}
              <section className="bg-[#f5f0e8] py-20 md:py-24 px-6 md:px-16 lg:px-24">
                <div className="max-w-7xl mx-auto">
                  <motion.div initial="hidden" whileInView="visible" viewport={{
                once: true,
                margin: '-60px'
              }} variants={stagger}>
                    <motion.p variants={fadeUp} className="text-[10px] tracking-[0.28em] uppercase text-[#9a9a9a] mb-3">
                      Customer Reviews
                    </motion.p>
                    <motion.h2 variants={fadeUp} className="text-[#0a0a0a] leading-tight mb-12" style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                  fontWeight: 300
                }}>
                      What people are saying
                    </motion.h2>

                    <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {product.reviews.map(review => <motion.div key={review.id} variants={fadeUp} className="bg-white p-7 flex flex-col gap-4">
                          {/* Star rating — inlined so review.rating stays on the page */}
                          <div className="flex gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
                            {[1, 2, 3, 4, 5].map(n => <Star key={n} size={12} className={n <= review.rating ? 'text-[#0a0a0a] fill-[#0a0a0a]' : 'text-[#d0c8be]'} />)}
                          </div>
                          <p className="text-[#0a0a0a]/75 text-sm leading-relaxed font-light italic" style={{
                      fontFamily: 'var(--font-heading)'
                    }}>
                            <span>"{review.text}"</span>
                          </p>
                          <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#e8e0d0]">
                            <span className="text-[9px] tracking-[0.18em] uppercase text-[#0a0a0a] font-light">
                              {review.author}
                            </span>
                            <span className="text-[9px] tracking-wide text-[#9a9a9a] font-light">
                              {review.date}
                            </span>
                          </div>
                        </motion.div>)}
                    </motion.div>
                  </motion.div>
                </div>
              </section>

              {/* ── RELATED PRODUCTS ─────────────────────────────────────────── */}
              <section className="bg-white py-20 md:py-24 px-6 md:px-16 lg:px-24">
                <div className="max-w-7xl mx-auto">
                  <motion.div initial="hidden" whileInView="visible" viewport={{
                once: true,
                margin: '-60px'
              }} variants={stagger}>
                    <motion.p variants={fadeUp} className="text-[10px] tracking-[0.28em] uppercase text-[#9a9a9a] mb-3">
                      You may also like
                    </motion.p>
                    <motion.h2 variants={fadeUp} className="text-[#0a0a0a] leading-tight mb-12" style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                  fontWeight: 300
                }}>
                      More from {product.category}
                    </motion.h2>

                    {/* Full products list — show same-category items that aren't the current product */}
                    <>
                      <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                        {products.map(rel => {
                      const relImg = productSlots[rel.id] ?? '/airo-assets/images/pages/shop/product-1';
                      const showAsRelated = rel.category === product.category && rel.id !== product.id;
                      return <motion.article key={rel.id} variants={fadeUp} className={`group ${showAsRelated ? '' : 'hidden'}`} aria-hidden={!showAsRelated}>
                              <Link to={`/shop/${rel.slug}`} className="block overflow-hidden relative" style={{
                          aspectRatio: '3/4'
                        }} aria-label={`View ${rel.name}`}>
                                <img src={relImg} alt={rel.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" loading="lazy" width={600} height={800} />
                              </Link>
                              <div className="mt-4">
                                <div className="flex justify-between items-baseline">
                                  <Link to={`/shop/${rel.slug}`} className="text-[#0a0a0a] text-sm font-light hover:opacity-60 transition-opacity duration-200" style={{
                              fontFamily: 'var(--font-heading)'
                            }}>
                                    {rel.name}
                                  </Link>
                                </div>
                                <p className="text-[9px] tracking-[0.18em] uppercase text-[#9a9a9a] mt-1">
                                  {rel.category}
                                </p>
                              </div>
                            </motion.article>;
                    })}
                      </motion.div>
                    </>

                    <motion.div variants={fadeUp} className="mt-14 text-center">
                      <Link to="/shop" className="inline-block text-[10px] tracking-[0.25em] uppercase px-8 py-3.5 border border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-all duration-300">
                        View All Products
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </section>
            </main>
          </div>;
    })}
    </>;
}
