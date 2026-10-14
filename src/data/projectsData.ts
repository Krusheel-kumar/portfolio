export interface ProjectItem {
  slug: string;
  name: string;
  clientOrBrand: string;
  industry: string;
  category: "restaurant" | "ecommerce" | "automation" | "custom" | "ai";
  categoryLabel: string;
  shortDesc: string;
  overview: string;
  businessContext: string;
  implementedFeatures: string[];
  inDevelopmentFeatures?: string[];
  techStack: string[];
  productionStatus: string;
  image: string;
  screenshots: string[];
  liveUrl?: string;
  relatedServiceSlug: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    slug: "pop-o-bob",
    name: "Pop O’ Bob — Restaurant Digital Ecosystem",
    clientOrBrand: "Pop O' Bob",
    industry: "Restaurant & Food Service",
    category: "restaurant",
    categoryLabel: "Restaurant Technology",
    shortDesc: "End-to-end digital restaurant operations engine: contactless QR ordering, live billing POS, kitchen ticket routing (KOT), and automated WhatsApp customer receipts.",
    overview: "Pop O' Bob is an active food and beverage brand seeking to minimize dependency on high-commission food aggregators, speed up table turns during peak hours, and streamline order routing from guest tables directly into the kitchen.",
    businessContext: "Traditional paper ordering created bottlenecks during busy rush periods, delayed kitchen preparation, and gave the business zero direct visibility into their patron contact base.",
    implementedFeatures: [
      "Custom brand website with digital menu and location information",
      "Table-specific QR code scanning for contactless digital menu browsing",
      "Dine-in table order placement directly from mobile browsers",
      "Cashier billing POS dashboard with floor table occupancy tracking",
      "Kitchen Order Ticket (KOT) generation for kitchen staff",
      "UPI & card payment integration via Razorpay",
      "Automated WhatsApp transactional receipts sent to guest phone numbers"
    ],
    inDevelopmentFeatures: [
      "Multi-outlet central inventory synchronization across future branches",
      "Automated loyalty point redemptions on return visits"
    ],
    techStack: ["React 18", "TypeScript", "Node.js", "PostgreSQL", "Razorpay UPI", "WhatsApp Cloud API", "Tailwind CSS"],
    productionStatus: "Production-ready core system with active table ordering & POS billing",
    image: "/images/project_1.jpg",
    screenshots: [
      "/images/project_1.jpg",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
    ],
    relatedServiceSlug: "restaurant-pos"
  },
  {
    slug: "house-of-sanvya",
    name: "House of Sanvya — E-commerce Storefront",
    clientOrBrand: "House of Sanvya",
    industry: "Retail & Apparel",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    shortDesc: "Sub-second headless e-commerce storefront engineered for mobile-first catalog browsing, product presentation, and frictionless checkout.",
    overview: "House of Sanvya is a modern apparel and lifestyle retail storefront focused on delivering a clean, luxury shopping experience with instant page transitions and high mobile responsiveness.",
    businessContext: "Off-the-shelf monolithic store themes were slowing down mobile browsing on 4G networks, causing high bounce rates among social media visitors. The requirement was a bespoke, lightweight React storefront.",
    implementedFeatures: [
      "Headless React storefront with sub-second page transitions",
      "Mobile-optimized product catalog with high-resolution image zoom",
      "Dynamic SKU selection for sizing, colors, and inventory counts",
      "Frictionless slide-out cart with clear price summaries",
      "1-Click checkout integration supporting UPI and cards",
      "Automated order confirmation screen with tracking links",
      "Responsive navigation drawer and search interface"
    ],
    inDevelopmentFeatures: [
      "Real-time courier API shipping rate calculator integration",
      "Personalized recommended products algorithm based on cart contents"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Razorpay Payments", "Vite", "Edge CDN"],
    productionStatus: "Deployed storefront with responsive mobile catalog & checkout flow",
    image: "/images/project_2.jpg",
    screenshots: [
      "/images/project_2.jpg",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
    ],
    relatedServiceSlug: "ecommerce"
  },
  {
    slug: "log-analytics-platform",
    name: "Enterprise Log Analytics & Security Engine",
    clientOrBrand: "Internal / Enterprise",
    industry: "Cybersecurity & Cloud Systems",
    category: "custom",
    categoryLabel: "Custom Software",
    shortDesc: "High-throughput log ingestion, anomaly detection, and operational health monitoring dashboard built with Java Spring Boot and React.",
    overview: "An enterprise-grade operational monitoring system designed to aggregate distributed server logs, detect anomalous request spikes, and present security insights through an intuitive web console.",
    businessContext: "Managing application health across multiple distributed services required a centralized, low-latency log aggregator capable of indexing thousands of events without crashing or lagging the browser.",
    implementedFeatures: [
      "Real-time log ingestion pipeline supporting JSON and syslog streams",
      "Interactive time-series charting of error rates and traffic volume",
      "Keyword and regex search with sub-second query execution",
      "Role-based access control (RBAC) with audit trail logging",
      "Configurable email and webhook alerting rules",
      "Exportable compliance reports in CSV and PDF formats"
    ],
    techStack: ["Java 17", "Spring Boot", "React", "TypeScript", "PostgreSQL", "Tailwind CSS", "Docker"],
    productionStatus: "Architected and operational platform with real-time analytics streaming",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
    ],
    relatedServiceSlug: "custom-software"
  },
  {
    slug: "cloud-cost-dashboard",
    name: "Cloud Cost Optimization & Infrastructure Hub",
    clientOrBrand: "Cloud Operations",
    industry: "DevOps & Cloud Infrastructure",
    category: "automation",
    categoryLabel: "Business Automation",
    shortDesc: "Centralized cloud spending visualizer providing resource utilization audits, idle asset detection, and budget forecasting.",
    overview: "A specialized financial operations (FinOps) dashboard engineered to ingest cloud billing metrics, highlight unused compute resources, and forecast monthly cloud hosting costs.",
    businessContext: "Businesses operating across multiple cloud accounts frequently overspend due to unattached storage volumes, over-provisioned instances, and lack of clear departmental cost visibility.",
    implementedFeatures: [
      "Multi-account spending aggregation into one consolidated view",
      "Visual cost breakdown categorized by service, region, and team tag",
      "Automated detection of idle or under-utilized cloud instances",
      "Historical spend projection and monthly budget threshold alerts",
      "Exportable financial summaries for leadership review"
    ],
    techStack: ["React 18", "TypeScript", "Tailwind CSS", "REST APIs", "Vite", "Chart.js"],
    productionStatus: "Operational dashboard with live chart visualizers and reporting engines",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
    ],
    relatedServiceSlug: "custom-software"
  }
];
