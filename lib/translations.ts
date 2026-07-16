export type Lang = "nl" | "en";

export const translations = {
  nl: {
    nav: {
      howItWorks: "Hoe het werkt",
      advertise: "Adverteren",
      joinWaitlist: "Schrijf je in",
    },
    hero: {
      badge: "Binnenkort van start",
      titleLine1: "Huur een elektrische bakfiets.",
      titleLine2: "Advertenties betalen je rit.",
      subtitle:
        "Lokale bedrijven adverteren op onze bakfietsen. Hun budget dekt de fietsen — dus huur jij er één voor een fractie van de normale prijs.",
      ctaRider: "Goedkoop rijden — schrijf je in",
      ctaAdvertiser: "Adverteer op een bakfiets",
      svgLabel: "Bakfiets met een advertentiepaneel op de bak",
      svgAdLine1: "JOUW MERK",
      svgAdLine2: "rijdt hier mee",
      caption: "Elke fiets draagt één adverteerder. Elke rit kost jou minder.",
    },
    how: {
      title: "Hoe het werkt",
      steps: [
        {
          title: "Bedrijven boeken advertentieruimte",
          body: "Lokale ondernemers huren de grote panelen op onze bakfietsbakken — een rijdend reclamebord in hun eigen buurt.",
        },
        {
          title: "Advertenties dekken de kosten",
          body: "Advertentie-inkomsten betalen de fietsen, verzekering en onderhoud, dus wij hoeven jou geen markttarief te rekenen.",
        },
        {
          title: "Jij rijdt voor een fractie van de prijs",
          body: "Pak een elektrische bakfiets in de buurt, vervoer je spullen of je kinderen, en betaal veel minder dan bij een gewone verhuurder.",
        },
      ],
    },
    pricing: {
      title: "Dezelfde bakfiets, zonder het prijskaartje",
      note: "Indicatieve prijzen — definitieve tarieven maken we bekend bij de lancering.",
      costLabel: "Wat een bakfietsverhuur echt kost",
      costSub: "fiets, accu, verzekering, onderhoud",
      coveredLabel: "Betaald door de adverteerder op jouw bak",
      coveredSub: "hun merk rijdt mee — dat is de hele deal",
      youPay: "Jij betaalt",
      perDay: "/dag",
      barAdvertiser: "adverteerder betaalt €25",
      barRider: "jij betaalt €15",
    },
    waitlist: {
      ridersTitle: "Voor rijders",
      ridersSub:
        "Wees de eerste die een elektrische bakfiets huurt voor de laagste prijs van de stad.",
      advertisersTitle: "Voor adverteerders",
      advertisersSub:
        "Zet je merk op een bakfiets die elke dag door jouw buurt rijdt. Hyperlokaal en niet te missen.",
    },
    form: {
      email: "E-mailadres",
      city: "Stad (optioneel)",
      company: "Bedrijfsnaam",
      submitRider: "Zet me op de wachtlijst",
      submitAdvertiser: "Vraag advertentie-info aan",
      pending: "Versturen…",
      invalidEmail: "Vul een geldig e-mailadres in.",
      duplicate: "Je staat al op de lijst — we houden je op de hoogte!",
      serverError: "Er ging iets mis. Probeer het opnieuw.",
      okRider: "Je staat op de lijst! We laten je weten wanneer de fietsen beschikbaar zijn.",
      okAdvertiser: "Bedankt! We nemen binnenkort contact op over advertentieplekken.",
    },
    faq: {
      title: "Veelgestelde vragen",
      items: [
        {
          q: "Waarom is het zo goedkoop?",
          a: "Adverteerders betalen voor zichtbaarheid op de bak van de fiets. Hun budget dekt het grootste deel van de kosten, dus jouw huurprijs hoeft maar een klein deel te dekken.",
        },
        {
          q: "Moet ik iets doen voor de adverteerders?",
          a: "Nee. Rij gewoon zoals je altijd doet. De advertentie zit op de bak — je deelt geen flyers uit en rijdt geen omwegen.",
        },
        {
          q: "Waar komen de fietsen beschikbaar?",
          a: "We starten in één stad en breiden uit op basis van de wachtlijst. Vul je stad in bij het aanmelden — dat bepaalt direct waar we hierna lanceren.",
        },
        {
          q: "Wat voor fietsen zijn het?",
          a: "Moderne elektrische bakfietsen met een grote bak voorop — perfect voor boodschappen, meubels, bezorgingen of twee kinderen met gordels.",
        },
      ],
    },
    footer: {
      tagline: "bakfietsen, betaald door advertenties",
      join: "Schrijf je in",
    },
  },
  en: {
    nav: {
      howItWorks: "How it works",
      advertise: "Advertise",
      joinWaitlist: "Join waitlist",
    },
    hero: {
      badge: "Launching soon",
      titleLine1: "Rent a cargo e-bike.",
      titleLine2: "Ads pay for your ride.",
      subtitle:
        "Local companies advertise on our cargo bikes. Their budget covers the bikes — so you rent one for a fraction of the normal price.",
      ctaRider: "Ride cheap — join the waitlist",
      ctaAdvertiser: "Advertise on a bike",
      svgLabel: "Cargo bike with an advertising panel on the box",
      svgAdLine1: "YOUR BRAND",
      svgAdLine2: "rides here",
      caption: "Every bike carries one advertiser. Every ride costs you less.",
    },
    how: {
      title: "How it works",
      steps: [
        {
          title: "Companies book ad space",
          body: "Local businesses rent the big panels on our cargo bike boxes — a moving billboard that rides through their own neighbourhood.",
        },
        {
          title: "Ads cover the bike's costs",
          body: "Advertising income pays for the bikes, insurance and maintenance, so we don't need to charge you full market rates.",
        },
        {
          title: "You ride for a fraction of the price",
          body: "Pick up an e-cargo bike nearby, move your stuff or your kids, and pay far less than any regular rental.",
        },
      ],
    },
    pricing: {
      title: "The same bike, without the price tag",
      note: "Indicative pricing — final rates will be announced at launch.",
      costLabel: "What a cargo e-bike rental really costs",
      costSub: "bike, battery, insurance, maintenance",
      coveredLabel: "Covered by the advertiser on your cargo box",
      coveredSub: "their brand rides along — that's the whole deal",
      youPay: "You pay",
      perDay: "/day",
      barAdvertiser: "advertiser pays €25",
      barRider: "you pay €15",
    },
    waitlist: {
      ridersTitle: "For riders",
      ridersSub: "Be first to rent a cargo e-bike at the lowest price in town.",
      advertisersTitle: "For advertisers",
      advertisersSub:
        "Put your brand on a cargo bike that rides through your neighbourhood every day. Hyper-local, impossible to miss.",
    },
    form: {
      email: "Email address",
      city: "City (optional)",
      company: "Company name",
      submitRider: "Join the waitlist",
      submitAdvertiser: "Request advertising info",
      pending: "Sending…",
      invalidEmail: "Please enter a valid email address.",
      duplicate: "You're already on the list — we'll be in touch!",
      serverError: "Something went wrong. Please try again.",
      okRider: "You're on the list! We'll let you know when bikes are available.",
      okAdvertiser: "Thanks! We'll reach out about advertising spots soon.",
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          q: "Why is it so cheap?",
          a: "Advertisers pay for visibility on the bike's cargo box. Their budget covers most of the cost of the bikes, so your rental price only needs to cover a small part.",
        },
        {
          q: "Do I have to do anything for the advertisers?",
          a: "No. Just ride like you normally would. The ad is on the box — you never hand out flyers or take detours.",
        },
        {
          q: "Where will the bikes be available?",
          a: "We're starting in one city and expanding based on the waitlist. Add your city when you sign up — it directly decides where we launch next.",
        },
        {
          q: "What kind of bikes are they?",
          a: "Modern electric cargo bikes with a large front box — good for groceries, furniture-store hauls, deliveries, or two kids with seatbelts.",
        },
      ],
    },
    footer: {
      tagline: "cargo bikes, funded by ads",
      join: "Join the waitlist",
    },
  },
} as const;

export function getTranslations(lang: Lang) {
  return translations[lang];
}
