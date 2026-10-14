export interface Deliverable {
  title: string;
  desc: string;
  badge?: string;
}

export interface ServiceFeature {
  id: string;
  name: string;
  tagline: string;
  description: string;
  bullets: string[];
  image: string;
}

export interface Technology {
  name: string;
  role: string;
  badge: string;
}

export interface ServiceItem {
  slug: string;
  name: string;
  shortDesc: string;
  businessProblem: string;
  headline: string;
  subtitle: string;
  iconName: "Globe" | "ShoppingCart" | "Store" | "Cpu" | "Bot" | "Layers";
  heroImage: string;
  startingPrice: string;
  priceNote: string;
  deliverables: Deliverable[];
  features: ServiceFeature[];
  technologies: Technology[];
  costFactors: string[];
  relatedProjectSlugs: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    slug: "websites",
    name: "Websites & Web Applications",
    shortDesc: "Lightning-fast, conversion-engineered corporate websites and bespoke web applications built from scratch.",
    businessProblem: "Most business websites are built on heavy, bloated templates that load slowly, rank poorly on Google, and fail to turn visitors into paying inquiries.",
    headline: "Fast, Custom Web Applications Built for Real Conversions.",
    subtitle: "We write clean, bespoke code that loads in under a second, outranks competitors, and establishes immediate credibility.",
    iconName: "Globe",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    startingPrice: "₹25,000",
    priceNote: "One-time build · Custom design & code",
    deliverables: [
      { title: "Custom UI/UX in Figma", desc: "Interactive mobile and desktop prototypes designed specifically for your brand before code is written." },
      { title: "React & TypeScript Frontend", desc: "Sub-second page speeds with zero template bloat, built for durability and fast user interaction." },
      { title: "SEO Architecture", desc: "Schema markup, Open Graph tags, fast server response times, and semantic HTML for search visibility." },
      { title: "Lead Generation Forms", desc: "Direct integration with WhatsApp, email notifications, and optional CRM auto-sync." },
      { title: "Content Management Capability", desc: "Clean markdown or lightweight admin panels to update text, blogs, and images easily." },
      { title: "Cloud Deployment & SSL", desc: "Global edge CDN hosting setup with automated HTTPS encryption and continuous deployment." }
    ],
    features: [
      {
        id: "speed",
        name: "Sub-Second Speed",
        tagline: "Core Web Vitals Optimized",
        description: "Zero heavy plugins or drag-and-drop code generators. Every asset is minified and loaded via edge networks for instant response.",
        bullets: ["90+ Google PageSpeed score", "Zero unnecessary third-party scripts", "Optimized mobile touch targets", "Edge CDN cached delivery"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
      },
      {
        id: "design",
        name: "Bespoke Design",
        tagline: "Tailored to Your Industry",
        description: "Your business has a unique value proposition. We craft custom layouts that address your customers' exact hesitations and drive action.",
        bullets: ["Tailored typography & color scheme", "High-contrast reading hierarchy", "Responsive across all phone sizes", "Clear call-to-action paths"],
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80"
      },
      {
        id: "conversion",
        name: "Lead Capture & WhatsApp",
        tagline: "Direct Inquiries Without Friction",
        description: "Turn casual visitors into hot leads with click-to-WhatsApp routing, interactive enquiry triggers, and instant notification flows.",
        bullets: ["One-tap WhatsApp enquiry buttons", "Form validations with spam protection", "Real-time email alert dispatch", "Analytics tracking on conversions"],
        image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    technologies: [
      { name: "React 18 & TypeScript", role: "Frontend UI Layer", badge: "Core" },
      { name: "Tailwind CSS v4", role: "Utility Design Engine", badge: "Styling" },
      { name: "Vite / Next.js", role: "Bundling & Optimization", badge: "Build" },
      { name: "Cloudflare / Vercel Edge", role: "Global Content Delivery", badge: "Hosting" }
    ],
    costFactors: [
      "Total number of custom pages and layouts",
      "Interactive widgets (calculators, quote tools)",
      "Multi-language support requirements",
      "Content creation vs client-supplied copy & images"
    ],
    relatedProjectSlugs: ["house-of-sanvya", "pop-o-bob"]
  },
  {
    slug: "ecommerce",
    name: "E-commerce Stores",
    shortDesc: "High-conversion storefronts engineered for fast browsing, mobile checkout, and automated payment reconciliation.",
    businessProblem: "Generic e-commerce store templates suffer from high cart abandonment, slow checkout steps on mobile devices, and clunky payment gateway failures.",
    headline: "Fast E-Commerce Stores Engineered to Maximize Sales.",
    subtitle: "Seamless product catalogs, frictionless 1-click UPI checkout, and automated order confirmations that keep shoppers buying.",
    iconName: "ShoppingCart",
    heroImage: "/images/project_2.jpg",
    startingPrice: "₹45,000",
    priceNote: "One-time build · Custom store & payment setup",
    deliverables: [
      { title: "Mobile-First Storefront", desc: "Product discovery engineered specifically for one-thumb mobile browsing and instant cart additions." },
      { title: "Indian Payment Gateway", desc: "Razorpay / Cashfree / Stripe integration supporting UPI, credit cards, debit cards, and net banking." },
      { title: "Cart & 1-Click Checkout", desc: "Frictionless checkout flow designed to minimize drop-offs and prevent abandoned carts." },
      { title: "Inventory & Catalog Admin", desc: "Intuitive portal to manage variants, stock levels, pricing, discount coupons, and customer orders." },
      { title: "WhatsApp Order Receipts", desc: "Automated instant confirmation message sent to customers with their invoice and order summary." },
      { title: "Analytics & Tracking", desc: "Meta Pixel, Google Analytics 4, and conversion API tracking for ad performance." }
    ],
    features: [
      {
        id: "checkout",
        name: "1-Click UPI & Card Checkout",
        tagline: "Frictionless Payment Collection",
        description: "Allow Indian shoppers to pay seamlessly using GPay, PhonePe, Paytm, or cards with automatic verification and instant webhooks.",
        bullets: ["Deep UPI intent linking on mobile", "Automatic webhook payment status sync", "Zero drop-off checkout form", "Instant order invoice generation"],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
      },
      {
        id: "catalog",
        name: "Fast Product Discovery",
        tagline: "Search, Filter & Variant Selection",
        description: "Customers find what they want instantly with real-time filters by category, price, size, and in-stock status.",
        bullets: ["Multi-image zoom & galleries", "Dynamic SKU and variant selection", "Low-stock indicator badges", "Optimized WebP product assets"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
      },
      {
        id: "orders",
        name: "Order Management Dashboard",
        tagline: "Fulfillment Without Spreadsheets",
        description: "Track unfulfilled orders, generate packing slips, update tracking numbers, and view daily sales statistics from one screen.",
        bullets: ["Real-time order notifications", "One-click order status update", "Customer order history", "CSV export for accountant"],
        image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c1590f?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    technologies: [
      { name: "React & TypeScript", role: "Storefront UI Layer", badge: "Frontend" },
      { name: "Node.js / PostgreSQL", role: "Order & Inventory API", badge: "Backend" },
      { name: "Razorpay / Cashfree", role: "UPI & Card Payments", badge: "Payments" },
      { name: "WhatsApp Cloud API", role: "Automated Receipts", badge: "Automation" }
    ],
    costFactors: [
      "Total number of products and variant complexity",
      "Shipping aggregator integrations (Shiprocket, Delhivery)",
      "Custom ERP or legacy accounting system sync",
      "Loyalty points or tiered membership pricing"
    ],
    relatedProjectSlugs: ["house-of-sanvya"]
  },
  {
    slug: "restaurant-pos",
    name: "Restaurant POS & QR Ordering",
    shortDesc: "Complete digital ecosystem: contactless QR table menus, billing POS, kitchen tickets (KOT), and zero commission fees.",
    businessProblem: "Restaurants lose 25% to 30% of their revenue on third-party food delivery aggregators and face table delays during peak rush hours.",
    headline: "Restaurant POS & QR Ordering — Zero Commissions.",
    subtitle: "Manage dine-in orders, table billing, kitchen order tickets, and customer loyalty through one connected system.",
    iconName: "Store",
    heroImage: "/images/project_1.jpg",
    startingPrice: "₹35,000",
    priceNote: "One-time system setup · Keep 100% of your earnings",
    deliverables: [
      { title: "Direct Restaurant Website", desc: "Branded online presence with digital menu, location map, hours, and direct booking." },
      { title: "QR Code Table Ordering", desc: "Dine-in guests scan QR codes on their table, view photos of items, and order directly." },
      { title: "Kitchen Order Tickets (KOT)", desc: "Automated routing of orders directly to the kitchen display or thermal printer instantly." },
      { title: "Billing & Cashier POS", desc: "Split bills, apply discounts, collect UPI/cash payments, and print GST tax invoices." },
      { title: "WhatsApp Order Receipts", desc: "Customers receive instant digital receipts on WhatsApp with optional feedback triggers." },
      { title: "Admin Analytics & Inventory", desc: "Live table occupancy, daily revenue breakdowns, fast-moving items, and raw material tracking." }
    ],
    features: [
      {
        id: "qr",
        name: "QR Code Table Ordering",
        tagline: "Faster Table Turns & Higher Spend",
        description: "Customers scan a unique QR code on their table to browse visually appealing digital menus with item descriptions and allergy tags.",
        bullets: ["No mobile app download needed", "Instant item additions to table tab", "Direct online UPI or cash-at-counter", "Eliminates physical menu printing costs"],
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
      },
      {
        id: "pos",
        name: "Central Command POS",
        tagline: "Real-Time Billing & Floor Management",
        description: "Cashiers manage floor tables, apply promo codes, merge tabs, and settle bills in seconds using an intuitive tablet-friendly UI.",
        bullets: ["Works online with offline resilience", "Table floor plan visualizer", "Thermal printer ESC/POS integration", "Multi-waiter permission controls"],
        image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=80"
      },
      {
        id: "kot",
        name: "Kitchen Routing (KOT)",
        tagline: "Zero Order Miscommunications",
        description: "Every item placed by a guest or waiter immediately lands on the kitchen display station with modifiers, timestamps, and table numbers.",
        bullets: ["Color-coded preparation timers", "Audio alerts for incoming orders", "Mark item 86 / Out of Stock instantly", "Prevents missed kitchen tickets"],
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    technologies: [
      { name: "React & TypeScript", role: "POS & Guest Ordering UI", badge: "Frontend" },
      { name: "Node.js & WebSockets", role: "Real-time Order Sync", badge: "Real-time" },
      { name: "PostgreSQL", role: "Relational Menu & Billing DB", badge: "Database" },
      { name: "Razorpay UPI", role: "Table-side Digital Payments", badge: "Payments" }
    ],
    costFactors: [
      "Number of dining tables and kitchen stations",
      "Hardware requirements (thermal printers, tablets, barcode scanners)",
      "Multi-outlet or chain franchise inventory sync",
      "Custom loyalty points and promotional engine logic"
    ],
    relatedProjectSlugs: ["pop-o-bob"]
  },
  {
    slug: "custom-software",
    name: "Custom Business Software",
    shortDesc: "Bespoke operations dashboards, internal tools, and ERP portals designed for your exact workflow logic.",
    businessProblem: "Off-the-shelf software forces businesses to change how they work, charges high monthly per-user fees, and leaves data trapped across incompatible tools.",
    headline: "Software Built Around Your Operations — Not Vice Versa.",
    subtitle: "Custom admin panels, inventory trackers, and team portals that eliminate error-prone manual spreadsheets.",
    iconName: "Cpu",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    startingPrice: "₹65,000",
    priceNote: "One-time custom engineering · Full source code ownership",
    deliverables: [
      { title: "Custom Admin Panel", desc: "Centralized control dashboard tailored to your operational KPIs, finances, and team activities." },
      { title: "Role-Based Access Control", desc: "Secure permissions for managers, staff, accountants, and external partners." },
      { title: "Workflow Automation", desc: "Automate repetitive data entry, invoice generation, status transitions, and PDF report creation." },
      { title: "Secure Database Architecture", desc: "PostgreSQL / relational schema built with data validation, automated backups, and encryption." },
      { title: "Third-Party API Integrations", desc: "Sync data with existing accounting tools, payment gateways, messaging systems, and CRMs." },
      { title: "Documentation & Training", desc: "Clear user manuals, technical handover, and post-launch maintenance SLA." }
    ],
    features: [
      {
        id: "dashboard",
        name: "Centralized Operations Hub",
        tagline: "Live Business Pulse at a Glance",
        description: "Replace messy spreadsheets with real-time graphs, revenue metrics, task queues, and team productivity logs.",
        bullets: ["Real-time data feeds without refresh", "Custom date-range financial filters", "Export to Excel, CSV, and formatted PDF", "Audit logs of every system change"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
      },
      {
        id: "permissions",
        name: "Enterprise Role Management",
        tagline: "Strict Data Protection by Role",
        description: "Define exactly what each employee can see, edit, or delete, preventing accidental data loss or unauthorized access.",
        bullets: ["Granular field-level permissions", "Multi-factor authentication (MFA)", "Secure session revocation", "Compliant activity logs"],
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    technologies: [
      { name: "React & TypeScript", role: "Interactive Web Portal", badge: "Frontend" },
      { name: "Java Spring Boot / Node.js", role: "Enterprise API Layer", badge: "Backend" },
      { name: "PostgreSQL", role: "High-integrity Relational DB", badge: "Database" },
      { name: "Docker & AWS", role: "Containerized Cloud Deploy", badge: "DevOps" }
    ],
    costFactors: [
      "Total number of operational workflows to digitize",
      "Volume of legacy data to migrate into the new database",
      "Custom integration complexity with legacy software",
      "Ongoing SLA requirements and user training sessions"
    ],
    relatedProjectSlugs: ["log-analytics-platform", "cloud-cost-dashboard"]
  },
  {
    slug: "ai-automation",
    name: "AI & WhatsApp Automation",
    shortDesc: "Intelligent WhatsApp business flows, 24/7 customer support bots, and automated customer re-engagement.",
    businessProblem: "Businesses miss customer inquiries after hours, delay quoting, and spend dozens of manual hours answering the same repetitive questions every day.",
    headline: "Automate Sales and Support on WhatsApp 24/7.",
    subtitle: "Custom AI assistants and official WhatsApp Business API flows that capture leads, answer questions, and notify customers automatically.",
    iconName: "Bot",
    heroImage: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=1200&q=80",
    startingPrice: "₹25,000",
    priceNote: "One-time setup · Official Meta Business API",
    deliverables: [
      { title: "Official WhatsApp Business API Setup", desc: "Verified business profile, green tick guidance, and Meta template message approvals." },
      { title: "24/7 AI Knowledge Assistant", desc: "An intelligent bot trained on your company FAQs, product catalog, pricing, and policies." },
      { title: "Automated Lead Qualification", desc: "Collect customer name, requirements, and budget on WhatsApp before routing to your team." },
      { title: "Transactional Alert Triggers", desc: "Automated WhatsApp alerts for order receipts, appointment reminders, and status changes." },
      { title: "Live Agent Handover", desc: "Seamless transition from automated bot to a human agent whenever a high-value customer requests it." }
    ],
    features: [
      {
        id: "bot",
        name: "Context-Aware AI Assistant",
        tagline: "Instant Answers Across Any Hour",
        description: "Trained on your business documents so it answers queries naturally, accurately, and politely without hallucinating.",
        bullets: ["Understands Hinglish and local phrasing", "Answers pricing and service details", "Qualifies inbound inquiries", "Zero wait times for customers"],
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80"
      },
      {
        id: "flows",
        name: "Interactive WhatsApp Menus",
        tagline: "Quick Buttons & List Messages",
        description: "Let customers select services, book consultations, or track orders with quick-tap WhatsApp buttons instead of typing long sentences.",
        bullets: ["One-tap interactive button replies", "Rich media catalog messages", "Automated appointment booking", "CRM auto-synchronization"],
        image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    technologies: [
      { name: "WhatsApp Cloud API", role: "Official Meta Infrastructure", badge: "Messaging" },
      { name: "OpenAI / Claude API", role: "LLM Reasoning Engine", badge: "AI" },
      { name: "Node.js Webhook Server", role: "Event Processing & Routing", badge: "Backend" },
      { name: "PostgreSQL", role: "Conversation History & Leads", badge: "Database" }
    ],
    costFactors: [
      "Meta WhatsApp conversation fees (paid directly to Meta)",
      "Number of custom automation scenarios required",
      "Integration with CRM or inventory databases",
      "Volume of expected monthly conversations"
    ],
    relatedProjectSlugs: ["pop-o-bob"]
  },
  {
    slug: "saas-mobile-apps",
    name: "SaaS Platforms & Mobile Apps",
    shortDesc: "End-to-end multi-tenant SaaS products and cross-platform iOS & Android mobile applications built for scale.",
    businessProblem: "Building a SaaS or mobile product with unvetted agencies leads to architectural dead ends, high server bills, and apps that crash under user load.",
    headline: "Scalable SaaS Architectures & Cross-Platform Mobile Apps.",
    subtitle: "From database schema to recurring Stripe subscriptions and app store releases — engineered cleanly for modern growth.",
    iconName: "Layers",
    heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    startingPrice: "₹95,000",
    priceNote: "Bespoke platform engineering · Milestone-based delivery",
    deliverables: [
      { title: "Multi-Tenant Architecture", desc: "Data isolation per organization with shared infrastructure for cost-effective scaling." },
      { title: "Subscription Billing Engine", desc: "Stripe / Razorpay Subscriptions integration with automated invoice emails and tier upgrades." },
      { title: "Cross-Platform React Native App", desc: "Single codebase compiling natively to iOS and Android with smooth 60fps animations." },
      { title: "Modern REST / GraphQL API", desc: "Well-documented APIs with automated swagger specs, rate limiting, and token authentication." },
      { title: "CI/CD Deployment Pipeline", desc: "Automated GitHub Actions pipeline running test suites and deploying safely to AWS/Cloud." }
    ],
    features: [
      {
        id: "multi-tenant",
        name: "Enterprise Multi-Tenancy",
        tagline: "Scales from 10 to 100,000 Organizations",
        description: "Each client has their isolated workspace, custom domains, branding options, and isolated data queries.",
        bullets: ["Automated tenant onboarding", "Custom subdomain routing", "Row-level security enforcement", "Usage-based tier gating"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
      },
      {
        id: "billing",
        name: "Recurring Subscription Engine",
        tagline: "Automated MRR Billing & Upgrades",
        description: "Handle monthly and annual plans, discount coupons, prorated plan changes, and failed payment dunning without manual work.",
        bullets: ["Customer self-service billing portal", "Automated GST tax compliance", "Usage-based metered billing", "Dunning & card retry sequences"],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    technologies: [
      { name: "React / React Native", role: "Cross-platform Mobile & Web", badge: "Frontend" },
      { name: "Spring Boot / Node.js", role: "Microservices API Layer", badge: "Backend" },
      { name: "PostgreSQL & Redis", role: "Primary DB & In-Memory Cache", badge: "Data" },
      { name: "AWS / Docker", role: "Elastic Cloud Infrastructure", badge: "Cloud" }
    ],
    costFactors: [
      "Web-only vs Web + iOS + Android deployment",
      "Complexity of subscription tiers and team seat licensing",
      "Third-party external integrations and legacy data imports",
      "Custom analytics, reporting engines, and audit logging"
    ],
    relatedProjectSlugs: ["log-analytics-platform", "cloud-cost-dashboard"]
  }
];
