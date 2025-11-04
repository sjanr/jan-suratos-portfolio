import { useEffect } from "react";
import "./About.css";

function About() {
  useEffect(() => {
    const gif = document.querySelector(".dancer-gif");
    const dancerText = document.querySelector(".dancer-text");

    if (!gif || !dancerText) return;

    const moveGif = (e) => {
      gif.style.left = `${e.clientX + 30}px`;
      gif.style.top = `${e.clientY - 50}px`;
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
          I’m Jan Suratos. I build systems that feel
          alive because, to me, technology only becomes meaningful when people
          can feel it respond. Every interface, animation, and behavior I design
          is guided by user empathy, that small but essential question:
          <em> “Does this feel right to interact with?”</em>
        </p>

        <p>
          I originally started in biology before moving into computer science,
          and that curiosity still shapes how I think. I love biomimicry, not
          because it sounds cool in a portfolio, but because nature has already
          solved problems we’re still learning to understand. Biological systems
          are efficient, and deeply optimized. I don’t claim to grasp
          it all, but I find beauty in studying how those principles can inform
          software. In my AI project below, I used Voronoi patterns to give an AI a sense of space, 
          a way to react to its environment the way living systems do.
        </p>

        <p>
          I approach design from both emotion and logic. I like to look at the
          world systematically, whether it’s a door handle that confuses you
          into pulling when you should push, or an interface that makes you work
          harder than you need to. My instinct is to fix it, refine it, make it
          feel effortless. That’s the engineer in me. But the artist in me wants
          it to feel crafted, honed, maybe even chasing a personal
          <em> magnum opus</em>.
        </p>

        <p>
          I’m creative, curious, and maybe a little too detail-oriented. But I love what
          I do. Whether it’s coding, prototyping, or dancing between logic and intuition
          (<span className="dancer-text">
            no, seriously, I’m actually a dancer
            <img
              src="/images/dancer.gif"
              alt="Jan dancing"
              className="dancer-gif"
            />
          </span>
          ), my goal is the same, to build systems that don’t just function beautifully,
          but feel beautifully.
        </p>
      </div>
    </section>
  );
}

export default About;
