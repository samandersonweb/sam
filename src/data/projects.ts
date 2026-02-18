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
    title: "Enterprise E-Commerce",
    description: "Architected a high-traffic shopping platform specializing in sub-second response times.",
    results: "+45% Conversion rate increase via performance optimization.",
    tags: ["Next.js", "Redis", "PostgreSQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
    link: "#",
    code: "#",
    category: "ecommerce"
  },
  {
    id: 2,
    title: "AI Analytics Engine",
    description: "Real-time data processing dashboard for complex visual analytics across multi-cloud environments.",
    results: "Reduced data latency by 60% using advanced caching strategies.",
    tags: ["Typescript", "D3.js", "Go", "AWS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    link: "#",
    code: "#",
    category: "react"
  },
  {
    id: 3,
    title: "Cloud Infrastructure Tool",
    description: "A developer-first platform for automating multi-region deployments and state management.",
    results: "Empowered 200+ teams to deploy 5x faster with safety guards.",
    tags: ["React", "Kubernetes", "gRPC", "Terraform"],
    image: "https://images.unsplash.com/photo-1454165833767-027eeef1551b?q=80&w=800&auto=format&fit=crop",
    link: "#",
    code: "#",
    category: "website"
  },
  {
    id: 4,
    title: "Dev Perspective Blog",
    description: "A high-performance blog engine with markdown support and edge-caching capabilities.",
    results: "Achieved 100/100 Lighthouse performance score.",
    tags: ["Next.js", "Contentlayer", "Tailwind"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop",
    link: "#",
    code: "#",
    category: "blogs"
  },
];
