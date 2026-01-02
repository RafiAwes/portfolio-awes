export const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "Profile", href: "/profile" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
];
    export const TECH_STACK = [
    { name: "LARAVEL 12", color: "#FF2D20" },
    { name: "DJANGO", color: "#092E20" }, // Dark Green
    { name: "NEXT.JS", color: "#000000" }, // Black/White handled in component
    { name: "REACT", color: "#61DAFB" },
    { name: "PYTHON", color: "#FFD43B" },
    { name: "TYPESCRIPT", color: "#3178C6" },
    { name: "DOCKER", color: "#2496ED" },
    { name: "POSTGRESQL", color: "#336791" },
    { name: "AWS", color: "#FF9900" },
    { name: "GIT", color: "#F05032" },
    { name: "REDIS", color: "#DC382D" },
    { name: "NGINX", color: "#009639" },
    { name: "TAILWIND", color: "#06B6D4" },
    { name: "NODE.JS", color: "#339933" },
    { name: "MYSQL", color: "#4479A1" },
];

export const PROJECTS = [
    {
        title: "Enterprise ERP",
        category: "Laravel 12 System",
        description: "A complete resource planning system with multi-tenant architecture and role-based access.",
        image: "https://images.unsplash.com/photo-1642132652075-2d4343743329?q=80&w=1000",
        tags: ["Laravel", "Vue.js", "MySQL"],
        link: "#"
    },
    {
        title: "Realtime Chat",
        category: "Next.js 15 & Socket.io",
        description: "End-to-end encrypted messaging app with file sharing and voice notes.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000",
        tags: ["Next.js", "Socket.io", "Redis"],
        link: "#"
    },
    {
        title: "AI Doc Scanner",
        category: "Python OCR & Automation",
        description: "Automated optical character recognition system for financial documents.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000",
        tags: ["Python", "TensorFlow", "OpenCV"],
        link: "#"
    }
];

export const EXPERIENCE = [
    {
        role: "Senior Fullstack Developer",
        company: "TechFlow Solutions",
        period: "2024 - Present",
        desc: "Leading a team of 5 devs. Migrated legacy PHP apps to Laravel 12 & Next.js."
    },
    {
        role: "Backend Engineer",
        company: "Creative Agency",
        period: "2022 - 2024",
        desc: "Developed REST APIs with Django. Optimized SQL queries reducing load by 40%."
    }
];

export const EDUCATION = [
    {
        degree: "M.Sc Computer Science",
        school: "Tech University",
        period: "2023 - 2025",
        desc: "Thesis: AI-driven Optimization for Distributed Systems."
    },
    {
        degree: "B.Sc Software Engineering",
        school: "State University",
        period: "2019 - 2023",
        desc: "Graduated with Honors. Lead Developer of the Tech Club."
    }
]