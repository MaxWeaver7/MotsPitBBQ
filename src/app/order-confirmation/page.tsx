"use client";

import Link from "next/link";
import { Flame, CheckCircle, MapPin, Phone, Clock } from "lucide-react";
import { restaurantInfo } from "@/data/menu";

export default function OrderConfirmation() {
  // In production: fetch session details from Stripe using session_id from URL params
  // const searchParams = useSearchParams();
  // const sessionId = searchParams.get('session_id');
  // Then: GET /api/order-status?session_id=... to get order details

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage: "url(/images/woodbackround.jpg)",
        backgroundSize: "800px",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="absolute inset-0 bg-charcoal/90" />

      <div className="relative z-10 max-w-md w-full text-center">
        <div className="bg-smoke border border-rust/20 p-8 shadow-2xl shadow-black/40">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />

          <h1 className="font-display text-3xl uppercase tracking-wider text-cream mb-2">
            Order Confirmed!
          </h1>

          <p className="text-cream/60 mb-6">
            Your BBQ is being prepared. We&apos;ll have it ready for pickup.
          </p>

          <div className="border border-cream/10 p-4 text-left space-y-3 mb-6">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-rust flex-shrink-0 mt-0.5" />
              <span className="text-cream/80 text-sm">
                {restaurantInfo.address}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-rust" />
              <a
                href={`tel:${restaurantInfo.phoneRaw}`}
                className="text-cream/80 text-sm hover:text-rust transition-colors"
              >
                {restaurantInfo.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-rust" />
              <span className="text-cream/80 text-sm">
                Pickup time will be in your confirmation email
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={restaurantInfo.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rust hover:bg-rust-dark text-cream font-display uppercase tracking-wider py-3 transition-colors flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </a>
            <Link
              href="/"
              className="border border-cream/20 hover:border-rust text-cream/70 hover:text-cream font-display uppercase tracking-wider py-3 transition-colors flex items-center justify-center gap-2"
            >
              <Flame className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
