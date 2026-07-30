import site from '@/data/site';
import projects from '@/data/projects';
import {
  interviewCategories, interviewQuestions,
} from '@/data/interviewQuestions';

export const dynamic = 'force-static';


export default function sitemap() {
  const staticRoutes = ['', '/about', '/projects', '/contact', '/interview'];

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

  const interviewCategoryPages = interviewCategories.map(category => ({
    url: `${site.url}/interview/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7
  }));

  const interviewQuestionPages = interviewQuestions.map(question => ({
    url: `${site.url}/inteview/${question.category}/${question.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...projectPages,
    ...interviewCategoryPages,
    ...interviewQuestionPages,
  ];
}
