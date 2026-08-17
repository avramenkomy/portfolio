'use client'

import { useState, useMemo } from 'react';

import Link from 'next/link';

import Badge from '../ui/Badge';

import { cn } from '@/lib/utils';

import styles from '../../app/interview/interview.module.scss';


export default function InterviewSearch(props) {
  const { allQuestions: questions, categories } = props;

  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const searchValue = search.trim().toLowerCase();

  const resultQuestionsAfterSearch = useMemo(() => {
    if (!searchValue) return [];


    const resultQuestions = questions.filter(item => {
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

    if (categoryFilter) {
      return resultQuestions.filter(
        question => question.category === categoryFilter
      );
    }

    return resultQuestions;
  }, [questions, categories, searchValue, categoryFilter]);


  function clearSearch() {
    setSearch('');
    setCategoryFilter('');
  }


  function handleCategoryFilterChange(categorySlug) {
    setCategoryFilter(categorySlug);
  }

  return (
    <section>
      <h2 className={styles.searchTitle}>Поиск по вопросам:</h2>

      <div className={styles.questionSearchLabelHead}>
        <div>
          <label className={styles.searchLabel} htmlFor="questionSearchInput">
            Поисковый запрос
          </label>

          <p className={styles.searchSummary}>
            {searchValue
              ? `Найдено результатов по запросу '${search.trim()}': ${resultQuestionsAfterSearch.length}`
              : 'Введите запрос, чтобы найти вопрос по JavaScript, React, Redux или TypeScript.'
            }
          </p>
        </div>

        {searchValue &&
          <div className={styles.filterButtonsContainer}>
            <span className={styles.filtersContainerLabel}>
              Фильтр по категориям:
            </span>

            <div className={styles.filterButtons}>
              <button
                type="button"
                aria-pressed={!categoryFilter}
                onClick={() => handleCategoryFilterChange('')}
                className={cn(!categoryFilter && styles.activeFilterButton)}
              >
                Все
              </button>

              {categories.map(category => (
                <button
                  key={category.slug}
                  type="button"
                  aria-pressed={category.slug === categoryFilter}
                  className={cn(
                    category.slug === categoryFilter && styles.activeFilterButton
                  )}
                  onClick={() => handleCategoryFilterChange(category.slug)}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>
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


      {searchValue && resultQuestionsAfterSearch.length > 0 &&
        <div className={styles.searchedQuestions}>
          {resultQuestionsAfterSearch.length > 0 &&
            resultQuestionsAfterSearch.map((item, index) => {
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
          }
        </div>
      }
    </section>
  )
}