export const siteConfig = {
  name: "Delta Wallet",
  url: "https://deltawallet.app",
  iconPath: "/brand/delta-wallet-icon.webp",
  apkUrl:
    "https://j8qfljajkvrcqfbe.public.blob.vercel-storage.com/app-release.apk",
  supportEmail: "support@deltawallet.app",
  businessEmail: "business@deltawallet.app",
  securityEmail: "security@deltawallet.app",
  // Backend host the Earn page calls through the Android JS bridge.
  // Override with VITE_EARN_API_BASE at build time.
  earnApiBase:
    (import.meta.env.VITE_EARN_API_BASE as string | undefined) ??
    "https://api.deltawallet.app",
};
