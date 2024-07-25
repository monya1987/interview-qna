'use client';

import Link from '@/components/molecules/Link';

const LINKS = [
  { link: '/', name: 'Главная' },
  { link: '/interview-questions', name: 'Вопросы Интервью' },
  { link: '/videos', name: 'Видео Интервью' },
  { link: '/online-coding', name: 'Онлайн Кодинг' },
  { link: '/analytics', name: 'Аналитика Вакансий' },
  { link: '/it-courses', name: 'Курсы' },
  { link: '/it-mentors', name: 'Менторы' },
];

export default function Navigation() {
  return (
    <nav>
      <nav>
        {LINKS.map(({ link, name }) => (
          <div key={name}>
            <Link className="nav-link" href={link}>{name}</Link>
          </div>
        ))}
      </nav>
    </nav>
  );
}
