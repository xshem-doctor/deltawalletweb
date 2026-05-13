export const headerNavigationItems = [
  { labelKey: "product", href: "/product" },
  { labelKey: "services", href: "/services" },
  { labelKey: "security", href: "/security" },
  { labelKey: "about", href: "/about" },
  { labelKey: "faq", href: "/faq" },
  { labelKey: "contact", href: "/contact" },
] as const;

export const footerNavigation = {
  product: [
    { labelKey: "wallet", href: "/product" },
    { labelKey: "services", href: "/services" },
    { labelKey: "security", href: "/security" },
    { labelKey: "download", href: "download" },
  ],
  company: [
    { labelKey: "about", href: "/about" },
    { labelKey: "contact", href: "/contact" },
    { labelKey: "faq", href: "/faq" },
  ],
  legal: [
    { labelKey: "terms", href: "/terms" },
    { labelKey: "privacy", href: "/privacy" },
    { labelKey: "risk", href: "/risk" },
  ],
} as const;
