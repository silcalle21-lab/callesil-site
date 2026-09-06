import { Link } from "react-router";
import { Instagram } from 'lucide-react';
const ETSY_URL = 'https://www.etsy.com/shop/CALLESIL';
export default function Footer() {
  return <footer className="bg-[#0a0a0a] text-white/60">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" aria-label="CALLESIL home">
              <span className="text-white text-xl tracking-[0.25em] font-light" style={{
              fontFamily: 'var(--font-heading)'
            }}>
                CALLESIL
              </span>
            </Link>
            <p className="mt-4 text-xs leading-relaxed tracking-wide text-white/40 max-w-[220px]">
              Premium graphic T-shirts designed for those who value simplicity,
              creativity, and timeless style.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="CALLESIL on Instagram" className="text-white/40 hover:text-white transition-colors duration-200">
                <Instagram size={16} />
              </a>
              {/* Pinterest SVG — lucide-react doesn't include it */}
              <a href="#" aria-label="CALLESIL on Pinterest" className="text-white/40 hover:text-white transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.852 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.137-1.868 3.137-4.565 0-2.386-1.715-4.054-4.163-4.054-2.836 0-4.5 2.127-4.5 4.326 0 .856.33 1.775.741 2.276a.3.3 0 0 1 .069.286c-.076.315-.244.995-.277 1.134-.044.183-.146.222-.337.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="text-white text-xs tracking-[0.2em] uppercase mb-5">
              Shop
            </h3>
            <ul className="flex flex-col gap-3">
              {[{
              label: 'All Products',
              href: ETSY_URL
            }, {
              label: 'New Arrivals',
              href: ETSY_URL
            }, {
              label: 'Best Sellers',
              href: ETSY_URL
            }].map(item => <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-xs tracking-wide hover:text-white transition-colors duration-200">
                    {item.label}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Info Column */}
          <div>
            <h3 className="text-white text-xs tracking-[0.2em] uppercase mb-5">
              Info
            </h3>
            <ul className="flex flex-col gap-3">
              {[{
              label: 'About',
              href: '/about'
            }, {
              label: 'Journal',
              href: '/journal'
            }, {
              label: 'Contact',
              href: '/contact'
            }, {
              label: 'FAQ',
              href: '/contact#faq'
            }].map(item => <li key={item.label}>
                  <Link to={item.href} className="text-xs tracking-wide hover:text-white transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-white text-xs tracking-[0.2em] uppercase mb-5">
              Legal
            </h3>
            <ul className="flex flex-col gap-3">
              {[{
              label: 'Shipping',
              href: '/contact#shipping'
            }, {
              label: 'Returns',
              href: '/contact#returns'
            }, {
              label: 'Privacy Policy',
              href: '/privacy'
            }].map(item => <li key={item.label}>
                  <Link to={item.href} className="text-xs tracking-wide hover:text-white transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>)}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 max-w-7xl mx-auto px-6 lg:px-12 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs tracking-widest text-white/30 uppercase">
            © 2026 CALLESIL. All rights reserved.
          </p>
          <p className="text-xs tracking-wide text-white/20">
            Designed with intention.
          </p>
        </div>
      </div>
    </footer>;
}
