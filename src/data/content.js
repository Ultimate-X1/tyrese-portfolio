// Main content for the portfolio
export const siteContent = {
  hero: {
    title: "Hi, I'm (Tyrese) George Otieno",
    image: "/tyrese-portfolio/images/george.jpg",
    subtitle: "Mechatronics Engineer & Innovator",
    description: "Designing intelligent systems that merge mechanics, electronics, and software",
    cta1: "View My Work",
    cta2: "Contact Me"
  },

  about: {
    title: "About Me",
    bio: `I am a Mechatronics Engineer passionate about robotics, automation, embedded systems, and smart product design.
    Over the years, I've developed a mix of mechanical, electrical, and software skills; from CAD modeling and circuit design
    to microcontroller programming and front-end development.

    My journey began at Dedan Kimathi University, where I built a strong foundation in engineering principles while discovering
    my passion for creating innovative solutions that bridge multiple disciplines. I thrive on challenges that require creative
    problem-solving and a systematic approach to design.

    Whether I'm developing a tendon-driven robotic arm, designing smart assistive devices, or building elegant software interfaces,
    I bring the same level of dedication and attention to detail to every project. My goal is to continue pushing the boundaries
    of what's possible at the intersection of mechanical design, electronics, and software.`,
    cvButtonText: "Download CV",
    cvLink: "/documents/george-otieno-cv.pdf"
  },

  contact: {
    title: "Get In Touch",
    subtitle: "I'm always interested in hearing about new opportunities and collaborations",
    form: {
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      submitButton: "Send Message",
      successMessage: "Thank you for your message! I'll get back to you soon.",
      errorMessage: "Something went wrong. Please try again."
    },
    social: [
      {
        platform: "GitHub",
        url: "https://github.com/Ultimate-X1",
        icon: "FaGithub"
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/tyrese-george-3d-mechatronics-engineer",
        icon: "FaLinkedin"
      },
      {
        platform: "Email",
        url: "mailto:tyresegeorge476@gmail.com",
        icon: "FaEnvelope"
      }
    ]
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Tyrese George. All rights reserved.`,
    builtWith: "Built with React & TailwindCSS"
  }
};