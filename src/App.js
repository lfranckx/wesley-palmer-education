import React, { useMemo, useState } from "react";
import "./App.css";

import heroDesktop from "./assets/hero-design-desktop.jpg";
import heroMobile from "./assets/mobile-banner-hero.jpg";
import logoWhite from "./assets/WPE_Logo_White-2.png";

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
      {/* TOP NAV */}
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
              Sign Up
            </a>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <header className="hero" id="top" aria-label="Wesley Palmer Coming Soon">
        <picture>
          <source media="(max-width: 768px)" srcSet={heroMobile} />
          <img
            src={heroDesktop}
            alt="Wesley Palmer Education coming soon"
            className="hero__image"
          />
        </picture>
      </header>

      {/* SIGNUP */}
      <main className="main">
        <section className="signup" id="signup" aria-label="Newsletter signup">
          <div className="signup__header">
            <h1>Brand &amp; Education System Coming Soon!</h1>
            <p>
              Be the first to know by filling out the form — and feel free to
              leave me a message about who you are and what you’d like to see in
              the mix.
            </p>
          </div>

          <form className="form" onSubmit={handleSubmit}>
            <div className="grid">
              <label className="field">
                <span className="label">First name</span>
                <input
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  placeholder="First name"
                />
              </label>

              <label className="field">
                <span className="label">Last name</span>
                <input
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  placeholder="Last name"
                />
              </label>
            </div>

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

            <label className="field">
              <span className="label">Message</span>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me who you are + what you’d love to learn or build."
              />
            </label>

            <label className="checkbox">
              <input name="consent" type="checkbox" required />
              <span>
                I agree to receive updates from Wesley Palmer. Unsubscribe
                anytime.
              </span>
            </label>

            <button
              className="button"
              type="submit"
              disabled={status.state === "loading"}
            >
              {status.state === "loading" ? "Sending..." : "Notify Me"}
            </button>

            {status.state === "success" && (
              <div className="notice success" role="status">
                {status.message}
              </div>
            )}

            <div className="microcopy">
              No spam. Just updates when things go live.
            </div>
          </form>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__left">© {year} Wesley Palmer</div>

          <div className="footer__right">
            <a href="#signup" className="footerLink">
              Newsletter
            </a>
            <span className="dot" aria-hidden="true">
              •
            </span>
            <a
              href="https://www.instagram.com/wesdoeshair"
              target="_blank"
              rel="noreferrer"
              className="footerLink"
              onClick={(e) => e.preventDefault()}
            >
              Instagram
            </a>
            <span className="dot" aria-hidden="true">
              •
            </span>
            <a
              href="https://www.youtube.com/user/WesDoesHair"
              target="_blank"
              rel="noreferrer"
              className="footerLink"
              onClick={(e) => e.preventDefault()}
            >
              YouTube
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;