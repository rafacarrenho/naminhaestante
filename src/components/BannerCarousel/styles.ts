import styled from "styled-components";

export const Wrapper = styled.div`
  height: 550px;
  background: #f5f5f7;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.div`
  width: 50%;
  background: yellow;
  height: 100%;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const CardContainer = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  gap: 20px;
`;
