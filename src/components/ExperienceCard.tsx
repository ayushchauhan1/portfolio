import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  description: string;
  gradient: string;
  index: number;
}

const ExperienceCard = ({ title, company, duration, description, gradient, index }: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="h-full bg-black/40 backdrop-blur-sm border-gray-800/50 p-6 md:p-8 hover:border-blue-500/50 transition-all duration-500 shadow-2xl group relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
        <div className="flex flex-col h-full relative z-10">
          <div className="mb-4">
            <h3 className={`text-xl md:text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}>
              {title}
            </h3>
            <p className="text-blue-500 mb-1 text-base md:text-lg">{company}</p>
            <p className="text-gray-400 text-sm">{duration}</p>
          </div>
          <p className="text-gray-300 text-base md:text-lg mt-auto">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
};

export default ExperienceCard;