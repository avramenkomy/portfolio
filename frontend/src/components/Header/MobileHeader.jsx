import React, { /*useEffect, useState*/ } from 'react';
import propTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import useMediaQuery from '../hook/useMediaQuery';
import CustomLink from '../../elements/CustomLink';

const useStyles = createUseStyles({
  menu: {
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    zIndex: 20,
    position: 'fixed',    
    backgroundColor: 'var(--sb-color)',
    flexDirection: 'column',
    display: 'flex',
    transform: open => open ? 'translateX(0)' : 'translateX(calc(-100% - 2px))',
    transition: 'transform .4s ease-in-out',
    '@media (max-width: 840px)': {
      width: '30%',
      boxShadow: '1px 0 0 1px rgba(0,0,0,.5)',
    },
    '@media (max-width: 540px)': {
      width: '100%',
      boxShadow: 'none',
    }
  },
  blur: {
    display: open => open ? 'block' : 'none',
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    left: '100%',
    backdropFilter: open => open ? 'blur(2px)' : 'none',
    WebkitBackdropFilter: open => open ? 'blur(2px)' : 'none',
    zIndex: 0,
  },
  menu__header: {
    marginBottom: '20px',
    padding: '10px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    cursor: 'pointer',
    borderBottom: '1px solid var(--primary2)',
    '& > svg': {
      fontSize: '1.5rem',
      color: 'var(--primary)',
    },
    '& > svg:hover': {
      color: 'var(--error)',
    }
  },
  menu__content: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    cursor: 'pointer',
    '& > *': {
      margin: '10px',
    },
    '& > a': {
      textDecoration: 'none',
      color: 'var(--primary)',
      fontSize: '1.5rem',
      textAlign: 'center',
      fontFamily: 'var(--font-mono)',
      padding: '0 10px',
    },
    '& > a:visited': {
      color: 'var(--primary)',
    }
  }
})


function MobileHeader({ open, onClose }) {
  const classes = useStyles(open);

  const widthMore540 = useMediaQuery('(max-width: 540px)');

  return (
    <nav className={classes.menu} onClick={onClose}>
      <div className={classes.blur} />

      <div className={classes.menu__content} onClick={event => event.stopPropagation()}>
        <div className={classes.menu__header}>
          <FontAwesomeIcon
            className={classes.icon__bar}
            icon={faClose}
            onClick={onClose}
          />
        </div>

        <div className={classes.links}>
          <CustomLink onClick={widthMore540 && onClose} to="/">Главная</CustomLink>
          <CustomLink onClick={widthMore540 && onClose} to="/about-me">Обо мне</CustomLink>
          <CustomLink onClick={widthMore540 && onClose} to="/skills">Навыки</CustomLink>
          <CustomLink onClick={widthMore540 && onClose} to="/projects">Проекты</CustomLink>
          <CustomLink onClick={widthMore540 && onClose} to="/blog">Блог</CustomLink>
          <CustomLink onClick={widthMore540 && onClose} to="/contact-me">Контакты</CustomLink>
          <CustomLink onClick={widthMore540 && onClose} to="/resume">Резюме</CustomLink>
        </div>

      </div>
      
    </nav>
  );
}

MobileHeader.defaultProps = {
  open: false,
}

MobileHeader.propTypes = {
  open: propTypes.bool.isRequired,
  onClose: propTypes.func.isRequired,
}

export default MobileHeader;
