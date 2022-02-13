import React from "react";
import * as S from "./styles";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import logo from "../../assets/logo-white.png";
import Link from "next/link";

export const Footer = () => {
  return (
    <S.Wrapper>
      <S.LogoContainer>
        <Link href="/">
          <a>
            <Image src={logo} width={100} height={100} alt="logo" />
          </a>
        </Link>
      </S.LogoContainer>
      <S.Social>
        <FaFacebookF />
        <FaInstagram />
      </S.Social>
      <S.CopyRight>
        Desenvolvido por <strong>RCARRENHO</strong>
      </S.CopyRight>
    </S.Wrapper>
  );
};
