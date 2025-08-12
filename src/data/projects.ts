export interface Projects {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  role: string;
  techStack: string[];
  year: string;
  status: "completed" | "ongoing";
}

export const projects: Projects[] = [
  {
    id: "dzikir-pop",
    title: "Dzikir Pop",
    description: "Islamic prayer and dzikir application",
    image: "/images/projects/dpop.png",
    link: "https://rstubryan.github.io/dpop/",
    role: "Frontend Web Developer at Digital Kode",
    techStack: ["HTML", "CSS", "JavaScript"],
    year: "2023",
    status: "completed"
  },
  {
    id: "homeschooling-permata-hati",
    title: "Fitur Psikotes Homeschooling Permata Hati",
    description: "Psychological test feature development for Homeschooling Permata Hati",
    image: "/images/projects/edu.png",
    link: "https://www.indonesiasatuhati.id/",
    role: "Full Stack Web Developer at Digital Kode",
    techStack: ["CodeIgniter", "Bootstrap CSS", "PHP", "MySQL"],
    year: "2023",
    status: "completed"
  },
  {
    id: "hmti-website",
    title: "Website HMTI Nusa Putra",
    description: "Website development for Computer Science Student Association",
    image: "/images/projects/hmti.png",
    link: "https://hmti.nusaputra.ac.id/",
    role: "Full Stack Web Developer at Digital Kode",
    techStack: ["Laravel", "Tailwind CSS", "PHP", "MySQL"],
    year: "2023",
    status: "completed"
  },
  {
    id: "sistem-kunjungan",
    title: "Sistem Kunjungan Wali Santri",
    description: "Visitor management system for Islamic boarding school",
    image: "/images/projects/assalam.png",
    link: "#",
    role: "Full Stack Web Developer at Digital Kode",
    techStack: ["PHP", "MySQL", "Bootstrap CSS"],
    year: "2023",
    status: "completed"
  },
  {
    id: "kkn-wangunsari",
    title: "Website KKN Desa Wangunsari",
    description: "Landing page for community service program",
    image: "/images/projects/kkn.png",
    link: "https://rstubryan.github.io/kkn/",
    role: "Frontend Web Developer at KKN Desa Wangunsari",
    techStack: ["HTML", "Tailwind CSS", "JavaScript"],
    year: "2023",
    status: "completed"
  },
  {
    id: "curug-cierang",
    title: "Landing Pages Curug Cierang",
    description: "Tourism website for Curug Cierang",
    image: "/images/projects/curug.png",
    link: "https://rstubryan.github.io/pariwisata/",
    role: "Frontend Web Developer at KKN Desa Wangunsari",
    techStack: ["HTML", "Tailwind CSS", "JavaScript"],
    year: "2023",
    status: "completed"
  },
  {
    id: "lawaklu",
    title: "Lawaklu",
    description: "Meme sharing platform",
    image: "/images/projects/lawaklu.jpg",
    link: "https://github.com/rstubryan/laravel-lawaklu",
    role: "Full Stack Web Developer (Final Project 5th Semester)",
    techStack: ["Laravel", "Tailwind CSS", "PHP", "MySQL"],
    year: "2023",
    status: "completed"
  },
  // {
  //   id: "castro",
  //   title: "Castro",
  //   description: "Horror podcast website",
  //   image: "/images/projects/castro.png",
  //   link: "https://rstubryan.github.io/castro/",
  //   role: "Frontend Web Developer (Final Project 5th Semester)",
  //   techStack: ["Laravel", "Tailwind CSS", "PHP", "MySQL"],
  //   year: "2023",
  //   status: "completed"
  // },
  {
    id: "kw-vape-store",
    title: "KW Vape Store",
    description: "Landing page for UMKM KW Vape Store",
    image: "/images/projects/kw-vape.jpg",
    link: "https://github.com/rstubryan/KELOMPOK5-FE6",
    role: "Frontend Web Developer at MSIB Batch 6: Gamelab ID",
    techStack: ["jQuery", "Bootstrap CSS", "Animate on Scroll"],
    year: "2024",
    status: "completed"
  },
  {
    id: "twenties",
    title: "Twenties",
    description: "Forum discussion application",
    image: "/images/projects/twent.png",
    link: "https://github.com/GamelabAhmad/Project20-4-ForumDiskusiApp-Frontend",
    role: "Frontend Web Developer at MSIB Batch 6: Gamelab ID",
    techStack: ["React", "Bootstrap CSS", "Axios"],
    year: "2024",
    status: "completed"
  },
  {
    id: "sanskara-conference",
    title: "Sanskara Karya Conference",
    description: "Conference management system",
    image: "/images/projects/confer.png",
    link: "#",
    role: "Frontend Web Developer at PT Sanskara Karya Internasional",
    techStack: ["Laravel", "React", "Tailwind CSS", "ShadCN UI", "Inertia.js", "MySQL"],
    year: "2024",
    status: "completed"
  },
  {
    id: "todo-app",
    title: "Todo App",
    description: "Task management application with React Native",
    image: "/images/projects/todo-app.png",
    link: "https://github.com/rstubryan/dts-todo-app-expo",
    role: "Mobile Developer at Progate Bootcamp",
    techStack: ["React Native (TypeScript)", "Expo", "NativeWind"],
    year: "2024",
    status: "completed"
  },
  {
    id: "weather-app",
    title: "Weather App",
    description: "Weather forecast application with React Native",
    image: "/images/projects/weather-app.png",
    link: "https://github.com/rstubryan/dts-weather-app-expo",
    role: "Mobile Developer at Progate Bootcamp",
    techStack: ["React Native (TypeScript)", "Expo", "NativeWind", "Weather API"],
    year: "2024",
    status: "completed"
  },
  {
    id: "tmdb-movie-app",
    title: "TMDB Movie App",
    description: "Movie information application with React Native",
    image: "/images/projects/tmdb-app.png",
    link: "https://github.com/rstubryan/dts-movie-app-progate-expo",
    role: "Mobile Developer at Progate Bootcamp",
    techStack: ["React Native (TypeScript)", "Expo", "NativeWind", "TMDB API"],
    year: "2024",
    status: "completed"
  },
  {
    id: "pomodoro-app",
    title: "Pomodoro App",
    description: "Productivity timer application",
    image: "/images/projects/pomodoro.png",
    link: "https://github.com/rstubryan/pomodoro-fe",
    role: "Frontend Web Developer (Pre Study Completion Program)",
    techStack: ["Next.js (TypeScript)", "Tailwind CSS", "TanStack Query", "Axios", "ShadCN UI", "TanStack Form", "Zod"],
    year: "2024",
    status: "completed"
  },
  {
    id: "ideabox",
    title: "Ideabox",
    description: "Idea management system",
    image: "/images/projects/idbox.png",
    link: "https://dev.v2.telkom.ideaboxapp.com",
    role: "Frontend Developer at MSIB Batch 7: Digital Amoeba Telkom Indonesia",
    techStack: ["Laravel", "Svelte (JavaScript)", "Bootstrap CSS (SASS)", "Inertia.js", "MySQL", "Quill Editor"],
    year: "2024",
    status: "completed"
  },
  {
    id: "sineasmov",
    title: "SineasMov",
    description: "OTT Platform",
    image: "/images/projects/sm.png",
    link: "https://sineasmov.com",
    role: "Frontend Web Developer (Senior/Mentor) at PT Sineas Kreatif Indonesia",
    techStack: ["Next.js (TypeScript)", "Tailwind CSS", "TanStack Query", "Axios", "ShadCN UI", "Jotai", "Zod", "React Hook Form", "AWS EC2", "AWS S3"],
    year: "2024",
    status: "ongoing"
  },
  {
    id: "backoffice-sineasmov",
    title: "Backoffice SineasMov",
    description: "Admin dashboard for SineasMov platform",
    image: "/images/projects/bo.png",
    link: "http://sineasmov.com:81/dashboard",
    role: "Frontend Web Developer (Senior/Mentor) at PT Sineas Kreatif Indonesia",
    techStack: ["Next.js (TypeScript)", "Tailwind CSS", "TanStack Query", "Axios", "ShadCN UI", "Jotai", "Zod", "React Hook Form", "AWS EC2", "AWS S3"],
    year: "2024",
    status: "ongoing"
  },
  {
    id: "hris-sineasmov",
    title: "HRIS SineasMov",
    description: "Human Resource Information System for SineasMov",
    image: "/images/projects/hris-sineasmov.jpg",
    link: "http://82.112.226.151:8084/dashboard",
    role: "Frontend Web Developer (Senior/Mentor) at PT Sineas Kreatif Indonesia",
    techStack: ["Next.js (TypeScript)", "Tailwind CSS", "TanStack Query", "Axios", "ShadCN UI", "Jotai", "Zod", "React Hook Form", "AWS EC2", "AWS S3"],
    year: "2024",
    status: "ongoing"
  },
  // {
  //   id: "hr-payroll",
  //   title: "HR Payroll (Microservices)",
  //   description: "Payroll management system",
  //   image: "/images/projects/hrp.png",
  //   link: "https://github.com/rstubryan",
  //   role: "DevSecOps Engineer at Freelance",
  //   techStack: ["React", "Tailwind CSS", "Axios", "Docker Swarm", "Traefik", "Cloudflare", "Zeabur"],
  //   year: "2025",
  //   status: "completed"
  // },
  {
    id: "flexo",
    title: "Flexo (Enterprise Resource Planning)",
    description: "Sweeping order system",
    image: "/images/projects/sp.png",
    link: "https://flexo.zeabur.app",
    role: "Frontend Web Developer & DevSecOps Engineer at Freelance",
    techStack: ["Next.js (JavaScript)", "Tailwind CSS", "TanStack Query", "Axios", "ShadCN UI", "Jotai", "Zod", "React Hook Form", "Docker Swarm", "Traefik", "Cloudflare", "Zeabur"],
    year: "2025",
    status: "completed"
  },
  {
    id: "counseling-npu",
    title: "E-Counseling NPU (WebSockets Live Chat)",
    description: "Counseling system with live chat functionality",
    image: "/images/projects/scu.png",
    link: "https://counseling-npu.zeabur.app",
    role: "Frontend Web Developer & DevSecOps Engineer at Freelance",
    techStack: ["Laravel", "AlpineJS (JavaScript)", "Tailwind CSS", "Livewire", "MySQL", "WebSockets", "Pusher", "Zeabur"],
    year: "2025",
    status: "completed"
  },
  {
    id: "dapur-abc",
    title: "Dapur ABC (Midtrans E-Commerce)",
    description: "E-Commerce system for food business",
    image: "/images/projects/abc.png",
    link: "https://dapur-abc.zeabur.app",
    role: "Frontend Web Developer & DevSecOps Engineer at Freelance",
    techStack: ["Laravel", "AlpineJS (JavaScript)", "Tailwind CSS", "Livewire", "MySQL", "Filament", "Pusher", "Midtrans Payment Gateway", "Zeabur"],
    year: "2025",
    status: "completed"
  },
  {
    id: "tascrum",
    title: "Tascrum (Blue Green Deployment System)",
    description: "Scrum task management system (Thesis project)",
    image: "/images/projects/tascrum.png",
    link: "https://tascrum.site/login",
    role: "Full Stack Web Developer & DevSecOps Engineer (Thesis Project) at PT Sineas Kreatif Indonesia",
    techStack: ["Next.js (TypeScript)", "Tailwind CSS", "TanStack Query", "Axios", "ShadCN UI", "Jotai", "Zod", "React Hook Form", "Docker Swarm", "Traefik", "Cloudflare", "Zeabur", "Grafana", "Prometheus", "Promtail", "Loki", "GitHub Actions CI/CD", "Uptime Kuma", "Watchtower", "Trivy", "Copilot AI Agent", "Dependabot", "Contabo", "Portainer", "Django", "PostgreSQL", "MySQL", "Taiga"],
    year: "2025",
    status: "ongoing"
  },
  {
    id: "comment-app",
    title: "Comment App",
    description: "Comment management system with real-time updates",
    image: "/images/projects/cap.png",
    link: "https://next-blog-nu-gules.vercel.app/",
    role: "Full Stack Web Developer & DevSecOps Engineer at Jabar Digital Academy Bootcamp",
    techStack: ["Next.js (JavaScript)", "Tailwind CSS", "TanStack Query", "Axios", "ShadCN UI", "Jotai", "Zod", "React Hook Form", "Docker Swarm", "Trivy", "Cloudflare", "Vercel", "NeonDB", "Prisma", "NextAuth", "GitHub Actions CI/CD"],
    year: "2025",
    status: "ongoing"
  }
];