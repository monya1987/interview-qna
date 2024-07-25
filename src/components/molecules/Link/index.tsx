import { default as NextLink, LinkProps } from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import cn from 'classnames';

type MyLinkProps = {
    children: React.ReactNode;
    className?: string;
} & LinkProps;

export default function MyLink(props: MyLinkProps) {
  const pathname = usePathname();
  const { className, href, children } = props;
  return (
    <NextLink
      {...props}
      className={cn(className, {
        active: pathname === href,
      })}
    >
      {children}
    </NextLink>
  );
}
