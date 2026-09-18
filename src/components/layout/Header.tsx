"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation, profile } from "@/data/portfolio";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Go to top">{profile.name}</a>
        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="main-navigation" aria-label="Toggle navigation">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav id="main-navigation" className={open ? "nav nav-open" : "nav"} aria-label="Main navigation">
          {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        </nav>
      </div>
    </header>
  );
}
