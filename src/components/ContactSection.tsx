"use client";

import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to your backend
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="py-20 relative bg-background-alt" id="contact">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary rounded-full opacity-40 animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-secondary rounded-full opacity-40 animate-ping delay-700"></div>
        <div className="absolute bottom-10 left-10 w-2 h-2 bg-primary rounded-full opacity-30"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-text-main soft-glow-text">
            Let's Connect
          </h2>
          <div className="gradient-line"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-card-bg rounded-3xl p-8 border border-border-color shadow-2xl shadow-black/20">
          <div className="space-y-8 flex flex-col justify-center">
            <div>
              <h3 className="text-3xl font-bold text-primary font-display mb-6 soft-glow-text">
                FAHIM
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-md">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <span className="text-text-sub text-sm group-hover:text-text-main transition-colors">
                    mdfahim00223@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-md">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <p className="text-text-main text-sm font-bold">Phone</p>
                    <p className="text-text-sub text-xs">01402852440</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-md">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <p className="text-text-main text-sm font-bold">Location</p>
                    <p className="text-text-sub text-xs">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <a 
                  className="w-10 h-10 rounded-full border border-slate-600 bg-slate-800/50 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-md" 
                  href="#"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a 
                  className="w-10 h-10 rounded-full border border-slate-600 bg-slate-800/50 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-md" 
                  href="#"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a 
                  className="w-10 h-10 rounded-full border border-slate-600 bg-slate-800/50 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-md" 
                  href="#"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a 
                  className="w-10 h-10 rounded-full border border-slate-600 bg-slate-800/50 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-md" 
                  href="#"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                className="w-full bg-slate-900 border border-border-color text-text-main rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm placeholder-slate-500 shadow-sm"
                placeholder="Your Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                className="w-full bg-slate-900 border border-border-color text-text-main rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm placeholder-slate-500 shadow-sm"
                placeholder="Your Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                className="w-full bg-slate-900 border border-border-color text-text-main rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm placeholder-slate-500 shadow-sm"
                placeholder="Subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <textarea
                className="w-full bg-slate-900 border border-border-color text-text-main rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm placeholder-slate-500 resize-none shadow-sm"
                placeholder="Your Message"
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              className="w-full bg-gradient-to-r from-primary to-secondary text-slate-900 font-bold py-3 px-6 rounded-lg hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
              type="submit"
            >
              <i className="fas fa-paper-plane"></i> SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;