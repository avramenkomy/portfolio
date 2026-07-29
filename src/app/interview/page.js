import Link from 'next/link';
import { interviewCategories } from '@/data/interviewQuestions';
import styles from './interview.module.scss';


export const metadata = {
  title: 'Подготовка к собеседованию',
  description: 'База вопросов для подготовки к собеседованию frontend-разработчика JavaScript, TypeScript, React, Redux и архитектура.'
}

export default function InterviewPage() {
  console.log('InterviewPage', interviewCategories);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Interview notes</p>

        <h1 className={styles.title}>Подготовка к frontend-собеседованию</h1>

        <p className={styles.description}>
          Структурированная база вопросов и ответов по frontend-разработке.
          Каждый материал содержит краткий ответ, подробное объяснение, пример
          кода и формулировку для собеседования.
        </p>
      </section>

      <section className={styles.grid} aria-label="Категории вопросов">
        {interviewCategories.map(category => {
          console.log('category', category);

          return <Link
            className={styles.card}
            href={`/interview/${category.slug}`}
            key={category.slug}
          >
            <h2 className={styles.cardTitle}>{category.title}</h2>
            <p className={styles.cardText}>{category.description}</p>
          </Link>
        })}
      </section>
    </main>
  )
}