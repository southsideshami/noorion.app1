"use client";
import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
}

export default function HomePage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for signing up! We&apos;ll notify you when Noorion launches.');
    setFormData({ name: '', email: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1b2e] via-[#2A2C41] to-[#1a1b2e] text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <span className="inline-block bg-[#FDBF50] text-[#1a1b2e] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Coming Soon
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-[#FDBF50]">Noorion</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The modern Islamic social platform connecting Muslims worldwide through faith, knowledge, and community. Join thousands of believers building a stronger Ummah together.
          </p>
        </header>

        {/* Sign Up Section */}
        <section className="max-w-md mx-auto mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-[#FDBF50]/30">
            <h3 className="text-2xl font-bold text-[#FDBF50] mb-6 text-center">Sign Up for the Release Date</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                className="w-full px-4 py-3 bg-white/10 border border-[#FDBF50]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FDBF50]/50"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                className="w-full px-4 py-3 bg-white/10 border border-[#FDBF50]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FDBF50]/50"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <button 
                type="submit" 
                className="w-full py-3 bg-[#FDBF50] text-[#1a1b2e] font-bold rounded-lg hover:bg-[#FDBF50]/90 transition-all duration-300 transform hover:scale-105"
              >
                Sign Up
              </button>
            </form>
            <p className="text-center text-gray-300 mt-4">Be notified when Noorion launches</p>
          </div>
        </section>

        {/* Why Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why the Ummah Needs Noorion</h2>
          <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            In today&apos;s digital age, Muslims are scattered across countless platforms that don&apos;t serve our values or needs. Noorion bridges this gap by providing a dedicated space where faith meets technology.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-[#FDBF50]/20">
              <h3 className="text-xl font-bold text-[#FDBF50] mb-4">Community Connection</h3>
              <p className="text-gray-300">Connect with verified Muslims in your area and around the world in a safe, moderated environment.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-[#FDBF50]/20">
              <h3 className="text-xl font-bold text-[#FDBF50] mb-4">Authentic Content</h3>
              <p className="text-gray-300">Explore meaningful content centered around Islamic values and unity.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-[#FDBF50]/20">
              <h3 className="text-xl font-bold text-[#FDBF50] mb-4">Privacy First</h3>
              <p className="text-gray-300">Your data and conversations are protected with Islamic values and modern security in mind.</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Everything You Need in One App</h2>
          <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            From prayer times to community connections, Noorion provides comprehensive tools for the modern Muslim lifestyle.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-[#FDBF50]/20">
              <h3 className="text-lg font-bold text-[#FDBF50] mb-3">Find Your Nearest Masjid</h3>
              <p className="text-gray-300">Locate mosques in your area with detailed information, prayer times, and contact details.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-[#FDBF50]/20">
              <h3 className="text-lg font-bold text-[#FDBF50] mb-3">Accurate Qibla Direction</h3>
              <p className="text-gray-300">Get precise Qibla direction anywhere in the world using GPS technology.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-[#FDBF50]/20">
              <h3 className="text-lg font-bold text-[#FDBF50] mb-3">Prayer Times & Reminders</h3>
              <p className="text-gray-300">Never miss a prayer with accurate times based on your location and customizable notifications.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-[#FDBF50]/20">
              <h3 className="text-lg font-bold text-[#FDBF50] mb-3">Daily Duas & Reminders</h3>
              <p className="text-gray-300">Receive authentic daily supplications and Islamic reminders curated for you.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-[#FDBF50]/20">
              <h3 className="text-lg font-bold text-[#FDBF50] mb-3">Secure Chat Functions</h3>
              <p className="text-gray-300">Connect with brothers and sisters in separate, moderated chat environments.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-[#FDBF50]/20">
              <h3 className="text-lg font-bold text-[#FDBF50] mb-3">Local Islamic Classes</h3>
              <p className="text-gray-300">Discover and enroll in classes offered by your local masjid and students of knowledge.</p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-r from-[#FDBF50]/20 to-[#8DA05E]/20 rounded-2xl p-8 md:p-12 border border-[#FDBF50]/30">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Be Part of Something Greater</h2>
          <p className="text-lg text-gray-300 text-center mb-8 max-w-2xl mx-auto">
            Help us build the platform the Ummah deserves. Sign up now to be notified the moment Noorion launches.
          </p>
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                className="w-full px-4 py-3 bg-white/10 border border-[#FDBF50]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FDBF50]/50"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                className="w-full px-4 py-3 bg-white/10 border border-[#FDBF50]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FDBF50]/50"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <button 
                type="submit" 
                className="w-full py-3 bg-[#FDBF50] text-[#1a1b2e] font-bold rounded-lg hover:bg-[#FDBF50]/90 transition-all duration-300 transform hover:scale-105"
              >
                Sign Up
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

