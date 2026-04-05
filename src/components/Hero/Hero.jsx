import "./Hero.css";
import { useMemo } from "react";

const STAR_COUNT = 80;

function Hero() {
  const stars = useMemo(() => {
    return Array.from({ length: STAR_COUNT }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      animationDelay: `${(Math.random() * 4).toFixed(2)}s`,
      animationDuration: `${(Math.random() * 3 + 2).toFixed(2)}s`,
    }));
  }, []);

  return (
    <section className="hero">
      {/* Background stars */}
      <div className="hero-stars" aria-hidden="true">
        {stars.map((star) => (
          <span
            key={star.id}
            className="hero-star"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: star.animationDelay,
              animationDuration: star.animationDuration,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="hero-content">

        {/* Eyebrow */}
        <div className="hero-eyebrow" style={{ animationDelay: "0.1s" }}>
          <span className="hero-eyebrow-rule" />
          <span className="hero-eyebrow-text">Creative Systems Engineer</span>
          <span className="hero-eyebrow-rule" />
        </div>

        {/* Name block */}
        <div className="hero-name-block">
          <div className="hero-name hero-name--solid" style={{ animationDelay: "0.25s" }}>
            Jan
          </div>
          <div className="hero-name hero-name--outlined" style={{ animationDelay: "0.4s" }}>
            Suratos
          </div>
        </div>

        {/* Divider with tagline */}
        <div className="hero-divider" style={{ animationDelay: "0.65s" }}>
          <span className="hero-divider-line" />
          <span className="hero-divider-dot" aria-hidden="true" />
          <span className="hero-tagline">Systems that feel alive</span>
          <span className="hero-divider-dot" aria-hidden="true" />
          <span className="hero-divider-line" />
        </div>

        {/* Descriptors */}
        <div className="hero-descriptors" style={{ animationDelay: "0.8s" }}>
          <span>Games &amp; interactive worlds</span>
          <span className="hero-descriptor-sep" aria-hidden="true">·</span>
          <span>Tools &amp; pipelines</span>
          <span className="hero-descriptor-sep" aria-hidden="true">·</span>
          <span>UI systems</span>
        </div>

        {/* CTA Buttons */}
        <div className="hero-buttons" style={{ animationDelay: "1.0s" }}>
          <a href="#portfolio" className="hero-btn hero-btn--primary">View my work</a>
          <a href="#about" className="hero-btn hero-btn--secondary">About me</a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint" aria-label="Scroll down">
        <div className="hero-scroll-hint-inner">
          <span className="hero-scroll-label">scroll</span>
          <span className="hero-scroll-line" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
