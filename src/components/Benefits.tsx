import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Leaf, 
  Shield, 
  DollarSign, 
  Users, 
  TrendingDown 
} from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Reduced Travel Time',
      description: 'Up to 30% reduction in average commute times through intelligent traffic optimization.',
      metric: '30%',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Leaf,
      title: 'Lower Emissions',
      description: 'Significant reduction in vehicle emissions through optimized traffic flow and reduced idling.',
      metric: '25%',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Shield,
      title: 'Enhanced Safety',
      description: 'Improved road safety with automatic incident detection and emergency response coordination.',
      metric: '40%',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: DollarSign,
      title: 'Cost Savings',
      description: 'Reduced infrastructure costs and fuel consumption leading to significant economic benefits.',
      metric: '$2.5M',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Users,
      title: 'Better Quality of Life',
      description: 'Improved urban mobility and reduced stress for citizens through smoother traffic flow.',
      metric: '85%',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: TrendingDown,
      title: 'Reduced Congestion',
      description: 'Dynamic traffic management reduces peak hour congestion and improves overall flow.',
      metric: '45%',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Measurable Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our smart traffic management system delivers tangible improvements 
            across multiple dimensions of urban mobility and sustainability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${benefit.color} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <benefit.icon className="h-8 w-8" />
                  <span className="text-2xl font-bold">{benefit.metric}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-xl shadow-lg p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Proven Results Across Cities
            </h3>
            <p className="text-gray-600">
              Our system has been successfully implemented in multiple cities worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Cities Deployed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">10K+</div>
              <div className="text-gray-600">Intersections</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">2M+</div>
              <div className="text-gray-600">Daily Vehicles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;