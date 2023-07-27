import React from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import usersPhotoMock from '../utils/img/users_photo_mock.jpeg';

const useStyles = createUseStyles({
  title__container: {
    height: '80vh',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    gap: '10px',
    '@media (max-width: 1120px)': {
      gap: '20px',
    },
    '@media (max-width: 670px)': {
      alignItems: 'center',
      flexDirection: 'column-reverse',
      height: 'auto',
    }
  },
  h1__container: {
    flexGrow: 1,
  },
  short_text: {
    fontSize: '1.1rem',
    color: 'var(--contrast-text)',
  },
  h1_title: {
    color: 'var(--primary2)',
    fontSize: '80px',
    flexGrow: 1,
    '@media (max-width: 1110px)': {
      fontSize: '70px',
    },
    '@media (max-width: 950px)': {
      fontSize: '65px',
    },
    '@media (max-width: 870px)': {
      fontSize: '60px',
    },
    '@media (max-width: 810px)': {
      fontSize: '50px',
    },
    '@media (max-width: 670px)': {
      fontSize: '60px',
      textAlign: 'center',
    }
  },
  occupation: {
    fontSize: '0.5em',
    '@media (max-width: 670px)': {
      fontSize: '0.75em',
    }
  },
  name: {
    color: 'var(--green)',
  },
  photo__container: {
    paddingTop: '20px',
    maxWidth: '200px',
    width: '25%',
    minWidth: '120px',
    maxHeight: '200px',
    height: 'auto',
    minHeight: '120px',
    borderRadius: '50%',
  },
  photo_mock: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
  },
  introduce: {
    '& :nth-child(1)': {
      fontStyle: 'italic',
      fontSize: '1.75rem',
    },
    '& p': {
      marginTop: '50px',
      fontFamily: 'var(--font-mono)',
      fontSize: '1.5rem',
      fontWeight: '300',
      textAlign: 'justify',
      color: 'var(--contrast-text)',
      '& > a': {
        textDecoration: 'underline',
        fontSize: '1em !important',
        fontStyle: 'normal !important',
      },
      '& > a:visited': {
        color: 'var(--contrast-text)',
      },
      '@media (max-width: 950px)': {
        fontSize: '1.75rem',
      },
      '@media (max-width: 810px)': {
        fontSize: '1.45rem',
        fontWeight: '400',
        width: 'auto',
      },
    }
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap',
    gap: '20px',
    '& > a': {
      textDecoration: 'none',
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '& > a:visited': {
      color: 'var(--contrast-text)',
    },
    '& > button': {
      width: '50%',
      '& > a': {
        textDecoration: 'none',
      },
      '& > a:visited': {
        color: 'inherit',
      },
    },
  },
  scroll_to_bottom: {
    textDecoration: 'underline',
    cursor: 'pointer',
    fontSize: 'inherit !important',
    fontStyle: 'normal !important'
  }
});


function Home() {
  const classes = useStyles();

  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  }

  return (
    <div className={classes.root}>
      <div className={classes.title__container}>
        <div className={classes.h1__container}>
          <h1 className={classes.h1_title}>
            Привет, я&nbsp;<span className={classes.name}>Михаил</span>.<br />
            <span className={classes.occupation}>Frontend developer</span>
          </h1>
          <div className={classes.short_text}>
            <p>Мне нравится создавать уникальные и функциональные интерфейсы, которые помогают пользователям взаимодействовать с веб-приложениями</p>
            <p>Я пишу код на JavaScript, а так же имею хорошие базовые знания по backend-разработке</p>
            <p>На этом сайте Вы сможете узнать обо всем по-подробнее</p>
          </div>
        </div>
        <div className={classes.photo__container}>
          <img className={classes.photo_mock} src={usersPhotoMock} alt="my_photo"/>
        </div>
      </div>
      <div className={classes.introduce}>
        <p>
          Я работаю в компании ООО "ОЦРВ" и занимаюсь разработкой интерфейсов
          для внутренних сервисов ОАО "РЖД".
        </p>

        <p>
          Этот сайт является моей персональной страницей, на которой я поделюсь с вами информацией
          о своей профессиональной карьере, пет-проектах, хобби и увлечениях и не только.
        </p>
        <p>
          Веб-технологии frontend и backend я изучал самостоятельно по документациям, спецификациям
          и многочисленным курсам и видеоурокам на всеми известном самом крупном видеохостинге. В процессе
          изучения много практиковался в написании кода и решении различных задач. Такой подход потратил
          много времени и усилий с моей стороны, и как мне кажется все было не зря... Более подробно о навыках
          можно посмотреть на <a href="/skills">странице</a>.
        </p>
        {/* <p>
          Основным моим видом деятельности в настоящее время является frontend-разработка, поэтому я постараюсь
          максимально четко и понятно раскрыть свои умения и навыки для возможного сотрудничества. Я готов помочь
          вам создать сайт, который будет соответствовать вашим потребностям и целям. Здесь
          вы найдете информацию о моих проектах, а так же у вас будет возможность посмотреть блог, в котором
          я буду по мере возможности выкладывать новости, статьи о том, как тот или иной проект реализовывался.
        </p>
        <p>
          Помимо программирования, также люблю путешествовать и побывал в некоторых интересных местах в России и
          за ее пределами. Каждая поездка была для меня новым опытом и возможностью узнать что-то новое о культуре
          и традициях разных народов.

          Ну и последнее мое хобби - создание электронных устройств. Я люблю работать с микроконтроллерами и
          создавать различные устройства, которые могут помочь людям в их повседневной жизни.
        </p>
        <p>
          Ну и последнее мое хобби это электротехника и электроника. Работа с электронными компонентами и
          микроконтроллерами доставляет мне немало удовольствия.
        </p>*/}
        <p>
          Если у вас есть какие-либо вопросы или пожелания, не стесняйтесь&nbsp;
          <span className={classes.scroll_to_bottom} onClick={ () => {scrollToBottom()}}>обращаться ко мне</span>&nbsp;через
          форму обратной связи. Я всегда готов помочь и обсудить детали сотрудничества.
        </p> 
      </div>

      <div className={classes.links}>
        <Link to={'/about-me'} className="neumorphism_button">About Me&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} color={'var(--primary)'}/></Link>
        <Link to={'/projects'} className="neumorphism_button">Projects&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} color={'var(--primary)'}/></Link>
      </div>
    </div>
  )
}

export default Home;
