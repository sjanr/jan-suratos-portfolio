import "./Courses.css";

function Courses() {
  return (
    <section id="courses" className="courses">
      <div className="courses-container fade-in">

        <div className="courses-title">Courses That Broke (and Built) Me</div>

        <div className="course-entry">
          <div className="course-name">COSC 441 Advanced Human–Computer Interaction</div>
          <div className="course-grade">Final Grade: 85%</div>
          <p className="course-description">
            This course redefined my understanding of design as both an empathetic and evidence-driven practice. I 
            learned to conduct usability studies, analyze behavioral data, and turn user feedback 
            into concrete design decisions. Each project went through the full design cycle, 
            sketching, wireframing, prototyping, testing, and iterating. At every step, empathy guided my design decisions by anticipating 
            how users would feel, and think through interactions. I really fell in love with designing 
            experiences that feel intuitive to the users.
          </p>
        </div>

        <div className="course-entry">
          <div className="course-name">COSC 416A Game Development with Unity</div>
          <div className="course-grade">Final Grade: 91%</div>
          <p className="course-description">
            I had experimented with Unity before, but this was the first time I approached it with 
            real structure and process. The course gave me the space to merge engineering and creative 
            storytelling, to design systems that are enjoyable for the player. I learned how 
            to turn rough ideas into functional prototypes, gather feedback, and iterate until mechanics 
            and motion worked together. It was challenging, technical, and deeply creative.
          </p>
        </div>

        <div className="course-entry">
          <div className="course-name">COSC 414 Computer Graphics</div>
          <div className="course-grade">Final Grade: 84%</div>
          <p className="course-description">
            I took this course to understand how digital worlds are built at their core. We explored 
            the mathematics and algorithms behind lighting, camera transformations, and rendering, 
            the systems that shape everything in modern game engines. Learning how visuals are computed 
            gave me a deeper appreciation for the structure behind what we see on screen, and how design 
            and computation constantly work together.
          </p>
        </div>

        <div className="course-entry">
          <div className="course-name">BIOL 341 Neurobiology</div>
          <div className="course-grade">Final Grade: 86%</div>
          <p className="course-description">
            I’ve always been fascinated by biomimicry, the idea that nature already holds blueprints 
            for better systems. This course deepened that fascination. Studying how the brain processes 
            information across its many networks, from learning to memory and adaptation, showed me 
            just how closely biological intelligence mirrors the logic of software. Every mechanism 
            we studied, feedback, reinforcement, and pattern recognition, reflected a principle 
            I’d later see in computation. It was the moment I realized that many of the problems engineers 
            try to solve have already been answered in nature, we just have to learn how to translate them.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Courses;
