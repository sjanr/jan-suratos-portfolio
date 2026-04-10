export const projectDetails = {
    "ta-allocation-system": {
    title: "TA Allocation & Management System",
    sections: [
      {
        heading: "Overview",
        body: `
        The TA Allocation & Management System was developed as part of UBC Okanagan’s Software Engineering Capstone, where we applied the full software development lifecycle: from requirements analysis to deployment. Through this project, I learned how to translate user needs into concrete features, coordinate across frontend and backend teams, and iterate based on real client feedback. The result was a centralized web platform that replaced the fragmented spreadsheets and emails once used for managing teaching assistant allocations.
        `,
        images: ["/images/portfolio-talloc-1-v2.png"],
        className: "modal-image--overview"

      },
      {
        heading: "My Role",
        body: `
        As Frontend Lead, I was responsible for prototyping in Figma and translating those designs into an interactive, user-oriented system built with React. My main goal was to accommodate busy academic users by understanding how they interacted with the platform in their daily routines, ensuring each flow supported intuitive task completion. I contributed across the entire frontend, developing core workflows such as the Student Application Form, Coordinator Dashboard, and TA Request process, while maintaining consistency in layout, responsiveness, and accessibility. Each iteration was guided by peer usability testing, client feedback, and team collaboration, which helped refine the system for clarity and real-world efficiency.
        `,
        images: ["/images/portfolio-talloc-2-v3.png"],
        className: "modal-image--role"
      },
      {
        heading: "Design & Development Process",
        body: `
        I used the functional and non-functional requirements we defined at the start of the project to guide every design decision. I began with paper sketches to explore how users would move through the interface, then mapped those flows in FigJam to visualize each interaction and transition. These early drafts evolved into high-fidelity Figma prototypes that were refined through daily standups and weekly client demos. We conducted ongoing peer usability testing, turning feedback into interface adjustments that reduced friction and made interactions feel more natural. During development, I maintained stability as backend endpoints evolved, adapting data-fetching logic and re-testing components to ensure consistency and responsiveness.
        `,
        images: ["/images/portfolio-talloc-3-v2.jpg"],
        className: "modal-image--process"
      },
      {
        heading: "Team Collaboration",
        body: `
        Our collaboration emphasized feedback and shared ownership across all roles.
        I communicated the core user experience vision while working with another developer to implement Figma components and ensure the interface remained consistent in production.
        We coordinated with the backend team to align endpoints with frontend data needs, documenting issues in Google Docs and holding quick integration check-ins when mismatches occurred.
        Daily standups, GitHub Kanban tracking, and a two-approval pull request system kept our workflow organized, while weekly client meetings allowed us to present progress and gather feedback.
        `,
        images: ["/images/portfolio-talloc-4.png"],
        className: "modal-image--collaboration"
      },
      {
        heading: "Architecture",
        body: `
        Frontend: React + Vite<br>
        Backend: Django REST Framework (Python)<br>
        Database: MySQL<br>
        AI Integration: Ollama (local LLM for resume parsing and skill extraction)<br>
        Deployment: Dockerized services managed with Nginx as a reverse proxy<br><br>

        The architecture supports role-based access, secure authentication, TA application tracking, instructor request submissions, and a drag-and-drop coordinator dashboard. Automated email notifications and LLM-powered matching logic help streamline allocation and maintain data consistency across all user roles.
        `,
        images: ["/images/portfolio-talloc-5.png"],
        className: "modal-image--architecture"
      },
      {
        heading: "Reflection",
        body: `
        This project taught me to adapt quickly as technical requirements evolved, translating feedback from both clients and users into design decisions that improved clarity and flow. It strengthened my ability to think systemically: balancing usability, maintainability, and aesthetics, and it reinforced my belief that the best engineering outcomes come from empathy and iteration.
        `
      }
    ]
  },


  "game-of-amazons-ai": {
    title: "Game of Amazons AI",
    sections: [
      {
        heading: "Overview",
        body: `A competitive AI agent built for the Game of Amazons tournament at UBC Okanagan, placing <strong>3rd out of 22 teams</strong>. While my team implemented the search and optimization systems, I focused on the heuristic design: developing a Voronoi-based territory evaluation to make the AI think more spatially and organically.`,
        images: ["/images/portfolio-amazons-certificate.png"],
        className: "modal-image--overview",
      },
      {
        heading: "My Role",
        body: `The heuristic was my contribution to the team. I saw the board as an environment and the queens as organisms competing for territory, not just pieces optimizing moves. That biological lens pointed me toward Voronoi naturally. I didn't have deep experience with the underlying math, so I used AI tools to accelerate my understanding and sharpen the implementation. The conceptual direction, and the decision to pursue it, was something I arrived at on my own. The Voronoi evaluation assigns each empty cell on the board to whichever queen can reach it first, giving the AI a real-time map of territorial control that guides every decision.`,
        images: ["/images/portfolio-amazons-screenshot.jpg"],
        className: "modal-image--role",
      },
      {
        heading: "Tech Stack",
        body: `Language: Java<br>
Algorithms: Minimax Search, Alpha–Beta Pruning, Iterative Deepening<br>
Optimization: Zobrist Hashing, Transposition Table (Memoization)<br>
Heuristic Design: Voronoi Territory Evaluation<br>
Tools: SmartFox Server, Git, IntelliJ IDEA`,
        className: "modal-image--architecture",
      },
      {
        heading: "Reflection",
        body: `This project reflects my drive to merge computational logic with creative reasoning. By introducing a bio-inspired heuristic, I reimagined board evaluation as a living system of influence and adaptation. What started as a standard AI assignment turned into an exploration of how geometry and biology can inform intelligent design.`,
      },
    ],
  },

  "nucleotide-visualizer": {
    title: "Nucleotide → Amino Acid Visualizer",
    sections: [
      {
        heading: "Overview",
        body: "A tool that translates raw DNA sequences into their corresponding amino acids, codon by codon. Each result is rendered as an interactive block showing both the codon and the amino acid it encodes, making the translation process tangible rather than abstract.",
        images: ["/images/portfolio-amino-screenshot.png"],
        className: "modal-image--overview",
      },
      {
        heading: "Why I Built It",
        body: "Biology has always been part of how I think about computation. This project sits at that intersection: it takes a process that happens invisibly inside every living cell and makes it something you can actually see and interact with. It also gave me a chance to practice vanilla JavaScript without leaning on a framework.",
      },
      {
        heading: "Tech Stack",
        body: "HTML, CSS, JavaScript (no frameworks)",
        className: "modal-image--architecture",
      },
    ],
  },

  "weather-forecast-app": {
    title: "Weather Forecast Web App",
    sections: [
      {
        heading: "Overview",
        body: "Responsive React app that fetches and displays real-time weather data from the OpenWeather API. Designed with user accessibility and visual clarity in mind.",
      },
    ],
  },

  "wings-of-legacy": {
    title: "Wings of Legacy",
    sections: [
      {
        heading: "Overview",
        body: `
        Wings of Legacy is a personal Unity project where I set out to build a responsive, third-person hummingbird flight game. 
        It began as a small experiment in movement and camera feel, but grew into a full exploration of character controllers, animation systems, 
        level flow, and intentional game feel-driven entirely by my curiosity and iterative practice.
        `,
        images: ["/images/portfolio-wol-1.png"],
        className: "modal-image--overview"
      },
      {
        heading: "My Role",
        body: `
        As the sole developer, I handled design, programming, animation, and world setting. 
        I built the flight mechanics, camera behavior, and animation state machine, while also shaping the narrative and tone. 
        This project became my space to practice Unity fundamentals and push myself beyond coursework.
        `,
        images: ["/images/portfolio-wol-2.png"],
        className: "modal-image--role"
      },
      {
        heading: "Flight Mechanics",
        body: `
        I built a custom controller that mimics how hummingbirds actually move, quick directional changes, controlled hovering, and short bursts of acceleration. 
        I tuned lift, drag, and turn responsiveness to capture a sense of real bird agility. 
        The camera gently follows the bird’s momentum, and its rotation influences steering, creating a horizontal “look where you fly” experience. 
        Most of the work came from iterative adjustments to forces, acceleration curves, and camera damping to make the motion feel believable.
        `,
        images: ["/images/portfolio-wol-3.png"],
        className: "modal-image--mechanics"
      },
      {
        heading: "Reflection",
        body: `
        This project showed me how much of game feel depends on careful iteration, observation, and performance tuning. 
        Handling everything myself taught me how to solve problems creatively while keeping the experience smooth and responsive. 
        A major part of the work was optimizing the core flight loop so movement felt fluid with no stutter or input lag, which dramatically improved player comfort. 
        Wings of Legacy represents my growth as a self directed developer who cares deeply about polish and making interactive systems feel alive.
        `
      },
      {
        heading: "Tech Stack",
        body: `
        Modeling, Rigging, Animation: Blender<br>
        Engine: Unity<br>
        Scripting: Unity (C#)<br>
        Camera System: Cinemachine<br>
        Version Control: GitHub<br><br>
        `,
        className: "modal-image--architecture"
      }

    ]
  },



  "ice-climber-twist": {
    title: "Ice Climber: Twist",
    sections: [
      {
        heading: "Overview",
        body: `
        Ice Climber: Twist is a reinterpretation of the classic Ice Climber, rebuilt in Unity. The project explores how small mechanical
        changes: slopes, wind, and moving platforms can transform the feel of the original.
        `,
        images: ["/images/portfolio-retro-1.png"],
        className: "modal-image--overview"
      },
      {
        heading: "My Role",
        body: `
        I designed the sloped mountain layout, and implemented new 
        environmental interactions which will be explained in the second after. 
        I also created the camera follow system and animated the player’s run, jump, and fall states, 
        editing pixel sprites for the mountain aesthetic.
        `,
        images: ["/images/portfolio-retro-2.png"],
        className: "modal-image--role"
      },
      {
        heading: "Gameplay & Systems",
        body: `
        The level is structured around controlled difficulty escalation: gentle slopes, 
        wind zones force timing-based jumps, and unstable platforms. 
        I tuned player physics, slope behavior, and hazard pacing to create a more dynamic and responsive climb 
        while retaining the charm of the original arcade concept.
        `,
        images: [
          "/images/portfolio-retro-3.png",
        ],
        className: "modal-image--mechanics"
      },
      {
        heading: "Reflection",
        body: `
          This project strengthened my ability to combine level design, environmental logic, and animation. Working within the constraints of a retro aesthetic pushed me to be 
          deliberate with small details. 
          Collaborating with a group of creative individuals also introduced moments of clashing ideas, 
          but navigating those differences taught me effective ways to communicate, defend design 
          choices with clarity, and find solutions that served the project as a whole. This project represents 
          how I elevate existing mechanics into more atmospheric experiences while growing as a 
          collaborative developer.
        `
      },
      {
        heading: "Tech Stack",
        body: `
        Engine: Unity<br>
        Programming: C#<br>
        Version Control: GitHub<br>
        Animation: Unity Animator<br>
        `,
        className: "modal-image--architecture"
      },
    ],
  },

  "webgl-hit-testing": {
    title: "WebGL: Spherical Hit-Testing",
    sections: [
      {
        heading: "Overview",
        body: "An interactive WebGL experiment enabling users to click on 3D bacteria models mapped to a sphere using pixel-based hit-testing and GLSL shaders.",
      },
    ],
  },

  "eudaimonia": {
    title: "Eudaimonia",
    sections: [
      {
        heading: "Overview",
        body: "A personal wellness app built around the Greek concept of self-flourishing. Eudaimonia brings together five tools in one place: AI-guided advice, a guided journal, a Pomodoro focus timer, a task tracker, and a creativity board. The goal was to build something that felt more like a space than a utility.",
        images: ["/images/eudaimoniaMenu.gif"],
        className: "modal-image--overview",
      },
      {
        heading: "AI Advice",
        body: "Users can write freely about what they are feeling, and the app sends that to the OpenAI API with a custom prompt that frames the response as a therapist guiding the user toward eudaimonia. The tone is warm and personal rather than generic.",
        images: ["/images/portfolio-eudaimonia-advice.png"],
        className: "modal-image--role",
      },
      {
        heading: "Journal",
        body: "The journal generates mindfulness prompts from a curated set stored on the backend. Entries are saved with a timestamp and can be reviewed later. The prompts are designed to encourage reflection rather than just logging.",
        images: ["/images/portfolio-eudaimonia-journal.png"],
        className: "modal-image--process",
      },
      {
        heading: "Tech Stack",
        body: "Frontend: React, React Router<br>Backend: Node.js, Express<br>AI: OpenAI API (GPT-3)<br>Data: JSON file persistence<br>Deployment: Heroku",
        className: "modal-image--architecture",
      },
      {
        heading: "Reflection",
        body: "This was a solo project I built because I wanted to make something that felt genuinely useful to me. It pushed me to wire together a full frontend and backend, integrate an external AI API, and think carefully about how the design and tone of an app can shape how a person actually feels using it.",
      },
    ],
  },

  "blender-showcase": {
    title: "Hummingbird Animation",
    sections: [
      {
        heading: "Overview",
        body: "A Blender modeling and animation project inspired by the aerodynamics of real hummingbirds. I modeled, rigged, and animated the bird from scratch, studying slow-motion flight footage to replicate the natural figure-eight wing pattern that enables hovering.",
        images: ["/images/portfolio-blender-1.png"],
        className: "modal-image--overview",
      },
      {
        heading: "Modeling & Rigging",
        body: "The topology was built to deform naturally during animation, with particular attention to the wing structure. I used anatomical reference images as overlays directly in Blender to match the geometry to real proportions.",
        images: ["/images/portfolio-blender-2.png", "/images/portfolio-blender-3.png"],
        className: "modal-image--role",
      },
      {
        heading: "Animation",
        body: "Each movement was crafted to feel believable — from the subtle body tilt to the wing elasticity. The heat map shows the weight painting used to control how the rig deforms the mesh during the wingbeat cycle.",
        images: ["/images/portfolio-blender-4.png"],
        className: "modal-image--process",
      },
      {
        heading: "Reflection",
        body: "This project taught me that biomimicry works in animation the same way it works in engineering: the closer you study how something actually moves, the more convincing your result. That principle carries into every creative-tech project I build.",
      },
      {
        heading: "Tech Stack",
        body: "Modeling, Rigging, Animation: Blender<br>Reference: High-speed flight footage, anatomical reference images",
        className: "modal-image--architecture",
      },
    ],
  },
};
