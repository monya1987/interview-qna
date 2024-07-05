import { default as NextLink, LinkProps } from 'next/link';
import React from "react";
import { usePathname } from 'next/navigation'
import cn from 'classnames';

type MyLink = {
    children?: React.ReactNode;
    className?: string;
} & LinkProps;

export default function MyLink(props: MyLink)  {
    const pathname = usePathname();
    return (
        <NextLink {...props} className={cn( props.className, {
            'active': pathname === props.href,
        })} >{props.children}</NextLink>
    );
}