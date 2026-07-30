"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { materials } from "@/lib/site";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
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
    "w-full rounded-lg border border-gray-line bg-white px-4 py-3 text-charcoal outline-none transition-colors placeholder:text-charcoal/40 focus:border-royal focus:ring-2 focus:ring-royal/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-charcoal">
            Name <span className="text-royal">*</span>
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
            Email <span className="text-royal">*</span>
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
          Message <span className="text-royal">*</span>
        </label>
        <textarea id="message" required rows={5} value={form.message} onChange={update("message")} className={inputClass} placeholder="Tell us about your material, volumes and goals." />
      </div>

      {error && (
        <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle size={16} />
          Something went wrong. Please try again or email us directly at onenasgroup@gmail.com.
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="group inline-flex items-center gap-2 rounded-full bg-royal px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-royal-mid hover:shadow-lg disabled:opacity-60"
      >
        {loading ? "Sending…" : "Send Request"}
        <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}
