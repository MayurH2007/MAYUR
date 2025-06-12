import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Cpu, Smartphone, Monitor } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Camera,
      title: 'Data Collection',
      description: 'IoT sensors, smart cameras, and connected vehicles collect real-time traffic data including vehicle count, speed, and road conditions.',
      step: '01'
    },
    {
      icon: Cpu,
      title: 'AI Processing',
      description: 'Advanced machine learning algorithms analyze the collected data to identify patterns, predict congestion, and detect anomalies.',
      step: '02'
    },
    {
      icon: Monitor,
      title: 'Smart Control',
      description: 'The system automatically adjusts traffic signals, routing recommendations, and emergency protocols based on AI insights.',
      step: '03'
    },
    {
      icon: Smartphone,
      title: 'User Interface',
      description: 'Traffic managers and citizens access real-time information through intuitive dashboards and mobile applications.',
      step: '04'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our intelligent traffic management system follows a streamlined process 
            to deliver optimal traffic flow and safety.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-xl shadow-lg p-8 text-center relative z-10">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
                    <step.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;