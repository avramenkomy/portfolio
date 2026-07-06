# Development Log / Журнал разработки

Этот файл описывает процесс обучения, технические решения и важные заметки по реализации проекта-портфолио.
This file documents the learning process, technical decisions and important implementation notes for the portfolio project.

---

## 🇷🇺 Русская версия

## Цель проекта

Создать современный, адаптивный и подготовленный к production сайт-портфолио, который показывает:

* навыки frontend-разработки
* понимание React и Next.js
* компонентный подход
* адаптивную верстку
* внимание к дизайну и пользовательскому опыту
* аккуратный Git workflow
* умение документировать технические решения

Проект нужен не только для результата, но и для практики современной frontend-разработки на Next.js, React, JavaScript и Tailwind CSS.

---

## Основные технологии

* Next.js
* React
* JavaScript
* Tailwind CSS
* pnpm
* Git
* Vercel

---

## Ключевые темы, изученные в проекте

### Next.js App Router

Проект использует директорию `src/app` и современный App Router.

Важные темы:

* `layout.js`
* `page.js`
* вложенные маршруты
* динамические маршруты
* route params
* `generateStaticParams`
* `notFound`
* Metadata API

### Архитектура компонентов

Проект разделен на несколько групп компонентов:

* `layout` — Header, Footer, MobileMenu
* `sections` — секции главной страницы
* `hero` — компоненты Hero-секции
* `projects` — карточки проектов
* `contact` — контактные компоненты
* `ui` — базовые переиспользуемые UI-компоненты

Такая структура делает проект проще для поддержки и дальнейшего расширения.

### Переиспользуемые UI-компоненты

В проекте используются базовые UI-компоненты:

* `Button`
* `Card`
* `Container`
* `Section`
* `SectionTitle`
* `Heading`
* `Paragraph`
* `Badge`

Это помогает избежать дублирования кода и сохранить единый визуальный стиль.

### Data-driven UI

Контент проекта хранится отдельно в директории `src/data`.

Примеры данных:

* информация профиля
* ссылки навигации
* проекты
* стек технологий
* контактная информация
* метаданные сайта

Такой подход позволяет менять контент без изменения логики компонентов.

### Адаптивная верстка

Интерфейс проектируется для desktop и mobile устройств.

Важные элементы:

* мобильное меню
* адаптивные grid-сетки
* адаптивные отступы секций
* оптимизированное изображение в Hero
* тестирование на реальном iPhone через локальную сеть

### Metadata и Open Graph

В проекте настроены:

* title и description
* Open Graph metadata
* Twitter card metadata
* динамическое Open Graph изображение
* favicon и app icons

Это улучшает отображение сайта в поисковых системах и при публикации ссылок в социальных сетях.

---

## Важные технические решения

### JavaScript вместо TypeScript

Проект сейчас использует JavaScript, чтобы сначала сфокусироваться на фундаментальных возможностях Next.js.

TypeScript можно добавить позже отдельным этапом.

### App Router с самого начала

Проект использует современный Next.js App Router вместо старого Pages Router.

Это помогает практиковать актуальные подходы Next.js.

### Отдельные файлы с данными

Контент вынесен в `src/data`.

Это делает компоненты чище и упрощает поддержку проекта.

### Компонент `Card`

Был создан переиспользуемый компонент `Card`, чтобы унифицировать визуальный стиль секций, карточек проектов и контактных блоков.

### Компонент `Button`

Компонент `Button` поддерживает внутренние и внешние ссылки.

Внутренние ссылки используют `next/link`.

Внешние ссылки используют обычный тег `<a>` с `target="_blank"` и `rel="noreferrer"`.

### Кастомная 404-страница

Файл `not-found.js` был добавлен для красивого отображения несуществующих страниц.

---

## Проблемы, решенные во время разработки

### Мобильное меню не работало на iPhone

Мобильное меню работало в DevTools, но не работало на реальном iPhone.

Проблема была связана с локальным сетевым тестированием и настройкой Next.js dev server.

Решение:

* запускать dev server с `--hostname 0.0.0.0`
* открывать локальный IP-адрес Mac на телефоне
* настроить `allowedDevOrigins` в `next.config.mjs`

### Overlay изображения в Hero растягивался неправильно

Overlay-слой изображения был расположен вне контейнера изображения.

Решение:

* перенести overlay внутрь image wrapper
* оставить контейнер изображения `relative`
* изолировать визуальные эффекты Hero

### Ошибка рендера Open Graph изображения

Динамическое Open Graph изображение падало из-за того, что некоторые элементы с несколькими дочерними узлами не имели явного `display`.

Решение:

* добавить `display: 'flex'` для нужных элементов
* использовать простые стили, совместимые с `ImageResponse`

---

## Текущее состояние проекта

Сейчас проект включает:

* главную страницу
* страницу `/about`
* страницу `/projects`
* динамические страницы проектов `/projects/[slug]`
* страницу `/contact`
* кастомную 404-страницу
* адаптивный Header
* мобильное меню
* метаданные сайта
* динамическое Open Graph изображение
* README
* CHANGELOG
* DEVLOG

---

## Возможные следующие улучшения

* Добавить реальные скриншоты проектов
* Добавить подробные project case studies
* Добавить анимации
* Добавить переключатель темы
* Добавить блог
* Добавить MDX
* Добавить RSS feed
* Добавить sitemap
* Добавить robots.txt
* Задеплоить проект на Vercel
* Подключить собственный домен
* Добавить TypeScript
* Улучшить accessibility
* Улучшить SEO

---

## 🇬🇧 English Version

## Project Goal

Build a modern, responsive and production-ready portfolio website that demonstrates:

* frontend development skills
* understanding of React and Next.js
* component-based architecture
* responsive UI
* attention to design and user experience
* clean Git workflow
* ability to document technical decisions

The goal of this project is not only to build a portfolio website, but also to practice modern frontend development with Next.js, React, JavaScript and Tailwind CSS.

---

## Main Technologies

* Next.js
* React
* JavaScript
* Tailwind CSS
* pnpm
* Git
* Vercel

---

## Key Concepts Practiced

### Next.js App Router

The project uses the `src/app` directory and the modern App Router.

Important concepts:

* `layout.js`
* `page.js`
* nested routes
* dynamic routes
* route params
* `generateStaticParams`
* `notFound`
* Metadata API

### Component Architecture

The project is split into several focused component groups:

* `layout` — Header, Footer, MobileMenu
* `sections` — homepage sections
* `hero` — Hero-specific components
* `projects` — project cards
* `contact` — contact components
* `ui` — reusable base UI components

This structure makes the project easier to maintain and extend.

### Reusable UI Components

The project includes reusable UI components such as:

* `Button`
* `Card`
* `Container`
* `Section`
* `SectionTitle`
* `Heading`
* `Paragraph`
* `Badge`

This helps avoid code duplication and keeps the design system consistent.

### Data-driven UI

Project content is stored separately in the `src/data` directory.

Examples:

* profile information
* navigation links
* projects
* tech stack
* contact information
* site metadata

This approach makes it easier to update content without changing component logic.

### Responsive Design

The layout is designed to work on desktop and mobile devices.

Important responsive features:

* mobile navigation menu
* responsive grid layouts
* adaptive section spacing
* optimized Hero image
* local network testing on a real iPhone

### Metadata and Open Graph

The project uses metadata configuration for:

* page titles
* descriptions
* Open Graph metadata
* Twitter card metadata
* dynamic Open Graph image
* app icons and favicon

This improves how the site appears in search results and when shared on social platforms.

---

## Important Technical Decisions

### JavaScript instead of TypeScript

The project currently uses JavaScript to focus on learning Next.js fundamentals first.

TypeScript can be added later as a separate improvement step.

### App Router from the beginning

The project uses the modern Next.js App Router instead of the older Pages Router.

This gives practice with current Next.js patterns.

### Separate data files

Project content is stored in `src/data`.

This keeps components clean and makes the website easier to maintain.

### Custom `Card` component

A reusable `Card` component was introduced to unify the visual style of sections, project cards and contact blocks.

### Smart `Button` component

The `Button` component supports both internal and external links.

Internal links use `next/link`.

External links use a regular anchor tag with `target="_blank"` and `rel="noreferrer"`.

### Custom 404 page

A custom `not-found.js` page was added to provide a polished user experience for missing routes.

---

## Issues Solved During Development

### Mobile menu did not work on iPhone

The mobile menu worked in browser DevTools but did not work on a real iPhone.

The issue was related to local network testing and Next.js dev server configuration.

Solution:

* run the dev server with `--hostname 0.0.0.0`
* open the Mac local IP on the phone
* configure `allowedDevOrigins` in `next.config.mjs`

### Hero overlay stretched incorrectly

The Hero image overlay was positioned outside the image container.

Solution:

* move the overlay inside the image wrapper
* keep the image container `relative`
* keep visual background effects isolated

### Open Graph image rendering error

The dynamic Open Graph image failed because some elements with multiple children did not have explicit `display` styles.

Solution:

* add explicit `display: 'flex'` to required elements
* keep Open Graph image styles simple and compatible with `ImageResponse`

---

## Current Project Status

The project currently includes:

* landing page
* `/about` page
* `/projects` page
* dynamic project pages `/projects/[slug]`
* `/contact` page
* custom 404 page
* responsive Header
* mobile navigation
* site metadata
* dynamic Open Graph image
* README
* CHANGELOG
* DEVLOG

---

## Next Possible Improvements

* Add real project screenshots
* Add detailed project case studies
* Add animations
* Add theme switcher
* Add blog
* Add MDX support
* Add RSS feed
* Add sitemap
* Add robots.txt
* Deploy to Vercel
* Connect a custom domain
* Add TypeScript
* Improve accessibility
* Improve SEO
