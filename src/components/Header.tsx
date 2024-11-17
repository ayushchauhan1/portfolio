import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a1f]/90 backdrop-blur-md border-b border-blue-900/20"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer flex items-center gap-2 font-mono text-xl font-bold"
            onClick={() => scrollToSection('home')}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_auto] animate-gradient">0-1 Journey</span>
          </motion.div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Button
              variant="ghost"
              className="text-white hover:text-white hover:bg-blue-500/20 hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('home')}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-white hover:bg-purple-500/20 hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('stats')}
            >
              Stats
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-white hover:bg-pink-500/20 hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('experience')}
            >
              Experience
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-white hover:bg-blue-500/20 hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
         {/* Mobile menu button */}
<Button
  variant="ghost"
  size="icon"
  className="md:hidden text-white hover:text-white hover:bg-blue-900/30 hover:scale-105 transition-all duration-300"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
>
  <Menu className="h-6 w-6 text-white" />  {/* Ensures the icon is white */}
</Button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute left-0 right-0 top-full mt-2 mx-4 p-4 bg-[#0a0a1f]/95 backdrop-blur-md rounded-lg border border-blue-900/20 shadow-xl"
          >
            <div className="flex flex-col gap-2">
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:text-white hover:bg-blue-500/20 transition-all duration-300"
                onClick={() => scrollToSection('home')}
              >
                Home
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:text-white hover:bg-purple-500/20 transition-all duration-300"
                onClick={() => scrollToSection('stats')}
              >
                Stats
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:text-white hover:bg-pink-500/20 transition-all duration-300"
                onClick={() => scrollToSection('experience')}
              >
                Experience
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:text-white hover:bg-blue-500/20 transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </Button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
