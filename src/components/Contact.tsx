import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Technology?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Contact us today for a free consultation and discover how we can help your business 
            thrive with the right technology solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Ready to discuss your technology integration needs? Our team of experts 
                is here to help you find the perfect solution for your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-cyan-600 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Phone</h4>
                  <p className="text-cyan-400 text-lg font-medium">(123) 456-7890</p>
                  <p className="text-gray-400 text-sm">Mon-Fri 8AM-6PM EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-cyan-600 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Email</h4>
                  <p className="text-cyan-400 text-lg font-medium">info@techintegrator.com</p>
                  <p className="text-gray-400 text-sm">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-cyan-600 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Office</h4>
                  <p className="text-gray-300">123 Technology Drive</p>
                  <p className="text-gray-300">Innovation City, TC 12345</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-cyan-600 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Business Hours</h4>
                  <p className="text-gray-300">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-cyan-400 font-medium">Emergency Support: 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;