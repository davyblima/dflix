import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png'

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img width='60px' src={Logo} alt="dflix" ></img>
      </a>
    </FooterBase>
  );
}

export default Footer;
