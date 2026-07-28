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
      demo: null,

      slug: 'task-manager',
      featured: false,
    },

    {
      title: "Weather App",
      description: "A weather forecast application with data acquisition from the API and an adaptive interface.",
      stack: ["JavaScript", "API", "React"],
      github: "https://github.com/your-name/weather-app",
      demo: null,

      slug: 'weather-app',
      featured: false,
    },

    {
      title: 'ContentHub',
      description: 'Minimplatform with content moderation. Users register, create cards/posts, the moderator checks them, the admin manages users and roles. A feedback form that sends an email and additionally saves the message in the database.',
      stack: ['Next.js', 'Taiwind CSS', 'PostgreSQL', 'Prisma', 'Auth.js/NextAuth', 'Resend', 'Supabase Storage',],
      github: "https://github.com/your-name/content-hub",
      demo: null,

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
    },

    {
      title: 'City Map',
      description: 'Сайт с картой интересных мест. Пользователь может зарегистрироваться и добавить интересное место с описанием и приложить фото. На сайте есть страница регистрации и входа, форма обратной связи. Светлая и темная тема, а так же локализация языка: русский/английский',
      stack: ['JavaScript', 'SCSS', 'React', 'i18n', 'Mobx', 'Vite', 'Vitest', 'MapLibre GL Js', 'Python', 'Django', 'Django Rest Framework', 'SQLite/MySQL'],
      github: 'https://github.com/avramenkomy/city-map',
      demo: 'https://www.pet-city-map.ru',

      slug: 'city-map',
      featured: true,
    }
  ],
}

export default projects;
