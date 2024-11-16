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
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
    >
      <Card className="bg-black/40 backdrop-blur-sm border-gray-800/50 p-6 md:p-8 hover:border-blue-500/50 transition-all duration-500 shadow-2xl group relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between relative z-10 gap-4 md:gap-8">
          <div>
            <h3 className={`text-xl md:text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}>
              {title}
            </h3>
            <p className="text-blue-500 mb-1 md:mb-2 text-base md:text-lg">{company}</p>
            <p className="text-gray-400 text-sm">{duration}</p>
          </div>
          <p className="text-gray-300 text-base md:text-lg md:max-w-xl">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
};

export default ExperienceCard;