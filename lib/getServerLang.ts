import { cookies } from "next/headers";
import { Lang } from "./translations";

export const LANG_COOKIE = "adfiets-lang";

// NL is the home market, so Dutch is the default.
export async function getServerLang(): Promise<Lang> {
  const cookieStore = await cookies();
  const value = cookieStore.get(LANG_COOKIE)?.value;
  return value === "en" || value === "nl" ? value : "nl";
}
