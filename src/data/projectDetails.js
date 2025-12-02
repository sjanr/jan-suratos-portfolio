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
        body: "Strategic AI agent using a Voronoi-inspired heuristic to evaluate territory and simulate biologically-inspired spatial awareness and competition.",
      },
    ],
  },

  "nucleotide-visualizer": {
    title: "Nucleotide → Amino Acid Visualizer",
    sections: [
      {
        heading: "Overview",
        body: "A creative educational tool that visualizes how DNA codons translate into amino acids. Built with JavaScript, it transforms biological data into interactive color-coded representations.",
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
      }

    ]
  },



  "ice-climber-twist": {
    title: "Ice Climber: Twist",
    sections: [
      {
        heading: "Overview",
        body: "A reinterpretation of the NES classic with modern jump physics and animation responsiveness. Developed in Unity with C#.",
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
        body: "An interactive journaling and reflection app blending mindfulness with AI-assisted affirmations. Designed to encourage clarity and emotional awareness.",
      },
    ],
  },

  "blender-showcase": {
    title: "Blender Modelling & Rigging Showcase",
    sections: [
      {
        heading: "Overview",
        body: "A collection of 3D modeling, rigging, and animation studies. Demonstrates iterative refinement of topology, deformation, and weight-painting workflows.",
      },
    ],
  },
};
