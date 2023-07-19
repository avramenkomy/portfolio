import React from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import usersPhotoMock from '../utils/img/users_photo_mock.jpeg';

const useStyles = createUseStyles({
  title__container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    '@media (max-width: 670px)': {
      flexDirection: 'column-reverse',
    }
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
      fontSize: '30px',
    }
  },
  name: {
    color: 'var(--green)',
  },
  photo__container: {
    paddingTop: '20px',
    maxWidth: '200px',
    width: '20%',
    minWidth: '120px',
    maxHeight: '200px',
    height: '20%',
    minHeight: '120px',
    borderRadius: '50%',
  },
  photo_mock: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
  },
  introduce: {
    '& p': {
      marginTop: '50px',
      marginBottom: '100px',
      fontFamily: 'Calibre',
      fontSize: '1.75rem',
      fontStyle: 'italic',
      fontWeight: '300',
      color: 'var(--contrast-text)',
      '@media (max-width: 950px)': {
        fontSize: '1.75rem',
      },
      '@media (max-width: 810px)': {
        fontSize: '1.45rem',
        textAlign: 'center',
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
  }
});


function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title__container}>
        <h1 className={classes.h1_title}>
          Hello, I'm <span className={classes.name}>Mike</span>.
        </h1>
        <div className={classes.photo__container}>
          <img className={classes.photo_mock} src={usersPhotoMock} alt="my_photo"/>
        </div>
      </div>
      <div className={classes.introduce}>
        <p>
          I'm a self-taught front-end developer, working at OCRV. I like working on the front-end of the web. 
          This is my website, here I share information that I found on the Internet, 
          various solutions for the frontend and pet-projects created.
        </p>

        <div className={classes.links}>
          {/* <button className="neumorphism_button">
            <Link to={'/about-me'}>About Me&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} color={'var(--primary)'}/></Link>
          </button> */}

          <Link to={'/about-me'} className="neumorphism_button">About Me&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} color={'var(--primary)'}/></Link>
          <Link to={'/projects'} className="neumorphism_button">Projects&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} color={'var(--primary)'}/></Link>
          
          {/* <button className="neumorphism_button">
            <Link to={'/blog'}>Blog&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} /></Link>
          </button> */}
          {/* <button className="neumorphism_button">
            <Link to={'/projects'}>Projects&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} color={'var(--primary)'}/></Link>
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default Home;
