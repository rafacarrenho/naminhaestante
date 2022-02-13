import styled, { css } from "styled-components";

type WrapperProps = {
  active: boolean;
};

const WrapperModifier = {
  active: () => css`
    background-color: #e62d59;
    color: white;
  `,
};

export const Wrapper = styled.article<WrapperProps>`
  ${({ active }) => css`
    padding: 40px;
    box-shadow: 0 45px 20px -27px rgb(0 0 0 / 10%);
    width: 320px;
    height: 328px;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 5px;

    ${active && WrapperModifier.active};
  `}
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 8px;
`;

type DividerProps = {
  active: boolean;
};

const DividerModifier = {
  active: () => css`
    background-color: white;
  `,
};

export const Divider = styled.div<DividerProps>`
  ${({ active }) => css`
    width: 56px;
    height: 3px;
    background-color: grey;
    margin-bottom: 24px;

    ${active && DividerModifier.active}
  `}
`;

export const Description = styled.text`
  line-height: 1.5;
`;
