import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function HaulFooter() {
  const containerRef = useRef(null);
  
  // Parallax scroll setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const truckY = useTransform(scrollYProgress, [0, 1], [-50, 150]);

  return (
    <div className="font-sans bg-[#f8f9fa] min-h-screen">
      {/* Top Spacer Section */}
      <section className="flex items-center justify-center h-[50vh] md:h-[30vh] lg:h-[50vh] bg-[#FDFDFD]">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-300 text-xs font-bold uppercase tracking-[0.5em]"
        >
          View Below
        </motion.p>
      </section>

      {/* Main Parallax Container */}
      <section 
        ref={containerRef}
        className="relative h-screen bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260430_115327_3f256636-9e63-4885-8d0b-09317dc2b0a5.png&w=1280&q=85')" }}
      >
        {/* The Top-Aligned Footer Card */}
        <div className="absolute top-0 w-full pt-12 md:pt-24 z-30 px-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-7xl mx-auto bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl md:rounded-3xl overflow-hidden"
          >
            {/* Top Half */}
            <div className="flex flex-col md:flex-row justify-between p-8 md:p-12 gap-8">
              {/* Logo Area */}
              <div className="flex items-center gap-4">
                <div className="bg-orange-500 w-10 h-10 md:w-12 md:h-12 rounded-lg shadow-inner p-2 flex items-center justify-center">
                  <svg viewBox="0 0 256 256" className="w-full h-full text-white fill-current">
                    <path d="M 228 0 C 172.772 0 128 44.772 128 100 L 128 0 L 0 0 L 0 28 C 0 83.228 44.772 128 100 128 L 0 128 L 0 256 L 28 256 C 83.228 256 128 211.228 128 156 L 128 256 L 256 256 L 256 228 C 256 172.772 211.228 128 156 128 L 256 128 L 256 0 Z" />
                  </svg>
                </div>
                <h2 className="text-gray-900 text-2xl md:text-3xl font-bold tracking-tighter">
                  HAUL!
                </h2>
              </div>

              {/* Links Area */}
              <div className="flex flex-col sm:flex-row gap-8 md:gap-16">
                <div className="flex flex-col gap-4">
                  <h3 className="uppercase tracking-widest text-sm font-bold text-gray-900">Company</h3>
                  <a href="#" className="text-gray-500 font-medium hover:text-orange-600 transition-colors">Founding</a>
                  <a href="#" className="text-gray-500 font-medium hover:text-orange-600 transition-colors">Platform</a>
                  <a href="#" className="text-gray-500 font-medium hover:text-orange-600 transition-colors">Testify</a>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="uppercase tracking-widest text-sm font-bold text-gray-900">Mobile</h3>
                  <a href="#" className="text-gray-500 font-medium hover:text-orange-600 transition-colors">Get Apple App</a>
                  <a href="#" className="text-gray-500 font-medium hover:text-orange-600 transition-colors">Get Google App</a>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="uppercase tracking-widest text-sm font-bold text-gray-900">Contracts</h3>
                  <a href="#" className="text-gray-500 font-medium hover:text-orange-600 transition-colors">Private Data</a>
                  <a href="#" className="text-gray-500 font-medium hover:text-orange-600 transition-colors">User Consent</a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-100 bg-white p-6 px-8 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500 font-medium">
                © 2026 HAUL! All Rights Reserved
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background Truck Parallax Layer */}
        <motion.div 
          className="absolute inset-x-0 bottom-0 h-full pointer-events-none z-20"
          style={{ y: truckY }}
        >
          <img 
            src="https://roof-wish-40038865.figma.site/_components/v2/f31fd17907ce60745d45e83a61d44fd3810d5f25/truck_1.8c4bff83.png" 
            alt="Haul Truck" 
            className="w-full h-full object-contain object-bottom origin-bottom scale-[1.5] sm:scale-110 md:scale-[2.0] lg:scale-105"
          />
        </motion.div>
      </section>
    </div>
  );
}
