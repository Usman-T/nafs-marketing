import { v4 as uuidv4 } from "uuid";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const id = uuidv4();
    const date = new Date().toISOString();

    const row = {
      Id: id,
      Email: email,
      Date: date,
    };

    if (!process.env.SHEET_BEST_URL) {
      console.error("Missing SHEET_BEST_URL");
      return new Response(JSON.stringify({ error: "Server misconfigured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    await fetch(process.env.SHEET_BEST_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(row),
    });

    if (process.env.DISCORD_WEBHOOK) {
      const hypeMessages = [
        "NEW Email in. lessss gooo.",
        "This is a good man Arthur Morgan.",
        "YAYYY BUDDYYY LIGHT WEIGHT ",
        "HE'S GONNA LIFT THE BOATS SON",
        "WE'RE SHIPPING THIS WEEKEND.",
        "GOTTA GET THEM GAINS SON",
        "AHHHHHH EMAIL BABYYYYk",
      ];

      const randomMessage =
        hypeMessages[Math.floor(Math.random() * hypeMessages.length)];

      await fetch(process.env.DISCORD_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `📬 NEW SIGNUP\n\nEmail: ${email}\nTime: ${date}\n\n${randomMessage}`,
        }),
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Subscribe error:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
