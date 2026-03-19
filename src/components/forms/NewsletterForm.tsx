"use client";

import { useState, FormEvent } from "react";

const inputClasses =
  "bg-navy-800 border border-white/10 text-white placeholder:text-silver-300 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue focus:outline-none rounded-xl px-4 py-3 w-full transition-colors";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-center text-silver-200 py-3">
        Thanks! We&apos;ll keep you in the loop.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 w-full"
    >
      <input
        type="email"
        required
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`${inputClasses} sm:flex-1`}
      />
      <button
        type="submit"
        className="rounded-xl bg-electric-blue px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-electric-blue-hover whitespace-nowrap"
      >
        Notify Me
      </button>
    </form>
  );
}
