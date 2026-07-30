import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { 
  Send, 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  CheckCircle2, 
  Phone,
  AlertCircle,
  MessageSquare,
  Loader2
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [isSending, setIsSending] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (emailStr: string) => {
    return /^\S+@\S+\.\S+$/.test(emailStr.trim());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSubmitSuccess(false);

    // Validations
    if (!name.trim()) {
      setErrorMessage('El nombre es obligatorio.');
      return;
    }

    if (!email.trim()) {
      setErrorMessage('El correo electrónico es obligatorio.');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Por favor ingresa un correo electrónico válido.');
      return;
    }

    if (!message.trim()) {
      setErrorMessage('El mensaje es obligatorio.');
      return;
    }

    setIsSending(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setErrorMessage('Las variables de entorno de EmailJS no están configuradas correctamente en .env o Vercel.');
      setIsSending(false);
      return;
    }

    // Parameters mapped for template compatibility & Reply-To
    const templateParams = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      reply_to: email.trim(),
      from_name: name.trim(),
      from_email: email.trim(),
      user_name: name.trim(),
      user_email: email.trim(),
      subject: `Nuevo contacto desde mi portafolio - ${name.trim()}`
    };

    try {
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setSubmitSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setErrorMessage('No se pudo enviar el mensaje. Intenta nuevamente.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0B0D14] dark:bg-[#0B0D14] light:bg-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Contacto Directo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 mb-4">
            Contáctame Directamente
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Escríbeme un mensaje a mi correo electrónico <strong className="text-blue-400">{PERSONAL_INFO.email}</strong>.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-10"
        >
          
          {/* Left Column: Contact Links & Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 dark:border-white/10 light:border-black/10 space-y-6">
              
              <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                Información de Contacto
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 text-slate-200 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Correo Electrónico</span>
                    <span className="text-xs font-bold text-slate-200 group-hover:text-blue-400 transition-colors">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 text-slate-200 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Teléfono / WhatsApp</span>
                    <span className="text-xs font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 text-slate-200 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Perfil de LinkedIn</span>
                    <span className="text-xs font-bold text-slate-200 group-hover:text-purple-400 transition-colors">
                      Patricio Paz en LinkedIn
                    </span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 text-slate-200 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Perfil de GitHub</span>
                    <span className="text-xs font-bold text-slate-200 group-hover:text-indigo-400 transition-colors">
                      @Patricio-Paz
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 text-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Ubicación</span>
                    <span className="text-xs font-bold text-slate-200">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Clean EmailJS Form */}
          <div className="lg:col-span-3">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 dark:border-white/10 light:border-black/10">
              
              <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-400" /> Enviar Mensaje
              </h3>

              {submitSuccess && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-3 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <strong className="block font-bold text-emerald-400">Mensaje enviado correctamente. Te responderé pronto.</strong>
                  </div>
                </div>
              )}

              {errorMessage && (
                <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-3 animate-fadeIn">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                  <div>
                    <strong className="block font-bold text-red-400">{errorMessage}</strong>
                  </div>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                
                {/* 1. Nombre (name="name") */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block font-semibold">Nombre Completo *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isSending}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-100 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                  />
                </div>

                {/* 2. Correo (name="email") */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block font-semibold">Correo Electrónico *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="tu.correo@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSending}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-100 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                  />
                </div>

                {/* 3. Mensaje (name="message") */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block font-semibold">Mensaje *</label>
                  <textarea
                    rows={5}
                    name="message"
                    placeholder="Escribe tu mensaje aquí..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={isSending}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-100 focus:outline-none focus:border-blue-500 resize-none transition-colors disabled:opacity-50"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-500/25 active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
