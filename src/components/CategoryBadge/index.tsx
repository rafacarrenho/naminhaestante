import React from "react";
import * as S from "./styles";
import Link from "next/link";

type CategoryBadgeProps = {
  text: string;
  url: string;
};

export const CategoryBadge = ({ url, text }: CategoryBadgeProps) => {
  return (
    <Link href={url} passHref={true}>
      <S.Link>{text}</S.Link>
    </Link>
  );
};
