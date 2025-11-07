export const projects = [
  {
    id: 1,
    title: "Bionic Arm Project",
    description: "Tendon-driven robotic arm using servo motors and Arduino Nano. Implements precise finger movement through cable actuation system, capable of performing complex grasping tasks.",
    technologies: ["Arduino", "Servo Motors", "C++", "3D Printing", "CAD Design"],
    image: "/images/bionic-arm.jpg",
    github: "https://github.com/tyrese/bionic-arm",
    demo: null,
    featured: true
  },
  {
    id: 2,
    title: "Smart Walker with Health Sensors",
    description: "Assistive device integrating health monitoring sensors, fall detection, and real-time data tracking. Designed to improve mobility and safety for elderly users.",
    technologies: ["Arduino", "IoT Sensors", "Health Monitoring", "C++", "Bluetooth"],
    image: "/images/smart-walker.jpg",
    github: "https://github.com/tyrese/smart-walker",
    demo: null,
    featured: true
  },
  {
    id: 3,
    title: "Elliptical Filter Design",
    description: "4th and 6th order elliptical filter design and simulation using MATLAB. Comprehensive analysis of frequency response and practical applications in signal processing.",
    technologies: ["MATLAB", "Signal Processing", "Filter Design", "Mathematical Modeling"],
    image: "/images/filter-design.jpg",
    github: "https://github.com/tyrese/elliptical-filters",
    demo: null,
    featured: true
  },
  {
    id: 4,
    title: "Random Quote Generator",
    description: "Interactive React application that displays inspirational quotes with a modern, responsive design. Features quote sharing functionality and smooth animations.",
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
    image: "/images/quote-generator.jpg",
    github: "https://github.com/tyrese/quote-generator",
    demo: "https://tyrese-quote-generator.netlify.app",
    featured: false
  },
  {
    id: 5,
    title: "JavaScript Calculator",
    description: "Fully functional calculator application with advanced mathematical operations, keyboard support, and a clean, intuitive user interface.",
    technologies: ["React", "JavaScript", "State Management", "UI/UX Design"],
    image: "/images/calculator.jpg",
    github: "https://github.com/tyrese/js-calculator",
    demo: "https://tyrese-calculator.netlify.app",
    featured: false
  },
  {
    id: 6,
    title: "Markdown Previewer",
    description: "Real-time markdown editor with live preview functionality. Features syntax highlighting, export options, and split-screen layout.",
    technologies: ["React", "Markdown", "JavaScript", "Text Processing"],
    image: "/images/markdown-previewer.jpg",
    github: "https://github.com/tyrese/markdown-previewer",
    demo: "https://tyrese-markdown.netlify.app",
    featured: false
  },
  {
    id: 7,
    title: "Drum Machine",
    description: "Interactive drum pad application with multiple sound samples, recording functionality, and customizable beat patterns.",
    technologies: ["React", "Web Audio API", "JavaScript", "Audio Processing"],
    image: "/images/drum-machine.jpg",
    github: "https://github.com/tyrese/drum-machine",
    demo: "https://tyrese-drum-machine.netlify.app",
    featured: false
  }
];