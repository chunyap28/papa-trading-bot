import AffiliateButton from "../components/AffiliateButton.jsx";
import { AFFILIATE_LINKS, VPS_PROVIDERS } from "../config/affiliateLinks.js";

const REPO_URL = "https://github.com/chunyap28/your-first-trading-bot";
const EBOOK_URL = "https://www.amazon.com/dp/B0HG4J3RG9";
const EBOOK_TITLE =
  "Build Your First Trading Bot: Building A Python Trading Bots Using An Event-Driven Software Engineering Approach";
const EBOOK_DESCRIPTION =
  "A step-by-step guide to building an event-driven, broker-agnostic Python trading bot — the book this companion site supports.";

export default function BuildYourFirstTradingBot() {
  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">Build Your First Trading Bot</p>
        <h1>Setup guide: broker &amp; cloud VPS</h1>
        <p className="hero-sub">
          This page is the companion referenced of the book "Build Your First Trading Bot": recommended broker
          sandbox access and cloud infrastructure for the event-driven trading
          bot you build across Chapters 2–7. It fills in the account creation
          and VPS provisioning steps the book intentionally keeps brief.
        </p>
        <a
          className="book-card"
          href={EBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="book-card__cover"
            src="/images/ebook-cover.jpg"
            alt={`Cover of "${EBOOK_TITLE}"`}
            width="120"
            height="150"
            loading="lazy"
          />
          <div className="book-card__body">
            <p className="book-card__title">{EBOOK_TITLE}</p>
            <p className="book-card__description">{EBOOK_DESCRIPTION}</p>
            <span className="book-card__cta">
              Get it on Amazon
              <span aria-hidden="true">→</span>
            </span>
          </div>
        </a>
      </header>

      <div className="disclosure">
        <strong>Affiliate disclosure:</strong> Some links below (marked{" "}
        <em>affiliate link</em>) are referral links. If you sign up through
        them we may earn a commission, at no extra cost to you. We only
        recommend services actually used to build and run this bot.
      </div>

      <section className="card" id="oanda" aria-labelledby="oanda-heading">
        <div className="card-kicker">Chapter 2 · Local Environment Setup</div>
        <h2 id="oanda-heading">1. Create your OANDA practice account</h2>
        <p>
          OANDA is the broker used throughout the book for its stable REST
          API and free practice (demo) environment — you'll need an API key
          and account ID before Chapter 2's <code>.env</code> step.
        </p>

        <ol className="steps">
          <li>
            Sign up for a free OANDA practice account (no funding required —
            it comes preloaded with virtual currency for demo trading).
            <div className="step-action">
              <AffiliateButton
                href={AFFILIATE_LINKS.oanda.href}
                isAffiliate={AFFILIATE_LINKS.oanda.isAffiliate}
              >
                Open a free OANDA practice account
              </AffiliateButton>
              {AFFILIATE_LINKS.oanda.isAffiliate && (
                <span className="affiliate-tag">affiliate link</span>
              )}
            </div>
          </li>
          <li>
            Verify your email and log in to the fxTrade practice platform.
          </li>
          <li>
            Generate an API token: in the practice platform, go to{" "}
            <strong>Manage API Access</strong> under your account settings and
            click <strong>Generate</strong>. Copy the token immediately — OANDA
            only shows it once.
          </li>
          <li>
            Find your <strong>Account ID</strong> (format{" "}
            <code>XXX-XXX-XXXXXXX-XXX</code>) on the account summary page.
          </li>
          <li>
            Add both values to the <code>.env</code> file from Chapter 2, Step
            3:
            <pre className="code-block">
              <code>{`OANDA_API_KEY=your_oanda_practice_token_here
OANDA_ACCOUNT_ID=XXX-XXX-XXXXXXX-XXX
OANDA_ENV=practice`}</code>
            </pre>
          </li>
        </ol>

        <div className="callout">
          Keep <code>OANDA_ENV=practice</code> until you've completed and
          understood Chapter 7. The book's example strategy is deliberately
          simplistic and is not designed to be profitable — never point a
          <code>live</code> environment at it.
        </div>
      </section>

      <section className="card" id="vps" aria-labelledby="vps-heading">
        <div className="card-kicker">Chapter 7 · Going Live</div>
        <h2 id="vps-heading">2. Provision a cloud VPS</h2>
        <p>
          To keep the bot running 24/5 independently of your laptop, Chapter 7
          containerizes it with Docker and deploys it to a cloud VPS. Any
          provider that gives you a plain Ubuntu box works — here are a couple
          of options with hourly/low-cost plans, enough for an always-on 1
          vCPU / 1 GB instance:
        </p>

        <div className="provider-list">
          {VPS_PROVIDERS.map((provider) => (
            <div className="step-action" key={provider.id}>
              <AffiliateButton
                href={provider.href}
                isAffiliate={provider.isAffiliate}
              >
                {provider.name}
              </AffiliateButton>
              {provider.isAffiliate && (
                <span className="affiliate-tag">affiliate link</span>
              )}
            </div>
          ))}
        </div>

        <h3>VPS requirements (matches Chapter 7)</h3>
        <ul className="specs">
          <li>Ubuntu 24.04 or 26.04 LTS</li>
          <li>1 vCPU, 1 GB RAM, 20 GB SSD</li>
          <li>git, Docker with the Docker Compose plugin installed</li>
          <li>SSH (port 22) access for administration</li>
        </ul>

        <ol className="steps">
          <li>
            In your chosen provider's console, create a new server: choose{" "}
            <strong>Ubuntu 24.04 LTS</strong>, the smallest general-purpose
            plan (1 vCPU / 1 GB RAM / 20 GB SSD is enough for this bot), and a
            region close to your broker's servers for lower latency.
          </li>
          <li>Set a root password or upload an SSH public key during creation.</li>
          <li>
            Once the server is running, SSH in and install prerequisites if
            they aren't already present:
            <pre className="code-block">
              <code>{`$ ssh root@<YOUR_VPS_IP_ADDRESS>
$ apt update && apt install -y git docker.io docker-compose-plugin`}</code>
            </pre>
          </li>
        </ol>
      </section>
    </main>
  );
}
