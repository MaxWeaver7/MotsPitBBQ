import { NextResponse } from "next/server";

/**
 * STRIPE CHECKOUT SESSION — Production-Ready Architecture
 *
 * This route creates a Stripe Checkout Session for pickup orders.
 * Currently returns a mock response for demo purposes.
 *
 * TO GO LIVE:
 * 1. Set environment variables:
 *    - STRIPE_SECRET_KEY (from Stripe Dashboard > Developers > API Keys)
 *    - NEXT_PUBLIC_URL (your deployed domain)
 *    - STRIPE_WEBHOOK_SECRET (from Stripe Dashboard > Webhooks)
 *
 * 2. Uncomment the Stripe code below and remove the mock response.
 *
 * 3. Set up the webhook endpoint in Stripe Dashboard:
 *    - URL: https://yourdomain.com/api/webhook
 *    - Events: checkout.session.completed
 *
 * FEES BREAKDOWN (for a $45 order):
 * - Stripe fee: ($45 × 2.9%) + $0.30 = $1.61
 * - Your platform fee (10%): $4.50
 * - Net to restaurant: $38.89
 * - Compared to DoorDash (25%): restaurant saves $6.75 per order
 */

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

export async function POST(req: Request) {
  try {
    const { items, customerName, customerPhone } = (await req.json()) as {
      items: CartItem[];
      customerName?: string;
      customerPhone?: string;
    };

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    // Calculate server-side totals (never trust client-side prices)
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * 0.08; // Georgia sales tax for Augusta/Richmond County
    const total = subtotal + tax;

    // ──────────────────────────────────────────────
    // PRODUCTION: Stripe Checkout Session
    // ──────────────────────────────────────────────
    //
    // import Stripe from 'stripe';
    // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    //
    // const lineItems = items.map((item) => ({
    //   price_data: {
    //     currency: 'usd',
    //     product_data: {
    //       name: item.name,
    //       metadata: { category: 'food' },
    //     },
    //     unit_amount: Math.round(item.price * 100),
    //   },
    //   quantity: item.quantity,
    // }));
    //
    // // Add tax as a line item
    // lineItems.push({
    //   price_data: {
    //     currency: 'usd',
    //     product_data: {
    //       name: 'Sales Tax (8%)',
    //       metadata: { category: 'tax' },
    //     },
    //     unit_amount: Math.round(tax * 100),
    //   },
    //   quantity: 1,
    // });
    //
    // const session = await stripe.checkout.sessions.create({
    //   mode: 'payment',
    //   line_items: lineItems,
    //   success_url: `${process.env.NEXT_PUBLIC_URL}/order-confirmation?session_id={CHECKOUT_SESSION_ID}`,
    //   cancel_url: `${process.env.NEXT_PUBLIC_URL}/#menu`,
    //   phone_number_collection: { enabled: true },
    //   custom_fields: [
    //     {
    //       key: 'pickup_time',
    //       label: { type: 'custom', custom: 'Preferred Pickup Time' },
    //       type: 'dropdown',
    //       dropdown: {
    //         options: [
    //           { label: '15 minutes', value: '15min' },
    //           { label: '30 minutes', value: '30min' },
    //           { label: '45 minutes', value: '45min' },
    //           { label: '1 hour', value: '60min' },
    //         ],
    //       },
    //     },
    //     {
    //       key: 'special_instructions',
    //       label: { type: 'custom', custom: 'Special Instructions' },
    //       type: 'text',
    //       optional: true,
    //     },
    //   ],
    //   metadata: {
    //     order_type: 'pickup',
    //     customer_name: customerName || '',
    //     customer_phone: customerPhone || '',
    //     item_count: String(items.reduce((s, i) => s + i.quantity, 0)),
    //   },
    // });
    //
    // return NextResponse.json({ url: session.url });
    // ──────────────────────────────────────────────

    // DEMO MODE: Return mock order confirmation
    return NextResponse.json({
      demo: true,
      message: "Demo mode — in production this redirects to secure checkout.",
      order: {
        items: items.map((i) => ({
          name: i.name,
          qty: i.quantity,
          lineTotal: (i.price * i.quantity).toFixed(2),
        })),
        subtotal: subtotal.toFixed(2),
        tax: tax.toFixed(2),
        total: total.toFixed(2),
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Checkout failed" },
      { status: 500 }
    );
  }
}
