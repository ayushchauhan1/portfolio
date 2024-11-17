import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="px-2 md:px-4"
    >
      <Card className="bg-[#0c0c24]/80 backdrop-blur-sm border-blue-900/30 p-8 md:p-12 text-center shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-[#60a5fa]/10 to-[#a855f7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#60a5fa] to-[#a855f7] flex items-center justify-center gap-3 w-full text-center"
          >
            <MessageCircle className="h-8 w-8 md:h-10 md:w-10" />
            Let's Connect
          </motion.h2>
          <p className="text-blue-100/80 mb-8 md:mb-12 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Whether you're interested in discussing technology, startups, or potential collaborations,
            I'm always open to connecting with fellow innovators and entrepreneurs.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#60a5fa] to-[#a855f7] hover:from-[#3b82f6] hover:to-[#9333ea] hover:scale-105 text-white hover:text-white transition-all duration-300 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-xl shadow-lg hover:shadow-xl transform"
              onClick={() => window.open('https://api.whatsapp.com/send?phone=6397228160', '_blank')}
            >
              <MessageCircle className="h-5 w-5 md:h-6 md:w-6 mr-2" />
              Get in Touch
            </Button>
          </div>
        </div>
      </Card>
    </motion.section>
  );
};

export default Contact;
