import React from 'react';
import { Server, Users, Shield, Settings, Zap, Headphones } from 'lucide-react';

const servicesData = [
  {
    icon: Server,
    title: "Equipment Sales",
    description: "Enterprise-grade servers, networking equipment, and hardware solutions from leading manufacturers.",
    features: [
      "Servers & Storage",
      "Networking Hardware", 
      "Security Equipment",
      "Custom Configurations"
    ]
  },
  {
    icon: Users,
    title: "IT Deployment",
    description: "Complete infrastructure deployment and setup services to get your systems running efficiently.",
    features: [
      "Network Setup",
      "Server Installation",
      "System Configuration",
      "Testing & Validation"
    ]
  },
  {
    icon: Shield,
    title: "Security Solutions",
    description: "Comprehensive cybersecurity equipment and deployment to protect your business assets.",
    features: [
      "Firewall Installation",
      "Security Monitoring",
      "Access Control",
      "Compliance Setup"
    ]
  },
  {
    icon: Settings,
    title: "System Integration",
    description: "Seamless integration of new technology with your existing infrastructure and workflows.",
    features: [
      "Legacy Integration",
      "System Migration",
      "Process Automation",
      "Performance Optimization"
    ]
  },
  {
    icon: Zap,
    title: "Infrastructure Upgrade",
    description: "Modernize your technology stack with the latest equipment and deployment strategies.",
    features: [
      "Capacity Planning",
      "Hardware Refresh",
      "Performance Tuning",
      "Scalability Planning"
    ]
  },
  {
    icon: Headphones,
    title: "Support & Maintenance",
    description: "Ongoing technical support and maintenance to keep your systems running at peak performance.",
    features: [
      "24/7 Support",
      "Preventive Maintenance",
      "Remote Monitoring",
      "Emergency Response"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Technology Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From equipment procurement to full deployment, we provide comprehensive 
            technology integration services for businesses of all sizes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;