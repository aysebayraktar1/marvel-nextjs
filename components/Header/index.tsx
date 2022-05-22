import React from 'react';
import { HeaderStyled } from './styled';
import { Marvel } from '../../assets/svg/Marvel';
import Link from 'next/link'

const Header = () => {
  return (
    <Link href="/">
      <HeaderStyled>
s        <Marvel />
      </HeaderStyled>
    </Link>
  );
};
export default Header;
