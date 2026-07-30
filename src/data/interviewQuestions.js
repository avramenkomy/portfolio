import { javascriptQuestions } from './questions/javascriptQuestions';
import { reactQuestions } from './questions/reactQuestions';
import { reduxQuestions } from './questions/reduxQuestions';
import { typescriptQuestions } from './questions/typescriptQuestions';

/**
 * общий список категорий с описанием и метками
 */
export const interviewCategories = [
  {
    slug: 'javascript',
    title: 'JavaScript',
    description:
      'Базовые и продвинутые вопросы по языку: область видимости, замыкания, event loop, promises, this, прототипы и др.',
  },
  {
    slug: 'react',
    title: 'React',
    description:
      'Компоненты, props, state, хуки, ререндеры, оптимизация и архитектура React-приложений и др.',
  },
  {
    slug: 'redux',
    title: 'Redux',
    description:
      'Управление состоянием, Redux Toolkit, slice, async actions, useSelector и useDispatch и др.',
  },
  {
    slug: 'typescript',
    title: 'TypeScript',
    description:
      'Типизация frontend-приложений: type, interface, generics, union, utility types, unknown и any и др.',
  },
];

/**
 * Общий список вопросов
 */
export const interviewQuestions = [
  ...javascriptQuestions,
  ...reactQuestions,
  ...reduxQuestions,
  ...typescriptQuestions,
];


/**
 * @function
 * @name getInterviewCategoryBySlug
 * @description получение категории из общего списка вопросов
 *
 * @param {string} categorySlug
 *
 * @returns {string} категория вопросов
 */
export function getInterviewCategoryBySlug(categorySlug) {
  return interviewCategories.find(category => category.slug === categorySlug);
}


/**
 * @function
 * @name getQuestionsByCategory
 * @description получение списка вопросов конкретной категории
 *
 * @param {string} categorySlug строковая метка категории
 *
 * @returns {Array<object>} список вопросов
 */
export function getQuestionsByCategory(categorySlug) {
  return interviewQuestions.filter(
    question => question.category === categorySlug
  );
}


/**
 * @function
 * @name getQuestionBySlug
 * @description получение конкретного вопроса из конкретной категории
 *
 * @param {string} categorySlug строковая метка категории
 * @param {string} questionSlug строковая метка вопроса
 *
 * @returns {object} объект вопроса
 */
export function getQuestionBySlug(categorySlug, questionSlug) {
  return interviewQuestions.find(
    question =>
      question.category === categorySlug && question.slug === questionSlug
  );
}


/**
 * @function
 * @name getQuestionsCountByCategory
 * @description получение количества вопросов в конкретной категории
 *
 * @param {string} categorySlug строковая метка категории
 *
 * @returns {number} количество вопросов с указанной категорией
 */
export function getQuestionsCountByCategory(categorySlug) {
  return getQuestionsByCategory(categorySlug).length;
}
