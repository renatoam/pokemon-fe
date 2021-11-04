import NextLink from 'next/link';
import { ReactNode } from 'react';

interface LinkProps {
  href: string
  children: ReactNode
}

export default function Link(props: LinkProps) {
  const { href = '#', children } = props

  return (
    <NextLink href={href}>
      <a>{children}</a>
    </NextLink>
  )
}
