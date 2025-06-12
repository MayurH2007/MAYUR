import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  AlertCircle, 
  CheckCircle, 
  Clock, 
  Car,
  TrendingUp,
  MapPin,
  Zap
} from 'lucide-react';

const Dashboard = () => {
  const [trafficData, setTrafficData] = useState({
    totalVehicles: 1247,
    avgSpeed: 45,
    incidents: 3,
    efficiency: 87
  });

  const [realtimeData, setRealtimeData] = useState([
    { intersection: 'Main St & 1st Ave', status: 'optimal', vehicles: 23, waitTime: '45s' },
    { intersection: 'Broadway & 2nd St', status: 'congested', vehicles: 67, waitTime: '2m 15s' },
    { intersection: 'Park Ave & 3rd St', status: 'optimal', vehicles: 31, waitTime: '1m 5s' },
    { intersection: 'Oak St & 4th Ave', status: 'incident', vehicles: 89, waitTime: '4m 30s' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrafficData(prev => ({
        totalVehicles: prev.totalVehicles + Math.floor(Math.random() * 10 - 5),
        avgSpeed: Math.max(20, Math.min(60, prev.avgSpeed + Math.floor(Math.random() * 6 - 3))),
        incidents: Math.max(0, prev.incidents + Math.floor(Math.random() * 3 - 1)),
        efficiency: Math.max(70, Math.min(95, prev.efficiency + Math.floor(Math.random() * 4 - 2)))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'optimal': return 'text-green-600 bg-green-100';
      case 'congested': return 'text-yellow-600 bg-yellow-100';
      case 'incident': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'optimal': return CheckCircle;
      case 'congested': return Clock;
      case 'incident': return AlertCircle;
      default: return Activity;
    }
  };

  return (
    <section id="dashboard" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Live Traffic Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time monitoring and control interface providing comprehensive insights 
            into traffic conditions across the entire network.
          </p>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">Total Vehicles</p>
                <p className="text-3xl font-bold">{trafficData.totalVehicles.toLocaleString()}</p>
              </div>
              <Car className="h-8 w-8 text-blue-200" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium">Avg Speed</p>
                <p className="text-3xl font-bold">{trafficData.avgSpeed} mph</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-200" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-6 text-white"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-100 text-sm font-medium">Active Incidents</p>
                <p className="text-3xl font-bold">{trafficData.incidents}</p>
              </div>
              <AlertCircle className="h-8 w-8 text-red-200" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium">Efficiency</p>
                <p className="text-3xl font-bold">{trafficData.efficiency}%</p>
              </div>
              <Zap className="h-8 w-8 text-purple-200" />
            </div>
          </motion.div>
        </div>

        {/* Real-time Intersection Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <MapPin className="h-6 w-6 mr-2 text-primary-600" />
            Real-time Intersection Status
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {realtimeData.map((intersection, index) => {
              const StatusIcon = getStatusIcon(intersection.status);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">{intersection.intersection}</h4>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center ${getStatusColor(intersection.status)}`}>
                      <StatusIcon className="h-3 w-3 mr-1" />
                      {intersection.status.charAt(0).toUpperCase() + intersection.status.slice(1)}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Vehicles</p>
                      <p className="font-semibold text-gray-900">{intersection.vehicles}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Wait Time</p>
                      <p className="font-semibold text-gray-900">{intersection.waitTime}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Dashboard;