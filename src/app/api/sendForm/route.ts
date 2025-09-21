import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, attendance } = body;

    const TELEGRAM_BOT_TOKEN = "8442837171:AAF0ksIU-XsWjRl3e8m57GJqK66Mf486k8A";
    const TELEGRAM_CHAT_ID = "@kyz_uzatuu";

    const text = `📩 Новая регистрация:\n
👤 Имена: ${name}
✅ Придёт: ${attendance === "yes" ? "Да" : "Нет"}`;

    await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: "HTML",
        }),
      }
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, error }, { status: 500 });
  }
}
