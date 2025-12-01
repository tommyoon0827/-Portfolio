import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  BookOpen, 
  Award, 
  Camera, 
  Cpu, 
  Menu, 
  X,
  ChevronRight,
  Eye
} from 'lucide-react';
import Section from './components/Section';
import ChatBot from './components/ChatBot';
import { PROFILE, PHOTO_ALBUM, AWARDS, EXPERIENCE } from './constants';
import { DriveFolder } from './types';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const FolderPreview: React.FC<{ folder: DriveFolder; icon: React.ReactNode }> = ({ folder, icon }) => (
    <div className="group relative bg-[#25211e] border border-academia-gold/10 p-6 rounded-sm shadow-xl hover:shadow-2xl hover:border-academia-gold/30 transition-all duration-500 overflow-hidden flex flex-col h-full">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-academia-olive/20 text-academia-gold rounded-full border border-academia-gold/10 group-hover:bg-academia-gold group-hover:text-academia-dark transition-colors duration-500">
            {icon}
          </div>
          <div>
            <h3 className="font-serif text-2xl text-academia-paper tracking-wide group-hover:text-academia-gold transition-colors">{folder.title}</h3>
            <p className="text-xs font-sans text-academia-paper/40 uppercase tracking-widest mt-1">Google Drive Archive</p>
          </div>
        </div>

        <p className="font-sans text-academia-paper/70 leading-relaxed mb-6 flex-grow">
          {folder.description}
        </p>

        {/* Preview Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2 text-academia-gold/60 text-xs uppercase tracking-widest">
            <Eye size={12} />
            <span>Contents Preview</span>
          </div>
          <div className="grid grid-cols-3 gap-2 h-24 md:h-32">
            {folder.previewImages.map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-sm bg-black group-inner">
                <img 
                  src={img} 
                  alt="Preview" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 ease-out hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        <a 
          href={folder.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-between w-full px-6 py-4 bg-academia-charcoal border border-academia-gold/20 text-academia-paper hover:bg-academia-gold hover:text-academia-dark transition-all duration-300 font-serif"
        >
          <span>Open Folder</span>
          <ExternalLink size={18} />
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen font-sans selection:bg-academia-accent selection:text-white bg-[#1e1b18]">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${scrolled ? 'bg-academia-dark/95 backdrop-blur-md shadow-lg py-4 border-b border-academia-gold/10' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="font-display text-2xl text-academia-paper font-bold tracking-widest hover:text-academia-gold transition-colors">
            YOONJI.<span className="text-academia-gold">KIM</span>
          </a>

          {/* Mobile Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-academia-paper hover:text-academia-gold transition-colors">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>


      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-academia-dark"></div>
          {/* Fallback pattern for visual interest */}
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-academia-accent/10 via-transparent to-transparent opacity-50"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="font-serif text-academia-gold tracking-[0.2em] mb-4 text-lg animate-fade-in-up">DATA SCIENCE STUDENT</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-academia-paper mb-8 leading-tight">
            Curating Data,<br/>
            Crafting <span className="text-academia-gold italic font-serif">Intelligence</span>
          </h1>
          <p className="font-sans text-academia-paper/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
            Specializing in LLM, RAG, and Deep Learning.<br/>
            An autumn-hued journey through data and logic.
          </p>
          
          <div className="flex justify-center gap-6">
            <a href={PROFILE.links.github} target="_blank" rel="noreferrer" className="p-3 border border-academia-paper/20 rounded-full text-academia-paper hover:bg-academia-gold hover:text-academia-dark hover:border-academia-gold transition-all duration-300">
              <Github size={24} />
            </a>
            <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="p-3 border border-academia-paper/20 rounded-full text-academia-paper hover:bg-academia-gold hover:text-academia-dark hover:border-academia-gold transition-all duration-300">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${PROFILE.email}`} className="p-3 border border-academia-paper/20 rounded-full text-academia-paper hover:bg-academia-gold hover:text-academia-dark hover:border-academia-gold transition-all duration-300">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-[10px] uppercase tracking-widest text-academia-paper font-sans">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-academia-gold to-transparent"></div>
        </div>
      </header>

      {/* About Section */}
      <Section id="about" title="The Scholar" darker>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[3/4] rounded-sm overflow-hidden border-2 border-academia-gold/20 relative group">
              {/* Aesthetic Placeholder for Profile */}
              <div className="w-full h-full bg-[#2a2624] flex items-center justify-center relative">
                 <img src="https://images.unsplash.com/photo-1492539161849-b2b18e79c85f?w=800&h=1000&fit=crop&q=80&grayscale" alt="Yoonji" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                 <div className="absolute inset-0 bg-academia-accent/10 mix-blend-overlay"></div>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-academia-paper/10 -z-10"></div>
          </div>
          
          <div className="font-sans text-academia-paper/80 space-y-6 text-lg font-light">
            <h3 className="font-serif text-3xl text-academia-gold">Hello, I'm {PROFILE.englishName}.</h3>
            <p>
              Born in {PROFILE.birthYear}, I am currently navigating the complexities of Data Science at {PROFILE.education}.
              My academic journey is driven by a fascination with how machines learn and understand human context.
            </p>
            <div className="bg-academia-charcoal p-6 border-l-2 border-academia-accent">
              <h4 className="font-serif text-xl text-academia-paper mb-4">Academic Focus</h4>
              <ul className="space-y-2">
                {PROFILE.majors.map((major, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 bg-academia-gold rounded-full"></span>
                    {major}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4">
              <h4 className="font-serif text-xl text-academia-paper mb-4">Research Interests</h4>
              <div className="flex flex-wrap gap-2">
                {PROFILE.interests.map((interest, i) => (
                  <span key={i} className="px-4 py-1.5 bg-academia-olive/20 text-academia-paper/90 text-sm border border-academia-gold/20 rounded-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Gallery Section */}
      <Section id="gallery" title="Visual Archives">
        <div className="max-w-4xl mx-auto">
          <FolderPreview folder={PHOTO_ALBUM} icon={<Camera size={24} />} />
        </div>
      </Section>

      {/* Experience & Projects */}
      <Section id="experience" title="Prototypes" darker>
        <div className="max-w-4xl mx-auto text-center mb-8">
           <p className="text-academia-paper/60 font-light italic max-w-2xl mx-auto mb-8">
             "Theory without practice is sterile." <br/> 
             Below is an archive of my practical explorations in machine learning and data engineering.
           </p>
           <FolderPreview folder={EXPERIENCE} icon={<Cpu size={24} />} />
        </div>
      </Section>

      {/* Awards Section */}
      <Section id="awards" title="Distinctions">
         <div className="max-w-4xl mx-auto">
          <FolderPreview folder={AWARDS} icon={<Award size={24} />} />
        </div>
      </Section>

      {/* Study Section (New dedicated section) */}
      <Section id="study" title="Study Log" darker>
         <div className="max-w-4xl mx-auto">
            <div className="bg-[#25211e] border border-academia-gold/10 p-10 rounded-sm shadow-xl flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] opacity-[0.03]"></div>
               <div className="absolute inset-0 bg-gradient-to-r from-academia-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               
               <div className="relative z-10 flex-shrink-0">
                 <div className="w-24 h-24 bg-academia-gold/10 rounded-full flex items-center justify-center text-academia-gold group-hover:scale-110 transition-transform duration-500 border border-academia-gold/20">
                    <BookOpen size={40} />
                 </div>
               </div>
               
               <div className="relative z-10 flex-grow text-center md:text-left">
                 <h3 className="font-serif text-3xl text-academia-paper mb-4">Velog: The Dev Journal</h3>
                 <p className="text-academia-paper/70 font-light leading-relaxed mb-6">
                   Documenting the learning process, error logs, and breakthroughs in real-time. 
                   A collection of notes on Data Science, Algorithms, and Deep Learning implementations.
                 </p>
                 <a 
                   href={PROFILE.links.velog}
                   target="_blank"
                   rel="noreferrer"
                   className="inline-flex items-center gap-3 bg-academia-gold text-academia-dark px-6 py-3 rounded-sm font-bold uppercase tracking-widest hover:bg-academia-paper transition-colors shadow-lg"
                 >
                   Read Log <ExternalLink size={18} />
                 </a>
               </div>
            </div>
         </div>
      </Section>

      {/* Footer */}
      <footer className="bg-[#100e0d] py-16 border-t border-academia-gold/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl text-academia-paper mb-8">{PROFILE.englishName}</h2>
          <p className="text-academia-paper/40 font-serif italic mb-12">"Data is the new oil, but intelligence is the refinement."</p>
          
          <div className="flex justify-center gap-8 mb-12">
            <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="text-academia-paper/60 hover:text-academia-gold transition-colors">LinkedIn</a>
            <a href={PROFILE.links.github} target="_blank" rel="noreferrer" className="text-academia-paper/60 hover:text-academia-gold transition-colors">GitHub</a>
            <a href={PROFILE.links.velog} target="_blank" rel="noreferrer" className="text-academia-paper/60 hover:text-academia-gold transition-colors">Velog</a>
            <a href={`mailto:${PROFILE.email}`} className="text-academia-paper/60 hover:text-academia-gold transition-colors">Email</a>
          </div>

          <div className="text-xs text-academia-paper/20 uppercase tracking-widest font-sans">
            © {new Date().getFullYear()} Yoonji Kim. All Rights Reserved. <br/>
            Designed with Dark Academia Aesthetics.
          </div>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
}

export default App;