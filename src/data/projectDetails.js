export const projectDetails = {
  "ta-allocation-system": {
    title: "TA Allocation & Management System",
    sections: [
      {
        heading: "Overview",
        body: "A full-stack web platform built to streamline TA hiring, allocation, and management across academic courses. Coordinators can create courses and assign TAs, while students submit applications with availability, experience, and preferences.",
      },
      {
        heading: "Design Process",
        body: "Our design process began with stakeholder interviews involving instructors, coordinators, and students to map workflow pain points. We translated these findings into low-fidelity wireframes, iterated through feedback sessions, and finalized the high-fidelity mockups in Figma.",
        images: ["/images/ta_process_diagram.png"],
      },
      {
        heading: "System Architecture",
        body: "The system uses a Django REST backend with a React frontend. MySQL serves as the database, while a resume-matching feature leverages a large language model (LLM) to assist coordinators during TA assignment.",
        images: ["/images/ta_architecture.png"],
      },
      {
        heading: "Reflection",
        body: "This project taught me how to bridge design thinking and real-world engineering constraints. I learned the importance of aligning user needs with backend logic and managing team coordination across front- and backend workflows.",
      },
    ],
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
        body: "Atmospheric hummingbird flight prototype exploring natural motion, camera design, and responsive animation blending in Unity.",
      },
    ],
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
