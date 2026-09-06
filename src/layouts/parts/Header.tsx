import { Link, useLocation } from "react-router";
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
const navItems = [{
  href: '/',
  label: 'Home'
}, {
  href: '/shop',
  label: 'Shop'
}, {
  href: '/collections',
  label: 'Collections'
}, {
  href: '/about',
  label: 'About'
}, {
  href: '/contact',
  label: 'Contact'
}];
export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  const isHome = location.pathname === '/';
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || !isHome || isMobileMenuOpen ? 'bg-[#0a0a0a] border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0" aria-label="CALLESIL home">
            <span className="text-white font-heading text-xl md:text-2xl tracking-[0.25em] font-light" style={{
            fontFamily: 'var(--font-heading)'
          }}>
              CALLESIL
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navItems.map(item => <Link key={item.href} to={item.href} className={`relative text-xs tracking-[0.18em] uppercase font-sans transition-colors duration-200 group ${location.pathname === item.href ? 'text-white' : 'text-white/60 hover:text-white'}`}>
                {item.label}
                <span className={`absolute -bottom-0.5 left-0 h-px bg-white transition-all duration-300 ${location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>)}
            <a href="https://www.etsy.com/shop/CALLESIL" target="_blank" rel="noopener noreferrer" className="text-xs tracking-[0.18em] uppercase font-sans text-white border border-white/40 px-5 py-2 hover:bg-white hover:text-[#0a0a0a] transition-all duration-300">
              Shop Now
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-white" aria-label="Toggle menu" aria-expanded={isMobileMenuOpen}>
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="md:hidden bg-[#0a0a0a] border-t border-white/10">
          <nav className="flex flex-col px-6 py-6 gap-5" aria-label="Mobile navigation">
            {navItems.map(item => <Link key={item.href} to={item.href} className={`text-xs tracking-[0.18em] uppercase font-sans transition-colors ${location.pathname === item.href ? 'text-white' : 'text-white/60'}`}>
                {item.label}
              </Link>)}
            <a href="https://www.etsy.com/shop/CALLESIL" target="_blank" rel="noopener noreferrer" className="text-xs tracking-[0.18em] uppercase font-sans text-white border border-white/40 px-5 py-3 text-center hover:bg-white hover:text-[#0a0a0a] transition-all duration-300 mt-2">
              Shop Now
            </a>
          </nav>
        </div>}
    </header>;
}
