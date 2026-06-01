"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { materials } from "@/lib/site";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    material: "",
    message: "",
  });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire this to your backend / email service (e.g. an API route or form provider).
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald/30 bg-emerald/5 p-12 text-center">
        <CheckCircle2 className="text-emerald" size={44} />
        <h3 className="mt-5 font-display text-2xl font-semibold text-forest">
          Thank you — we've received your request.
        </h3>
        <p className="mt-3 max-w-md text-charcoal/70">
          A member of our team will be in touch shortly to discuss your material
          and requirements.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-gray-line bg-white px-4 py-3 text-charcoal outline-none transition-colors placeholder:text-charcoal/40 focus:border-emerald focus:ring-2 focus:ring-emerald/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-charcoal">
            Name <span className="text-emerald">*</span>
          </label>
          <input id="name" required value={form.name} onChange={update("name")} className={inputClass} placeholder="Your full name" />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-charcoal">
            Company
          </label>
          <input id="company" value={form.company} onChange={update("company")} className={inputClass} placeholder="Company name" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal">
            Email <span className="text-emerald">*</span>
          </label>
          <input id="email" type="email" required value={form.email} onChange={update("email")} className={inputClass} placeholder="you@company.com" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-charcoal">
            Phone
          </label>
          <input id="phone" type="tel" value={form.phone} onChange={update("phone")} className={inputClass} placeholder="+1 (000) 000-0000" />
        </div>
      </div>

      <div>
        <label htmlFor="material" className="mb-1.5 block text-sm font-medium text-charcoal">
          Material Type
        </label>
        <select id="material" value={form.material} onChange={update("material")} className={inputClass}>
          <option value="">Select a material…</option>
          {materials.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-charcoal">
          Message <span className="text-emerald">*</span>
        </label>
        <textarea id="message" required rows={5} value={form.message} onChange={update("message")} className={inputClass} placeholder="Tell us about your material, volumes and goals." />
      </div>

      <button
        type="submit"
        className="group inline-flex items-center gap-2 rounded-full bg-emerald px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-forest hover:shadow-lg"
      >
        Send Request
        <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}
