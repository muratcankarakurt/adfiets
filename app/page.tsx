import { getServerLang } from "@/lib/getServerLang";
import LandingClient from "./LandingClient";

export default async function Home() {
  const lang = await getServerLang();
  return <LandingClient initialLang={lang} />;
}
