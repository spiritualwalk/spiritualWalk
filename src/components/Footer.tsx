import Link from "next/link";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import LotusIcon from "./LotusIcon";

const quickLinks = [
  { label: "Journey", href: "/journey" },
  { label: "Destinations", href: "/destinations" },
  { label: "Gallery", href: "/gallery" },
  { label: "Director", href: "/director" },
  { label: "FAQ", href: "/faq" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-4 gap-12 pb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <LotusIcon className="w-8 h-8" />
              <span className="font-display text-lg tracking-widest2 uppercase">Spiritual Walk</span>
            </div>
            <p className="text-sm text-cream/60 leading-relaxed">
              Walk in the Footsteps of the Buddha — a luxury pilgrimage and wellness retreat
              across India's sacred Buddhist circuit.
            </p>
          </div>

          <div>
            <h4 className="font-display text-base mb-5 text-gold-soft">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-cream/60 hover:text-gold-soft transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base mb-5 text-gold-soft">Contact</h4>
            <ul className="space-y-3 text-sm text-cream/60">
              <li className="flex items-center gap-2"><Mail size={14} /> spiritualwalk61@gmail.com</li>
              <li className="flex items-center gap-2"><Phone size={14} /> +91 98765 43210</li>
              <li className="flex items-center gap-2"><MapPin size={14} /> Bodh Gaya, Bihar, India</li>
            </ul>
          </div>

          {/* <div>
            <h4 className="font-display text-base mb-5 text-gold-soft">Newsletter</h4>
            <p className="text-sm text-cream/60 mb-4">Reflections and journey updates, occasionally.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-cream/5 border border-cream/15 rounded-sm px-3 py-2 text-sm placeholder:text-cream/30 outline-none focus:border-gold/50"
              />
              <button className="btn-gold px-5 py-2 text-xs">Join</button>
            </form>
            <div className="flex gap-4 mt-6 text-cream/50">
              <Instagram size={18} className="hover:text-gold-soft transition-colors cursor-pointer" />
              <Facebook size={18} className="hover:text-gold-soft transition-colors cursor-pointer" />
              <Youtube size={18} className="hover:text-gold-soft transition-colors cursor-pointer" />
            </div>
          </div> */}
        </div>

        <div className="gold-divider-lg mx-auto mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/40">
          <p>© {new Date().getFullYear()} THE CYBER LOOM // Managed and Developed by The Cyber Loom</p>
          <div className="flex gap-6">
            {legalLinks.map((l) => (
              <Link key={l.label} href={l.href} className="hover:text-gold-soft transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
