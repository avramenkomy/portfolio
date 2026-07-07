const projects = {
  title: 'Projects',
  description: 'Selected projects that demonstrate my approach to frontend development.',
  items: [
    {
      title: "Portfolio Website",
      description: "Personal portfolio website for Next.js with a modern interface, adaptive layout and component architecture.",
      stack: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/avramenkomy/portfolio",
      demo: "https://avramenkomy.vercel.app/",

      slug: 'portfolio-website',
      featured: true,
    },

    {
      title: "Task Manager",
      description: "A task management application with filtering, states, and a user-friendly interface.",
      stack: ["React", "JavaScript", "CSS"],
      github: "https://github.com/your-name/task-manager",
      demo: "https://task-manager-demo.com",

      slug: 'task-manager',
      featured: false,
    },

    {
      title: "Weather App",
      description: "A weather forecast application with data acquisition from the API and an adaptive interface.",
      stack: ["JavaScript", "API", "React"],
      github: "https://github.com/your-name/weather-app",
      demo: "https://weather-demo.com",

      slug: 'weather-app',
      featured: false,
    },

    {
      title: 'ContentHub',
      description: 'Minimplatform with content moderation. Users register, create cards/posts, the moderator checks them, the admin manages users and roles. A feedback form that sends an email and additionally saves the message in the database.',
      stack: ['Next.js', 'Taiwind CSS', 'PostgreSQL', 'Prisma', 'Auth.js/NextAuth', 'Resend', 'Supabase Storage',],
      github: "https://github.com/your-name/content-hub",
      demo: "https://content-hub-demo.com",

      slug: 'content-hub',
      featured: true,
    },

    {
      title: 'altika',
      description: 'Сайт экспертной компании с описанием специфики работы и предоставляемых услугах.',
      stack: ['JavaScript', 'React.js', 'Material UI', 'Django', 'Rest Framework'],
      github: 'https://github.com/avramenkomy/altika',
      demo: 'https://altika-expert.ru',

      slug: 'altika',
      featured: true,
    }
  ],
}

export default projects;
