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
    if (!CONTACT_INFO.web3FormsKey) {
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', goal: 'Retirement Planning', message: '' });
      }, 1200);
      return;
    }

    try {
      const htmlBody = `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
          <div style="background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%); padding: 32px 36px; text-align: center;">
            <h1 style="color: #ffffff; font-size: 22px; margin: 0; letter-spacing: 0.5px;">Thoughtful Investing</h1>
            <p style="color: #94a3b8; font-size: 13px; margin: 6px 0 0;">New Consultation Inquiry</p>
          </div>
          <div style="padding: 32px 36px; background: #ffffff;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 12px; font-family: sans-serif; text-transform: uppercase; letter-spacing: 0.5px; width: 110px;">Name</td><td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 15px; font-weight: bold;">${formData.name}</td></tr>
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 12px; font-family: sans-serif; text-transform: uppercase; letter-spacing: 0.5px;">Email</td><td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${formData.email}" style="color: #0e7490; font-size: 15px;">${formData.email}</a></td></tr>
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 12px; font-family: sans-serif; text-transform: uppercase; letter-spacing: 0.5px;">Phone</td><td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;"><a href="tel:${formData.phone}" style="color: #0e7490; font-size: 15px;">${formData.phone}</a></td></tr>
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 12px; font-family: sans-serif; text-transform: uppercase; letter-spacing: 0.5px;">Goal</td><td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;"><span style="background: #f0fdf4; color: #166534; padding: 3px 10px; border-radius: 20px; font-size: 13px; font-family: sans-serif; font-weight: 600;">${formData.goal}</span></td></tr>
              <tr><td style="padding: 16px 0 4px; color: #64748b; font-size: 12px; font-family: sans-serif; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">Message</td><td style="padding: 16px 0 4px; color: #334155; font-size: 14px; font-family: sans-serif; line-height: 1.6;">${formData.message || '<em style="color:#94a3b8">No message provided</em>'}</td></tr>
            </table>
          </div>
          <div style="background: #f8fafc; padding: 20px 36px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="color: #94a3b8; font-size: 11px; font-family: sans-serif; margin: 0;">Submitted via thoughtfulinvesting.in &nbsp;·&nbsp; ${new Date().toLocaleString('en-IN', { dateStyle: 'long', timeStyle: 'short' })}</p>
          </div>
        </div>
      `;

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: CONTACT_INFO.web3FormsKey,
          subject: `New Inquiry — ${formData.goal} | ${formData.name}`,
          from_name: 'Thoughtful Investing',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          goal: formData.goal,
          message: htmlBody,
          html: true,
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
