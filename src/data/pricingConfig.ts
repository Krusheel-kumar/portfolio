export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  popular?: boolean;
  tagline: string;
  idealFor: string;
  includedFeatures: string[];
  optionalAddons: string[];
  timeline: string;
  supportTerms: string;
  ctaText: string;
  ctaLink: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: "₹25,000",
    period: "onwards (one-time)",
    popular: false,
    tagline: "High-performance digital presence built to establish credibility and capture inbound leads.",
    idealFor: "Professional service firms, consulting practices, local brands, and growing businesses needing a custom web presence.",
    includedFeatures: [
      "Custom UI/UX prototype in Figma (no pre-made templates)",
      "High-speed React & TypeScript frontend",
      "Mobile-first responsive design for all screen widths",
      "Direct click-to-WhatsApp and email lead forms",
      "Core SEO architecture, schema tags & fast meta descriptions",
      "Global Edge CDN deployment with free automated SSL certificate",
      "2 Weeks post-launch handover support & defect fixing"
    ],
    optionalAddons: [
      "Lightweight custom admin blog / content management (+₹10,000)",
      "Multi-language translation toggles (+₹8,000)",
      "Custom domain & Google Workspace email configuration (+₹3,000)"
    ],
    timeline: "2 to 3 weeks upon scope and content confirmation",
    supportTerms: "Includes 14 days of dedicated bug-fixing and configuration assistance. Ongoing annual maintenance is optional.",
    ctaText: "Start Starter Project",
    ctaLink: "/contact?service=websites&tier=starter"
  },
  {
    id: "growth",
    name: "Growth Engine",
    price: "₹65,000",
    period: "onwards (one-time)",
    popular: true,
    tagline: "Comprehensive software, e-commerce, or restaurant POS system with payment and automation integrations.",
    idealFor: "Restaurants, direct-to-consumer e-commerce brands, and businesses wanting automated ordering, payments, and WhatsApp workflows.",
    includedFeatures: [
      "Everything included in the Starter tier",
      "Custom backend API (Node.js / Spring Boot) & PostgreSQL database",
      "Indian Payment Gateway integration (Razorpay / Cashfree UPI & Cards)",
      "Interactive product catalog OR QR ordering & billing POS system",
      "Automated transactional WhatsApp receipts & alert messages",
      "Admin command dashboard to manage orders, inventory & customers",
      "Role-based access permissions (manager, cashier, staff)",
      "3 Months priority post-launch technical support"
    ],
    optionalAddons: [
      "Thermal printer hardware integration (ESC/POS) (+₹12,000)",
      "AI-powered FAQ customer support bot (+₹18,000)",
      "Third-party shipping aggregator integration (Shiprocket) (+₹10,000)"
    ],
    timeline: "4 to 6 weeks based on confirmed workflow requirements",
    supportTerms: "Includes 90 days of priority operational support, database maintenance, and performance monitoring.",
    ctaText: "Build My Growth Engine",
    ctaLink: "/contact?service=restaurant-pos&tier=growth"
  },
  {
    id: "enterprise",
    name: "Enterprise / Custom SaaS",
    price: "Custom Quote",
    period: "milestone-based",
    popular: false,
    tagline: "Bespoke SaaS platforms, internal ERPs, and multi-tenant architectures built to your exact specifications.",
    idealFor: "Startups building software products, enterprise departments needing custom portals, and multi-branch operations.",
    includedFeatures: [
      "Dedicated software architect and senior engineering delivery",
      "Multi-tenant architecture with secure data isolation",
      "Stripe / Razorpay recurring subscription billing engine",
      "Microservices or modular monolithic backend in Spring Boot / Node.js",
      "Optional cross-platform mobile app (React Native for iOS & Android)",
      "Automated CI/CD build pipelines and AWS / cloud setup",
      "Comprehensive Swagger API documentation & source code ownership",
      "Dedicated Service Level Agreement (SLA) & 24/7 monitoring option"
    ],
    optionalAddons: [
      "Custom machine learning / LLM private model fine-tuning",
      "Dedicated 24/7 on-call engineering SLA",
      "SOC2 / ISO compliance architectural readiness review"
    ],
    timeline: "Custom roadmap with sprint-by-sprint milestone signoffs",
    supportTerms: "Structured SLA with guaranteed incident response times and continuous feature expansion contracts.",
    ctaText: "Request Enterprise Consultation",
    ctaLink: "/contact?service=custom-software&tier=enterprise"
  }
];

// --- ESTIMATOR CONFIGURATION ---
export interface EstimatorServiceOption {
  id: string;
  name: string;
  basePrice: number;
  features: {
    id: string;
    label: string;
    price: number;
  }[];
}

export const ESTIMATOR_SERVICES: EstimatorServiceOption[] = [
  {
    id: "website",
    name: "Business Website & Web App",
    basePrice: 25000,
    features: [
      { id: "custom-figma", label: "Custom Figma UI/UX Design", price: 8000 },
      { id: "seo-schema", label: "Advanced SEO & Schema Markup", price: 5000 },
      { id: "blog-cms", label: "Content Management / Blog Portal", price: 10000 },
      { id: "multilingual", label: "Multi-Language Support", price: 8000 },
      { id: "lead-calculator", label: "Interactive Quote / Calculator Widget", price: 7000 }
    ]
  },
  {
    id: "ecommerce",
    name: "E-Commerce Storefront",
    basePrice: 45000,
    features: [
      { id: "upi-cards", label: "UPI & Card Payment Gateway (Razorpay)", price: 8000 },
      { id: "inventory-admin", label: "Inventory & Variant Management Portal", price: 12000 },
      { id: "shipping-api", label: "Automated Shipping Integration (Shiprocket)", price: 10000 },
      { id: "discount-engine", label: "Coupon & Promotional Discount Engine", price: 6000 },
      { id: "whatsapp-receipts", label: "Automated WhatsApp Order Alerts", price: 8000 }
    ]
  },
  {
    id: "restaurant-pos",
    name: "Restaurant POS & QR Ordering",
    basePrice: 35000,
    features: [
      { id: "qr-tables", label: "Contactless QR Code Table Ordering", price: 10000 },
      { id: "kot-routing", label: "Kitchen Order Ticket (KOT) Routing", price: 12000 },
      { id: "pos-billing", label: "Centralized Cashier & Billing POS", price: 15000 },
      { id: "whatsapp-digital-bill", label: "WhatsApp Digital Bills to Customers", price: 8000 },
      { id: "multi-outlet", label: "Multi-Outlet Central Synchronization", price: 20000 }
    ]
  },
  {
    id: "custom-software",
    name: "Custom Business Software & Portal",
    basePrice: 65000,
    features: [
      { id: "rbac", label: "Role-Based Access Control (Granular Roles)", price: 12000 },
      { id: "workflow-automations", label: "Custom Approval & Workflow Automation", price: 15000 },
      { id: "pdf-reports", label: "Automated Financial & PDF Report Generation", price: 10000 },
      { id: "api-integrations", label: "Legacy System / Third-party API Integrations", price: 18000 },
      { id: "audit-logs", label: "Strict Audit Trail & Activity Logging", price: 8000 }
    ]
  },
  {
    id: "ai-whatsapp",
    name: "AI Assistant & WhatsApp Automation",
    basePrice: 25000,
    features: [
      { id: "meta-api-setup", label: "Official WhatsApp Cloud API Verification", price: 6000 },
      { id: "ai-knowledge-bot", label: "AI Bot Trained on Company Knowledge", price: 18000 },
      { id: "interactive-buttons", label: "WhatsApp Button Menus & Lead Flows", price: 10000 },
      { id: "agent-handover", label: "Human Agent Live Chat Handover", price: 9000 },
      { id: "crm-sync", label: "CRM Lead Auto-Synchronization", price: 10000 }
    ]
  },
  {
    id: "saas-mobile",
    name: "SaaS Platform or Mobile App",
    basePrice: 95000,
    features: [
      { id: "multi-tenant", label: "Multi-Tenant Workspace Isolation", price: 25000 },
      { id: "stripe-subscriptions", label: "Recurring Subscription Billing & Portal", price: 20000 },
      { id: "react-native-app", label: "Cross-Platform Mobile App (iOS & Android)", price: 45000 },
      { id: "cicd-devops", label: "Automated CI/CD Pipeline & Cloud Cluster", price: 18000 },
      { id: "swagger-api", label: "Developer REST API with Swagger Docs", price: 12000 }
    ]
  }
];

export const COMPLEXITY_MULTIPLIERS = {
  basic: { label: "Basic (Essential Scope)", multiplier: 1.0, desc: "Standard configuration using robust proven architectural patterns." },
  standard: { label: "Standard (Production Scale)", multiplier: 1.25, desc: "Enhanced data validation, deeper custom edge cases, and expanded reporting." },
  advanced: { label: "Advanced (Enterprise Grade)", multiplier: 1.6, desc: "High concurrency, rigorous security audits, custom third-party integrations." }
};

export const INTEGRATION_OPTIONS = [
  { id: "payments", label: "Online Payments (UPI, Cards, Netbanking)", price: 8000 },
  { id: "whatsapp", label: "Official WhatsApp Business API", price: 8000 },
  { id: "ai-bot", label: "AI Reasoning Assistant / Chatbot", price: 15000 },
  { id: "inventory", label: "Real-Time Inventory & Stock Engine", price: 12000 },
  { id: "external-apis", label: "External REST / Accounting APIs", price: 14000 },
  { id: "sms-email", label: "Automated SMS & Transactional Emails", price: 6000 }
];
