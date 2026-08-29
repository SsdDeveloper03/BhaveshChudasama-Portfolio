"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { submitContactForm } from "@/lib/contact";

interface FormValues {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

const initialValues: FormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormValues, string>> = {};

    if (!values.name.trim()) nextErrors.name = "Name is required.";
    if (!values.email.trim()) nextErrors.email = "Email is required.";
    if (!values.message.trim()) nextErrors.message = "Message is required.";

    return nextErrors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setLoading(true);
    await submitContactForm(values);
    setLoading(false);
    setSubmitted(true);
    setValues(initialValues);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm text-white/70">
          <span className="mb-2 block">Full Name</span>
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition focus:border-sunrise/50"
            placeholder="Your name"
          />
          {errors.name ? <span className="mt-2 block text-sm text-orange-300">{errors.name}</span> : null}
        </label>

        <label className="block text-sm text-white/70">
          <span className="mb-2 block">Company</span>
          <input
            name="company"
            value={values.company}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition focus:border-sunrise/50"
            placeholder="Your company"
          />
        </label>

        <label className="block text-sm text-white/70">
          <span className="mb-2 block">Email</span>
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition focus:border-sunrise/50"
            placeholder="you@company.com"
          />
          {errors.email ? <span className="mt-2 block text-sm text-orange-300">{errors.email}</span> : null}
        </label>

        <label className="block text-sm text-white/70">
          <span className="mb-2 block">Phone (Optional)</span>
          <input
            name="phone"
            value={values.phone}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition focus:border-sunrise/50"
            placeholder="+91 00000 00000"
          />
        </label>
      </div>

      <label className="block text-sm text-white/70">
        <span className="mb-2 block">Message</span>
        <textarea
          name="message"
          value={values.message}
          onChange={handleChange}
          rows={6}
          className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition focus:border-sunrise/50"
          placeholder="Tell me about your goals, timeline, and vision..."
        />
        {errors.message ? <span className="mt-2 block text-sm text-orange-300">{errors.message}</span> : null}
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" className="gap-2" disabled={loading}>
          {loading ? "Sending..." : "Send Inquiry"}
          <Send size={16} />
        </Button>
        {submitted ? <p className="text-sm text-sunrise">Thanks — your message has been prepared for delivery.</p> : null}
      </div>
    </motion.form>
  );
}
