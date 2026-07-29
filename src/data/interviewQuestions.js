import { javascriptQuestions } from './questions/javascriptQuestions';
import { reactQuestions } from './questions/reactQuestions';
import { reduxQuestions } from './questions/reduxQuestions';
import { typescriptQuestions } from './questions/typescriptQuestions';

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

export const interviewQuestions = [
  ...javascriptQuestions,
  ...reactQuestions,
  ...reduxQuestions,
  ...typescriptQuestions,
];


export function getInterviewCategoryBySlug(categorySlug) {
  return interviewCategories.find(category => category.slug === categorySlug);
}


export function getQuestionsByCategory(categorySlug) {
  return interviewQuestions.filter(
    question => question.category === categorySlug
  );
}


export function getQuestionBySlug(categorySlug, questionSlug) {
  return interviewQuestions.find(
    question =>
      question.category === categorySlug && question.slug === questionSlug
  );
}
