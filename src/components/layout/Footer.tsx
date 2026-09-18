import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  );
}
