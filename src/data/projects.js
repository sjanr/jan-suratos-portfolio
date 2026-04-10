export const projectGroups = [
  {
    title: "Interactive Worlds & Gameplay Systems",
    subtitle:
      "Games and prototypes exploring motion, responsiveness, and narrative through interaction.",
    projects: [
      {
        id: "wings-of-legacy",
        title: "Wings of Legacy",
        description:
          "Third-person hummingbird flight game with a custom controller, Cinemachine camera, and tuned lift and drag to capture real bird agility.",
        image: "/images/wingsOfLegacy_v2.gif",
        tags: ["Unity", "Narrative", "Game Design"],
      },
      {
        id: "ice-climber-twist",
        title: "Ice Climber: Twist",
        description: "Classic Ice Climber rebuilt with slope physics, wind zones, and unstable platforms to create a more dynamic climb.",
        image: "/images/iceClimberTwist_v2.gif",
        tags: ["Unity", "Game Physics", "Animation"],
      },
      // {
      //   id: "webgl-hit-testing",
      //   title: "WebGL: Spherical Hit-Testing",
      //   description: "WebGL experiment with interactive targets on a 3D sphere.",
      //   image: "/images/WEBGL.gif",
      //   tags: ["WebGL", "3D Interaction", "JavaScript"],
      //   link: "#",
      // },
    ],
  },

  {
    title: "Architecture & System Design",
    subtitle: "Where computation, architecture, and thoughtful design meet.",
    projects: [
      {
        id: "ta-allocation-system",
        title: "TA Allocation & Management System",
        description:
          "Full-stack platform replacing spreadsheets with a React + Django system for TA applications, instructor requests, and LLM-powered matching.",
        image: "/images/TALLOC.gif",
        tags: ["Full Stack", "React", "Django", "LLM"],
      },
      {
        id: "game-of-amazons-ai",
        title: "Game of Amazons AI",
        description:
          "3rd place out of 22 teams. AI agent with a bio-inspired Voronoi heuristic that treats the board as a living territory map.",
        image: "/images/gameOfAmazons_v2.gif",
        tags: ["AI", "Heuristics", "Game Logic"],
      },
      {
        id: "nucleotide-visualizer",
        title: "DNA → Amino Acid Translator",
        description:
          "Translates raw DNA sequences into color-coded amino acid blocks, making the codon translation process visual and interactive.",
        image: "/images/AMINO.gif",
        tags: ["Data Visualization", "Biology", "Creative Coding"],
      },
      // {
      //   id: "weather-forecast-app",
      //   title: "Weather Forecast Web App",
      //   description:
      //     "Responsive weather dashboard with live API data integration.",
      //   image: "/images/WEATHER_v4.gif",
      //   tags: ["Frontend", "API", "Team Project", "UX"],
      //   link: "#",
      // },
    ],
  },

  {
    title: "Creative Technology & Digital Expression",
    subtitle:
      "Projects merging human emotion, reflection, and digital craft.",
    projects: [
      {
        id: "eudaimonia",
        title: "Eudaimonia",
        description:
          "Solo-built wellness app with AI-guided advice, a prompted journal, Pomodoro timer, and creativity board — all wired to a Node/Express backend.",
        image: "/images/eudaimoniaMenu.gif",
        tags: ["React", "Node", "UX", "AI"],
      },
      {
        id: "blender-showcase",
        title: "Hummingbird Animation",
        description:
          "Modeled, rigged, and animated a hummingbird from scratch using slow-motion flight footage to replicate the figure-eight wingbeat pattern.",
        image: "/images/compressed_HoverWings.mp4",
        tags: ["Blender", "Rigging", "Animation"],
      },
    ],
  },
];
