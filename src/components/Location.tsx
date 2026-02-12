"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  Navigation,
} from "lucide-react";
import { restaurantInfo } from "@/data/menu";

function getOpenStatus() {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday
  const hour = now.getHours();
  const minute = now.getMinutes();
  const currentTime = hour * 60 + minute;

  // Sunday closed
  if (day === 0) return { isOpen: false, message: "Closed Today" };

  const todayHours = restaurantInfo.hours[day === 0 ? 6 : day - 1];
  if (!todayHours.open || !todayHours.close)
    return { isOpen: false, message: "Closed Today" };

  // Parse hours
  const parseTime = (timeStr: string) => {
    const [time, period] = timeStr.split(" ");
    const [h, m] = time.split(":").map(Number);
    let hours = h;
    if (period === "PM" && h !== 12) hours += 12;
    if (period === "AM" && h === 12) hours = 0;
    return hours * 60 + m;
  };

  const openTime = parseTime(todayHours.open);
  const closeTime = parseTime(todayHours.close);

  if (currentTime >= openTime && currentTime < closeTime) {
    const closeHour = Math.floor(closeTime / 60);
    const closeMin = closeTime % 60;
    const ampm = closeHour >= 12 ? "PM" : "AM";
    const displayHour = closeHour > 12 ? closeHour - 12 : closeHour;
    return {
      isOpen: true,
      message: `Open until ${displayHour}:${closeMin.toString().padStart(2, "0")} ${ampm}`,
    };
  }

  if (currentTime < openTime) {
    return { isOpen: false, message: `Opens at ${todayHours.open}` };
  }

  return { isOpen: false, message: "Closed" };
}

export default function Location() {
  const { isOpen, message } = getOpenStatus();
  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const today = new Date().getDay();
  const todayIndex = today === 0 ? 6 : today - 1;

  return (
    <section id="location" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-charcoal" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="text-center mb-12"
        >
          <span className="font-display text-xs uppercase tracking-[0.3em] text-rust mb-3 block">
            Find Us
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-cream">
            Come &amp; <span className="text-rust">Get It</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
            className="relative aspect-square md:aspect-auto md:min-h-[400px] border border-rust/20 overflow-hidden"
          >
            <iframe
              src={restaurantInfo.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute", inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mot's Pit BBQ location"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
            className="space-y-8"
          >
            {/* Open/Closed status */}
            <div className="flex items-center gap-3">
              <span
                className={`w-3 h-3 rounded-full ${
                  isOpen ? "bg-green-500 animate-pulse" : "bg-red-500"
                }`}
              />
              <span
                className={`font-display text-lg uppercase tracking-wider ${
                  isOpen ? "text-green-400" : "text-red-400"
                }`}
              >
                {message}
              </span>
            </div>

            {/* Address */}
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-rust flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-cream font-medium">{restaurantInfo.address}</p>
                <a
                  href={restaurantInfo.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-rust hover:text-rust-light text-sm mt-1 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-3">
              <Phone className="w-5 h-5 text-rust flex-shrink-0 mt-0.5" />
              <a
                href={`tel:${restaurantInfo.phoneRaw}`}
                className="text-cream hover:text-rust transition-colors font-medium"
              >
                {restaurantInfo.phone}
              </a>
            </div>

            {/* Hours */}
            <div className="flex gap-3">
              <Clock className="w-5 h-5 text-rust flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="font-display text-sm uppercase tracking-wider text-cream mb-3">
                  Hours
                </h3>
                <div className="space-y-1.5">
                  {restaurantInfo.hours.map((h, i) => (
                    <div
                      key={h.day}
                      className={`flex justify-between text-sm py-1 px-2 ${
                        i === todayIndex
                          ? "bg-rust/10 border-l-2 border-rust text-cream"
                          : "text-cream/60"
                      }`}
                    >
                      <span className="font-display uppercase tracking-wider text-xs">
                        {dayNames[i]}
                      </span>
                      <span>
                        {h.open && h.close
                          ? `${h.open} – ${h.close}`
                          : "Closed"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order CTA */}
            <div className="pt-4">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 bg-rust hover:bg-rust-dark text-cream font-display uppercase tracking-wider px-6 py-3 transition-colors"
              >
                Order for Pickup
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-cream/30 text-xs mt-2">
                Skip the apps. Order directly &amp; save.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
