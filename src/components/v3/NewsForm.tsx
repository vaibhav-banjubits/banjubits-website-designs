"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "./Icon";

/**
 * Newsletter signup. Front-end only: it validates the address in the browser
 * and shows a confirmation. Connect `onSubmit` to a real mailing-list service
 * before launch.
 */
export function NewsForm() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    setMsg(
      ok
        ? { ok, text: "Thanks, you are on the list." }
        : { ok, text: "Please enter a valid email address." },
    );
    if (ok) setEmail("");
  };

  return (
    <form className="dh-news" onSubmit={onSubmit} noValidate>
      <label htmlFor="dh-email">
        Stay ahead with notes on shipping AI that lasts.
      </label>
      <div className="dh-news__field">
        <input
          id="dh-email"
          type="email"
          placeholder="Enter your email to subscribe"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="dh-round" aria-label="Subscribe">
          <Icon n="arrow-right" />
        </button>
      </div>
      <p
        className="dh-news__msg"
        role="status"
        style={msg && !msg.ok ? { color: "var(--amber)" } : undefined}
      >
        {msg?.text}
      </p>
    </form>
  );
}
