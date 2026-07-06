# Changelog / Журнал изменений

Все заметные изменения проекта будут документироваться в этом файле.
All notable changes to this project will be documented in this file.

Проект использует простой стиль Conventional Commits.
The project follows a simple Conventional Commits style.

---

## 🇷🇺 Русская версия

## Соглашение по коммитам

* `feat` — новая функциональность
* `fix` — исправление ошибки
* `refactor` — улучшение кода без изменения поведения
* `docs` — изменения в документации
* `chore` — служебные изменения
* `style` — форматирование

## [Unreleased]

### Добавлено

* Начальная настройка проекта на Next.js
* Глобальный layout с Header и Footer
* Адаптивная главная страница
* Hero-секция
* Фоновый визуальный слой для Hero
* Оптимизированное изображение в Hero через `next/image`
* Список технологий в Hero
* Секция About
* Секция Tech Stack
* Секция Featured Projects
* Секция Contact CTA
* Переиспользуемые UI-компоненты
* Переиспользуемый компонент `Card`
* Утилита для объединения CSS-классов
* Фиксированный Header
* Мобильное меню
* Метаданные сайта
* Favicon и app icons
* Динамическое Open Graph изображение
* Страница `/projects`
* Динамические страницы проектов `/projects/[slug]`
* Страница `/about`
* Страница `/contact`
* Номер телефона в контактной информации
* Кастомная 404-страница
* Двуязычный README
* CHANGELOG
* DEVLOG

### Изменено

* Улучшен визуальный дизайн Hero-секции
* Улучшена визуальная система карточек
* Унифицированы отступы секций
* Обновлены ссылки навигации для отдельных страниц
* Улучшено поведение компонента `Button` для внешних ссылок
* Улучшено поведение мобильного меню на реальных устройствах

### Исправлено

* Исправлено позиционирование overlay-слоя изображения в Hero
* Исправлена работа мобильного меню на iPhone
* Исправлена настройка локального тестирования Next.js dev server по сети
* Исправлена ошибка рендера Open Graph изображения через явные `display: flex`

### Документация

* Добавлен двуязычный README
* Добавлено описание структуры проекта
* Добавлены заметки по разработке
* Добавлен roadmap
* Добавлено соглашение по коммитам

---

## 🇬🇧 English Version

## Commit Convention

* `feat` — new feature
* `fix` — bug fix
* `refactor` — code improvement without changing behavior
* `docs` — documentation changes
* `chore` — maintenance changes
* `style` — formatting changes

## [Unreleased]

### Added

* Initial Next.js project setup
* Global layout with Header and Footer
* Responsive landing page
* Hero section
* Hero background visual layer
* Optimized hero image with `next/image`
* Hero tech stack pills
* About section
* Tech Stack section
* Featured Projects section
* Contact CTA section
* Reusable UI components
* Reusable `Card` component
* Utility function for composing CSS class names
* Fixed Header
* Mobile navigation menu
* Site metadata
* App icons and favicon
* Dynamic Open Graph image
* Projects page
* Dynamic project pages `/projects/[slug]`
* About page
* Contact page
* Phone contact information
* Custom 404 page
* Bilingual README
* CHANGELOG
* DEVLOG

### Changed

* Improved Hero visual design
* Improved card visual system
* Unified section spacing
* Updated navigation links for real pages
* Improved `Button` behavior for external links
* Improved mobile menu behavior on real devices

### Fixed

* Fixed Hero image overlay positioning
* Fixed mobile navigation interaction on iPhone
* Fixed local network testing setup for the Next.js dev server
* Fixed Open Graph image rendering issue with explicit `display: flex`

### Documentation

* Added bilingual README
* Added project structure overview
* Added development notes
* Added roadmap
* Added commit convention
