"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  help: string[];
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  businessType?: string;
  help?: string;
  message?: string;
}

export default function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    help: [],
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};

    // Name Validation
    if (!data.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (data.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (data.name.length > 50) {
      newErrors.name = "Name is too long (max 50 characters)";
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone Validation
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (data.phone && !phoneRegex.test(data.phone.replace(/[\s\(\)-]/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Business Type Validation
    if (!data.businessType) {
      newErrors.businessType = "Please select your business type";
    }

    // Help Selection Validation
    if (data.help.length === 0) {
      newErrors.help = "Please select at least one area of interest";
    }

    // Message Validation
    if (!data.message.trim()) {
      newErrors.message = "Please provide some details about your needs";
    } else if (data.message.trim().length < 10) {
      newErrors.message = "Please provide a bit more detail (min 10 characters)";
    } else if (data.message.length > 2000) {
      newErrors.message = "Message is too long (max 2000 characters)";
    }

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for this field as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const newHelp = checked 
        ? [...prev.help, value]
        : prev.help.filter((item) => item !== value);
      
      if (newHelp.length > 0) {
        setErrors((prev) => ({ ...prev, help: undefined }));
      }
      return { ...prev, help: newHelp };
    });
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const validationErrors = validate(formData);
    setErrors((prev) => ({ ...prev, [field]: validationErrors[field as keyof FormErrors] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      phone: true,
      businessType: true,
      help: true,
      message: true,
    });

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        router.push("/thank-you");
      } catch (err) {
        alert("Something went wrong. Please try again later.");
        setIsSubmitting(false);
      }
    } else {
      // Scroll to the first error
      const firstErrorField = Object.keys(validationErrors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="font-label-caps text-label-caps text-on-surface-variant ml-1" htmlFor="name">
            Full Name <span className="text-primary">*</span>
          </label>
          <input
            className={`w-full bg-surface-container-low rounded-xl px-5 py-4 font-body-md text-on-surface border-2 transition-all placeholder:text-on-surface-variant/30 focus:outline-none ${
              touched.name && errors.name 
                ? "border-red-400 bg-red-50/10" 
                : "border-transparent focus:border-[#994125] focus:ring-0"
            }`}
            id="name"
            name="name"
            placeholder="Jane Doe"
            type="text"
            value={formData.name}
            onChange={handleChange}
            onBlur={() => handleBlur("name")}
            maxLength={60}
          />
          {touched.name && errors.name && (
            <p className="text-red-500 text-xs ml-1 animate-in fade-in slide-in-from-top-1">{errors.name}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-label-caps text-label-caps text-on-surface-variant ml-1" htmlFor="email">
            Email Address <span className="text-primary">*</span>
          </label>
          <input
            className={`w-full bg-surface-container-low rounded-xl px-5 py-4 font-body-md text-on-surface border-2 transition-all placeholder:text-on-surface-variant/30 focus:outline-none ${
              touched.email && errors.email 
                ? "border-red-400 bg-red-50/10" 
                : "border-transparent focus:border-[#994125] focus:ring-0"
            }`}
            id="email"
            name="email"
            placeholder="jane@company.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={() => handleBlur("email")}
          />
          {touched.email && errors.email && (
            <p className="text-red-500 text-xs ml-1 animate-in fade-in slide-in-from-top-1">{errors.email}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="font-label-caps text-label-caps text-on-surface-variant ml-1" htmlFor="phone">
            Phone Number
          </label>
          <input
            className={`w-full bg-surface-container-low rounded-xl px-5 py-4 font-body-md text-on-surface border-2 transition-all placeholder:text-on-surface-variant/30 focus:outline-none ${
              touched.phone && errors.phone 
                ? "border-red-400 bg-red-50/10" 
                : "border-transparent focus:border-[#994125] focus:ring-0"
            }`}
            id="phone"
            name="phone"
            placeholder="+1 (555) 000-0000"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            onBlur={() => handleBlur("phone")}
          />
          {touched.phone && errors.phone && (
            <p className="text-red-500 text-xs ml-1 animate-in fade-in slide-in-from-top-1">{errors.phone}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-label-caps text-label-caps text-on-surface-variant ml-1" htmlFor="businessType">
            Business Type <span className="text-primary">*</span>
          </label>
          <div className="relative group">
            <select
              className={`w-full bg-surface-container-low rounded-xl pl-5 pr-14 py-4 font-body-md text-on-surface border-2 transition-all cursor-pointer focus:outline-none appearance-none ${
                touched.businessType && errors.businessType 
                  ? "border-red-400 bg-red-50/10" 
                  : "border-transparent focus:border-[#994125] focus:ring-0"
              }`}
              id="businessType"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              onBlur={() => handleBlur("businessType")}
              style={{ 
                appearance: 'none',
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                backgroundImage: 'none'
              }}
            >
              <option disabled value="">Select industry</option>
              <option value="tech">Technology & Startups</option>
              <option value="creative">Creative Agency</option>
              <option value="finance">Finance & Legal</option>
              <option value="real_estate">Real Estate</option>
              <option value="other">Other</option>
            </select>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
              <svg 
                className={`w-5 h-5 transition-colors duration-300 ${touched.businessType && errors.businessType ? 'text-red-400' : 'text-on-surface-variant group-focus-within:text-primary'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>
          {touched.businessType && errors.businessType && (
            <p className="text-red-500 text-xs ml-1 animate-in fade-in slide-in-from-top-1">{errors.businessType}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <label className="font-label-caps text-label-caps text-on-surface-variant ml-1">
          How can we help? (Select all that apply) <span className="text-primary">*</span>
        </label>
        <div className="flex flex-wrap gap-3">
          {[
            { id: "inbox", label: "Inbox Management" },
            { id: "scheduling", label: "Scheduling" },
            { id: "travel", label: "Travel Booking" },
            { id: "research", label: "Research" },
            { id: "personal", label: "Personal Tasks" },
          ].map((item) => (
            <label key={item.id} className="cursor-pointer">
              <input
                className="peer sr-only"
                name="help"
                type="checkbox"
                value={item.id}
                checked={formData.help.includes(item.id)}
                onChange={handleCheckboxChange}
              />
              <span className="block px-5 py-2.5 rounded-full bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps border border-transparent peer-checked:bg-[#994125] peer-checked:text-white peer-checked:border-[#994125] hover:bg-surface-container-high transition-all">
                {item.label}
              </span>
            </label>
          ))}
        </div>
        {touched.help && errors.help && (
          <p className="text-red-500 text-xs ml-1 animate-in fade-in slide-in-from-top-1">{errors.help}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-label-caps text-label-caps text-on-surface-variant ml-1" htmlFor="message">
          Additional Details <span className="text-primary">*</span>
        </label>
        <textarea
          className={`w-full bg-surface-container-low rounded-xl px-5 py-4 font-body-md text-on-surface border-2 transition-all placeholder:text-on-surface-variant/30 focus:outline-none resize-none ${
            touched.message && errors.message 
              ? "border-red-400 bg-red-50/10" 
              : "border-transparent focus:border-[#994125] focus:ring-0"
          }`}
          id="message"
          name="message"
          placeholder="Tell us a bit more about what you're looking for..."
          rows={4}
          value={formData.message}
          onChange={handleChange}
          onBlur={() => handleBlur("message")}
        ></textarea>
        <div className="flex justify-between items-center px-1">
          {touched.message && errors.message ? (
            <p className="text-red-500 text-xs animate-in fade-in slide-in-from-top-1">{errors.message}</p>
          ) : (
            <div />
          )}
          <p className={`text-[10px] font-label-caps ${formData.message.length > 1800 ? "text-red-400" : "text-on-surface-variant/50"}`}>
            {formData.message.length} / 2000
          </p>
        </div>
      </div>
      <button
        className={`w-full bg-[#994125] text-white font-label-caps text-label-caps rounded-full py-5 hover:scale-[1.01] active:scale-[0.99] shadow-lg transition-all duration-300 uppercase tracking-widest mt-4 flex items-center justify-center gap-3 ${
          isSubmitting ? "opacity-70 cursor-not-allowed" : ""
        }`}
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? (
          <>
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            Sending...
          </>
        ) : (
          "Send My Request"
        )}
      </button>
    </form>
  );
}
