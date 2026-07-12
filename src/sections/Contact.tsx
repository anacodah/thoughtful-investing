import React, { useState } from 'react';
import { CONTACT_INFO, GOALS } from '../data/siteData';
import { Mail, Phone, MessageSquare, Send, CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: 'Retirement Planning',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // If key is not configured, simulate a successful premium submission for demo purposes
    if (CONTACT_INFO.web3FormsKey === 'YOUR_ACCESS_KEY_HERE') {
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', goal: 'Retirement Planning', message: '' });
      }, 1200);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: CONTACT_INFO.web3FormsKey,
          subject: `Consultation Inquiry from ${formData.name}`,
          from_name: 'Thoughtful Investing Website',
          ...formData
        })
      });

      const result = await response.json();
      if (response.status === 200 && result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', goal: 'Retirement Planning', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage('Network error. Please try direct email or WhatsApp.');
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-white via-cyan-500/[0.07] via-40% to-blue-600/[0.06] py-24 scroll-mt-10">
      {/* Background blobs */}
      <div className="absolute bottom-[-15%] right-[-10%] -z-10 h-[650px] w-[650px] rounded-full bg-gradient-to-tr from-teal/20 via-cyan-500/15 to-blue-600/10 blur-3xl opacity-80 pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent blur-3xl opacity-70 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          
          {/* Contact Details Left Column */}
          <div className="lg:col-span-5 text-left space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Get In Touch</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-slate leading-tight">
                Schedule a Consultation
              </h2>
              <p className="text-sm md:text-base text-slate-light leading-relaxed font-normal">
                Let’s explore how to structure your capital to match your life goals. Select a preferred method or submit the inquiry form, and we will get back to you within 24 business hours.
              </p>
            </div>

            {/* Direct Channels Cards */}
            <div className="space-y-4 pt-4">
              
              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi%20Siddharth%2C%20I'd%20like%20to%20schedule%20a%20wealth%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 rounded-xl border border-slate-light/10 bg-cream/[0.05] p-5 hover:border-emerald-500/30 hover:bg-emerald-500/[0.02] transition-all duration-300"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 shrink-0">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-light">Chat on WhatsApp</h4>
                  <p className="text-sm font-semibold text-slate mt-0.5">Quick consultation booking</p>
                </div>
              </a>

              {/* Call Card */}
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center space-x-4 rounded-xl border border-slate-light/10 bg-cream/[0.05] p-5 hover:border-teal/30 hover:bg-teal/[0.02] transition-all duration-300"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal/10 text-teal shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-light">Call Advisory Line</h4>
                  <p className="text-sm font-semibold text-slate mt-0.5">{CONTACT_INFO.phone}</p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center space-x-4 rounded-xl border border-slate-light/10 bg-cream/[0.05] p-5 hover:border-gold/30 hover:bg-gold/[0.02] transition-all duration-300"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10 text-gold shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-light">Email Office</h4>
                  <p className="text-sm font-semibold text-slate mt-0.5 break-all">{CONTACT_INFO.email}</p>
                </div>
              </a>

            </div>
          </div>

          {/* Contact Form Right Column */}
          <div className="lg:col-span-7 bg-white/65 backdrop-blur-sm border border-slate-light/10 rounded-2xl p-8 md:p-10 shadow-sm relative overflow-hidden">
            {/* Premium gradient accent line at the top of the form */}
            <div className="absolute top-0 left-0 right-0 h-[3px] shimmer-gradient" />
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                >
                  <div className="h-16 w-16 bg-teal/10 rounded-full flex items-center justify-center text-teal">
                    <CheckCircle2 className="h-10 w-10 animate-bounce" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-slate">Thank You</h3>
                  <p className="text-sm text-slate-light max-w-sm leading-relaxed">
                    Your financial planning inquiry has been received. Siddharth or one of our senior advisors will contact you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-xs font-bold text-teal hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6 text-left"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-light">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-light/15 bg-white px-4 py-3 text-sm text-slate focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                        placeholder="Patrick Jane"
                      />
                    </div>
                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-light">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-light/15 bg-white px-4 py-3 text-sm text-slate focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                        placeholder="patrick@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-light">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-light/15 bg-white px-4 py-3 text-sm text-slate focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                        placeholder="+91 83569 07979"
                      />
                    </div>
                    {/* Primary Planning Goal */}
                    <div className="space-y-2">
                      <label htmlFor="goal" className="text-xs font-bold uppercase tracking-wider text-slate-light">
                        Primary Planning Goal
                      </label>
                      <select
                        name="goal"
                        id="goal"
                        value={formData.goal}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-light/15 bg-white px-4 py-3 text-sm text-slate focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal cursor-pointer"
                      >
                        {GOALS.map((goal) => (
                          <option key={goal.id} value={goal.title}>
                            {goal.title}
                          </option>
                        ))}
                        <option value="General Advice">General Financial Advice</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-light">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-light/15 bg-white px-4 py-3 text-sm text-slate focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal resize-none"
                      placeholder="Tell us briefly about your financial milestones..."
                    />
                  </div>

                  {/* Status Banner */}
                  {status === 'error' && (
                    <div className="flex items-center space-x-2 text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-100 rounded-lg p-3">
                      <AlertTriangle className="h-4 w-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-teal via-cyan-600 to-blue-700 px-6 py-3.5 text-sm font-semibold text-white hover:from-teal-dark hover:via-teal hover:to-cyan-600 transition-all duration-300 shadow-sm shadow-cyan-500/20 hover:shadow-md hover:shadow-cyan-500/30 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        <span>Book Consultation Appointment</span>
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
