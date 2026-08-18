// Visually flags affiliate/referral outbound links and applies the correct
// rel attributes: "sponsored" (paid/affiliate placement, per search engine
// guidelines) plus "noopener noreferrer" (security best practice for any
// target="_blank" link).
export default function AffiliateButton({ href, children }) {
  return (
    <a
      className="affiliate-button"
      href={href}
      target="_blank"
      rel="sponsored noopener noreferrer"
    >
      {children}
      <span className="affiliate-button__arrow" aria-hidden="true">
        →
      </span>
    </a>
  );
}
