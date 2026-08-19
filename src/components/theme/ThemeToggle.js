'use client';

import { useEffect, useState } from 'react';

import styles from './ThemeToggle.module.scss';

import SunIcon from './SunIcon';
import MoonIcon from './MoonIcon';

const THEME_STORAGE_KEY = 'portfolio-theme';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

    const initTheme = savedTheme === 'light' || savedTheme === 'dark'
      ? savedTheme
      : 'dark';

    document.documentElement.dataset.theme = initTheme;

    setTheme(initTheme);
    setIsMounted(true);
  }, []);

  function handleToggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    const root = document.documentElement;

    root.classList.add('theme-transition');

    root.dataset.theme = nextTheme;
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);

    setTheme(nextTheme);

    window.setTimeout(() => {
      root.classList.remove('theme-transition');
    }, [220]);
  }

  const isDarkTheme = theme === 'dark';

  return (
    <button
      type="button"
      className={styles.themeToggle}
      onClick={handleToggleTheme}
      aria-label={isDarkTheme
        ? 'Переключить на светлую тему'
        : 'Переключить на тёмную тему'
      }
      title={isDarkTheme ? 'Светлая тема' : 'Темная тема'}
    >
      <span className={styles.icon} aria-hidden="true">
        {isMounted && (isDarkTheme ? <SunIcon /> : <MoonIcon />)}
      </span>
    </button>
  )
}
