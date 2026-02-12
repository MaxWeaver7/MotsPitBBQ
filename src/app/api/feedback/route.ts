import { NextResponse } from "next/server";

interface FeedbackEntry {
  food: number;
  service: number;
  atmosphere: number;
  comment: string;
  timestamp: string;
}

// In-memory store for dev. Replace saveFeedback() body with:
// await db.collection('feedback').insertOne(entry);
const store: FeedbackEntry[] = [];

async function saveFeedback(entry: FeedbackEntry) {
  store.push(entry);

  // Flag low ratings for attention
  const avg = (entry.food + entry.service + entry.atmosphere) / 3;
  if (avg < 3) {
    console.warn(
      `⚠️ LOW RATING ALERT: avg ${avg.toFixed(1)} — "${entry.comment}"`
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { food, service, atmosphere, comment } = body;

    if (
      typeof food !== "number" ||
      typeof service !== "number" ||
      typeof atmosphere !== "number"
    ) {
      return NextResponse.json(
        { error: "Invalid rating values" },
        { status: 400 }
      );
    }

    const entry: FeedbackEntry = {
      food,
      service,
      atmosphere,
      comment: String(comment || "").slice(0, 1000),
      timestamp: new Date().toISOString(),
    };

    await saveFeedback(entry);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to save feedback" },
      { status: 500 }
    );
  }
}
