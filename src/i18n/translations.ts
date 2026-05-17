export const supportedLocales = ["en", "ar"] as const;
export type Locale = (typeof supportedLocales)[number];

export type TextBlock = {
  title: string;
  body: string;
};

export type InfoItem = {
  title: string;
  body: string;
};

export type FaqItem = {
  category: string;
  question: string;
  answer: string;
};

export const translations = {
  en: {
    common: {
      downloadAndroid: "Download Android app",
      learnSecurity: "Learn about security",
      readMore: "Read more",
      availableNow: "Available now",
      planned: "Planned / coming later",
      contactSupport: "Contact support",
      apkNotice:
        "Install the Android APK only from the official Delta Wallet website and keep your device settings secure.",
    },
    nav: {
      product: "Product",
      services: "Services",
      security: "Security",
      about: "Company",
      faq: "FAQ",
      contact: "Contact",
      download: "Download",
    },
    footer: {
      description:
        "A practical digital wallet platform for USDT payments, supported assets, and digital services.",
      product: "Product",
      company: "Company",
      legal: "Legal",
      support: "Support",
      wallet: "Wallet",
      services: "Services",
      security: "Security",
      download: "Download",
      about: "About",
      contact: "Contact",
      faq: "FAQ",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      risk: "Risk Notice",
      supportEmail: "Support email",
      securityEmail: "Security / report abuse",
      businessEmail: "Business inquiries",
      disclaimer:
        "Delta Wallet is not a bank. Digital asset transactions involve risk and may be irreversible. Some services depend on blockchain networks and third-party providers.",
      rights: "All rights reserved.",
    },
    home: {
      hero: {
        eyebrow: "Practical wallet for digital asset payments",
        title:
          "Delta Wallet is a practical USDT wallet for payments and digital services.",
        subtitle:
          "Receive, manage, swap, send, buy, and use supported digital assets through a simple Android app.",
      },
      trust: [
        "Built for practical payments",
        "Clear transaction history",
        "Digital services access",
        "Security-focused account controls",
      ],
      heroPanelRows: [
        "Transaction history",
        "Supported swaps",
        "Order notifications",
      ],
      heroMeta: [
        "Security-focused controls",
        "USDT · BNB · BTCB on BSC",
        "Cards and digital services",
      ],
      heroChips: [
        {
          title: "$26.98 USDT",
          body: "Visible available balance",
        },
        {
          title: "Send review",
          body: "Confirm address, fee, and amount",
        },
      ],
      screenFeatures: [
        {
          tag: "Wallet",
          title: "Your assets, balance, and quick actions in one screen.",
          body: "Track supported assets on BNB Smart Chain at a glance. Send, receive, swap, and buy are available from a focused wallet home screen.",
          bullets: [
            {
              title: "Clear balances",
              body: "View supported asset amounts and estimated USD values where available.",
            },
            {
              title: "Four core actions",
              body: "Swap, buy, receive, and send stay close to the wallet balance.",
            },
            {
              title: "Notifications",
              body: "Review app activity and transaction updates from the same account.",
            },
          ],
        },
        {
          tag: "Buy",
          title: "Buy USDT through supported provider flows.",
          body: "Create buy orders through available local or external payment options. The app keeps order state, payment notes, and confirmation details visible.",
          bullets: [
            {
              title: "Available options",
              body: "Payment choices are presented only when supported by the configured provider flow.",
            },
            {
              title: "Payment instructions",
              body: "Orders can include notes, expiry, and status checks before USDT is credited.",
            },
            {
              title: "Status visibility",
              body: "Users can review whether an order is pending, confirmed, expired, or failed.",
            },
          ],
        },
        {
          tag: "Swap",
          title: "Swap supported assets with a clear rate and gas estimate.",
          body: "Quote supported pairs such as USDT and BNB, review what you pay and receive, then continue only after the details are clear.",
          bullets: [
            {
              title: "Quick amount controls",
              body: "Use amount shortcuts for faster sizing inside the swap flow.",
            },
            {
              title: "Rate preview",
              body: "See the estimated rate and network cost before continuing.",
            },
            {
              title: "BSC support",
              body: "Swap paths depend on BNB Smart Chain liquidity and provider response.",
            },
          ],
        },
        {
          tag: "Send",
          title: "Confirm every send with a structured review.",
          body: "Recipient, amount, network, fee, and final receive amount are shown before submission so users can check details carefully.",
          bullets: [
            {
              title: "Step-by-step review",
              body: "The flow guides users through recipient, amount, and review screens.",
            },
            {
              title: "Editable destination",
              body: "Destination details can be checked before the final send action.",
            },
            {
              title: "Transaction warning",
              body: "Users are reminded that blockchain transactions may be irreversible.",
            },
          ],
        },
        {
          tag: "Cards and services",
          title: "Use wallet balance with cards and digital services.",
          body: "The app connects wallet balance with provider-backed digital services and card-related flows where available.",
          bullets: [
            {
              title: "Card network choice",
              body: "Card flows can present available networks such as Visa or Mastercard where supported.",
            },
            {
              title: "Service hub",
              body: "Browse supported digital services such as eSIMs, phone refills, and temporary SMS numbers.",
            },
            {
              title: "Provider-backed delivery",
              body: "Availability, pricing, and delivery depend on the selected provider and region.",
            },
          ],
        },
      ],
      productTitle: "A wallet built for everyday use",
      productSubtitle:
        "Delta Wallet focuses on clear balances, direct actions, and account-based crypto usage without unnecessary complexity.",
      productCards: [
        {
          title: "Receive supported assets",
          body: "Each account has a wallet address for supported BNB Smart Chain assets.",
        },
        {
          title: "Send and withdraw",
          body: "Create withdrawal requests for supported assets, with status and transaction details visible in the app.",
        },
        {
          title: "Swap supported pairs",
          body: "The backend supports BSC swaps for supported pairs such as USDT and BNB, subject to liquidity and provider response.",
        },
        {
          title: "Track activity",
          body: "Wallet, deposit, withdrawal, swap, and service records are kept visible through app history screens.",
        },
      ],
      servicesTitle: "Spend balance on useful digital services",
      servicesSubtitle:
        "The app connects wallet balance with provider-backed services where availability allows.",
      serviceCards: [
        {
          title: "eSIM data",
          body: "Browse and order supported eSIM products. Activation details depend on provider fulfillment.",
        },
        {
          title: "Phone refills",
          body: "Top up supported mobile numbers after checking product availability and quote details.",
        },
        {
          title: "Temporary SMS numbers",
          body: "Create temporary SMS number orders for supported products and track code delivery inside the app.",
        },
      ],
      howTitle: "How it works",
      howSubtitle:
        "Verify your account, fund the wallet, and start using supported wallet actions and services.",
      howStepTitles: [
        "Create account",
        "Fund wallet",
        "Use actions",
        "Review history",
      ],
      howSteps: [
        "Create an account and verify your email.",
        "Receive supported assets to your Delta Wallet address or create a supported buy order.",
        "Use wallet actions such as send, swap, or service purchase.",
        "Review status, order details, and history inside the app.",
      ],
      downloadTag: "Download",
      installGuide: "Install guide",
      apkMeta: "Official Android APK",
      securityTitle: "Security without overpromising",
      securitySubtitle:
        "Delta Wallet uses layered controls to reduce account and transaction risk, while users remain responsible for device safety and transaction details.",
      securityCards: [
        {
          title: "Email verification",
          body: "Account setup and sensitive recovery flows use email verification codes.",
        },
        {
          title: "Device checks",
          body: "New-device login challenge flows and trusted-device records are implemented in the backend.",
        },
        {
          title: "Security records",
          body: "Security events can be logged for registration, login, password changes, profile updates, and account closure.",
        },
      ],
      faqTitle: "Questions before installing?",
      faqSubtitle:
        "Read practical answers about the app, transactions, APK installation, and support.",
    },
    product: {
      hero: {
        eyebrow: "Product",
        title: "A clear wallet for supported digital assets",
        subtitle:
          "Delta Wallet is built around a wallet address, asset balances, payments, swaps, buy flows, and transaction history.",
      },
      sections: [
        {
          title: "Wallet overview",
          body: "The app shows portfolio balance, locked balance, supported assets, and activity. Users can open asset details and review market display data where available.",
        },
        {
          title: "Supported asset and network model",
          body: "The backend uses a network/token model. The seeded live network is BNB Smart Chain with BNB, USDT, BTCB, and USDC records. Delta Wallet is designed to support additional assets and networks over time, but the website should not describe other networks as live.",
        },
        {
          title: "Receive funds",
          body: "Users can view and copy their wallet address, share it, and use a QR code. The app warns users to receive only on the selected supported network.",
        },
        {
          title: "Send and withdraw funds",
          body: "The backend supports withdrawal requests for BSC USDT and BNB. Requests can be processed automatically or held for manual review depending on balance, hot-wallet liquidity, and risk checks.",
        },
        {
          title: "Swap supported assets",
          body: "The swap flow supports BSC USDT and BNB quote and execution paths. Swaps depend on liquidity, provider responses, and successful on-chain execution.",
        },
        {
          title: "Buy USDT through supported provider flow",
          body: "The app includes a Sham Cash buy-order flow with payment notes, expiry, status checks, and USDT crediting after a matching payment is confirmed.",
        },
        {
          title: "Transaction history",
          body: "Deposit, withdrawal, wallet, swap, SMS, and service transaction records are modeled so users can review activity instead of relying on hidden state.",
        },
        {
          title: "Account and profile controls",
          body: "Users can manage profile fields, change password, logout other devices, and close an account while financial records remain linked for audit and support.",
        },
      ],
      availability: {
        now: [
          "Android APK installation",
          "Email-verified accounts",
          "BSC wallet address",
          "BSC USDT and BNB withdrawals",
          "BSC USDT and BNB swaps",
          "Sham Cash buy-order flow",
          "Transaction and notification history",
        ],
        later: [
          "Additional assets or networks may be added through the existing network/token model.",
          "Google Play distribution can be added later.",
        ],
      },
    },
    services: {
      hero: {
        eyebrow: "Services",
        title: "Digital services connected to wallet balance",
        subtitle:
          "Delta Wallet supports provider-backed service orders while keeping status, cost, and delivery details visible in the app.",
      },
      sections: [
        {
          title: "Service overview",
          body: "Service orders are linked to a product, provider status, wallet payment, order events, and redemption information when available.",
        },
        {
          title: "Digital products",
          body: "The services system is built for digital products that can be quoted, ordered, paid from wallet balance, refreshed, and tracked by status.",
        },
        {
          title: "eSIMs",
          body: "The public store flow exposes eSIM products. After purchase, activation details may include QR code, activation code, or setup instructions depending on provider fulfillment.",
        },
        {
          title: "Phone top-ups and refills",
          body: "The app includes phone refill browsing, quote, order, refresh, and status screens for supported phone products.",
        },
        {
          title: "Gift cards",
          body: "The backend product model includes a gift-card service type, but the current public store flow is focused on eSIMs and phone refills. Gift-card availability should be treated as planned or provider-dependent.",
        },
        {
          title: "Temporary SMS numbers",
          body: "The SMS service can create temporary number orders for supported products, check for received codes, finish an order, or cancel when available.",
        },
        {
          title: "Local buy options",
          body: "The wallet includes a Sham Cash flow for creating a buy order, checking payment status, and crediting USDT when a matching provider payment is confirmed.",
        },
        {
          title: "Provider availability",
          body: "Availability, pricing, delivery time, and refund eligibility may depend on the selected provider and region.",
        },
        {
          title: "Delivery and refund limitations",
          body: "Some orders may be delayed, cancelled, fail, or require refresh/check actions. Completed blockchain payments and delivered digital services may not be refundable.",
        },
      ],
    },
    security: {
      hero: {
        eyebrow: "Security",
        title: "Layered controls for account and transaction risk",
        subtitle:
          "Delta Wallet uses layered controls to reduce account and transaction risk. It cannot ensure that every loss, mistake, network issue, or provider issue can be prevented.",
      },
      sections: [
        {
          title: "Account verification",
          body: "Registration and account access require email verification. Verification and reset codes expire and include retry/cooldown controls.",
        },
        {
          title: "Device and session checks",
          body: "The backend records device IDs, app version, OS metadata, IP address, language, timezone hints, and trusted-device state. New-device login challenges are implemented.",
        },
        {
          title: "Transaction visibility",
          body: "Wallet activity, deposits, withdrawals, swaps, service orders, and notifications are tracked so users can review status and references.",
        },
        {
          title: "Blockchain transaction safety",
          body: "Blockchain transactions may be irreversible. Users should confirm the network, address, asset, amount, and fee before submitting any transaction.",
        },
      ],
      neverAsk: [
        "Your password by chat or social message.",
        "A verification code outside the app or official email flow.",
        "A payment note that differs from the order shown in the app.",
        "A request to ignore address, asset, or network warnings.",
      ],
      neverAskTitle: "Delta Wallet will never ask for",
      checklist: [
        "Use an email account you control.",
        "Keep your phone lock and app lock enabled.",
        "Review wallet addresses carefully before sending.",
        "Do not share verification or reset codes.",
        "Contact security support if you see activity you do not recognize.",
      ],
      checklistTitle: "User safety checklist",
      report:
        "Report suspicious activity or abuse to security@deltawallet.app with your account email, approximate time, screenshots if available, and a short description.",
    },
    about: {
      hero: {
        eyebrow: "Company",
        title: "Building practical crypto tools for daily use",
        subtitle:
          "Delta Wallet is an early-stage product focused on clear wallet actions, supported digital services, and honest account-based crypto usage.",
      },
      sections: [
        {
          title: "About Delta Wallet",
          body: "Delta Wallet brings wallet balance, payments, swaps, buy flows, and digital services into a single Android app. The product is designed for users who want practical usage rather than a trading-heavy interface.",
        },
        {
          title: "Mission",
          body: "Our mission is to make supported digital assets easier to receive, manage, and use while keeping transaction details understandable.",
        },
        {
          title: "What we build",
          body: "We build wallet, payment, service-order, notification, and account security flows. Some features may change as the platform improves.",
        },
        {
          title: "Who we serve",
          body: "Delta Wallet is for users who need a straightforward Android wallet for supported assets and digital services. Some services depend on third-party providers.",
        },
        {
          title: "Operating principles",
          body: "We aim to communicate clearly, avoid unrealistic promises, show transaction status, and treat blockchain and provider limitations honestly.",
        },
        {
          title: "Current stage",
          body: "Delta Wallet is an early-stage product. Availability, supported services, and app behavior may evolve as the platform improves.",
        },
      ],
    },
    contact: {
      hero: {
        eyebrow: "Contact",
        title: "Talk to the right Delta Wallet channel",
        subtitle:
          "Use the contact path that matches your request so support, security, or business messages can be handled cleanly.",
      },
      cards: [
        {
          title: "Support",
          body: "For account, wallet, order, APK, or general app questions.",
          emailKey: "supportEmail",
        },
        {
          title: "Business inquiries",
          body: "For product, provider, or commercial conversations.",
          emailKey: "businessEmail",
        },
        {
          title: "Security / report abuse",
          body: "For suspicious activity, account abuse, or security reports.",
          emailKey: "securityEmail",
        },
      ],
      checklistTitle: "Before contacting support",
      checklist: [
        "Include your account email, but do not include your password.",
        "Include order ID, transaction hash, or payment note if relevant.",
        "Attach screenshots only if they do not expose sensitive codes.",
        "Describe what happened and when it happened.",
      ],
      response:
        "Response times may vary depending on request volume, provider checks, and blockchain confirmation state.",
      responseTitle: "Response expectation",
    },
    faq: {
      hero: {
        eyebrow: "FAQ",
        title: "Clear answers before you start",
        subtitle:
          "Practical answers about Delta Wallet, account security, wallet transactions, services, APK installation, and support.",
      },
      categories: {
        all: "All",
        general: "General",
        security: "Account and security",
        wallet: "Wallet and transactions",
        buy: "Buying USDT",
        services: "Services",
        apk: "APK installation",
        support: "Support",
      },
      searchPlaceholder: "Search questions...",
      noResults: "No matching questions found.",
      items: [
        {
          category: "general",
          question: "What is Delta Wallet?",
          answer:
            "Delta Wallet is a practical digital wallet platform for supported digital assets, with Android app flows for receiving, managing, sending, buying, swapping, and spending through supported services.",
        },
        {
          category: "general",
          question: "Is Delta Wallet a bank?",
          answer:
            "No. Delta Wallet is not a bank. It is a software platform for wallet and service flows involving digital assets.",
        },
        {
          category: "wallet",
          question: "Which assets does Delta Wallet support?",
          answer:
            "The backend is built on a BNB Smart Chain network/token model with BNB, USDT, BTCB, and USDC records. Public user flows currently emphasize USDT and BNB for withdrawal and swaps.",
        },
        {
          category: "wallet",
          question: "Can I receive USDT?",
          answer:
            "Yes. The app shows a wallet address and QR code for receiving supported assets. Always use the correct supported network before sending funds.",
        },
        {
          category: "wallet",
          question: "Are blockchain transactions reversible?",
          answer:
            "Blockchain transactions may be irreversible. If funds are sent to the wrong address or network, Delta Wallet may not be able to recover them.",
        },
        {
          category: "wallet",
          question: "What happens if I send to the wrong address?",
          answer:
            "You may lose the funds. Always review the address, network, asset, and amount before confirming a transfer.",
        },
        {
          category: "apk",
          question: "Why is Delta Wallet installed as an APK?",
          answer:
            "The current Android release is distributed through a direct APK download. Google Play distribution can be added later.",
        },
        {
          category: "apk",
          question: "Why does Android show an unknown app warning?",
          answer:
            "Android shows this warning when installing apps outside Google Play. Only download the APK from the official Delta Wallet website.",
        },
        {
          category: "apk",
          question: "When will Delta Wallet be available on Google Play?",
          answer:
            "Google Play support is planned for later. Until then, the official website provides the Android APK link.",
        },
        {
          category: "security",
          question: "How does Delta Wallet protect accounts?",
          answer:
            "The backend includes email verification, password reset codes, new-device login challenges, device metadata, session controls, security event logs, and app-lock support in the Android app.",
        },
        {
          category: "services",
          question: "Why can a service order be delayed?",
          answer:
            "Service orders may depend on third-party provider inventory, network payment state, provider processing, region, and product availability.",
        },
        {
          category: "buy",
          question: "Can I buy USDT through Delta Wallet?",
          answer:
            "The app includes a Sham Cash buy-order flow. Users create an order, send the exact payment with the required note, and check status until a matching payment is confirmed or the order expires.",
        },
        {
          category: "support",
          question: "How do I contact support?",
          answer:
            "Email support@deltawallet.app with your account email, order ID or transaction reference if relevant, and a clear description. Never send your password or verification codes.",
        },
      ],
    },
    legal: {
      updated: "Last updated: May 13, 2026",
      terms: {
        title: "Terms of Service",
        intro:
          "These terms explain the basic rules for using Delta Wallet. They are written for clarity and are not a substitute for independent legal advice.",
        sections: [
          { title: "Introduction", body: "Delta Wallet provides software for wallet, account, digital asset, and digital service workflows. By using the app or website, you agree to use the service responsibly." },
          { title: "Eligibility", body: "You must be legally able to use digital asset services in your location and old enough to enter into these terms." },
          { title: "Account registration", body: "You must provide accurate account information, keep your email accessible, complete required verification steps, and protect your login details." },
          { title: "User responsibilities", body: "You are responsible for your device, account credentials, wallet addresses, transaction decisions, and compliance with applicable rules." },
          { title: "Wallet and digital asset services", body: "Delta Wallet is not a bank. Balances and transactions relate to supported digital assets and service records, not bank deposits." },
          { title: "Deposits and withdrawals", body: "Deposits and withdrawals depend on blockchain networks, supported assets, hot-wallet liquidity, risk checks, fees, and confirmations. Users are responsible for entering the correct address and network." },
          { title: "Blockchain transaction risks", body: "Digital asset transactions may be irreversible, delayed, rejected, failed, or affected by network congestion, fees, liquidity, or provider availability." },
          { title: "Service purchases and third-party providers", body: "Service orders may depend on third-party providers. Products may be delayed, cancelled, unavailable, rejected, or fulfilled with provider-specific redemption instructions." },
          { title: "Fees and pricing", body: "Prices, spreads, provider costs, network fees, and service fees may change before or during an order. Review details before confirming." },
          { title: "Refunds and cancellations", body: "Refunds may not be available for completed blockchain transactions or delivered digital services. Some pending or failed orders may be cancelled or refunded depending on status and provider rules." },
          { title: "Prohibited use", body: "You may not use Delta Wallet for fraud, abuse, sanctions evasion, money laundering, illegal services, unauthorized access, platform misuse, or activity that harms users, providers, or infrastructure." },
          { title: "Account suspension or restriction", body: "Delta Wallet may restrict, suspend, or close access where needed to reduce risk, investigate abuse, comply with requirements, or protect the platform." },
          { title: "Security responsibilities", body: "You must keep your phone, email, password, and verification codes secure. Delta Wallet will never ask you to share your password or one-time codes over chat." },
          { title: "Disclaimers", body: "The service is provided as available. Delta Wallet does not promise uninterrupted operation, provider availability, asset prices, exchange rates, or recovery of mistaken transactions." },
          { title: "Limitation of liability", body: "To the maximum extent allowed by applicable law, Delta Wallet is not liable for losses caused by user error, network issues, provider failures, unauthorized access, market volatility, or unsupported transactions." },
          { title: "Changes to the service", body: "Features, supported assets, providers, fees, and availability may change as the product improves." },
          { title: "Changes to these terms", body: "We may update these terms. Continued use after updates means you accept the revised terms." },
          { title: "Contact", body: "For questions, contact support@deltawallet.app." },
        ],
      },
      privacy: {
        title: "Privacy Policy",
        intro:
          "This policy explains what information Delta Wallet may collect and how it may be used to operate the app and services.",
        sections: [
          { title: "Introduction", body: "Delta Wallet collects information needed to create accounts, operate wallet and service workflows, reduce abuse, and communicate with users." },
          { title: "Information we collect", body: "We may collect account details, profile fields, device metadata, IP address, language, timezone and country hints, app version, transaction records, service order data, and support communications." },
          { title: "Account information", body: "Account data may include email, first name, last name, phone number, country, state, verification state, and account status." },
          { title: "Device and security information", body: "The backend can store device ID, device name, OS name/version, app version, IP address, trusted-device state, and security event logs." },
          { title: "Transaction and wallet data", body: "We store wallet addresses, supported asset balances, deposits, withdrawals, swap records, transaction hashes, references, statuses, and related metadata." },
          { title: "Service order data", body: "Service records may include product, provider, order ID, payment amount, phone number where needed for refills, redemption details, provider references, and order status." },
          { title: "How we use information", body: "We use information to operate the app, process wallet and service actions, verify accounts, detect abuse, provide support, improve reliability, and communicate with you." },
          { title: "How we share information", body: "We share information only where needed to operate the service, process orders, comply with applicable requirements, prevent abuse, or communicate with you." },
          { title: "Third-party providers", body: "Some services depend on providers that may need order information to quote, process, deliver, cancel, or refresh a service." },
          { title: "Cookies and analytics", body: "The website is intended to stay simple. If analytics or cookies are added later, they should be disclosed and kept limited to operational needs." },
          { title: "Data retention", body: "We retain records as needed for account operation, transaction history, support, security, abuse prevention, and legal or operational requirements." },
          { title: "Security", body: "We use reasonable technical and organizational controls, but no system can be completely secure. Users must also protect their devices and credentials." },
          { title: "International processing", body: "Information may be processed in systems or provider infrastructure outside your location." },
          { title: "User rights", body: "Depending on your location, you may request access, correction, deletion, or restriction of certain personal information. Some transaction records may need to be retained." },
          { title: "Children's privacy", body: "Delta Wallet is not intended for children." },
          { title: "Changes", body: "We may update this policy as the app and website evolve." },
          { title: "Contact", body: "For privacy questions, contact support@deltawallet.app." },
        ],
      },
    },
    risk: {
      hero: {
        eyebrow: "Risk Notice",
        title: "Understand the risks before using digital assets",
        subtitle:
          "Delta Wallet aims to make supported digital asset usage clearer, but it cannot remove blockchain, provider, market, or device risks.",
      },
      sections: [
        { title: "Digital asset risk", body: "Digital assets can be complex and may lose value. Only use amounts you understand and can afford to risk." },
        { title: "Irreversible transactions", body: "Many blockchain transactions cannot be reversed after confirmation." },
        { title: "Address mistakes", body: "Sending to the wrong address, wrong network, or unsupported asset may lead to permanent loss." },
        { title: "Network fees and congestion", body: "Blockchain fees, congestion, and confirmation times can change without notice." },
        { title: "Price volatility", body: "Asset prices and swap rates may change quickly. Quotes may fail or differ when provider conditions change." },
        { title: "Third-party provider risk", body: "Digital services depend on providers for pricing, inventory, delivery, cancellation, and redemption information." },
        { title: "APK installation risk", body: "Installing apps outside Google Play requires extra care. Download the APK only from the official Delta Wallet website." },
        { title: "Account and device security", body: "If your phone, email, password, or verification codes are compromised, your account may be at risk." },
        { title: "Regional availability", body: "Some services may not be available in every region or may change based on provider rules." },
        { title: "No financial advice", body: "Delta Wallet does not provide investment, trading, tax, legal, or financial advice." },
      ],
    },
  },
  ar: {
    common: {
      downloadAndroid: "تحميل تطبيق أندرويد",
      learnSecurity: "التعرّف على الأمان",
      readMore: "اقرأ المزيد",
      availableNow: "متاح الآن",
      planned: "مخطط / لاحقاً",
      contactSupport: "التواصل مع الدعم",
      apkNotice:
        "ثبّت ملف APK الخاص بأندرويد من موقع Delta Wallet الرسمي فقط، وحافظ على إعدادات جهازك آمنة.",
    },
    nav: {
      product: "المنتج",
      services: "الخدمات",
      security: "الأمان",
      about: "الشركة",
      faq: "الأسئلة",
      contact: "التواصل",
      download: "تحميل",
    },
    footer: {
      description:
        "منصة محفظة رقمية عملية لمدفوعات USDT والأصول المدعومة والخدمات الرقمية.",
      product: "المنتج",
      company: "الشركة",
      legal: "قانوني",
      support: "الدعم",
      wallet: "المحفظة",
      services: "الخدمات",
      security: "الأمان",
      download: "تحميل",
      about: "حولنا",
      contact: "التواصل",
      faq: "الأسئلة",
      terms: "شروط الخدمة",
      privacy: "سياسة الخصوصية",
      risk: "تنبيه المخاطر",
      supportEmail: "بريد الدعم",
      securityEmail: "الأمان / الإبلاغ عن إساءة",
      businessEmail: "استفسارات الأعمال",
      disclaimer:
        "Delta Wallet ليست بنكاً. معاملات الأصول الرقمية تتضمن مخاطر وقد تكون غير قابلة للعكس. بعض الخدمات تعتمد على شبكات البلوكشين ومزودي خدمات خارجيين.",
      rights: "جميع الحقوق محفوظة.",
    },
    home: {
      hero: {
        eyebrow: "محفظة عملية لمدفوعات الأصول الرقمية",
        title:
          "Delta Wallet محفظة USDT عملية للمدفوعات والخدمات الرقمية.",
        subtitle:
          "استقبل وأدر وبدّل وأرسل واشترِ واستخدم الأصول الرقمية المدعومة من خلال تطبيق أندرويد بسيط.",
      },
      trust: [
        "مصممة للمدفوعات العملية",
        "سجل معاملات واضح",
        "وصول إلى خدمات رقمية",
        "إعدادات حساب تركّز على الأمان",
      ],
      heroPanelRows: [
        "سجل المعاملات",
        "تبديل مدعوم",
        "إشعارات الطلبات",
      ],
      heroMeta: [
        "إعدادات تركّز على الأمان",
        "USDT · BNB · BTCB على BSC",
        "بطاقات وخدمات رقمية",
      ],
      heroChips: [
        {
          title: "$26.98 USDT",
          body: "رصيد متاح وواضح",
        },
        {
          title: "مراجعة الإرسال",
          body: "تأكيد العنوان والرسوم والمبلغ",
        },
      ],
      screenFeatures: [
        {
          tag: "المحفظة",
          title: "أصولك ورصيدك والإجراءات السريعة في شاشة واحدة.",
          body: "تابع الأصول المدعومة على شبكة BNB Smart Chain بوضوح. الإرسال والاستلام والتبديل والشراء قريبة من شاشة المحفظة الرئيسية.",
          bullets: [
            {
              title: "أرصدة واضحة",
              body: "اعرض كميات الأصول المدعومة وقيمتها التقديرية بالدولار عند توفرها.",
            },
            {
              title: "أربعة إجراءات أساسية",
              body: "التبديل والشراء والاستلام والإرسال تبقى قريبة من رصيد المحفظة.",
            },
            {
              title: "إشعارات",
              body: "راجع نشاط التطبيق وتحديثات المعاملات من نفس الحساب.",
            },
          ],
        },
        {
          tag: "الشراء",
          title: "اشترِ USDT عبر مسارات المزودين المدعومة.",
          body: "أنشئ طلبات شراء من خلال خيارات دفع محلية أو خارجية متاحة. يحافظ التطبيق على حالة الطلب وملاحظات الدفع وتفاصيل التأكيد بشكل واضح.",
          bullets: [
            {
              title: "خيارات متاحة",
              body: "تظهر خيارات الدفع فقط عندما تكون مدعومة من مسار المزود المفعّل.",
            },
            {
              title: "تعليمات الدفع",
              body: "يمكن أن تتضمن الطلبات ملاحظات وصلاحية ومتابعة حالة قبل شحن USDT.",
            },
            {
              title: "وضوح الحالة",
              body: "يمكن للمستخدم معرفة هل الطلب قيد الانتظار أو مؤكد أو منتهي أو فاشل.",
            },
          ],
        },
        {
          tag: "التبديل",
          title: "بدّل الأصول المدعومة مع سعر ورسوم شبكة واضحة.",
          body: "احصل على عرض لأزواج مدعومة مثل USDT وBNB، وراجع ما ستدفعه وما ستستلمه قبل المتابعة.",
          bullets: [
            {
              title: "اختصارات المبلغ",
              body: "استخدم اختصارات سريعة لتحديد الحجم داخل مسار التبديل.",
            },
            {
              title: "معاينة السعر",
              body: "شاهد السعر التقديري وتكلفة الشبكة قبل المتابعة.",
            },
            {
              title: "دعم BSC",
              body: "تعتمد مسارات التبديل على سيولة BNB Smart Chain واستجابة المزود.",
            },
          ],
        },
        {
          tag: "الإرسال",
          title: "أكّد كل عملية إرسال من خلال مراجعة منظمة.",
          body: "يظهر المستلم والمبلغ والشبكة والرسوم والمبلغ النهائي قبل الإرسال حتى يتمكن المستخدم من مراجعة التفاصيل بعناية.",
          bullets: [
            {
              title: "مراجعة خطوة بخطوة",
              body: "يوجه المسار المستخدم عبر شاشات المستلم والمبلغ والمراجعة.",
            },
            {
              title: "وجهة قابلة للتدقيق",
              body: "يمكن مراجعة تفاصيل الوجهة قبل إجراء الإرسال النهائي.",
            },
            {
              title: "تنبيه المعاملة",
              body: "يتم تذكير المستخدم بأن معاملات البلوكشين قد تكون غير قابلة للعكس.",
            },
          ],
        },
        {
          tag: "البطاقات والخدمات",
          title: "استخدم رصيد المحفظة مع البطاقات والخدمات الرقمية.",
          body: "يربط التطبيق رصيد المحفظة بخدمات رقمية مدعومة من مزودين ومسارات مرتبطة بالبطاقات عند توفرها.",
          bullets: [
            {
              title: "اختيار شبكة البطاقة",
              body: "يمكن لمسارات البطاقات عرض الشبكات المتاحة مثل Visa أو Mastercard عند دعمها.",
            },
            {
              title: "مركز خدمات",
              body: "تصفح خدمات رقمية مدعومة مثل eSIM وشحن الهاتف وأرقام SMS المؤقتة.",
            },
            {
              title: "تنفيذ عبر مزودين",
              body: "يعتمد التوفر والسعر والتسليم على المزود والمنطقة المحددين.",
            },
          ],
        },
      ],
      productTitle: "محفظة مصممة للاستخدام اليومي",
      productSubtitle:
        "تركز Delta Wallet على وضوح الأرصدة وسهولة الإجراءات واستخدام الكريبتو من خلال حساب بسيط دون تعقيد غير ضروري.",
      productCards: [
        {
          title: "استلام الأصول المدعومة",
          body: "لكل حساب عنوان محفظة لاستلام الأصول المدعومة على شبكة BNB Smart Chain.",
        },
        {
          title: "الإرسال والسحب",
          body: "يمكن إنشاء طلبات سحب للأصول المدعومة مع ظهور الحالة وتفاصيل العملية داخل التطبيق.",
        },
        {
          title: "تبديل الأزواج المدعومة",
          body: "يدعم النظام تبديل أزواج مدعومة على شبكة BSC مثل USDT وBNB بحسب السيولة واستجابة المزود.",
        },
        {
          title: "متابعة النشاط",
          body: "تظهر سجلات المحفظة والإيداع والسحب والتبديل وطلبات الخدمات في شاشات السجل داخل التطبيق.",
        },
      ],
      servicesTitle: "استخدم الرصيد في خدمات رقمية مفيدة",
      servicesSubtitle:
        "يربط التطبيق رصيد المحفظة بخدمات تعتمد على مزودين خارجيين عندما تكون متاحة.",
      serviceCards: [
        {
          title: "باقات eSIM",
          body: "تصفح واطلب منتجات eSIM المدعومة. تفاصيل التفعيل تعتمد على تنفيذ المزود.",
        },
        {
          title: "شحن الهاتف",
          body: "اشحن أرقام الهاتف المدعومة بعد مراجعة توفر المنتج وتفاصيل السعر.",
        },
        {
          title: "أرقام SMS مؤقتة",
          body: "أنشئ طلبات أرقام مؤقتة للمنتجات المدعومة وتابع وصول الرمز داخل التطبيق.",
        },
      ],
      howTitle: "كيف يعمل",
      howSubtitle:
        "أكّد حسابك واشحن المحفظة وابدأ باستخدام إجراءات المحفظة والخدمات المدعومة.",
      howStepTitles: [
        "إنشاء الحساب",
        "شحن المحفظة",
        "استخدام الإجراءات",
        "مراجعة السجل",
      ],
      howSteps: [
        "أنشئ حسابك وأكّد بريدك الإلكتروني.",
        "استقبل الأصول المدعومة على عنوان Delta Wallet أو أنشئ طلب شراء مدعوم.",
        "استخدم إجراءات المحفظة مثل الإرسال أو التبديل أو شراء الخدمات.",
        "راجع الحالة وتفاصيل الطلب والسجل داخل التطبيق.",
      ],
      downloadTag: "تحميل",
      installGuide: "دليل التثبيت",
      apkMeta: "ملف Android APK الرسمي",
      securityTitle: "أمان واضح دون وعود مبالغ بها",
      securitySubtitle:
        "تستخدم Delta Wallet طبقات تحكم لتقليل مخاطر الحساب والمعاملات، مع بقاء المستخدم مسؤولاً عن أمان جهازه ودقة تفاصيل العمليات.",
      securityCards: [
        {
          title: "تأكيد البريد الإلكتروني",
          body: "إنشاء الحساب واستعادة الوصول يستخدمان رموز تحقق عبر البريد الإلكتروني.",
        },
        {
          title: "فحص الأجهزة",
          body: "يدعم النظام تحديات تسجيل الدخول من جهاز جديد وسجلات الأجهزة الموثوقة.",
        },
        {
          title: "سجلات الأمان",
          body: "يمكن تسجيل أحداث مثل التسجيل، تسجيل الدخول، تغيير كلمة المرور، تحديث الملف الشخصي، وإغلاق الحساب.",
        },
      ],
      faqTitle: "أسئلة قبل التثبيت؟",
      faqSubtitle:
        "اقرأ إجابات عملية حول التطبيق والمعاملات وتثبيت APK والدعم.",
    },
    product: {
      hero: {
        eyebrow: "المنتج",
        title: "محفظة واضحة للأصول الرقمية المدعومة",
        subtitle:
          "Delta Wallet مبنية حول عنوان محفظة، أرصدة أصول، مدفوعات، تبديل، شراء، وسجل معاملات.",
      },
      sections: [
        {
          title: "نظرة عامة على المحفظة",
          body: "يعرض التطبيق رصيد المحفظة والرصيد المقفل والأصول المدعومة والنشاط. يمكن للمستخدم فتح تفاصيل الأصل ومراجعة بيانات السوق عند توفرها.",
        },
        {
          title: "نموذج الأصول والشبكات المدعومة",
          body: "يعتمد النظام على نموذج شبكة/رمز. الشبكة المزروعة حالياً هي BNB Smart Chain مع سجلات BNB وUSDT وBTCB وUSDC. صُممت Delta Wallet لدعم أصول وشبكات إضافية لاحقاً، لكن لا نصف شبكات أخرى كأنها متاحة الآن.",
        },
        {
          title: "استلام الأموال",
          body: "يمكن للمستخدم عرض عنوان محفظته ونسخه ومشاركته واستخدام رمز QR. يحذر التطبيق من الاستلام فقط على الشبكة المدعومة المحددة.",
        },
        {
          title: "الإرسال والسحب",
          body: "يدعم النظام طلبات سحب USDT وBNB على BSC. قد تتم معالجة الطلب تلقائياً أو يخضع لمراجعة يدوية بحسب الرصيد والسيولة وفحوصات المخاطر.",
        },
        {
          title: "تبديل الأصول المدعومة",
          body: "يدعم مسار التبديل عروض وتنفيذ USDT وBNB على BSC. التبديل يعتمد على السيولة واستجابة المزود ونجاح التنفيذ على الشبكة.",
        },
        {
          title: "شراء USDT عبر مسار مزود مدعوم",
          body: "يتضمن التطبيق مسار طلب شراء عبر شام كاش مع ملاحظة دفع وصلاحية ومتابعة حالة وشحن USDT بعد تأكيد دفعة مطابقة.",
        },
        {
          title: "سجل المعاملات",
          body: "توجد نماذج لسجلات الإيداع والسحب والمحفظة والتبديل وSMS والخدمات حتى يستطيع المستخدم مراجعة النشاط بوضوح.",
        },
        {
          title: "إعدادات الحساب والملف الشخصي",
          body: "يمكن إدارة بيانات الملف الشخصي وتغيير كلمة المرور وتسجيل الخروج من الأجهزة الأخرى وإغلاق الحساب مع بقاء السجلات المالية لأغراض التدقيق والدعم.",
        },
      ],
      availability: {
        now: [
          "تثبيت تطبيق أندرويد عبر APK",
          "حسابات مع تأكيد بريد إلكتروني",
          "عنوان محفظة على BSC",
          "سحب USDT وBNB على BSC",
          "تبديل USDT وBNB على BSC",
          "مسار طلب شراء عبر شام كاش",
          "سجل معاملات وإشعارات",
        ],
        later: [
          "يمكن إضافة أصول أو شبكات إضافية عبر نموذج الشبكة/الرمز الحالي.",
          "يمكن إضافة التوزيع عبر Google Play لاحقاً.",
        ],
      },
    },
    services: {
      hero: {
        eyebrow: "الخدمات",
        title: "خدمات رقمية مرتبطة برصيد المحفظة",
        subtitle:
          "تدعم Delta Wallet طلبات خدمات تعتمد على مزودين خارجيين مع إظهار الحالة والتكلفة وتفاصيل التسليم داخل التطبيق.",
      },
      sections: [
        {
          title: "نظرة عامة على الخدمات",
          body: "يرتبط طلب الخدمة بمنتج وحالة مزود ودفع من المحفظة وأحداث طلب ومعلومات استرداد عند توفرها.",
        },
        {
          title: "المنتجات الرقمية",
          body: "نظام الخدمات مبني لمنتجات رقمية يمكن تسعيرها وطلبها ودفعها من رصيد المحفظة وتحديثها وتتبع حالتها.",
        },
        {
          title: "eSIM",
          body: "يعرض مسار المتجر العام منتجات eSIM. بعد الشراء قد تتضمن تفاصيل التفعيل رمز QR أو كود تفعيل أو تعليمات إعداد حسب تنفيذ المزود.",
        },
        {
          title: "شحن الهاتف",
          body: "يتضمن التطبيق تصفح منتجات شحن الهاتف والحصول على سعر وإنشاء طلب وتحديث الحالة للمنتجات المدعومة.",
        },
        {
          title: "بطاقات الهدايا",
          body: "يتضمن نموذج المنتجات في النظام نوع خدمة لبطاقات الهدايا، لكن مسار المتجر العام حالياً يركز على eSIM وشحن الهاتف. لذلك يجب اعتبار توفر بطاقات الهدايا مخططاً أو معتمداً على المزود.",
        },
        {
          title: "أرقام SMS مؤقتة",
          body: "يمكن لخدمة SMS إنشاء طلبات أرقام مؤقتة للمنتجات المدعومة والتحقق من وصول الرموز وإنهاء الطلب أو إلغاؤه عند الإمكان.",
        },
        {
          title: "خيارات شراء محلية",
          body: "تتضمن المحفظة مسار شام كاش لإنشاء طلب شراء والتحقق من حالة الدفع وشحن USDT عندما يتم تأكيد دفعة مطابقة.",
        },
        {
          title: "توفر المزودين",
          body: "قد يعتمد التوفر والسعر ووقت التسليم وأهلية الاسترداد على المزود والمنطقة المحددين.",
        },
        {
          title: "حدود التسليم والاسترداد",
          body: "قد تتأخر بعض الطلبات أو تُلغى أو تفشل أو تحتاج إلى تحديث/تحقق. معاملات البلوكشين المكتملة والخدمات الرقمية المسلّمة قد لا تكون قابلة للاسترداد.",
        },
      ],
    },
    security: {
      hero: {
        eyebrow: "الأمان",
        title: "طبقات تحكم لتقليل مخاطر الحساب والمعاملات",
        subtitle:
          "تستخدم Delta Wallet طبقات تحكم لتقليل مخاطر الحساب والمعاملات، لكنها لا تضمن منع كل خسارة أو خطأ أو مشكلة شبكة أو مزود.",
      },
      sections: [
        {
          title: "تأكيد الحساب",
          body: "يتطلب التسجيل والوصول للحساب تأكيد البريد الإلكتروني. رموز التأكيد وإعادة التعيين لها مدة صلاحية وحدود إعادة إرسال ومحاولات.",
        },
        {
          title: "فحص الجهاز والجلسات",
          body: "يمكن للنظام تخزين معرف الجهاز ونسخة التطبيق وبيانات النظام وعنوان IP واللغة والمنطقة الزمنية وحالة الجهاز الموثوق. تحديات تسجيل الدخول من جهاز جديد مفعلة في النظام.",
        },
        {
          title: "وضوح المعاملات",
          body: "تُسجل أنشطة المحفظة والإيداعات والسحوبات والتبديلات وطلبات الخدمات والإشعارات حتى يستطيع المستخدم مراجعة الحالة والمراجع.",
        },
        {
          title: "سلامة معاملات البلوكشين",
          body: "قد تكون معاملات البلوكشين غير قابلة للعكس. يجب التأكد من الشبكة والعنوان والأصل والمبلغ والرسوم قبل إرسال أي عملية.",
        },
      ],
      neverAsk: [
        "كلمة مرورك عبر محادثة أو رسالة اجتماعية.",
        "رمز تحقق خارج التطبيق أو البريد الرسمي.",
        "ملاحظة دفع مختلفة عن المعروضة في الطلب داخل التطبيق.",
        "تجاهل تحذيرات العنوان أو الأصل أو الشبكة.",
      ],
      neverAskTitle: "لن تطلب Delta Wallet أبداً",
      checklist: [
        "استخدم بريداً إلكترونياً تتحكم به.",
        "فعّل قفل الهاتف وقفل التطبيق.",
        "راجع عناوين المحفظة بعناية قبل الإرسال.",
        "لا تشارك رموز التحقق أو إعادة التعيين.",
        "تواصل مع فريق الأمان إذا رأيت نشاطاً لا تعرفه.",
      ],
      checklistTitle: "قائمة أمان للمستخدم",
      report:
        "للإبلاغ عن نشاط مريب أو إساءة استخدام، راسل security@deltawallet.app مع بريد حسابك والوقت التقريبي ولقطات شاشة عند توفرها ووصف مختصر.",
    },
    about: {
      hero: {
        eyebrow: "الشركة",
        title: "نبني أدوات كريبتو عملية للاستخدام اليومي",
        subtitle:
          "Delta Wallet منتج في مرحلة مبكرة يركز على وضوح إجراءات المحفظة والخدمات الرقمية المدعومة والاستخدام الصريح للكريبتو عبر الحساب.",
      },
      sections: [
        {
          title: "حول Delta Wallet",
          body: "تجمع Delta Wallet بين رصيد المحفظة والمدفوعات والتبديل والشراء والخدمات الرقمية داخل تطبيق أندرويد واحد. صُمم المنتج لمن يريد استخداماً عملياً لا واجهة تداول معقدة.",
        },
        {
          title: "المهمة",
          body: "مهمتنا تسهيل استلام وإدارة واستخدام الأصول الرقمية المدعومة مع إبقاء تفاصيل المعاملات مفهومة.",
        },
        {
          title: "ما الذي نبنيه",
          body: "نبني مسارات المحفظة والمدفوعات وطلبات الخدمات والإشعارات وأمان الحساب. قد تتغير بعض الميزات مع تطور المنصة.",
        },
        {
          title: "من نخدم",
          body: "Delta Wallet مخصصة للمستخدمين الذين يحتاجون محفظة أندرويد مباشرة للأصول المدعومة والخدمات الرقمية. بعض الخدمات تعتمد على مزودين خارجيين.",
        },
        {
          title: "مبادئ العمل",
          body: "نسعى للتواصل بوضوح، وتجنب الوعود غير الواقعية، وإظهار حالة العمليات، والتعامل بصدق مع حدود البلوكشين والمزودين.",
        },
        {
          title: "المرحلة الحالية",
          body: "Delta Wallet منتج في مرحلة مبكرة. قد يتغير توفر الخدمات والأصول المدعومة وسلوك التطبيق مع تحسين المنصة.",
        },
      ],
    },
    contact: {
      hero: {
        eyebrow: "التواصل",
        title: "تواصل مع القناة المناسبة في Delta Wallet",
        subtitle:
          "اختر مسار التواصل المناسب حتى تصل رسائل الدعم أو الأمان أو الأعمال إلى الفريق الصحيح.",
      },
      cards: [
        {
          title: "الدعم",
          body: "لأسئلة الحساب أو المحفظة أو الطلبات أو APK أو التطبيق عموماً.",
          emailKey: "supportEmail",
        },
        {
          title: "استفسارات الأعمال",
          body: "للنقاشات المتعلقة بالمنتج أو المزودين أو التعاون التجاري.",
          emailKey: "businessEmail",
        },
        {
          title: "الأمان / الإبلاغ عن إساءة",
          body: "للنشاط المريب أو إساءة الاستخدام أو تقارير الأمان.",
          emailKey: "securityEmail",
        },
      ],
      checklistTitle: "قبل التواصل مع الدعم",
      checklist: [
        "اذكر بريد حسابك، ولا ترسل كلمة المرور.",
        "أضف رقم الطلب أو هاش المعاملة أو ملاحظة الدفع عند الحاجة.",
        "أرفق لقطات شاشة فقط إذا لم تحتوي على رموز حساسة.",
        "اشرح ما حدث ومتى حدث باختصار.",
      ],
      response:
        "قد يختلف وقت الرد بحسب حجم الطلبات وفحوصات المزودين وحالة تأكيد الشبكة.",
      responseTitle: "توقعات الرد",
    },
    faq: {
      hero: {
        eyebrow: "الأسئلة الشائعة",
        title: "إجابات واضحة قبل البدء",
        subtitle:
          "إجابات عملية حول Delta Wallet وأمان الحساب والمعاملات والخدمات وتثبيت APK والدعم.",
      },
      categories: {
        all: "الكل",
        general: "عام",
        security: "الحساب والأمان",
        wallet: "المحفظة والمعاملات",
        buy: "شراء USDT",
        services: "الخدمات",
        apk: "تثبيت APK",
        support: "الدعم",
      },
      searchPlaceholder: "ابحث في الأسئلة...",
      noResults: "لا توجد نتائج مطابقة.",
      items: [
        {
          category: "general",
          question: "ما هي Delta Wallet؟",
          answer:
            "Delta Wallet منصة محفظة رقمية عملية للأصول المدعومة، مع تطبيق أندرويد للاستلام والإدارة والإرسال والشراء والتبديل واستخدام الرصيد في خدمات مدعومة.",
        },
        {
          category: "general",
          question: "هل Delta Wallet بنك؟",
          answer:
            "لا. Delta Wallet ليست بنكاً أو منتج إيداع أو مؤسسة مالية. هي منصة برمجية لمسارات محفظة وخدمات تتعلق بالأصول الرقمية.",
        },
        {
          category: "wallet",
          question: "ما الأصول التي تدعمها Delta Wallet؟",
          answer:
            "النظام مبني على نموذج BNB Smart Chain مع سجلات BNB وUSDT وBTCB وUSDC. المسارات العامة تركز حالياً على USDT وBNB للسحب والتبديل.",
        },
        {
          category: "wallet",
          question: "هل يمكنني استلام USDT؟",
          answer:
            "نعم. يعرض التطبيق عنوان محفظة ورمز QR لاستلام الأصول المدعومة. تأكد دائماً من استخدام الشبكة المدعومة الصحيحة قبل الإرسال.",
        },
        {
          category: "wallet",
          question: "هل معاملات البلوكشين قابلة للعكس؟",
          answer:
            "قد تكون معاملات البلوكشين غير قابلة للعكس. إذا أُرسلت الأموال إلى عنوان أو شبكة خاطئة فقد لا تتمكن Delta Wallet من استعادتها.",
        },
        {
          category: "wallet",
          question: "ماذا يحدث إذا أرسلت إلى عنوان خاطئ؟",
          answer:
            "قد تخسر الأموال. راجع العنوان والشبكة والأصل والمبلغ قبل تأكيد أي تحويل.",
        },
        {
          category: "apk",
          question: "لماذا يتم تثبيت Delta Wallet كملف APK؟",
          answer:
            "الإصدار الحالي لأندرويد يُوزع عبر تحميل APK مباشر. يمكن إضافة Google Play لاحقاً.",
        },
        {
          category: "apk",
          question: "لماذا يظهر تحذير تطبيق غير معروف في أندرويد؟",
          answer:
            "يعرض أندرويد هذا التحذير عند تثبيت تطبيقات خارج Google Play. حمّل APK فقط من الموقع الرسمي لـ Delta Wallet.",
        },
        {
          category: "apk",
          question: "متى سيكون Delta Wallet على Google Play؟",
          answer:
            "دعم Google Play مخطط له لاحقاً. حالياً يوفر الموقع الرسمي رابط APK لأندرويد.",
        },
        {
          category: "security",
          question: "كيف تحمي Delta Wallet الحسابات؟",
          answer:
            "يتضمن النظام تأكيد البريد الإلكتروني، رموز إعادة تعيين كلمة المرور، تحديات الجهاز الجديد، بيانات الجهاز، التحكم بالجلسات، سجلات أحداث الأمان، وقفل التطبيق في أندرويد.",
        },
        {
          category: "services",
          question: "لماذا قد يتأخر طلب خدمة؟",
          answer:
            "قد تعتمد طلبات الخدمات على مخزون المزود، حالة دفع الشبكة، معالجة المزود، المنطقة، وتوفر المنتج.",
        },
        {
          category: "buy",
          question: "هل يمكنني شراء USDT عبر Delta Wallet؟",
          answer:
            "يتضمن التطبيق مسار طلب شراء عبر شام كاش. ينشئ المستخدم طلباً ويرسل الدفعة بالملاحظة المطلوبة ثم يتحقق من الحالة حتى يتم تأكيد دفعة مطابقة أو تنتهي صلاحية الطلب.",
        },
        {
          category: "support",
          question: "كيف أتواصل مع الدعم؟",
          answer:
            "راسل support@deltawallet.app مع بريد حسابك ورقم الطلب أو مرجع المعاملة عند الحاجة ووصف واضح. لا ترسل كلمة المرور أو رموز التحقق.",
        },
      ],
    },
    legal: {
      updated: "آخر تحديث: 13 مايو 2026",
      terms: {
        title: "شروط الخدمة",
        intro:
          "توضح هذه الشروط القواعد الأساسية لاستخدام Delta Wallet. صيغت للوضوح ولا تغني عن استشارة قانونية مستقلة.",
        sections: [
          { title: "المقدمة", body: "توفر Delta Wallet برنامجاً لمسارات المحفظة والحساب والأصول الرقمية والخدمات الرقمية. باستخدام التطبيق أو الموقع، توافق على استخدام الخدمة بمسؤولية." },
          { title: "الأهلية", body: "يجب أن تكون قادراً قانونياً على استخدام خدمات الأصول الرقمية في موقعك وأن تكون في سن يسمح لك بالموافقة على هذه الشروط." },
          { title: "تسجيل الحساب", body: "يجب تقديم معلومات حساب دقيقة والحفاظ على إمكانية الوصول إلى بريدك وإكمال خطوات التحقق المطلوبة وحماية بيانات الدخول." },
          { title: "مسؤوليات المستخدم", body: "أنت مسؤول عن جهازك وبيانات حسابك وعناوين المحفظة وقرارات المعاملات والامتثال للقواعد المعمول بها." },
          { title: "خدمات المحفظة والأصول الرقمية", body: "Delta Wallet ليست بنكاً. الأرصدة والمعاملات مرتبطة بأصول رقمية مدعومة وسجلات خدمات، وليست ودائع مصرفية." },
          { title: "الإيداعات والسحوبات", body: "تعتمد الإيداعات والسحوبات على شبكات البلوكشين والأصول المدعومة وسيولة المحفظة الساخنة وفحوصات المخاطر والرسوم والتأكيدات. المستخدم مسؤول عن إدخال العنوان والشبكة الصحيحين." },
          { title: "مخاطر معاملات البلوكشين", body: "قد تكون معاملات الأصول الرقمية غير قابلة للعكس أو تتأخر أو تُرفض أو تفشل أو تتأثر بازدحام الشبكة أو الرسوم أو السيولة أو توفر المزود." },
          { title: "شراء الخدمات والمزودون الخارجيون", body: "قد تعتمد طلبات الخدمات على مزودين خارجيين. قد تتأخر المنتجات أو تُلغى أو تصبح غير متاحة أو تُرفض أو تُسلّم مع تعليمات استرداد خاصة بالمزود." },
          { title: "الرسوم والأسعار", body: "قد تتغير الأسعار والفروقات وتكاليف المزود ورسوم الشبكة ورسوم الخدمة قبل أو أثناء الطلب. راجع التفاصيل قبل التأكيد." },
          { title: "الاسترداد والإلغاء", body: "لا نضمن الاسترداد للمعاملات المكتملة على البلوكشين أو الخدمات الرقمية المسلّمة. بعض الطلبات المعلقة أو الفاشلة قد تُلغى أو تُسترد بحسب الحالة وقواعد المزود." },
          { title: "الاستخدام المحظور", body: "لا يجوز استخدام Delta Wallet للاحتيال أو الإساءة أو التهرب من العقوبات أو غسل الأموال أو الخدمات غير القانونية أو الوصول غير المصرح به أو إساءة استخدام المنصة أو أي نشاط يضر المستخدمين أو المزودين أو البنية التحتية." },
          { title: "تعليق أو تقييد الحساب", body: "قد تقيّد Delta Wallet الوصول أو تعلّقه أو تغلقه عند الحاجة لتقليل المخاطر أو التحقيق في إساءة الاستخدام أو الامتثال للمتطلبات أو حماية المنصة." },
          { title: "مسؤوليات الأمان", body: "يجب حماية هاتفك وبريدك وكلمة مرورك ورموز التحقق. لن تطلب Delta Wallet كلمة مرورك أو رموزك لمرة واحدة عبر المحادثات." },
          { title: "إخلاء المسؤولية", body: "تُقدّم الخدمة حسب التوفر. لا تضمن Delta Wallet التشغيل دون انقطاع أو توفر المزودين أو أسعار الأصول أو أسعار التبديل أو استرداد المعاملات الخاطئة." },
          { title: "حدود المسؤولية", body: "إلى أقصى حد يسمح به القانون، لا تتحمل Delta Wallet مسؤولية الخسائر الناتجة عن خطأ المستخدم أو مشاكل الشبكة أو فشل المزود أو الوصول غير المصرح به أو تقلب السوق أو المعاملات غير المدعومة." },
          { title: "تغييرات الخدمة", body: "قد تتغير الميزات والأصول المدعومة والمزودون والرسوم والتوفر مع تحسين المنتج." },
          { title: "تغييرات الشروط", body: "قد نحدّث هذه الشروط. استمرار الاستخدام بعد التحديث يعني قبول الشروط المعدلة." },
          { title: "التواصل", body: "للأسئلة، راسل support@deltawallet.app." },
        ],
      },
      privacy: {
        title: "سياسة الخصوصية",
        intro:
          "توضح هذه السياسة المعلومات التي قد تجمعها Delta Wallet وكيف يمكن استخدامها لتشغيل التطبيق والخدمات.",
        sections: [
          { title: "المقدمة", body: "تجمع Delta Wallet المعلومات اللازمة لإنشاء الحسابات وتشغيل مسارات المحفظة والخدمات وتقليل إساءة الاستخدام والتواصل مع المستخدمين." },
          { title: "المعلومات التي نجمعها", body: "قد نجمع بيانات الحساب والملف الشخصي وبيانات الجهاز وعنوان IP واللغة والمنطقة الزمنية وتلميحات البلد ونسخة التطبيق وسجلات المعاملات وبيانات طلبات الخدمات ومراسلات الدعم." },
          { title: "معلومات الحساب", body: "قد تشمل بيانات الحساب البريد الإلكتروني والاسم الأول والاسم الأخير ورقم الهاتف والبلد والولاية وحالة التحقق وحالة الحساب." },
          { title: "معلومات الجهاز والأمان", body: "يمكن للنظام تخزين معرف الجهاز واسم الجهاز ونظام التشغيل ونسخته ونسخة التطبيق وعنوان IP وحالة الجهاز الموثوق وسجلات أحداث الأمان." },
          { title: "بيانات المحفظة والمعاملات", body: "نخزن عناوين المحفظة وأرصدة الأصول المدعومة والإيداعات والسحوبات وسجلات التبديل وهاشات المعاملات والمراجع والحالات والبيانات المرتبطة بها." },
          { title: "بيانات طلبات الخدمات", body: "قد تشمل سجلات الخدمات المنتج والمزود ورقم الطلب ومبلغ الدفع ورقم الهاتف عند الحاجة للشحن وتفاصيل الاسترداد ومراجع المزود وحالة الطلب." },
          { title: "كيف نستخدم المعلومات", body: "نستخدم المعلومات لتشغيل التطبيق ومعالجة إجراءات المحفظة والخدمات والتحقق من الحسابات واكتشاف الإساءة وتقديم الدعم وتحسين الاعتمادية والتواصل معك." },
          { title: "كيف نشارك المعلومات", body: "نشارك المعلومات فقط عند الحاجة لتشغيل الخدمة أو معالجة الطلبات أو الامتثال للمتطلبات أو منع الإساءة أو التواصل معك." },
          { title: "المزودون الخارجيون", body: "تعتمد بعض الخدمات على مزودين قد يحتاجون معلومات الطلب لتسعيره أو معالجته أو تسليمه أو إلغائه أو تحديثه." },
          { title: "ملفات تعريف الارتباط والتحليلات", body: "الموقع مصمم ليبقى بسيطاً. إذا أضيفت التحليلات أو ملفات تعريف الارتباط لاحقاً، يجب الإفصاح عنها وحصرها في الاحتياجات التشغيلية." },
          { title: "الاحتفاظ بالبيانات", body: "نحتفظ بالسجلات حسب الحاجة لتشغيل الحساب وسجل المعاملات والدعم والأمان ومنع الإساءة والمتطلبات القانونية أو التشغيلية." },
          { title: "الأمان", body: "نستخدم ضوابط تقنية وتنظيمية معقولة، لكن لا يوجد نظام آمن بالكامل. يجب على المستخدمين أيضاً حماية أجهزتهم وبياناتهم." },
          { title: "المعالجة الدولية", body: "قد تتم معالجة المعلومات في أنظمة أو بنى مزودين خارج موقعك." },
          { title: "حقوق المستخدم", body: "بحسب موقعك، قد تطلب الوصول أو التصحيح أو الحذف أو تقييد بعض المعلومات الشخصية. قد يلزم الاحتفاظ ببعض سجلات المعاملات." },
          { title: "خصوصية الأطفال", body: "Delta Wallet غير مخصصة للأطفال." },
          { title: "التغييرات", body: "قد نحدّث هذه السياسة مع تطور التطبيق والموقع." },
          { title: "التواصل", body: "لأسئلة الخصوصية، راسل support@deltawallet.app." },
        ],
      },
    },
    risk: {
      hero: {
        eyebrow: "تنبيه المخاطر",
        title: "افهم المخاطر قبل استخدام الأصول الرقمية",
        subtitle:
          "تسعى Delta Wallet لجعل استخدام الأصول الرقمية المدعومة أوضح، لكنها لا تزيل مخاطر البلوكشين أو المزودين أو السوق أو الجهاز.",
      },
      sections: [
        { title: "مخاطر الأصول الرقمية", body: "قد تكون الأصول الرقمية معقدة وقد تفقد قيمتها. استخدم فقط مبالغ تفهم مخاطرها." },
        { title: "المعاملات غير القابلة للعكس", body: "كثير من معاملات البلوكشين لا يمكن عكسها بعد التأكيد." },
        { title: "أخطاء العنوان", body: "الإرسال إلى عنوان خاطئ أو شبكة خاطئة أو أصل غير مدعوم قد يؤدي إلى خسارة دائمة." },
        { title: "رسوم الشبكة والازدحام", body: "قد تتغير رسوم البلوكشين وازدحام الشبكة وأوقات التأكيد دون إشعار." },
        { title: "تقلب الأسعار", body: "قد تتغير أسعار الأصول وأسعار التبديل بسرعة. قد تفشل العروض أو تختلف عند تغير شروط المزود." },
        { title: "مخاطر المزودين الخارجيين", body: "تعتمد الخدمات الرقمية على المزودين في السعر والمخزون والتسليم والإلغاء ومعلومات الاسترداد." },
        { title: "مخاطر تثبيت APK", body: "تثبيت التطبيقات خارج Google Play يحتاج إلى انتباه إضافي. حمّل APK فقط من الموقع الرسمي لـ Delta Wallet." },
        { title: "أمان الحساب والجهاز", body: "إذا تعرض هاتفك أو بريدك أو كلمة مرورك أو رموز التحقق للاختراق فقد يكون حسابك معرضاً للخطر." },
        { title: "التوفر الإقليمي", body: "قد لا تتوفر بعض الخدمات في كل منطقة وقد تتغير حسب قواعد المزود." },
        { title: "لا توجد نصيحة مالية", body: "لا تقدم Delta Wallet نصائح استثمارية أو تداولية أو ضريبية أو قانونية أو مالية." },
      ],
    },
  },
} as const;

export function isLocale(locale: unknown): locale is Locale {
  return supportedLocales.includes(locale as Locale);
}

export function readPath<T = string>(locale: Locale, path: string): T {
  const value = path.split(".").reduce<unknown>((current, segment) => {
    if (current && typeof current === "object" && segment in current) {
      return (current as Record<string, unknown>)[segment];
    }

    return undefined;
  }, translations[locale]);

  if (value === undefined) {
    throw new Error(`Missing translation key: ${locale}.${path}`);
  }

  return value as T;
}
