'use client'

import { useState, useMemo } from 'react';

import Link from 'next/link';

import Badge from '../ui/Badge';

import styles from '../../app/interview/interview.module.scss';


export default function InterviewSearch(props) {
  const { allQuestions: questions, categories } = props;

  const [search, setSearch] = useState('');

  const searchValue = search.trim().toLowerCase();

  const resultQuestionsAfterSearch = useMemo(() => {
    if (!searchValue) return [];

    return questions.filter(item => {
      const category = categories.find(
        categoryItem => categoryItem.slug === item.category
      );

      const unitString = [
        item.title,
        item.shortAnswer,
        item.category,
        category?.title,
      ].join(' ').toLowerCase();

      return unitString.includes(searchValue);
    });
  }, [questions, categories, searchValue]);


  function clearSearch() {
    setSearch('');
  }

  return (
    <section>
      <h2 className={styles.searchTitle}>Поиск по вопросам:</h2>

      <label className={styles.searchLabel}>
        <div className={styles.questionSearchLabelHead}>
          <span>
            {searchValue
              ? `Результат по запросу '${searchValue}'`
              : 'Введите запрос, чтобы найти вопрос по JavaScript, React, Redux или TypeScript.'
            }
          </span>
          {searchValue &&
            <span>
              Найдено вопросов: {resultQuestionsAfterSearch.length}
            </span>
          }
        </div>

        <div className={styles.searchControl}>
          <input
            type="search"
            id="questionSearchInput"
            value={search}
            onChange={event => setSearch(event.target.value)}
            className={styles.questionSearchInput}
            placeholder="Например: Promise, useEffect, Redux"
          />

          {searchValue &&
            <button
              type="button"
              className={styles.clearSearchButton}
              onClick={clearSearch}
            >
              Очистить
            </button>
          }
        </div>



      </label>

      {searchValue &&
        <div className={styles.searchedQuestions}>
          {
            resultQuestionsAfterSearch.length
              ? resultQuestionsAfterSearch.map((item, index) => {
                  const category = categories.find(
                    categoryItem => categoryItem.slug === item.category
                  );

                  return (
                    <Link
                      key={`${item.category}-${item.slug}`}
                      href={`/interview/${item.category}/${item.slug}`}
                      className={styles.searchedQuestionCard}
                    >
                      <div className={styles.searchedQuestionTitle}>
                        <span className={styles.searchedQuestionCardNumber}>
                          {`${index + 1}`.padStart(2, '0')}.&nbsp;
                        </span>

                        <span className={styles.searchedQuestionCardTitle}>
                          {item.title}
                        </span>
                      </div>

                      <div className={styles.searchedQuestionBadge}>
                        <Badge>{category?.title ?? item.category}</Badge>
                      </div>
                    </Link>
                  )
                })
              : <p className={styles.emptySearchResult}>
                  {`По запросу "${search.trim()}" ничего не найдено.`}
                </p>
          }
        </div>
      }
    </section>
  )
}