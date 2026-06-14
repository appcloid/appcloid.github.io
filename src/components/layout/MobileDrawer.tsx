'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FocusTrap from 'focus-trap-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { NavLink } from '@/types';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}

export const MobileDrawer = ({ isOpen, onClose, links }: MobileDrawerProps) => {
  const shouldReduceMotion = useReducedMotion();

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const slideVariants = {
    hidden: { x: '100%', opacity: shouldReduceMotion ? 0 : 1 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    exit: { x: '100%', opacity: shouldReduceMotion ? 0 : 1, transition: { duration: 0.2 } }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <FocusTrap focusTrapOptions={{ clickOutsideDeactivates: true, onDeactivate: onClose }}>
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-midnight/80 backdrop-blur-sm cursor-pointer"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={onClose}
              aria-label="Close menu overlay"
            />
            
            {/* Drawer */}
            <motion.div
              className="relative w-3/4 max-w-sm h-full glass border-l border-white/10 shadow-2xl flex flex-col pt-24 px-6"
              variants={shouldReduceMotion ? overlayVariants : slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation Menu"
            >
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-white hover:text-cyan p-2"
                aria-label="Close menu"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <nav className="flex flex-col space-y-6 mt-8">
                {links.map((link) => (
                  <a 
                    key={link.href} 
                    href={link.href}
                    className="text-2xl font-bold text-white hover:text-cyan transition-colors"
                    onClick={onClose}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          </div>
        </FocusTrap>
      )}
    </AnimatePresence>
  );
};
