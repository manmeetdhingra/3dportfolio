import { meta, shopify, starbucks, coder, nmible, nhs, pharmacist } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    python,
    figma,
    radio,
    store,
    morty
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "Frontend",
    },

];

export const experiences = [
    {
        title: "Tri-lingual Interpreter",
        company_name: "NHS",
        icon: nhs,
        iconBg: "#accbe1",
        date: "Aug 2015 - Aug 2019",
        points: [
            "Mobilised across the West Midlands, offering multilingual assistance and support in English, Hindi, and Punjabi to patients facing significant language barriers hindering access to quality healthcare.",
            "Facilitated seamless communication between healthcare professionals including consultants, doctors, nurses, and patients, swiftly interpreting both written and verbal information in real-time.",
            "Acted as a vital intermediary, ensuring accurate transmission of information between healthcare professionals and patients, enabling effective dialogue and understanding within seconds.",
        ],
    },
    {
        title: "Web Developer - Intern",
        company_name: "Nmible",
        icon: nmible,
        iconBg: "#b7e4c7",
        date: "Mar 2024 - Sep 2024",
        points: [
            "Spearheading collaborative efforts with a team of adept front-end developers to gain immersive experience in web development dynamics.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Innovating user experiences by leveraging camera capabilities and delving into accessibility intricacies, garnering hands-on expertise and industry-best insights across projects.",
            "Expanded skill repertoire swiftly during internship tenure, adeptly mastering diverse libraries and frameworks to proficiently construct intricate components and mini applications.",
        ],
    },
    {
        title: "Pharmacist",
        company_name: "Self-Employed - Nationwide",
        icon: pharmacist,
        iconBg: "#bfbfbf",
        date: "Aug 2019 - Current",
        points: [
            "Oversaw operations at a flagship branch for a multi-chain pharmacy company for a year to transition into contracting for the multiple pharmaceutical firms.",
            "Achieved a 20% surge in shop floor sales and elevated prescription items count by 30% in a 4-month timeframe.",
            "Led revenue augmentation by introducing lateral flow testing service and promoting the Minor ailment / Pharmacy first schemes to the local communities.",
            "Administer control over provision of vital services, including blood pressure assessments, flu vaccinations, and NMS (New Medicines Services).",
            "Streamlined pharmaceutical operations by smoothly transitioning into the role and demonstrating adept personnel management skills to meet all company requirements."
        ],
    },
    {
        title: "Web Developer",
        company_name: "Self Employed",
        icon: coder,
        iconBg: "#a2d2ff",
        date: "Jul 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Conducting thorough testing and debugging to ensure functionality and usability of websites and web applications.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Independently spearheaded projects to perpetually augment expertise and refine existing skill sets.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: radio,
        theme: 'btn-back-red',
        name: 'Gulshan Radio',
        description: 'Built a dynamic, single-page app (SPA) using React by designing and coding a radio station website that seamlessly integrates with their brand identity. Demonstrated proficiency in front-end development by translating conceptual designs into functional and user-friendly interfaces.',
        link: 'https://gulshanradio.co.uk/',
    },
    {
        iconUrl: store,
        theme: 'btn-back-green',
        name: 'Fake Store',
        description: "This webstore project reflects my dedication to creating polished applications while showcasing my proficiency in front-end development, demonstrating my ability to collaborate with designers and UX professionals.",
        link: 'https://64e68e2304c0f3155e94ccad--peppy-sherbet-211577.netlify.app/',
    },
    {
        iconUrl: morty,
        theme: 'btn-back-blue',
        name: 'Rick and Morty',
        description: 'This project stands out as one of my personal favorites in my portfolio. It provided me with invaluable insights into the significance of context in React and how  API calls can be harnessed to build robust web applications.',
        link: 'https://fastidious-bienenstitch-a82462.netlify.app/',
    },
];