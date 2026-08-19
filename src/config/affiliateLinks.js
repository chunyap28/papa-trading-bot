// Central place for affiliate / referral links used across the site.
// Each entry has `isAffiliate: false` until that partnership is approved —
// flip it to true and swap in the real referral URL once it is, and the
// page will automatically show the "affiliate link" tag and rel="sponsored".
export const AFFILIATE_LINKS = {
  oanda: {
    href: "https://hub.oanda.com/apply/demo",
    isAffiliate: false,
  },
};

// Cloud VPS providers offered on the "going live" step. Generic (non-affiliate)
// links for now — add/remove providers here as partnerships change.
export const VPS_PROVIDERS = [
  {
    id: "digitalocean",
    name: "DigitalOcean",
    href: "https://www.digitalocean.com/",
    isAffiliate: false,
  },
  {
    id: "kamatera",
    name: "Kamatera",
    href: "https://www.kamatera.com/",
    isAffiliate: false,
  },
];
