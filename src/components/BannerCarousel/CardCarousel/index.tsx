import React from "react";
import { CategoryBadge } from "../../CategoryBadge";
import * as S from "./styles";

type CardCarouselProps = {
  category: string;
  title: string;
  description: string;
  url: string;
  active?: boolean;
};

export const CardCarousel = ({
  category,
  title,
  description,
  url,
  active = false,
}: CardCarouselProps) => {
  return (
    <S.Wrapper active={active}>
      <CategoryBadge text={category} url={url} />
      <S.Title>{title}</S.Title>
      <S.Divider active={active} />
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  );
};
