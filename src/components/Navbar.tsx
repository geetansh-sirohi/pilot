import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'py-3.5 glass-header border-b border-[#e4e2d9]/80 shadow-xs'
          : 'py-5 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group transition-transform duration-200 hover:opacity-90"
        >
          <div className="w-8 h-8 rounded-full bg-[#2b2b29] flex items-center justify-center relative overflow-hidden shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#b4ff6a] transition-transform duration-300 group-hover:scale-125" />
            <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-[#57ddff]" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold-custom text-[15px] tracking-tight text-[#2b2b29] leading-none">
              Pilot<span className="font-light text-[#918989] ml-1">v0.1</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#918989] font-medium-custom mt-0.5">
              AI Interview Prep Kit
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 bg-[#faf9f5]/80 backdrop-blur-md px-6 py-2 rounded-full border border-[#e4e2d9]/60 shadow-2xs">
          <button
            onClick={() => scrollToSection('offerings')}
            className="text-[13px] font-medium-custom text-[#494444] hover:text-[#2b2b29] transition-colors cursor-pointer"
          >
            10-Stage Pipeline
          </button>
          <button
            onClick={() => scrollToSection('experts')}
            className="text-[13px] font-medium-custom text-[#494444] hover:text-[#2b2b29] transition-colors cursor-pointer"
          >
            Deterministic Core
          </button>
          <button
            onClick={() => scrollToSection('human-creativity-benchmark')}
            className="text-[13px] font-medium-custom text-[#494444] hover:text-[#2b2b29] transition-colors cursor-pointer"
          >
            Practice Flashcards
          </button>
          <a
            href="#offerings"
            onClick={(e) => {
              e.preventDefault();
              onOpenContact();
            }}
            className="text-[13px] font-medium-custom text-[#494444] hover:text-[#2b2b29] transition-colors flex items-center gap-1 group"
          >
            Batch CLI Eval
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>
        </nav>

        {/* Right Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenContact}
            className="btn-glow px-5 py-2.5 rounded-full bg-[#2b2b29] text-[#fbfaf6] font-medium-custom text-[13px] hover:bg-[#1a1a18] transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Generate Prep Kit</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#b4ff6a]" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#2b2b29] hover:bg-[#e4e2d9]/40 rounded-lg transition-colors cursor-pointer"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#fbfaf6]/95 backdrop-blur-xl border-b border-[#e4e2d9] p-6 shadow-xl flex flex-col gap-5 animate-fadeIn">
          <button
            onClick={() => scrollToSection('offerings')}
            className="text-left text-base font-medium-custom text-[#2b2b29] py-2 border-b border-[#e4e2d9]/40"
          >
            10-Stage Pipeline
          </button>
          <button
            onClick={() => scrollToSection('experts')}
            className="text-left text-base font-medium-custom text-[#2b2b29] py-2 border-b border-[#e4e2d9]/40"
          >
            Deterministic Core
          </button>
          <button
            onClick={() => scrollToSection('human-creativity-benchmark')}
            className="text-left text-base font-medium-custom text-[#2b2b29] py-2 border-b border-[#e4e2d9]/40"
          >
            Practice Flashcards
          </button>
          <a
            href="#offerings"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="flex items-center justify-between text-base font-medium-custom text-[#2b2b29] py-2 border-b border-[#e4e2d9]/40"
          >
            <span>Batch CLI Eval</span>
            <ArrowUpRight className="w-4 h-4 text-[#918989]" />
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full mt-2 py-3 rounded-full bg-[#2b2b29] text-[#fbfaf6] font-medium-custom text-sm hover:bg-[#1a1a18] transition-colors flex items-center justify-center gap-2"
          >
            <span>Generate Prep Kit</span>
            <span className="w-2 h-2 rounded-full bg-[#b4ff6a]" />
          </button>
        </div>
      )}
    </header>
  );
};