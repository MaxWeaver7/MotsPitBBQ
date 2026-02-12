"use client";

import { Flame, Phone, MapPin } from "lucide-react";
import { restaurantInfo } from "@/data/menu";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-rust/20">
      {/* Wood bg */}
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: "url(/images/woodbackround.jpg)",
          backgroundSize: "800px",
          backgroundRepeat: "repeat",
        }}
      />
      <div className="absolute inset-0 bg-charcoal/95" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Flame className="w-5 h-5 text-rust" />
              <span className="font-display text-xl font-bold uppercase tracking-wide text-cream">
                Mot&apos;s Pit BBQ
              </span>
            </div>
            <p className="text-cream/40 text-sm leading-relaxed">
              Authentic wood-smoked BBQ in Augusta, GA since 1996. Four
              house-made sauces. Perfect health score.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xs uppercase tracking-[0.2em] text-rust mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Menu", href: "#menu" },
                { label: "About", href: "#about" },
                { label: "Reviews", href: "#reviews" },
                { label: "Gallery", href: "#gallery" },
                { label: "Location", href: "#location" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream/50 hover:text-rust text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xs uppercase tracking-[0.2em] text-rust mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href={`tel:${restaurantInfo.phoneRaw}`}
                className="flex items-center gap-2 text-cream/50 hover:text-rust text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                {restaurantInfo.phone}
              </a>
              <a
                href={restaurantInfo.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-cream/50 hover:text-rust text-sm transition-colors"
              >
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                {restaurantInfo.address}
              </a>
            </div>
          </div>

          {/* Hours summary */}
          <div>
            <h3 className="font-display text-xs uppercase tracking-[0.2em] text-rust mb-4">
              Hours
            </h3>
            <div className="space-y-1 text-sm text-cream/50">
              <p>Mon–Thu: 11am – 6pm</p>
              <p>Friday: 11am – 8pm</p>
              <p>Saturday: 11am – 6pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-cream/[0.06] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-cream/30 text-xs">
            &copy; {currentYear} Mot&apos;s Pit BBQ. All rights reserved.
          </p>
          <p className="text-cream/20 text-xs">
            Skip the apps. Support local.
          </p>
        </div>
      </div>
    </footer>
  );
}
