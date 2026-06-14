'use client';

import React, { useState, useEffect } from 'react';
import { NavLink } from '@/types';
import { MobileDrawer } from './MobileDrawer';
import { GlossyButton } from '@/components/ui/GlossyButton';

const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'AI Solutions', href: '/ai-solutions' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'glass border-b border-white/10 shadow-glass py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 z-50">
              <span className="text-2xl font-bold font-space bg-clip-text text-transparent bg-gradient-cyan-purple">
                AppCloid
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map(link => (
                <a 
                  key={link.href} 
                  href={link.href}
                  className="text-sm font-medium text-bluegrey-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <GlossyButton href="/contact" variant="primary" className="py-2 px-6 text-sm">
                Start Your Transformation
              </GlossyButton>
            </div>

            {/* Mobile Hamburger */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isDrawerOpen}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        links={NAV_LINKS} 
      />
    </>
  );
};
