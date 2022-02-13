import React from "react";
import { CardCarousel } from "./CardCarousel";
import * as S from "./styles";

export const BannerCarousel = () => {
  return (
    <S.Wrapper>
      <S.Background />
      <S.CardContainer>
        {fakePosts.map((item, index) => {
          return (
            <CardCarousel {...item} active={index === 0} key={item.category} />
          );
        })}
      </S.CardContainer>
    </S.Wrapper>
  );
};

const fakePosts = [
  {
    category: "SUSPENSE",
    title: "O Colecionador | Resenha",
    description:
      "O Livro Verity, da autora Collen Hoover, consegue ter suspense desde a sua primeira página ...",
    url: "string",
  },
  {
    category: "Romance",
    title: "O Lado feio do amor | Resenha",
    description:
      "Uma mulher na Escuridão, do escritor Charlie Donlea, é um dos melhores livros que eu ...",
    url: "string",
  },
];
