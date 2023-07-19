import React from 'react';
import { createUseStyles } from 'react-jss';

import CustomLink from '../../elements/CustomLink';

const useStyles = createUseStyles({
  nav: {
    flexGrow: 3,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    '& > a': {
      margin: '0 1%',
      textDecoration: 'none',
      color: 'var(--primary)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fz-md)',
      letterSpacing: '1px',
      lineHeight: 1,
      fontWeight: 100,
      padding: '0.375rem 0.4375rem',
      border: '1px solid var(--background-color)',
      borderRadius: '5px',
      boxSizing: 'border-box',
    },
    '@media (max-width: 600px)': {
      display: 'none',
    }
  },
});

function DesktopHeader() {
  const classes = useStyles();
  return (
    <nav className={classes.nav}>
      <CustomLink to="/">Главная</CustomLink>
      <CustomLink to="/about-me">Обо мне</CustomLink>
      <CustomLink to="/skills">Навыки</CustomLink>
      <CustomLink to="/projects">Проекты</CustomLink>
      <CustomLink to="/blog">Блог</CustomLink>
      <CustomLink to="/contact-me">Контакты</CustomLink>
      <CustomLink to="/resume">Резюме</CustomLink>
      <CustomLink to="/test">Test</CustomLink>
    </nav>
  );
}

export default DesktopHeader;
