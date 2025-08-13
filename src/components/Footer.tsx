import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">TechIntegrator</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading provider of technology integration services, helping businesses 
              scale their infrastructure with enterprise-grade solutions and expert support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2 rounded-lg">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>info@techintegrator.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                <div>
                  <div>123 Technology Drive</div>
                  <div>Innovation City, TC 12345</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 TechIntegrator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;