import NextImage from 'next/image';

import Link from '@components/atoms/Link';
import { COMPANY_NAME, LOGO_PATH } from '@constants/global';

import { LogoWrapper } from './styles';

interface LogoProps {
  href: string
}

export default function Logo(props: LogoProps) {
  const { href } = props

  return (
    <LogoWrapper>
      <Link href={href}>
        <NextImage className="image" src={LOGO_PATH} layout="fill" alt={COMPANY_NAME} />
      </Link>
    </LogoWrapper>
  )
}
