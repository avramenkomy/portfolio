# Portfolio Website

Персональный сайт-портфолио, созданный на Next.js, JavaScript и Tailwind CSS.

Этот проект нужен не только для создания портфолио, но и для практики современной frontend-разработки: Next.js App Router, переиспользуемые UI-компоненты, metadata, динамические маршруты и production-ready структура проекта.

---

## 🇷🇺 Русская версия

## Стек технологий

* Next.js
* React
* JavaScript
* Tailwind CSS
* pnpm
* Git
* Vercel

## Возможности

* Адаптивная главная страница
* Hero-секция с оптимизированным изображением
* Переиспользуемые UI-компоненты
* Фиксированная шапка сайта
* Мобильное меню
* Секция About
* Секция Tech Stack
* Секция Featured Projects
* Секция Contact CTA
* Страница `/about`
* Страница `/projects`
* Динамические страницы проектов `/projects/[slug]`
* Страница `/contact`
* Кастомная 404-страница
* Metadata API
* Динамическое Open Graph изображение
* Favicon и app icons

## Структура проекта

```text
src/
├── app/
│   ├── about/
│   ├── contact/
│   ├── projects/
│   │   ├── [slug]/
│   │   └── page.js
│   ├── layout.js
│   ├── page.js
│   ├── not-found.js
│   ├── opengraph-image.jsx
│   └── globals.css
│
├── components/
│   ├── contact/
│   ├── hero/
│   ├── layout/
│   ├── projects/
│   ├── sections/
│   └── ui/
│
├── data/
│   ├── about.js
│   ├── aboutPage.js
│   ├── contact.js
│   ├── contactPage.js
│   ├── heroTechStack.js
│   ├── navigation.js
│   ├── profile.js
│   ├── projects.js
│   ├── site.js
│   └── techStack.js
│
└── lib/
    └── utils.js
```

## Запуск проекта

Установить зависимости:

```bash
pnpm install
```

Запустить dev server:

```bash
pnpm dev
```

Запустить dev server с доступом по локальной сети:

```bash
pnpm dev --hostname 0.0.0.0
```

Открыть локально:

```text
http://localhost:3000
```

Для тестирования на телефоне открой локальный IP-адрес Mac:

```text
http://YOUR_LOCAL_IP:3000
```

Пример:

```text
http://192.168.0.144:3000
```

## Заметки по разработке

Проект использует `pnpm`.

Если сайт тестируется на реальном мобильном устройстве в режиме разработки, нужно настроить `allowedDevOrigins` в `next.config.mjs`.

Пример:

```js
const nextConfig = {
  allowedDevOrigins: ['192.168.0.144'],
};

export default nextConfig;
```

Если Turbopack неправильно определяет корень проекта, можно явно указать `turbopack.root` в `next.config.mjs`.

## Доступные страницы

* `/`
* `/about`
* `/projects`
* `/projects/[slug]`
* `/contact`

## Что изучается в проекте

Во время разработки проекта изучаются важные темы React и Next.js:

* App Router
* Layouts
* Server Components
* Client Components
* `next/link`
* `next/image`
* `next/font`
* Metadata API
* Open Graph image generation
* Dynamic routes
* `generateStaticParams`
* `notFound`
* Переиспользуемые UI-компоненты
* Композиция компонентов
* Адаптивная верстка
* Мобильная навигация
* Git workflow
* Conventional Commits

## Roadmap

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

## Соглашение по коммитам

Проект использует простой стиль Conventional Commits:

```text
feat: новая функциональность
fix: исправление ошибки
refactor: улучшение кода без изменения поведения
docs: изменения в документации
chore: служебные изменения
style: форматирование
```

Примеры:

```bash
git commit -m "feat: add hero section"
git commit -m "fix: improve mobile menu touch handling"
git commit -m "refactor: unify card visual system"
git commit -m "docs: add project README"
```

## Автор

Mikhail Avramenko
Frontend Developer

---

## 🇬🇧 English Version

## Tech Stack

* Next.js
* React
* JavaScript
* Tailwind CSS
* pnpm
* Git
* Vercel

## Features

* Responsive landing page
* Hero section with optimized image
* Reusable UI components
* Fixed header
* Mobile navigation
* About section
* Tech Stack section
* Featured Projects section
* Contact CTA section
* About page
* Projects page
* Dynamic project pages `/projects/[slug]`
* Contact page
* Custom 404 page
* Metadata API
* Dynamic Open Graph image
* App icons and favicon

## Project Structure

```text
src/
├── app/
│   ├── about/
│   ├── contact/
│   ├── projects/
│   │   ├── [slug]/
│   │   └── page.js
│   ├── layout.js
│   ├── page.js
│   ├── not-found.js
│   ├── opengraph-image.jsx
│   └── globals.css
│
├── components/
│   ├── contact/
│   ├── hero/
│   ├── layout/
│   ├── projects/
│   ├── sections/
│   └── ui/
│
├── data/
│   ├── about.js
│   ├── aboutPage.js
│   ├── contact.js
│   ├── contactPage.js
│   ├── heroTechStack.js
│   ├── navigation.js
│   ├── profile.js
│   ├── projects.js
│   ├── site.js
│   └── techStack.js
│
└── lib/
    └── utils.js
```

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Run the development server and expose it to the local network:

```bash
pnpm dev --hostname 0.0.0.0
```

Open the project locally:

```text
http://localhost:3000
```

For mobile testing, open your Mac local network IP on your phone:

```text
http://YOUR_LOCAL_IP:3000
```

Example:

```text
http://192.168.0.144:3000
```

## Development Notes

This project uses `pnpm`.

If you test the site on a real mobile device during development, make sure `allowedDevOrigins` is configured in `next.config.mjs`.

Example:

```js
const nextConfig = {
  allowedDevOrigins: ['192.168.0.144'],
};

export default nextConfig;
```

If Turbopack incorrectly detects the workspace root, configure `turbopack.root` in `next.config.mjs`.

## Available Pages

* `/`
* `/about`
* `/projects`
* `/projects/[slug]`
* `/contact`

## What I Learned

During development, this project covers several important Next.js and React concepts:

* App Router
* Layouts
* Server Components
* Client Components
* `next/link`
* `next/image`
* `next/font`
* Metadata API
* Open Graph image generation
* Dynamic routes
* `generateStaticParams`
* `notFound`
* Reusable UI components
* Component composition
* Responsive design
* Mobile navigation
* Git workflow
* Conventional Commits

## Roadmap

* Add real project screenshots
* Add project case studies
* Add animations
* Add theme switcher
* Add blog
* Add MDX support
* Add RSS feed
* Add sitemap
* Add robots.txt
* Deploy to Vercel
* Connect a custom domain

## Commit Convention

This project follows a simple Conventional Commits style:

```text
feat: new feature
fix: bug fix
refactor: code improvement without behavior change
docs: documentation changes
chore: maintenance
style: formatting changes
```

Examples:

```bash
git commit -m "feat: add hero section"
git commit -m "fix: improve mobile menu touch handling"
git commit -m "refactor: unify card visual system"
git commit -m "docs: add project README"
```

## Author

Mikhail Avramenko
Frontend Developer
