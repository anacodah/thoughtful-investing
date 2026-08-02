import { useState } from 'react';
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
          message: formData.message || 'No message provided.',
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
                    Thank you for reaching out. A senior wealth consultant will contact you shortly to confirm your consultation slot.
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
                      placeholder="Briefly describe your current portfolio size or specific planning needs..."
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
