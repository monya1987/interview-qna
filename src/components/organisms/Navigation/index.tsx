'use client';

import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from '@nextui-org/react';
import { usePathname } from 'next/navigation';

const LINKS = [
  { link: '/', name: 'Главная' },
  { link: '/interview-questions', name: 'Вопросы Интервью' },
  { link: '/videos', name: 'Видео Интервью' },
  { link: '/online-coding', name: 'Онлайн Кодинг' },
  { link: '/analytics', name: 'Аналитика Вакансий' },
  { link: '/it-courses', name: 'Курсы' },
  { link: '/it-mentors', name: 'Менторы' },
];

function Logo() {
  return (
    <NavbarBrand>
      <Link color="foreground" href="/">
        Logo
      </Link>
    </NavbarBrand>
  );
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <Logo />
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Logo />
        {LINKS.map(({ link, name }) => (
          <NavbarItem key={name} isActive={pathname === link}>
            <Link color="foreground" href={link}>
              {name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {LINKS.map(({ link, name }) => (
          <NavbarMenuItem key={link} isActive={pathname === link}>
            <Link
              className="w-full"
              size="lg"
              href={link}
            >
              {name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
