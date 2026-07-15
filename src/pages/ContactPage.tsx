import React, { useState } from 'react';
import { CONTACT_INFO, GOALS } from '../data/siteData';
import { Mail, Phone, MessageSquare, Send, CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-gradient-to-br from-teal/5 via-cream to-cyan-100/30 pb-20"
    >
      {/* Dark Premium Header */}
      <div className="pt-20 pb-24 px-6 bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-900 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-4 block">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Schedule a Consultation
          </h1>
          <p className="text-cyan-100/80 text-lg md:text-xl font-light leading-relaxed mb-6">
            Let’s explore how to structure your capital to match your life goals. Select a preferred method or submit the inquiry form, and we will get back to you within 24 business hours.
          </p>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-8 -mt-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">

          {/* Contact Details Left Column */}
          <div className="lg:col-span-5 text-left space-y-6">
            {/* Direct Channels Cards */}
            <div className="space-y-4">

              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi%20Siddharth%2C%20I'd%20like%20to%20schedule%20a%20wealth%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 rounded-xl border border-slate-100 bg-white p-5 hover:border-emerald-500/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 shrink-0">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-light/60 mb-0.5">Quick Response</p>
                  <p className="text-sm font-semibold text-slate group-hover:text-emerald-700">WhatsApp Chat</p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center space-x-4 rounded-xl border border-slate-100 bg-white p-5 hover:border-teal/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal/10 text-teal shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-light/60 mb-0.5">General Inquiry</p>
                  <p className="text-sm font-semibold text-slate">{CONTACT_INFO.email}</p>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center space-x-4 rounded-xl border border-slate-100 bg-white p-5 hover:border-blue-600/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-light/60 mb-0.5">Call Us</p>
                  <p className="text-sm font-semibold text-slate">{CONTACT_INFO.phone}</p>
                </div>
              </a>

            </div>

            <div className="rounded-xl bg-white p-6 border border-slate-100 shadow-sm mt-8">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold">Office Location</span>
                <p className="text-sm text-slate leading-relaxed pt-1 pb-3 border-b border-slate-100">
                  {CONTACT_INFO.address}
                </p>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold mt-3">Working Hours</span>
                <p className="text-sm text-slate pt-1">
                  {CONTACT_INFO.workingHours}
                </p>
              </div>
            </div>
          </div>

          {/* Form Right Column */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-100 bg-white p-8 sm:p-10 shadow-lg shadow-slate-900/5">
              <h3 className="font-serif text-2xl font-bold text-slate mb-6">Inquiry Form</h3>

              {status === 'success' ? (
                <div className="flex h-full min-h-[300px] flex-col items-center justify-center space-y-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal/10">
                    <CheckCircle2 className="h-8 w-8 text-teal" />
                  </div>
                  <h4 className="font-serif text-2xl font-medium text-slate">Request Received</h4>
                  <p className="text-sm text-slate-light max-w-sm mx-auto">
                    Thank you for reaching out. A senior wealth advisor will contact you shortly to confirm your consultation slot.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-xs font-bold uppercase tracking-wider text-teal hover:text-teal-dark"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-wider text-slate-light">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-light/20 bg-slate-50 px-4 py-3 text-sm text-slate outline-none transition-all focus:border-teal focus:bg-white focus:ring-1 focus:ring-teal"
                        placeholder="Patrick Jane"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-wider text-slate-light">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-light/20 bg-slate-50 px-4 py-3 text-sm text-slate outline-none transition-all focus:border-teal focus:bg-white focus:ring-1 focus:ring-teal"
                        placeholder="+91 98XXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-wider text-slate-light">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-light/20 bg-slate-50 px-4 py-3 text-sm text-slate outline-none transition-all focus:border-teal focus:bg-white focus:ring-1 focus:ring-teal"
                        placeholder="patrick@example.com"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="goal" className="text-[11px] font-bold uppercase tracking-wider text-slate-light">
                        Primary Interest
                      </label>
                      <div className="relative">
                        <select
                          id="goal"
                          name="goal"
                          value={formData.goal}
                          onChange={handleChange}
                          className="w-full appearance-none rounded-lg border border-slate-light/20 bg-slate-50 px-4 py-3 text-sm text-slate outline-none transition-all focus:border-teal focus:bg-white focus:ring-1 focus:ring-teal"
                        >
                          {GOALS.map((goal) => (
                            <option key={goal.id} value={goal.title}>{goal.title}</option>
                          ))}
                          <option value="Other">Other / General Inquiry</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-light">
                          <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-wider text-slate-light">
                      Additional Details (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full resize-none rounded-lg border border-slate-light/20 bg-slate-50 px-4 py-3 text-sm text-slate outline-none transition-all focus:border-teal focus:bg-white focus:ring-1 focus:ring-teal"
                      placeholder="Briefly describe your current portfolio size or specific advisory needs..."
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center space-x-2 rounded-lg bg-red-50 p-3 text-sm text-red-600 border border-red-100">
                      <AlertTriangle className="h-4 w-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="group flex w-full items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-teal via-cyan-600 to-blue-700 py-3.5 px-4 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Processing Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Book Consultation Appointment</span>
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </>
                      )}
                    </button>
                    <p className="mt-4 text-center text-[10px] text-slate-light/60 uppercase tracking-wide">
                      Your information is strictly confidential. No spam, ever.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
