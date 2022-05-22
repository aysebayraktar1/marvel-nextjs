import styled from "styled-components";

export const ImageWrapper = styled.a`
  width: 100%;
  height: auto;
  img {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
`;

export const NameStyled = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 230px;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
  display: inherit;
`;

export const CharacterCardWrapper = styled.div`
  display: flex;
`;