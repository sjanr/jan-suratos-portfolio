import { useEffect } from "react";
import "./About.css";

function About() {
  useEffect(() => {
    const gif = document.querySelector(".dancer-gif");
    const dancerText = document.querySelector(".dancer-text");

    if (!gif || !dancerText) return;

    const moveGif = (e) => {
      gif.style.left = `${e.clientX + 24}px`;
      gif.style.top = `${e.clientY - 170}px`;
    };

    dancerText.addEventListener("mousemove", moveGif);

    return () => {
      dancerText.removeEventListener("mousemove", moveGif);
    };
  }, []);
  return (
    <section id="about">
      <div className="about-container">
        <h2>About Me</h2>
        <p>
          Good tools get out of the way. Every second a user spends fighting
          their software is a second they’re not doing what they actually came
          to do. That’s the problem I want to spend my career solving.
        </p>

        <p>
          I came to computer science through biology, and that lens never left.
          I’m drawn to biomimicry, not as aesthetic inspiration, but as
          engineering logic. Organic systems are adaptive, efficient, and deeply
          responsive to their environment. That’s what I want from software. In
          my Game of Amazons AI (a chess-like strategy game), I used Voronoi patterns to give it a spatial
          awareness, a way to read and react to its surroundings the way living
          systems do.
        </p>

        <p>
          I think about the full system, not just the surface. A door handle
          that makes you pull when you should push isn’t a bad handle; it’s a
          failure of the whole interaction model. I bring that same lens to
          every project: where does the friction live, what’s the invisible tax
          on the user’s attention, and how do I remove it? Tools &amp; Layout
          sits at exactly that intersection, where technical systems directly
          shape what ends up on screen. That’s where I want to work.
        </p>

        <p>
          I’m creative, curious, and maybe a little too detail-oriented. But I love what
          I do. Whether it’s coding, prototyping, or dancing between logic and intuition (
          <span className="dancer-text">
            no, seriously, I’m actually a dancer
            <img
              src="/images/dancer.gif"
              alt="Jan dancing"
              className="dancer-gif"
            />
          </span>
          ), my goal is the same: to build systems that don’t just function beautifully,
          but feel beautifully.
        </p>
      </div>
    </section>
  );
}

export default About;
