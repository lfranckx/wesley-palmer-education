import React, { useMemo, useState } from "react";
import "./App.css";

import heroDesktop from "./assets/hero-design-desktop.jpg";
import heroMobile from "./assets/mobile-banner-hero.jpg";
import logoWhite from "./assets/WPE_Logo_White_cropped_2.png";

function App() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    console.log("Coming Soon Form Payload:", payload);

    window.setTimeout(() => {
      setStatus({
        state: "success",
        message: "You’re on the list. Appreciate you — we’ll be in touch soon.",
      });
      e.currentTarget.reset();
    }, 650);
  };

  return (
    <div className="page">
      <div className="topbar">
        <div className="topbar__inner">
          <a className="topbar__brand" href="#top" aria-label="Wesley Palmer Home">
            <img
              className="topbar__logo"
              src={logoWhite}
              alt="Wesley Palmer Education"
            />
          </a>

          <nav className="topbar__nav">
            <a className="topbar__link" href="#signup">
              Join the Waitlist
            </a>
          </nav>
        </div>
      </div>

      <header className="hero" id="top" aria-label="Wesley Palmer Education Coming Soon">
        <div className="hero__media">
          <picture>
            <source media="(max-width: 768px)" srcSet={heroMobile} />
            <img
              src={heroDesktop}
              alt="Wesley Palmer Education coming soon"
              className="hero__image"
            />
          </picture>

          <div className="hero__copy">
            <img
              src={logoWhite}
              alt="Wesley Palmer Education"
              className="hero__logoDesktop"
            />
            <h1>The Next Chapter of Hair Education Is Coming.</h1>
            <p>
              Built for stylists who want more than inspiration — real technique,
              real growth, real results.
            </p>

            <a className="hero__cta" href="#signup">
              Join the Waitlist
            </a>

            <div className="hero__subcta">
              Be the first to access + get early pricing
            </div>
          </div>

          <img
            src={logoWhite}
            alt="Wesley Palmer Education"
            className="hero__mobileLogo"
          />
        </div>
      </header>

      <main className="main">
        <section className="signup" id="signup" aria-label="Waitlist signup">
          <div className="signup__header">
            <h2>Get Early Access</h2>
            <p>
              I’m building something different — and before it launches, I want
              you inside.
            </p>
          </div>

          <div className="signup__bullets">
            <div>Get early access</div>
            <div>Unlock first-access member pricing</div>
            <div>Be first to experience the platform</div>
          </div>

          <form className="form" onSubmit={handleSubmit}>
            <label className="field">
              <span className="label">First name</span>
              <input
                name="firstName"
                type="text"
                autoComplete="given-name"
                placeholder="First name"
                required
              />
            </label>

            <label className="field">
              <span className="label">Email</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@domain.com"
                required
              />
            </label>

            <button
              className="button"
              type="submit"
              disabled={status.state === "loading"}
            >
              {status.state === "loading" ? "Sending..." : "Reserve Your Spot"}
            </button>

            {status.state === "success" && (
              <div className="notice success" role="status">
                {status.message}
              </div>
            )}

            <div className="microcopy">
              No spam. Just updates when we go live.
            </div>
          </form>
        </section>

        <section className="positioning">
          <div className="contentBlock">
            <h2>Why This Exists</h2>
            <p>
              There’s no shortage of education in this industry. But there is a
              gap between what’s available… and what actually helps behind the
              chair.
            </p>
            <p>This platform is built to close that gap.</p>

            <ul className="featureList">
              <li>Real techniques you can use immediately</li>
              <li>
                Business + social strategies that actually grow your income
              </li>
              <li>
                Education designed for working stylists — not just inspiration
              </li>
            </ul>
          </div>
        </section>

        <section className="tiers">
          <div className="contentBlock">
            <h2>What You’ll Get Access To</h2>

            <div className="tierGrid">
              <article className="tierCard">
                <h3>Core Library</h3>
                <ul>
                  <li>Foundational cutting + color</li>
                  <li>12 core videos</li>
                  <li>Watch anytime, anywhere</li>
                </ul>
              </article>

              <article className="tierCard">
                <h3>Advanced Learning</h3>
                <ul>
                  <li>Live coaching sessions (quarterly)</li>
                  <li>Deeper technique breakdowns</li>
                  <li>Real-time Q&amp;A</li>
                </ul>
              </article>

              <article className="tierCard">
                <h3>Mentorship Access</h3>
                <ul>
                  <li>1:1 sessions with Wes</li>
                  <li>Personalized growth plans</li>
                  <li>Business + brand strategy</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="momentum">
          <div className="contentBlock">
            <h2>Built in Real Time</h2>
            <p>
              Wes’s platforms are growing fast — across Instagram, TikTok,
              YouTube, and Facebook — with thousands of new followers each month
              and consistent monetization through content.
            </p>
            <p>This platform is the next evolution.</p>
          </div>
        </section>

        <section className="finalCta">
          <div className="contentBlock finalCta__inner">
            <h2>Don’t Miss This Launch</h2>
            <p>
              This is your chance to get in early — at the lowest price it will
              ever be.
            </p>
            <a href="#signup" className="button button--link">
              Join the Waitlist
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__left">
            <img
              className="footer__logo"
              src={logoWhite}
              alt="Wesley Palmer Education"
            />
            <div className="footer__copyright">© {year} Wesley Palmer</div>
            <div className="footer__tagline">Launching soon. Stay tuned.</div>
          </div>

          <div className="footer__right">
            <a href="#signup" className="footerLink">
              Waitlist
            </a>
            <span className="dot" aria-hidden="true">
              •
            </span>
            <a
              href="https://www.instagram.com/wesdoeshair/"
              target="_blank"
              rel="noreferrer"
              className="footerLink"
            >
              Instagram
            </a>
            <span className="dot" aria-hidden="true">
              •
            </span>
            <a
              href="https://www.tiktok.com/@wesdoeshair"
              target="_blank"
              rel="noreferrer"
              className="footerLink"
            >
              TikTok
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;