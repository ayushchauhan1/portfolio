import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Building2, Rocket, MessageCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import BinaryBackground from '@/components/BinaryBackground';
import Stats from '@/components/Stats';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Contact from '@/components/Contact';

function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-gradient-to-b from-[#0a0a1f] via-[#141432] to-[#0a0a1f] text-white relative">
      <BinaryBackground />
      <Header />

      <main className="relative z-10 w-full">
        <motion.div
          style={{ opacity, scale }}
          className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-20 md:py-32 relative"
          id="home"
        >
          <div className="text-center relative z-10 w-full max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="mb-8 md:mb-12"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#60a5fa] via-[#a855f7] to-[#e879f9] animate-gradient">
                Ayush Chauhan
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-4xl mb-4 md:mb-8 text-blue-200 font-light flex items-center justify-center gap-2">
                <Rocket className="h-6 w-6 md:h-8 md:w-8 text-purple-400" />
                CPO & Founder at Flabs
              </h2>
              <p className="text-base md:text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
                Building next-gen software solutions for diagnostic labs. 
                Former IIT Roorkee student with extensive experience in tech leadership and development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-3 md:gap-4"
            >
              <Button
                variant="outline"
                size="lg"
                className="bg-blue-500/10 border-blue-400/50 hover:bg-blue-500/30 hover:border-blue-300 hover:scale-105 text-white hover:text-white transition-all duration-300 text-sm md:text-base shadow-lg hover:shadow-blue-500/20"
                onClick={() => window.open('https://flabslis.com/', '_blank')}
              >
                <Building2 className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                Visit Flabs
                <ExternalLink className="h-3 w-3 md:h-4 md:w-4 ml-2 opacity-50" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-purple-500/10 border-purple-400/50 hover:bg-purple-500/30 hover:border-purple-300 hover:scale-105 text-white hover:text-white transition-all duration-300 text-sm md:text-base shadow-lg hover:shadow-purple-500/20"
                onClick={() => window.location.href = 'mailto:ayush@flabs.in'}
              >
                <Mail className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                Contact Me
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <div className="w-full max-w-7xl mx-auto space-y-16 md:space-y-32 mb-16 md:mb-32 px-4">
          <div id="stats">
            <Stats />
          </div>
          
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            id="connect"
          >
            <Card className="bg-[#0c0c24]/80 backdrop-blur-sm border-blue-900/30 p-4 md:p-8 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#60a5fa] to-[#a855f7] flex items-center justify-center gap-2">
                <MessageCircle className="h-6 w-6 md:h-8 md:w-8 text-blue-400" />
                Connect With Me
              </h2>
              <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                <Button
                  variant="outline"
                  size="default"
                  className="bg-blue-500/10 border-blue-400/50 hover:bg-blue-500/30 hover:border-blue-300 hover:scale-105 text-white hover:text-white transition-all duration-300 text-sm md:text-base shadow-lg hover:shadow-blue-500/20"
                  onClick={() => window.open('https://github.com/ayushchauhan1', '_blank')}
                >
                  <Github className="h-4 w-4 md:h-5 md:w-5 mr-2" /> GitHub
                  <ExternalLink className="h-3 w-3 md:h-4 md:w-4 ml-2 opacity-50" />
                </Button>
                <Button
                  variant="outline"
                  size="default"
                  className="bg-purple-500/10 border-purple-400/50 hover:bg-purple-500/30 hover:border-purple-300 hover:scale-105 text-white hover:text-white transition-all duration-300 text-sm md:text-base shadow-lg hover:shadow-purple-500/20"
                  onClick={() => window.open('https://www.linkedin.com/in/ayush-chauhan-ab4220195/', '_blank')}
                >
                  <Linkedin className="h-4 w-4 md:h-5 md:w-5 mr-2" /> LinkedIn
                  <ExternalLink className="h-3 w-3 md:h-4 md:w-4 ml-2 opacity-50" />
                </Button>
                <Button
                  variant="outline"
                  size="default"
                  className="bg-pink-500/10 border-pink-400/50 hover:bg-pink-500/30 hover:border-pink-300 hover:scale-105 text-white hover:text-white transition-all duration-300 text-sm md:text-base shadow-lg hover:shadow-pink-500/20"
                  onClick={() => window.open('https://flabslis.com/', '_blank')}
                >
                  <Building2 className="h-4 w-4 md:h-5 md:w-5 mr-2" /> Flabs
                  <ExternalLink className="h-3 w-3 md:h-4 md:w-4 ml-2 opacity-50" />
                </Button>
                <Button
                  variant="outline"
                  size="default"
                  className="bg-blue-500/10 border-blue-400/50 hover:bg-blue-500/30 hover:border-blue-300 hover:scale-105 text-white hover:text-white transition-all duration-300 text-sm md:text-base shadow-lg hover:shadow-blue-500/20"
                  onClick={() => window.location.href = 'mailto:ayush@flabs.in'}
                >
                  <Mail className="h-4 w-4 md:h-5 md:w-5 mr-2" /> Email
                </Button>
                <Button
                  variant="outline"
                  size="default"
                  className="bg-purple-500/10 border-purple-400/50 hover:bg-purple-500/30 hover:border-purple-300 hover:scale-105 text-white hover:text-white transition-all duration-300 text-sm md:text-base shadow-lg hover:shadow-purple-500/20"
                  onClick={() => window.location.href = 'tel:+916397228160'}
                >
                  <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" /> Call
                </Button>
              </div>
            </Card>
          </motion.section>

          <div id="experience">
            <Experience />
          </div>
          
          <div id="contact">
            <Contact />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;