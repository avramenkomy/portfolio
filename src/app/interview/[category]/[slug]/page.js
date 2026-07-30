import Link from 'next/link';

import NotFound from '@/app/not-found';
import Button from '@/components/ui/Button';

import {
  getInterviewCategoryBySlug,
  getQuestionBySlug,
  getQuestionsByCategory,
  interviewQuestions,
} from '@/data/interviewQuestions';

import styles from '../../interview.module.scss';


export function generateStaticParams() {
  return interviewQuestions.map((question) => ({
    category: question.category,
    slug: question.slug,
  }));
}


export async function generateMetadata({ params }) {
  const { category, slug } = await params;

  const question = getQuestionBySlug(category, slug);

  if (!question) {
    return {
      title: 'Вопрос не найден',
    };
  }

  return {
    title: `${question.title} — ответ для собеседования`,
    description: question.shortAnswer,
  };
}


export default async function InterviewQuestionPage({ params }) {
  const { category: categorySlug, slug } = await params;

  const category = getInterviewCategoryBySlug(categorySlug);
  const question = getQuestionBySlug(categorySlug, slug);

  if (!category || !question) {
    return <NotFound />
  }

  const questions = getQuestionsByCategory(categorySlug);

  const currentQuestionIndex = questions.findIndex(
    item => item.slug === slug
  );

  const nextQuestion = questions[currentQuestionIndex + 1];
  const prevQuestion = questions[currentQuestionIndex - 1];

  const otherQuestionsInThisCategory = questions
    .filter(item => item.slug !== slug)
    .filter(item => item.slug !== nextQuestion?.slug)
    .filter(item => item.slug !== prevQuestion?.slug)
    .slice(0, 3);

  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <nav className={styles.breadcrumbs} aria-label="Хлебные крошки">
          <Link href="/">Главная</Link>
          <span>/</span>
          <Link href="/interview">Interview</Link>
          <span>/</span>
          <Link href={`/interview/${category.slug}`}>{category.title}</Link>
        </nav>

        <header className={styles.hero}>
          <p className={styles.eyebrow}>{category.title}</p>

          <h1 className={styles.title}>{question.title}</h1>

          <p className={styles.description}>{question.shortAnswer}</p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Краткий ответ</h2>
          <div className={styles.answerBox}>{question.shortAnswer}</div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Подробный разбор</h2>

          <div className={styles.textBlock}>
            {question.fullAnswer.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Пример кода</h2>

          <pre className={styles.codeBlock}>
            <code>{question.codeExample}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Как ответить на собеседовании
          </h2>

          <div className={styles.answerBox}>{question.interviewAnswer}</div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>На что обратить внимание</h2>

          <ul className={styles.list}>
            {question.pitfalls.map((pitfall) => (
              <li key={pitfall}>{pitfall}</li>
            ))}
          </ul>
        </section>
      </article>

      {otherQuestionsInThisCategory.length > 0 &&
        <section className={styles.otherQuestions}>
          <h2 className={styles.otherQuestionsTitle}>
            Другие вопросы из раздела {category.title}:
          </h2>

          {otherQuestionsInThisCategory.map((item, index) => (
            <Link
              key={item.slug}
              href={`/interview/${category.slug}/${item.slug}`}
            >
              {`${index + 1}`.padStart(2, '0')}. {item.title}
            </Link>
          ))}
        </section>
      }

      <section className={styles.questionFooter}>
        {prevQuestion &&
          <Button href={`/interview/${category.slug}/${prevQuestion.slug}`}>
            Предыдущий вопрос
          </Button>
        }

        {nextQuestion &&
          <Button href={`/interview/${category.slug}/${nextQuestion.slug}`}>
            Следующий вопрос
          </Button>
        }

        <Button href={`/interview/${category.slug}`}>
          Вернуться к категории
        </Button>
      </section>
    </main>
  );
}