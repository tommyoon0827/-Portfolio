import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  darker?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '', darker = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden ${darker ? 'bg-[#151311]' : 'bg-academia-dark'} ${className}`}
    >
      {/* Decorative Borders */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-academia-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-academia-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-academia-gold text-sm tracking-[0.3em] uppercase mb-3 font-sans opacity-80">
            Chapter
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-academia-paper mb-6">
            {title}
          </h2>
          <div className="w-24 h-1 bg-academia-accent/60 rounded-full" />
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
