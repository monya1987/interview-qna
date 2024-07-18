'use client';

import Link from 'next/link';
import cn from 'classnames';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);
  return (
    <ul className="breadcrumb">
      {pathNames.length > 0 }
      {pathNames.map((link, index) => {
        const href = `/${pathNames.slice(0, index + 1).join('/')}`;
        const isActive = paths === href;
        const itemLink = link;
        return (
          <li className={cn('breadcrumb-item', { active: isActive })} key={href}>
            {!isActive ? <Link href={href}>{itemLink}</Link> : itemLink}
          </li>
        );
      })}
    </ul>
  );
}
