import site from '@/data/site';
import projects from '@/data/projects';


export default function sitemap() {
  const staticRoutes = ['', '/about', '/projects', '/contact'];

  const staticPages= staticRoutes.map(route => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  const projectPages = projects.items.map(project => ({
    url: `${site.url}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}
