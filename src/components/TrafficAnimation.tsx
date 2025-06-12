import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TrafficAnimation = () => {
  const [currentLight, setCurrentLight] = useState(0); // 0: red, 1: yellow, 2: green

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLight((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
      <div className="flex justify-center items-center space-x-8">
        {/* Traffic Light */}
        <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
          <div className="flex flex-col space-y-2">
            <div className={`traffic-light ${currentLight === 0 ? 'red' : 'off'}`}></div>
            <div className={`traffic-light ${currentLight === 1 ? 'yellow' : 'off'}`}></div>
            <div className={`traffic-light ${currentLight === 2 ? 'green' : 'off'}`}></div>
          </div>
        </div>

        {/* Road with Cars */}
        <div className="relative">
          <div className="w-64 h-32 bg-gray-700 rounded-lg relative overflow-hidden">
            {/* Road markings */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/50 transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-yellow-400 transform -translate-y-1/2"></div>
            
            {/* Cars */}
            <motion.div
              animate={{
                x: currentLight === 2 ? [0, 200] : [0, 50, 0],
              }}
              transition={{
                duration: currentLight === 2 ? 3 : 1,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-4 left-2 w-8 h-4 bg-blue-500 rounded-sm"
            ></motion.div>
            
            <motion.div
              animate={{
                x: currentLight === 2 ? [0, 200] : [0, 30, 0],
              }}
              transition={{
                duration: currentLight === 2 ? 3.5 : 1.2,
                repeat: Infinity,
                ease: "linear",
                delay: 0.5
              }}
              className="absolute bottom-4 left-2 w-8 h-4 bg-red-500 rounded-sm"
            ></motion.div>
          </div>
        </div>

        {/* Status Display */}
        <div className="text-white text-center">
          <div className="text-sm font-medium mb-2">Traffic Status</div>
          <div className={`text-lg font-bold ${
            currentLight === 0 ? 'text-red-400' : 
            currentLight === 1 ? 'text-yellow-400' : 
            'text-green-400'
          }`}>
            {currentLight === 0 ? 'STOP' : currentLight === 1 ? 'READY' : 'GO'}
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center text-white/80 text-sm">
        Real-time AI-powered traffic light optimization
      </div>
    </div>
  );
};

export default TrafficAnimation;