export interface FeatureDetail {
  number: string;
  name: string;
  tagline: string;
  description: string;
}

export interface Product {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  category: string;
  description: string;
  features: string[];
  featureDetails: FeatureDetail[];
  image: string;
}

export const products: Product[] = [
  {
    id: "tailoring",
    number: "01",
    name: "Tailoring Software",
    subtitle: "Smarter Operations for Modern Tailoring Businesses",
    category: "Tailoring • Workflow • Customer Experience",
    description: "A practical software solution designed specifically for tailoring and bespoke garment operations — unifying client measurement tracking, order workflow stages, fitting schedules, and delivery management.",
    features: [
      "CUSTOMERS",
      "ORDERS",
      "MEASUREMENTS",
      "WORKFLOW",
      "DELIVERY",
      "ANALYTICS"
    ],
    featureDetails: [
      {
        number: "01",
        name: "CUSTOMERS",
        tagline: "Customer & Client Profiles",
        description: "Centralized client record management with style preferences, order history, and contact details."
      },
      {
        number: "02",
        name: "ORDERS",
        tagline: "Custom Order Management",
        description: "End-to-end garment order entry, deadline scheduling, and itemized fitting tracking."
      },
      {
        number: "03",
        name: "MEASUREMENTS",
        tagline: "Measurement Management",
        description: "Structured measurement profiles for custom garments, alterations, and repeat orders."
      },
      {
        number: "04",
        name: "WORKFLOW",
        tagline: "Tailoring Workflow",
        description: "Stage-by-stage order routing from cutting and stitching to trial fittings and finishing."
      },
      {
        number: "05",
        name: "DELIVERY",
        tagline: "Delivery & Notifications",
        description: "Order completion tracking, ready-for-pickup notifications, and dispatch management."
      },
      {
        number: "06",
        name: "ANALYTICS",
        tagline: "Reporting & Efficiency",
        description: "Operational throughput metrics, order status reports, and business performance tracking."
      }
    ],
    image: "/images/products/tailoring-software-main.webp"
  },
  {
    id: "transport",
    number: "02",
    name: "Transport Software",
    subtitle: "Streamlining Transport & Logistics Operations",
    category: "Transport • Logistics • Operations",
    description: "Designed to simplify fleet operations and logistics coordination — unifying vehicle management, driver tracking, trip scheduling, route records, and operational reporting.",
    features: [
      "VEHICLES",
      "DRIVERS",
      "TRIPS",
      "ROUTES",
      "OPERATIONS",
      "REPORTS"
    ],
    featureDetails: [
      {
        number: "01",
        name: "VEHICLES",
        tagline: "Fleet & Vehicle Management",
        description: "Comprehensive vehicle logs, maintenance tracking, and operational status monitoring."
      },
      {
        number: "02",
        name: "DRIVERS",
        tagline: "Driver & Workforce Management",
        description: "Driver records, license compliance tracking, and shift assignment logs."
      },
      {
        number: "03",
        name: "TRIPS",
        tagline: "Trip & Dispatch Management",
        description: "Trip creation, cargo manifests, start-to-finish trip logging, and schedule tracking."
      },
      {
        number: "04",
        name: "ROUTES",
        tagline: "Route & Operation Management",
        description: "Standardized route logging, location tracking, and transport corridor records."
      },
      {
        number: "05",
        name: "OPERATIONS",
        tagline: "Logistics Coordination",
        description: "Day-to-day operational log management and organized transport workflows."
      },
      {
        number: "06",
        name: "REPORTS",
        tagline: "Business Reporting",
        description: "Operational expense summaries, trip reports, and fleet utilization analytics."
      }
    ],
    image: "/images/products/transport-placeholder.jpg"
  },
  {
    id: "payroll",
    number: "03",
    name: "Payroll Software",
    subtitle: "Simplifying Payroll & Workforce Management",
    category: "Payroll • Employees • Operations",
    description: "A streamlined payroll management solution that simplifies employee record keeping, salary calculation structures, disbursement tracking, and workforce reporting.",
    features: [
      "EMPLOYEES",
      "SALARY",
      "PAYROLL",
      "RECORDS",
      "REPORTS"
    ],
    featureDetails: [
      {
        number: "01",
        name: "EMPLOYEES",
        tagline: "Employee Records & Hub",
        description: "Centralized employee profiles, department allocation, and contact information."
      },
      {
        number: "02",
        name: "SALARY",
        tagline: "Salary Management",
        description: "Structured pay scale definitions, compensation records, and allowance allocations."
      },
      {
        number: "03",
        name: "PAYROLL",
        tagline: "Payroll Calculations",
        description: "Accurate payroll processing, payment run generation, and disbursement logs."
      },
      {
        number: "04",
        name: "RECORDS",
        tagline: "Payroll Organization",
        description: "Historical pay slips, salary registers, and workforce documentation archives."
      },
      {
        number: "05",
        name: "REPORTS",
        tagline: "Workforce Reporting",
        description: "Monthly payroll summaries, department cost distribution, and workforce analytics."
      }
    ],
    image: "/images/products/payroll-placeholder.jpg"
  },
  {
    id: "billing",
    number: "04",
    name: "Billing Software",
    subtitle: "Making Business Billing Simpler",
    category: "Billing • Invoicing • Transactions",
    description: "A simple, effective business billing solution — organizing customer accounts, itemized product pricing, quick invoice creation, payment tracking, and transaction records.",
    features: [
      "CUSTOMERS",
      "PRODUCTS",
      "INVOICES",
      "PAYMENTS",
      "TRANSACTIONS",
      "REPORTS"
    ],
    featureDetails: [
      {
        number: "01",
        name: "CUSTOMERS",
        tagline: "Customer Billing Accounts",
        description: "Directory of client billing records, past purchases, and contact references."
      },
      {
        number: "02",
        name: "PRODUCTS",
        tagline: "Product & Pricing Catalog",
        description: "Itemized product directory with standardized prices, codes, and tax rates."
      },
      {
        number: "03",
        name: "INVOICES",
        tagline: "Invoice Management",
        description: "Rapid invoice creation, print-ready bill formatting, and invoice tracking."
      },
      {
        number: "04",
        name: "PAYMENTS",
        tagline: "Payment Records",
        description: "Payment status tracking, partial/full payment logs, and receipt history."
      },
      {
        number: "05",
        name: "TRANSACTIONS",
        tagline: "Transaction Records",
        description: "Chronological transaction logging and daily sales ledger management."
      },
      {
        number: "06",
        name: "REPORTS",
        tagline: "Business Reporting",
        description: "Billing summaries, revenue statements, and transaction performance analysis."
      }
    ],
    image: "/images/products/billing-placeholder.jpg"
  },
  {
    id: "business-management",
    number: "05",
    name: "Business Management Software",
    subtitle: "A More Organized Way to Manage Business Operations",
    category: "Management • Workflow • Operations",
    description: "An integrated operational solution designed to track and manage end-to-end business activities — seamlessly linking incoming inquiries, quotation management, client follow-ups, customer profiles, product catalogs, and inventory visibility.",
    features: [
      "INQUIRIES",
      "QUOTATIONS",
      "FOLLOW-UPS",
      "CUSTOMERS",
      "PRODUCTS",
      "INVENTORY"
    ],
    featureDetails: [
      {
        number: "01",
        name: "INQUIRIES",
        tagline: "Inquiry Management",
        description: "Logging incoming customer requests and tracking potential business opportunities."
      },
      {
        number: "02",
        name: "QUOTATIONS",
        tagline: "Quotation & Proposals",
        description: "Creating professional price estimates, proposals, and quotation workflows."
      },
      {
        number: "03",
        name: "FOLLOW-UPS",
        tagline: "Follow-up Management",
        description: "Tracking client conversations, status updates, and next action schedules."
      },
      {
        number: "04",
        name: "CUSTOMERS",
        tagline: "Centralized Customer Hub",
        description: "Unified client profile database with complete interaction history."
      },
      {
        number: "05",
        name: "PRODUCTS",
        tagline: "Product Catalog",
        description: "Central master database for product lines, specifications, and offerings."
      },
      {
        number: "06",
        name: "INVENTORY",
        tagline: "Inventory & Stock Visibility",
        description: "Real-time stock level monitoring, item tracking, and inventory movement."
      }
    ],
    image: "/images/products/business-management-placeholder.jpg"
  }
];

