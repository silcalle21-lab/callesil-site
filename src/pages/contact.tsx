import { Helmet } from '@dr.pogodin/react-helmet';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { contact } from 'virtual:content';
import { ChevronDown, CheckCircle } from 'lucide-react';

const ETSY_URL = 'https://www.etsy.com/shop/CALLESIL';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const site = 'https://callesilcallelis.com';
const url = `${site}/contact`;
const title = 'Contact & FAQ — CALLESIL';
const description =
  'Get in touch with CALLESIL — questions about sizing, orders, custom pieces, or returns. Plus answers to the most common questions about our T-shirts.';
const ogImage = `${site}/og-image.png`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${url}#webpage`,
  name: title,
  url,
  description,
  isPartOf: { '@id': `${site}/#website` },
  about: { '@id': `${site}/#organization` },
};

// ── Contact Form ──────────────────────────────────────────────────────────────
// Static-site version: composes a mailto: link so no server is required.
function ContactForm() {
  const [topic, setTopic] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const selectedTopic = topic || 'General Inquiry';
    const subject = encodeURIComponent(`[CALLESIL] ${selectedTopic} — from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nTopic: ${selectedTopic}\n\n${message}`
    );
    window.location.href = `mailto:hello@callesilcallelis.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-start gap-4 py-10"
      >
        <CheckCircle size={32} className="text-[#0a0a0a]" strokeWidth={1.5} />
        <h3
          className="text-[#0a0a0a] text-xl font-light"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {contact.form.successHeading}
        </h3>
        <p className="text-[#0a0a0a]/60 text-sm leading-relaxed font-light">
          Your email client should have opened with your message ready to send.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-2 text-[9px] tracking-[0.22em] uppercase border border-[#0a0a0a] px-6 py-2.5 hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
        >
          Send Another
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      {/* Topic select */}
      <div className="flex flex-col gap-1.5">
        <label className="text-[9px] tracking-[0.2em] uppercase text-[#9a9a9a]">
          {contact.form.topicLabel}
        </label>
        <div className="relative">
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full appearance-none bg-transparent border border-[#e8e0d0] px-4 py-3 text-sm font-light text-[#0a0a0a] focus:outline-none focus:border-[#0a0a0a] transition-colors duration-200 pr-10"
          >
            <option value="">Select a topic…</option>
            {contact.form.topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <ChevronDown
            size={14}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9a9a9a] pointer-events-none"
          />
        </div>
      </div>

      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-name" className="text-[9px] tracking-[0.2em] uppercase text-[#9a9a9a]">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={contact.form.namePlaceholder}
          className="bg-transparent border border-[#e8e0d0] px-4 py-3 text-sm font-light text-[#0a0a0a] placeholder:text-[#c8c0b4] focus:outline-none focus:border-[#0a0a0a] transition-colors duration-200"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-email" className="text-[9px] tracking-[0.2em] uppercase text-[#9a9a9a]">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={contact.form.emailPlaceholder}
          className="bg-transparent border border-[#e8e0d0] px-4 py-3 text-sm font-light text-[#0a0a0a] placeholder:text-[#c8c0b4] focus:outline-none focus:border-[#0a0a0a] transition-colors duration-200"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-[9px] tracking-[0.2em] uppercase text-[#9a9a9a]">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={contact.form.messagePlaceholder}
          className="bg-transparent border border-[#e8e0d0] px-4 py-3 text-sm font-light text-[#0a0a0a] placeholder:text-[#c8c0b4] focus:outline-none focus:border-[#0a0a0a] transition-colors duration-200 resize-none"
        />
      </div>

      <button
        type="submit"
        className="self-start flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase px-8 py-3.5 border border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
      >
        {contact.form.submitButton}
      </button>
    </form>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  // FAQ accordion — track which index is open (null = all closed)
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
        {/* ── PAGE HEADER ──────────────────────────────────────────────────── */}
        <section className="bg-[#f5f0e8] pt-20 pb-16 md:pt-24 md:pb-20 px-6 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.p
                variants={fadeUp}
                className="text-[10px] tracking-[0.3em] uppercase text-[#9a9a9a] mb-4"
              >
                {contact.hero.label}
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="text-[#0a0a0a] leading-tight mb-4"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
                  fontWeight: 300,
                }}
              >
                {contact.hero.headline}
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-[#0a0a0a]/55 text-sm md:text-base font-light max-w-lg leading-relaxed"
              >
                {contact.hero.subheadline}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── CONTACT FORM + SHIPPING INFO ─────────────────────────────────── */}
        <section className="bg-white py-20 md:py-24 px-6 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                className="text-[10px] tracking-[0.28em] uppercase text-[#9a9a9a] mb-5"
              >
                {contact.form.heading}
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-[#0a0a0a] leading-tight mb-2"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                  fontWeight: 300,
                }}
              >
                Send a Message
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-[#9a9a9a] text-xs tracking-wide font-light mb-8"
              >
                {contact.form.subtext}
              </motion.p>
              <motion.div variants={fadeUp}>
                <ContactForm />
              </motion.div>
            </motion.div>

            {/* Shipping & Returns */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                className="text-[10px] tracking-[0.28em] uppercase text-[#9a9a9a] mb-5"
              >
                Quick Reference
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-[#0a0a0a] leading-tight mb-8"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                  fontWeight: 300,
                }}
              >
                {contact.shipping.heading}
              </motion.h2>

              <motion.div
                variants={stagger}
                className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#e8e0d0] border border-[#e8e0d0] mb-10"
              >
                {contact.shipping.items.map((item) => (
                  <motion.div key={item.id} variants={fadeUp} className="bg-white px-5 py-5">
                    <p className="text-[9px] tracking-[0.2em] uppercase text-[#9a9a9a] mb-1.5">
                      {item.title}
                    </p>
                    <p
                      className="text-[#0a0a0a] text-sm font-light"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {item.detail}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp}>
                <p className="text-[#0a0a0a]/55 text-xs leading-relaxed font-light mb-5">
                  All orders are fulfilled through our Etsy store. For order-specific inquiries, you can also message us directly on Etsy.
                </p>
                <a
                  href={ETSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[10px] tracking-[0.22em] uppercase px-6 py-3 border border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
                >
                  Visit Etsy Store
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section className="bg-[#f5f0e8] py-20 md:py-28 px-6 md:px-16 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
              className="mb-14"
            >
              <motion.p
                variants={fadeUp}
                className="text-[10px] tracking-[0.28em] uppercase text-[#9a9a9a] mb-4"
              >
                FAQ
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-[#0a0a0a] leading-tight"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                  fontWeight: 300,
                }}
              >
                {contact.faq.heading}
              </motion.h2>
            </motion.div>

            {/* Accordion — inlined so content leaf expressions stay on the page */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={stagger}
              className="border-t border-[#e8e0d0]"
            >
              {contact.faq.items.map((item, idx) => (
                <motion.div key={item.id} variants={fadeUp} className="border-b border-[#e8e0d0]">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex justify-between items-center py-5 text-left group"
                    aria-expanded={openFaq === idx}
                  >
                    <span
                      className="text-[#0a0a0a] text-sm md:text-base font-light pr-6 group-hover:opacity-60 transition-opacity duration-200"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {item.question}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`shrink-0 text-[#9a9a9a] transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === idx && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="text-[#0a0a0a]/60 text-sm leading-relaxed font-light pb-5 pr-8">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
