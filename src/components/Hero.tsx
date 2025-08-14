import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg')] bg-cover bg-center bg-no-repeat"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            PC SUPPORT CUU
            <span className="block text-cyan-400">Made Simple</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Expert equipment sales and IT deployment services for businesses ready 
            to scale their technology infrastructure
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <div className="flex items-center space-x-2 text-white border border-white/30 px-6 py-4 rounded-lg">
              <Phone className="w-5 h-5" />
              <span className="font-medium">(+52) 614 187-4158</span>
            </div>
            
            <div className="flex items-center space-x-2 text-white border border-white/30 px-6 py-4 rounded-lg">
              <Mail className="w-5 h-5" />
              <span className="font-medium">edwingomezr@outlook.com</span>
            </div>
          </div>

          {/* Stats or Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Clients Served</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;