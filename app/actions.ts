"use server";

import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

export type WaitlistState = {
  status: "idle" | "success" | "error";
  message?: string;
};

type WaitlistEntry = {
  audience: "rider" | "advertiser";
  email: string;
  city: string;
  company: string;
  createdAt: string;
};

// TODO: swap file storage for Supabase before launch — the filesystem is not
// persistent on serverless hosts like Vercel.
const DATA_FILE = path.join(process.cwd(), "data", "waitlist.json");

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const audience = formData.get("audience") === "advertiser" ? "advertiser" : "rider";
  const email = String(formData.get("email") ?? "").trim();
  const city = String(formData.get("city") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const entry: WaitlistEntry = {
    audience,
    email,
    city,
    company,
    createdAt: new Date().toISOString(),
  };

  try {
    await mkdir(path.dirname(DATA_FILE), { recursive: true });
    let entries: WaitlistEntry[] = [];
    try {
      entries = JSON.parse(await readFile(DATA_FILE, "utf8"));
    } catch {
      // first entry — file doesn't exist yet
    }
    if (entries.some((e) => e.email === email && e.audience === audience)) {
      return { status: "success", message: "You're already on the list — we'll be in touch!" };
    }
    entries.push(entry);
    await writeFile(DATA_FILE, JSON.stringify(entries, null, 2));
  } catch {
    return { status: "error", message: "Something went wrong. Please try again." };
  }

  return {
    status: "success",
    message:
      audience === "advertiser"
        ? "Thanks! We'll reach out about advertising spots soon."
        : "You're on the list! We'll let you know when bikes are available.",
  };
}
