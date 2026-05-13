export type CaseStudyTag = "Web Design" | "SEO / GEO";

export type CaseStudy = {
  slug: string;
  name: string;
  category: string;
  services: string;
  tags: CaseStudyTag[];
  media: "winback" | "perform" | "roadio" | "marpipe" | "gofractional" | "meshmap" | "pearl-talent";
  headline: string;
  subhead: string;
  youtubeId: string;
  stats: { value: string; label: string }[];
  toc: { id: string; label: string }[];
  article: { id: string; heading: string; body: string[] }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "winback",
    name: "WINBACK",
    category: "LTV FOR ECOMM",
    services: "WEB DESIGN • BRANDING • POSITIONING",
    tags: ["Web Design"],
    media: "winback",
    headline: "Repositioning Winback to own the LTV category.",
    subhead: "A rebrand and Framer site that turned a crowded retention-marketing pitch into a category of one.",
    youtubeId: "dQw4w9WgXcQ",
    stats: [
      { value: "3.4x", label: "Inbound demo requests" },
      { value: "62%", label: "Increase in qualified pipeline" },
      { value: "21 days", label: "From kickoff to launch" },
    ],
    toc: [
      { id: "challenge", label: "The challenge" },
      { id: "approach", label: "Our approach" },
      { id: "outcome", label: "The outcome" },
      { id: "whats-next", label: "What's next" },
    ],
    article: [
      {
        id: "challenge",
        heading: "The challenge",
        body: [
          "Winback was competing in a noisy retention-marketing space where every tool sounded the same — email, SMS, lifecycle. Their existing site led with features, not outcomes, and the team was burning cycles educating prospects on what the product actually did.",
          "We were brought in to reposition the company around a single, ownable idea: customer LTV. The goal was a brand and site that told that story in under five seconds.",
        ],
      },
      {
        id: "approach",
        heading: "Our approach",
        body: [
          "We started with a three-week positioning intensive — interviewing customers, mapping the competitive set, and pressure-testing message variants against ICP buyers. From there we built a new visual identity and a Framer site engineered around the new narrative.",
          "Every section earned its place. The hero stated the category. The next scroll proved it. Pricing was reworked to remove friction. We integrated lead capture and CRM sync so sales could move on inbound the moment it arrived.",
        ],
      },
      {
        id: "outcome",
        heading: "The outcome",
        body: [
          "Within the first quarter post-launch, Winback saw a 3.4x increase in inbound demo requests and 62% growth in qualified pipeline. The new positioning gave the sales team a clearer story and the marketing team a foundation to build content against.",
        ],
      },
      {
        id: "whats-next",
        heading: "What's next",
        body: [
          "We're working with the Winback team on a content engine that compounds the new positioning into organic search — turning a one-time rebrand into a long-term moat.",
        ],
      },
    ],
  },
  {
    slug: "perform",
    name: "PERFORM",
    category: "NEARSHORE STAFFING",
    services: "WEB DESIGN • SEO • BRANDING • POSITIONING",
    tags: ["Web Design", "SEO / GEO"],
    media: "perform",
    headline: "Rebuilding Perform's GTM from the brand up.",
    subhead: "Positioning, a new identity, and a Webflow site engineered to convert nearshore-staffing buyers.",
    youtubeId: "dQw4w9WgXcQ",
    stats: [
      { value: "4.1x", label: "Organic traffic in 6 months" },
      { value: "+180", label: "Ranked keywords in top 10" },
      { value: "$0", label: "Spent on paid acquisition" },
    ],
    toc: [
      { id: "challenge", label: "The challenge" },
      { id: "approach", label: "Our approach" },
      { id: "outcome", label: "The outcome" },
      { id: "whats-next", label: "What's next" },
    ],
    article: [
      {
        id: "challenge",
        heading: "The challenge",
        body: [
          "Perform had a strong delivery model but a website that read like a generic staffing agency. Buyers couldn't tell what made them different, and the team was relying entirely on referrals to grow.",
        ],
      },
      {
        id: "approach",
        heading: "Our approach",
        body: [
          "We led a full repositioning, then rebuilt the site in Webflow with SEO baked into the architecture — clean URL structures, schema, and a content hub designed for topical authority in nearshore staffing.",
        ],
      },
      {
        id: "outcome",
        heading: "The outcome",
        body: [
          "Six months in, organic traffic was up 4.1x and Perform had over 180 keywords ranking in the top 10 — all without a dollar of paid spend.",
        ],
      },
      {
        id: "whats-next",
        heading: "What's next",
        body: [
          "We're scaling the content engine into adjacent categories and layering in lifecycle automation to convert organic traffic into pipeline more efficiently.",
        ],
      },
    ],
  },
  {
    slug: "roadio",
    name: "ROADIO",
    category: "AI CAMERAS FOR EBIKES",
    services: "BRAND • WEBFLOW • ECOMM INTEGRATION • CONTENT",
    tags: ["Web Design", "SEO / GEO"],
    media: "roadio",
    headline: "Launching Roadio's AI camera into a noisy ecomm market.",
    subhead: "Brand, Webflow store, and content engine for a hardware launch competing against legacy incumbents.",
    youtubeId: "dQw4w9WgXcQ",
    stats: [
      { value: "12k+", label: "Pre-orders at launch" },
      { value: "2.8x", label: "Conversion vs. category benchmark" },
      { value: "$0", label: "Paid CAC for first 1k customers" },
    ],
    toc: [
      { id: "challenge", label: "The challenge" },
      { id: "approach", label: "Our approach" },
      { id: "outcome", label: "The outcome" },
      { id: "whats-next", label: "What's next" },
    ],
    article: [
      {
        id: "challenge",
        heading: "The challenge",
        body: [
          "Roadio was launching new AI-powered camera hardware into an ebike accessory market dominated by legacy brands. They needed a brand that felt premium and a storefront that converted cold traffic on a high-consideration purchase.",
        ],
      },
      {
        id: "approach",
        heading: "Our approach",
        body: [
          "We designed the brand from scratch, built the Webflow store with deep ecomm integrations, and seeded a content engine around ebike safety and rider stories — the topics their audience actually searched for.",
        ],
      },
      {
        id: "outcome",
        heading: "The outcome",
        body: [
          "Roadio launched with 12k+ pre-orders, hit 2.8x the category conversion benchmark, and acquired its first 1,000 customers without paid spend.",
        ],
      },
      {
        id: "whats-next",
        heading: "What's next",
        body: [
          "We're working on a creator program and expanding the content engine to international markets.",
        ],
      },
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);

export const getRelated = (slug: string, limit = 2) =>
  caseStudies.filter((c) => c.slug !== slug).slice(0, limit);
