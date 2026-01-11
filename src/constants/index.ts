const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
] as const;

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Bio & Experience",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.png",
    canOpen: true,
  },
];

const blogPosts = [
  // You can add your own blog posts here or remove this section if not needed
  // Keeping placeholders or removing them based on preference. 
  // Since resume didn't explicitly list blogs, I'll comment these out for now or keep empty.
  // {
  //   id: 1,
  //   date: "Sep 2, 2025",
  //   title: "Coming Soon...",
  //   image: "/images/blog1.png",
  //   link: "#",
  // },
];

const techStack = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "HTML", "CSS", "SQL", "NoSQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Figma", "UI/UX"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express JS"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL", "Prisma ORM", "NeonDB"],
  },
  {
    category: "Tools & Others",
    items: ["Git", "GitHub", "OAuth 2.0", "NumPy", "Pandas", "Leadership", "Data Structures"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#333",
    link: "https://github.com/RajAditya7777",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#0077b5",
    link: "https://www.linkedin.com/in/aditya-raj-2630b6323/",
  },
  {
    id: 3,
    text: "Telegram",
    icon: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
    bg: "#0088cc",
    link: "https://t.me/adyraj7777",
  },
  {
    id: 4,
    text: "LeetCode",
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    bg: "#ffa116",
    link: "https://leetcode.com/u/adyraj7777/",
  },
  {
    id: 5,
    text: "Codeforces",
    icon: "https://cdn.iconscout.com/icon/free/png-256/free-code-forces-3628695-3029920.png",
    bg: "#1f8acb",
    link: "https://codeforces.com/profile/aditya.raj7777",
  },
  {
    id: 6,
    text: "Call",
    icon: "https://www.reshot.com/preview-assets/icons/YUPNL5R2TW/phone-YUPNL5R2TW.svg",
    bg: "#25d366",
    link: "tel:+917004974402",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ CogNote
    {
      id: 5,
      name: "CogNote",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-10 right-10",
      children: [
        {
          id: 1,
          name: "Project Details.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "PROJECT NAME:",
            "CogNote (November 2025)",
            "",
            "DESCRIPTION:",
            "An AI-powered study and research platform enabling users to upload notes and PDFs and interact with them intelligently.",
            "",
            "KEY FEATURES:",
            "• NotebookLM-style workspace UI with notebooks, source management, chat interface.",
            "• Study tools including summaries, flashcards, and quizzes.",
            "• Extract insights and generate study materials from own documents.",
            "",
            "TECH STACK:",
            "• Frontend: Next.js",
            "• Backend: Node.js",
            "• Database: NeonDB (PostgreSQL) with Prisma ORM",
            "• Auth: Secure JWT-based authentication",
            "",
            "LEARNINGS:",
            "• Designing complex workspaces and integrating AI for document interaction.",
          ],
        },
        {
          id: 2,
          name: "Github Repo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/RajAditya7777/Cognote",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://cognote-qbph.vercel.app/",
          position: "top-20 right-40",
        },
      ],
    },

    // ▶ Haven
    {
      id: 6,
      name: "Haven",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-32 left-5",
      windowPosition: "top-40 right-10",
      children: [
        {
          id: 1,
          name: "Project Details.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "PROJECT NAME:",
            "Haven (August 2025)",
            "",
            "DESCRIPTION:",
            "A secure student-only dating/social platform ensuring verified identities and privacy-first access.",
            "",
            "KEY FEATURES:",
            "• Swipe-based matching system and profile verification.",
            "• Customizable privacy controls for a safe intuitive experience.",
            "• Secure student-only authentication using Clerk.",
            "",
            "TECH STACK:",
            "• Frontend: Next.js, Tailwind CSS",
            "• Database: Prisma ORM",
            "• Auth: Clerk",
            "",
            "ACHIEVEMENTS:",
            "• Developed and deployed within 6 weeks in a 3-member team.",
            "• Achieved 17,000+ views through Instagram marketing.",
          ],
        },
        {
          id: 2,
          name: "Github Repo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Srijan76-code/dating-app.git",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://haven.singles/",
          position: "top-20 right-40",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-5",
      subtitle: "Passionate Front-end Developer & Problem Solver",
      image: "/images/adrian.jpg", // You might want to update this image
      description: [
        "INTRODUCTION:",
        "Hi! I'm Aditya Raj, a passionate Fresher and aspiring Full-stack Developer proficient in React, JavaScript, HTML/CSS/Tailwind, and Python. I am dedicated to leveraging technology to build efficient and scalable software solutions.",
        "",
        "EDUCATION:",
        "• B.Tech in Artificial Intelligence - Newton School Of Technology, Rishihood University (2024 - 2028). Grade: 6.0/10.0",
        "• Intermediate (Class XII) - Blue Bells Academy (2023 - 2024). Grade: 65.6%",
        "• Matriculation (Class X) - Openminds A Birla School (2021 - 2022). Grade: 82.0%",
        "",
        "COMPETITIVE PROGRAMMING:",
        "• LeetCode Rating: 1400+",
        "• Codeforces Rating: 650+",
        "",
        "SKILLS:",
        "I specialize in MERN stack (MongoDB, Express, React, Node.js), Next.js, TypeScript, and Python. I also have experience with Data Structures, SQL/NoSQL databases, and UI/UX design.",
        "",
        "EXTRA-CURRICULAR:",
        "• Cricket all-rounder and footballer.",
        "• Passionate gamer (BGMI College LAN Participant, COD).",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };