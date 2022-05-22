import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import CharacterCard from "../components/CharacterCard";
import { getCharacterList } from "../services/rest";
import { CharacterListStyled, CardWrapper } from "../styles/homepage";

const CharacterList = ({ characters }: ICharacterList) => {
  return (
    <>
      <Head>
        <title>Marvel</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <CharacterListStyled>
        {characters?.map(({ name, id, thumbnail }) => (
          <CardWrapper key={id}>
            <CharacterCard name={name} thumbnail={thumbnail} id={id} />
          </CardWrapper>
        ))}
      </CharacterListStyled>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let characters = [];
  try {
    characters = await getCharacterList(30);
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      characters: characters,
    },
  };
};

export default CharacterList;
