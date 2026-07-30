export const reactQuestions = [
  {
    category: 'react',
    slug: 'props-vs-state',
    title: 'Чем props отличаются от state в React?',
    shortAnswer: 'Props приходят в компонент извне и обычно не изменяются внутри него, а state хранит внутреннее состояние компонента и может изменяться через setState или useState.',
    fullAnswer: [
      'Props — это данные, которые компонент получает от родителя. Они помогают делать компоненты переиспользуемыми.',
      'State — это внутренние данные компонента, которые могут меняться во время работы интерфейса.',
      'Когда меняются props или state, React может заново отрендерить компонент, чтобы интерфейс соответствовал новым данным.',
    ],
    codeExample: `function UserCard({ name }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article>
      <h2>{name}</h2>

      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Скрыть" : "Показать"}
      </button>

      {isOpen && <p>Дополнительная информация</p>}
    </article>
  );
}`,
    interviewAnswer: 'Props — это входные данные компонента, которые передаются от родителя. State — это внутреннее состояние компонента. Props лучше воспринимать как параметры функции, а state — как данные, которые компонент контролирует сам.',
    pitfalls: [
      'Не стоит изменять props напрямую.',
      'State нужно обновлять через setter-функцию.',
      'Изменение props или state может привести к повторному рендеру.'
    ],
  },
];
