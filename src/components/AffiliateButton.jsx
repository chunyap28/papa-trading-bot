// Visually flags outbound links and applies the correct rel attributes.
// "sponsored" (per search engine guidelines) is only added when the link is
// an actual paid/affiliate placement; "noopener noreferrer" always applies
// as security best practice for any target="_blank" link.
export default function AffiliateButton({ href, isAffiliate = false, children }) {
  return (
    <a
      className="affiliate-button"
      href={href}
      target="_blank"
      rel={isAffiliate ? "sponsored noopener noreferrer" : "noopener noreferrer"}
    >
      {children}
      <span className="affiliate-button__arrow" aria-hidden="true">
        →
      </span>
    </a>
  );
}
