export type PostTag = "SEO" | "GTM" | "Web Design";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  tags: PostTag[];
  featured?: boolean;
  toc: { id: string; label: string }[];
  body: { id: string; heading: string; paragraphs: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "the-end-of-keyword-seo",
    title: "The end of keyword SEO — and what comes next for B2B.",
    excerpt:
      "Search behavior is splitting between Google and LLMs. Here's the GTM playbook B2B teams should be running over the next 12 months.",
    date: "2026-04-22",
    readTime: "8 min read",
    author: "Rikin Diwan",
    tags: ["SEO", "GTM"],
    featured: true,
    toc: [
      { id: "shift", label: "The shift" },
      { id: "what-still-works", label: "What still works" },
      { id: "what-to-build", label: "What to build now" },
      { id: "playbook", label: "The 90-day playbook" },
    ],
    body: [
      {
        id: "shift",
        heading: "The shift",
        paragraphs: [
          "For two decades, B2B SEO was an exercise in matching keywords to landing pages. Pick your terms, build the page, earn the backlinks, wait. That motion is breaking down in real time — not because Google is dying, but because the surface area of search is expanding faster than most teams can adapt.",
          "Buyers now bounce between ChatGPT, Perplexity, Gemini, and Google in a single research session. The page that wins the click is rarely the page that wins the citation in an LLM answer. Two different games, played at the same time.",
        ],
      },
      {
        id: "what-still-works",
        heading: "What still works",
        paragraphs: [
          "Deep, well-structured content still wins — arguably more than ever. LLMs reward the same signals that always mattered: clear hierarchy, unambiguous claims, real expertise, and source attribution. The teams pulling ahead are the ones treating content as a product, not as a marketing tax.",
        ],
      },
      {
        id: "what-to-build",
        heading: "What to build now",
        paragraphs: [
          "Three things: a knowledge base your content engine can pull from, an architecture that crawlers and LLMs can parse, and a small set of cornerstone pieces that other content links into. Most teams skip step one and wonder why their output feels generic.",
        ],
      },
      {
        id: "playbook",
        heading: "The 90-day playbook",
        paragraphs: [
          "Weeks 1-2: audit. Weeks 3-4: build the knowledge base. Weeks 5-8: publish four cornerstone pieces. Weeks 9-12: layer in distribution and measure citation share in LLMs alongside traditional rankings. Boring, methodical, and the only thing that compounds.",
        ],
      },
    ],
  },
  {
    slug: "positioning-for-category-creation",
    title: "Why most category-creation plays fail (and the three that don't).",
    excerpt:
      "Category creation is the most overused — and least understood — strategy in B2B. The teams that pull it off share a small set of common traits.",
    date: "2026-04-08",
    readTime: "6 min read",
    author: "Rikin Diwan",
    tags: ["GTM"],
    toc: [
      { id: "the-trap", label: "The trap" },
      { id: "three-patterns", label: "Three patterns that work" },
      { id: "how-to-test", label: "How to pressure-test" },
    ],
    body: [
      {
        id: "the-trap",
        heading: "The trap",
        paragraphs: [
          "Most teams pitch a category before they've earned the right to. They write a manifesto, change their homepage, and wait for buyers to nod. The buyer doesn't nod. The buyer searches for something familiar and clicks the competitor who showed up.",
        ],
      },
      {
        id: "three-patterns",
        heading: "Three patterns that work",
        paragraphs: [
          "First: anchor to a known frustration, not a new noun. Second: prove the category exists by naming the alternative your buyer is already cobbling together. Third: invest in the words your customers actually say in their internal slack channels, not the ones your strategist invented in a workshop.",
        ],
      },
      {
        id: "how-to-test",
        heading: "How to pressure-test",
        paragraphs: [
          "Show your positioning to ten target buyers without your logo on it. If three of them can repeat it back without prompting, you're close. If none can, start over.",
        ],
      },
    ],
  },
  {
    slug: "framer-vs-webflow-for-b2b",
    title: "Framer vs. Webflow for B2B in 2026.",
    excerpt:
      "We've built dozens of B2B sites on both platforms. Here's the unvarnished comparison — and the question that actually decides it.",
    date: "2026-03-26",
    readTime: "7 min read",
    author: "Rikin Diwan",
    tags: ["Web Design"],
    toc: [
      { id: "the-real-question", label: "The real question" },
      { id: "framer-strengths", label: "Where Framer wins" },
      { id: "webflow-strengths", label: "Where Webflow wins" },
      { id: "verdict", label: "The verdict" },
    ],
    body: [
      {
        id: "the-real-question",
        heading: "The real question",
        paragraphs: [
          "Framer vs. Webflow isn't really a tool comparison — it's a team comparison. Who's going to own the site after launch, and what do they need to do without breaking things?",
        ],
      },
      {
        id: "framer-strengths",
        heading: "Where Framer wins",
        paragraphs: [
          "Speed of iteration, beautiful defaults, a design-first surface. If your marketing team is small and design-led, Framer compounds quickly.",
        ],
      },
      {
        id: "webflow-strengths",
        heading: "Where Webflow wins",
        paragraphs: [
          "CMS depth, programmatic content, and complex integrations. If you're publishing volume or wiring deeply into a stack, Webflow's ceiling is higher.",
        ],
      },
      {
        id: "verdict",
        heading: "The verdict",
        paragraphs: [
          "There isn't one. Pick the platform that matches the team you'll have in 18 months, not the team you have today.",
        ],
      },
    ],
  },
  {
    slug: "content-engines-not-content-calendars",
    title: "Build a content engine, not a content calendar.",
    excerpt:
      "Calendars decay. Engines compound. Here's how we structure the operating system behind a B2B content program that scales past founder-led writing.",
    date: "2026-03-12",
    readTime: "5 min read",
    author: "Rikin Diwan",
    tags: ["SEO", "GTM"],
    toc: [
      { id: "the-difference", label: "The difference" },
      { id: "components", label: "The components" },
    ],
    body: [
      {
        id: "the-difference",
        heading: "The difference",
        paragraphs: [
          "A calendar tells you what to publish. An engine tells you how to keep publishing — and how to compound what you've already published into the next thing.",
        ],
      },
      {
        id: "components",
        heading: "The components",
        paragraphs: [
          "Knowledge base, editorial workflow, distribution loop, measurement layer. Each one is boring on its own. Together they're the difference between content as a cost center and content as a moat.",
        ],
      },
    ],
  },
  {
    slug: "the-hero-section-test",
    title: "The 5-second hero section test.",
    excerpt:
      "If a buyer can't tell what you do, who it's for, and why it matters in five seconds, your hero section is leaking pipeline. A simple framework to fix it.",
    date: "2026-02-28",
    readTime: "4 min read",
    author: "Rikin Diwan",
    tags: ["Web Design", "GTM"],
    toc: [
      { id: "the-test", label: "The test" },
      { id: "the-fix", label: "The fix" },
    ],
    body: [
      {
        id: "the-test",
        heading: "The test",
        paragraphs: [
          "Show your homepage to someone outside your industry for five seconds. Ask them three questions: what does this company do, who is it for, and why should you care. If they whiff on any of them, you have work to do.",
        ],
      },
      {
        id: "the-fix",
        heading: "The fix",
        paragraphs: [
          "Lead with the outcome, not the mechanism. Name the ICP explicitly. Cut everything that doesn't earn its place in those first 100 vertical pixels.",
        ],
      },
    ],
  },
  {
    slug: "ai-search-citation-share",
    title: "Citation share is the new ranking.",
    excerpt:
      "The teams that win the next era of B2B search will measure how often LLMs cite them — not where they rank on page one.",
    date: "2026-02-14",
    readTime: "6 min read",
    author: "Rikin Diwan",
    tags: ["SEO"],
    toc: [
      { id: "what-it-is", label: "What it is" },
      { id: "how-to-measure", label: "How to measure" },
      { id: "what-to-do", label: "What to do about it" },
    ],
    body: [
      {
        id: "what-it-is",
        heading: "What it is",
        paragraphs: [
          "Citation share is the percentage of LLM answers about a given topic that include a link to your domain. It's the closest analog we have to organic ranking in the AI search era.",
        ],
      },
      {
        id: "how-to-measure",
        heading: "How to measure",
        paragraphs: [
          "Tools like Geostar.ai and Gumshoe.ai run prompts at scale and report on which domains get cited. Pick a basket of 50-100 prompts your buyers would actually ask and track weekly.",
        ],
      },
      {
        id: "what-to-do",
        heading: "What to do about it",
        paragraphs: [
          "Write the page an LLM would want to cite. That means clear structure, real data, and a specific point of view. Generic SEO content gets ignored.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const getFeaturedPost = () => posts.find((p) => p.featured) || posts[0];

export const getSecondaryFeatured = (limit = 3) =>
  posts.filter((p) => !p.featured).slice(0, limit);

export const getRelatedPosts = (slug: string, limit = 3) =>
  posts.filter((p) => p.slug !== slug).slice(0, limit);

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
