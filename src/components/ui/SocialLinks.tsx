"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function SocialLinks() {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const links = [
    { href: profile.github, label: "GitHub", Icon: Github },
    { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
  ].filter((link) => Boolean(link.href));

  if (!profile.email && !links.length) return null;

  return (
    <div className="social-links">
      {profile.email && (
        <button className={copied ? "social-copy social-copied" : "social-copy"} type="button" onClick={copyEmail} aria-label={copied ? "Email copied" : "Copy email"} aria-live="polite">
          {copied ? <Check size={19} aria-hidden="true" /> : <Mail size={19} aria-hidden="true" />}
          {copied && <span>Copied!</span>}
        </button>
      )}
      {links.map(({ href, label, Icon }) => (
        <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer">
          <Icon size={19} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
