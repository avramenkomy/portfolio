import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getInterviewCategoryBySlug,
  getQuestionsByCategory,
  interviewCategories,
} from '@/data/interviewQuestions';
import styles from '../interview.module.scss';
import Badge from '@/components/ui/Badge';


export function generateStaticParams() {
  return interviewCategories.map((category) => ({
    category: category.slug,
  }));
}


export async function generateMetadata({ params }) {
  const { category: categorySlug } = await params;

  const category = getInterviewCategoryBySlug(categorySlug);

  if (!category) {
    return {
      title: 'Категория не найдена',
    };
  }

  return {
    title: `${category.title} — вопросы для frontend-собеседования`,
    description: category.description,
  };
}


export default async function InterviewCategoryPage({ params }) {
  const { category: categorySlug } = await params;

  const category = getInterviewCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const questions = getQuestionsByCategory(category.slug);

  return (
    <main className={styles.page}>
      <nav className={styles.breadcrumbs} aria-label="Хлебные крошки">
        <Link href="/">Главная</Link>
        <span>/</span>
        <Link href="/interview">Interview</Link>
        <span>/</span>
        <span>{category.title}</span>
      </nav>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>Interview category</p>

        <h1 className={styles.title}>{category.title}</h1>

        <p className={styles.description}>{category.description}</p>

        <p className={styles.categoryMeta}>
          Вопросов в категории: {questions.length}
        </p>
      </section>

      <section className={styles.questionList} aria-label="Список вопросов">
        {questions.map((question, index) => (
          <Link
            className={styles.questionCard}
            href={`/interview/${category.slug}/${question.slug}`}
            key={question.slug}
          >
            <div className={styles.questionCardHeader}>
              <span className={styles.questionNumber}>
                {String(index + 1).padStart(2, '0')}
              </span>

              <Badge>{category.title}</Badge>
            </div>

            <h2 className={styles.questionTitle}>{question.title}</h2>

            <p className={styles.questionText}>{question.shortAnswer}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}