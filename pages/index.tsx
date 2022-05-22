import React, { useEffect, useState } from "react";

import { GetStaticProps } from "next";
import Head from "next/head";
import CharacterCard from "../components/CharacterCard";
import { getCharacterList } from "../services/rest";
import { CharacterListStyled, CardWrapper } from "../styles/homepage";
import useInfiniteScroll from "../hooks/useInfinite";

const CharacterList = ({ characters, limit }: ICharacterList) => {
  const [limitVal, setLimitVal] = useState(limit + 10);
  const [characterList, setCharacterList] = useState(characters);
  const [isFetching, setIsFetching] = useInfiniteScroll(getMoreCharacters);

  async function getMoreCharacters() {
    if (isFetching) {
      let characters;
      try {
        characters = await getCharacterList(limitVal);
      } catch (err) {
        console.log(err);
      }
      const ids = new Set(characterList?.map((d) => d.id));
      const allCharList = [
        ...characterList,
        ...characters?.filter((d) => !ids.has(d.id)),
      ];
      setCharacterList(allCharList);
      setLimitVal(limitVal + 10);
      setIsFetching(limitVal < 100);
    }
  }

  return (
    <>
      <Head>
        <title>Marvel</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <CharacterListStyled>
        {characterList?.map(({ name, id, thumbnail }) => (
          <CardWrapper key={id}>
            <CharacterCard name={name} thumbnail={thumbnail} id={id} />
          </CardWrapper>
        ))}
      </CharacterListStyled>
      {isFetching && <div>Loading more</div>}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let characters = [];
  const limit = 30;
  try {
    characters = await getCharacterList(limit);
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      characters,
      limit,
    },
  };
};

export default CharacterList;
