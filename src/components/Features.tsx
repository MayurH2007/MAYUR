import React from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, 
  Zap, 
  AlertTriangle, 
  Truck, 
  Navigation, 
  BarChart3,
  Wifi,
  Brain
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Eye,
      title: 'Real-time Traffic Monitoring',
      description: 'Advanced computer vision and IoT sensors continuously monitor traffic flow, vehicle density, and road conditions across the entire network.',
      color: 'bg-blue-500'
    },
    {
      icon: Zap,
      title: 'Dynamic Congestion Reduction',
      description: 'AI algorithms automatically adjust traffic light timing and routing to minimize congestion and optimize traffic flow in real-time.',
      color: 'bg-purple-500'
    },
    {
      icon: AlertTriangle,
      title: 'Accident & Violation Detection',
      description: 'Smart cameras and sensors automatically detect accidents, signal violations, and traffic rule breaches, alerting authorities instantly.',
      color: 'bg-red-500'
    },
    {
      icon: Truck,
      title: 'Emergency Vehicle Priority',
      description: 'Intelligent system recognizes emergency vehicles and automatically creates green corridors for faster response times.',
      color: 'bg-green-500'
    },
    {
      icon: Navigation,
      title: 'Optimal Route Suggestions',
      description: 'Real-time route optimization based on current traffic conditions, accidents, and predicted congestion patterns.',
      color: 'bg-orange-500'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive data analytics provide insights into traffic patterns, peak hours, and infrastructure optimization opportunities.',
      color: 'bg-indigo-500'
    },
    {
      icon: Wifi,
      title: 'IoT Integration',
      description: 'Seamless integration with smart city infrastructure including connected vehicles, traffic sensors, and communication networks.',
      color: 'bg-teal-500'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Continuously learning AI models improve traffic predictions and optimize system performance based on historical and real-time data.',
      color: 'bg-pink-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Intelligent Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive AI-powered traffic management system combines cutting-edge technology 
            with real-world applications to revolutionize urban mobility.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
            >
              <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;