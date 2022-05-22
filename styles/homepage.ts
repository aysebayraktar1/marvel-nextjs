import styled from "styled-components";

export const CharacterListStyled = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 1179px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const CardWrapper = styled.div`
  cursor: pointer;
  display: flex;
  text-align: center;
  background: white;
  border-radius: 16px;
  font-family: "Teko", sans-serif;
  box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);
  border: 0;
  margin: 16px;
`;

export const LoaderStyled = styled.div`
  position: fixed;
  bottom: 0;
  padding: 1rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);

  @keyframes hop {
    0% {
      transform: scale(1) translateY(0);
    }
    25% {
      transform: scale(1.1) translateY(10px);
    }
    50% {
      transform: scale(1.2) translateY(20px);
    }
    75% {
      transform: scale(1.1) translateY(10px);
    }
    100% {
      transform: scale(1) translateY(0px);
    }
  }
`;
export const CircleStyled = styled.div`
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:nth-child(1) {
    animation: hop 1s ease-in-out infinite;
  }

  &:nth-child(2) {
    animation: hop 1s ease-in-out infinite 0.1s;
  }

  &:nth-child(3) {
    animation: hop 1s ease-in-out infinite 0.2s;
  }
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  width: 30%;
  margin: 0 auto;
  width: 30%;
  margin-top: 20px;
`;

export const SearchInputStyled = styled.input`
  width: 100%;
  font-size: 17px;
  padding: 6px 40px 6px 10px;
  border: none;
  font-family: "Source Sans Pro", sans-serif;
  outline: none;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.4);
  transition: 0.15s ease-in;
  overflow: visible;
`;

