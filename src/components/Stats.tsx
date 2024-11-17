import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';  // You can replace this with any other icon you like

const Stats = () => {
  const stats = [
    { 
      label: 'Diagnostic Paid Labs', 
      value: '1000+', 
      color: 'from-[#60a5fa] to-[#818cf8]'
    },
    { 
      label: 'Medical Records Generated', 
      value: '4M+', 
      color: 'from-[#818cf8] to-[#a855f7]'
    },
    { 
      label: 'GMV', 
      value: '$10M+', 
      color: 'from-[#a855f7] to-[#60a5fa]'
    },
  ];

  return (
    <section className="px-2 md:px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 w-full flex justify-center items-center"
        >
          <Star className="h-8 w-8 md:h-10 md:w-10 mr-3 text-yellow-400" />  {/* Added a Star icon */}
          <span>Flabs Impact</span>
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-[#0c0c24]/80 backdrop-blur-sm border-blue-900/30 p-6 md:p-8 text-center hover:border-blue-400 transition-all duration-500 shadow-2xl group relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className="flex flex-col items-center relative z-10">
                  <motion.h3 
                    className={`text-3xl md:text-5xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}
                  >
                    {stat.value}
                  </motion.h3>
                  <p className="text-blue-100 text-sm md:text-lg font-light">{stat.label}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
