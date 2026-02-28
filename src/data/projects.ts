export interface Project {
  id: number;
  title: string;
  description: string;
  results: string;
  tags: string[];
  image: string;
  link: string;
  code: string;
  category: "react" | "website" | "blogs" | "ecommerce";
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Zyren",
    description: "High-performance tech marketplace featuring dynamic shop filters, an interactive cart system, and a secure checkout-ready UI.",
    results: "Engineered for sub-second speeds with full mobile responsiveness and gradient-rich visuals.",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    image: "/image.png",
    link: "https://zyrenn.vercel.app",
    code: "https://github.com/samandersonweb/zyren",
    category: "ecommerce"
  },
  {
    id: 2,
    title: "Millennium",
    description: "A high-energy boxing gym platform for a premier NYC training facility, featuring interactive member management.",
    results: "I closed this deal while cold calling",
    tags: ["React", "Tailwind"],
    image: "/millennium.png",
    link: "https://millenniumboxing.vercel.app/",
    code: "https://github.com/samandersonweb/millennium",
    category: "react"
  },
  {
    id: 3,
    title: "Optimedicus",
    description: "OptiMedicus simplifies medication management through evidence-based MTM services, helping patients and providers prevent medication-related harm.",
    results: "Under construction the responsive part",
    tags: ["React", "Tailwind"],
    image: "/optimedicus.png",
    link: "https://optimedicus.com",
    code: "https://github.com/samandersonweb/mohamed",
    category: "react"
  },
  {
    id: 4,
    title: "Darsan Pharmacy",
    description: "OptiMedicus simplifies medication management through evidence-based MTM services, helping patients and providers prevent medication-related harm.",
    results: "Under construction the responsive part",
    tags: ["React", "Tailwind"],
    image: "/darsan.png",
    link: "https://darsanrx.com",
    code: "https://github.com/samandersonweb/darsanrx",
    category: "website"
  },
];
