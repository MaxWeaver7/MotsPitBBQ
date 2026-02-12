import { NextResponse } from "next/server";

/**
 * STRIPE WEBHOOK HANDLER — Order Fulfillment
 *
 * This endpoint receives webhook events from Stripe when a payment completes.
 * It handles order fulfillment: saving to DB, notifying the restaurant, and
 * sending customer confirmation.
 *
 * TO GO LIVE:
 * 1. Create webhook in Stripe Dashboard → Developers → Webhooks
 *    - Endpoint URL: https://yourdomain.com/api/webhook
 *    - Events to listen for: checkout.session.completed
 *
 * 2. Copy the webhook signing secret (whsec_...) to STRIPE_WEBHOOK_SECRET env var
 *
 * 3. For local testing: `stripe listen --forward-to localhost:3000/api/webhook`
 *
 * NOTIFICATION FLOW after successful payment:
 * ┌──────────────────────────────────────────────┐
 * │ Customer pays on Stripe Checkout             │
 * │              ↓                               │
 * │ Stripe fires checkout.session.completed      │
 * │              ↓                               │
 * │ This webhook handler:                        │
 * │   1. Verifies webhook signature              │
 * │   2. Retrieves session + line items          │
 * │   3. Saves order to database                 │
 * │   4. Sends email to restaurant (Resend)      │
 * │   5. Sends SMS to restaurant (Twilio)        │
 * │   6. Sends confirmation email to customer    │
 * │              ↓                               │
 * │ Customer redirected to /order-confirmation   │
 * └──────────────────────────────────────────────┘
 */

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const signature = req.headers.get("stripe-signature");

    // ──────────────────────────────────────────────
    // PRODUCTION: Verify webhook signature
    // ──────────────────────────────────────────────
    //
    // import Stripe from 'stripe';
    // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    //
    // let event: Stripe.Event;
    // try {
    //   event = stripe.webhooks.constructEvent(
    //     body,
    //     signature!,
    //     process.env.STRIPE_WEBHOOK_SECRET!
    //   );
    // } catch (err) {
    //   console.error('Webhook signature verification failed:', err);
    //   return NextResponse.json(
    //     { error: 'Invalid signature' },
    //     { status: 400 }
    //   );
    // }
    //
    // if (event.type === 'checkout.session.completed') {
    //   const session = event.data.object as Stripe.Checkout.Session;
    //
    //   // Retrieve full session with line items
    //   const fullSession = await stripe.checkout.sessions.retrieve(
    //     session.id,
    //     { expand: ['line_items'] }
    //   );
    //
    //   if (fullSession.payment_status !== 'unpaid') {
    //     await fulfillOrder(fullSession);
    //   }
    // }
    //
    // async function fulfillOrder(session: Stripe.Checkout.Session) {
    //   const orderId = `MOT-${Date.now().toString(36).toUpperCase()}`;
    //   const items = session.line_items?.data || [];
    //   const pickupTime = session.custom_fields?.find(f => f.key === 'pickup_time')?.dropdown?.value;
    //   const instructions = session.custom_fields?.find(f => f.key === 'special_instructions')?.text?.value;
    //   const phone = session.customer_details?.phone;
    //   const email = session.customer_details?.email;
    //
    //   // 1. Save to database
    //   // await db.collection('orders').insertOne({
    //   //   orderId,
    //   //   stripeSessionId: session.id,
    //   //   items: items.map(i => ({ name: i.description, qty: i.quantity, total: i.amount_total })),
    //   //   total: session.amount_total,
    //   //   pickupTime,
    //   //   instructions,
    //   //   customerEmail: email,
    //   //   customerPhone: phone,
    //   //   status: 'confirmed',
    //   //   createdAt: new Date(),
    //   // });
    //
    //   // 2. Notify restaurant via email
    //   // import { Resend } from 'resend';
    //   // const resend = new Resend(process.env.RESEND_API_KEY);
    //   // await resend.emails.send({
    //   //   from: 'orders@motspit.com',
    //   //   to: 'kitchen@motspit.com',
    //   //   subject: `🔥 New Pickup Order #${orderId}`,
    //   //   html: `
    //   //     <h2>New Order #${orderId}</h2>
    //   //     <p>Pickup Time: ${pickupTime}</p>
    //   //     <ul>${items.map(i => `<li>${i.quantity}x ${i.description} - $${(i.amount_total!/100).toFixed(2)}</li>`).join('')}</ul>
    //   //     <p>Total: $${(session.amount_total!/100).toFixed(2)}</p>
    //   //     ${instructions ? `<p>Special Instructions: ${instructions}</p>` : ''}
    //   //     <p>Customer Phone: ${phone}</p>
    //   //   `,
    //   // });
    //
    //   // 3. Notify restaurant via SMS
    //   // import twilio from 'twilio';
    //   // const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);
    //   // await twilioClient.messages.create({
    //   //   body: `New order #${orderId}! ${items.length} items, pickup ${pickupTime}. Total: $${(session.amount_total!/100).toFixed(2)}`,
    //   //   from: process.env.TWILIO_PHONE,
    //   //   to: process.env.RESTAURANT_PHONE,
    //   // });
    //
    //   // 4. Send customer confirmation email
    //   // await resend.emails.send({
    //   //   from: 'orders@motspit.com',
    //   //   to: email!,
    //   //   subject: `Order Confirmed! #${orderId} - Mot's Pit BBQ`,
    //   //   html: `
    //   //     <h2>Your order is confirmed!</h2>
    //   //     <p>Order #${orderId}</p>
    //   //     <p>Pickup: ${pickupTime}</p>
    //   //     <p>Address: 3963 Columbia Rd, Augusta, GA 30907</p>
    //   //     <p>Phone: (706) 863-9978</p>
    //   //   `,
    //   // });
    // }
    // ──────────────────────────────────────────────

    // DEMO: Log the webhook attempt
    console.log("Webhook received:", { bodyLength: body.length, signature });

    return NextResponse.json({ received: true });
  } catch {
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
