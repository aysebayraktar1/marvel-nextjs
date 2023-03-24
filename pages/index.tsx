import React, { useEffect, useState, useTransition } from 'react';

import { GetStaticProps } from 'next';
import Head from 'next/head';
import CharacterCard from '../components/CharacterCard';
import { getCharacterList } from '../services/rest';
import {
  CharacterListStyled,
  CardWrapper,
  LoaderStyled,
  CircleStyled,
  SearchInputStyled,
  SearchInputWrapper,
} from '../styles/homepage';
import useInfiniteScroll from '../hooks/useInfinite';

const CharacterList = ({ characters, limit }: ICharacterList) => {
  const [characterList, setCharacterList] = useState(characters);
  const [isFetching, setIsFetching] = useInfiniteScroll(getMoreCharacters);
  const [offset, setOffset] = useState(limit);
  const [loadMore, setIsLoadMore] = useState(false);

  // const [isPending, startTransition] = useTransition();
  // const [filterTerm, setFilterTerm] = useState("");

  async function getMoreCharacters() {
    if (isFetching) {
      let characters;
      try {
        setIsLoadMore(true);
        characters = await getCharacterList(10, offset);
      } catch (err) {
        console.log(err);
      }

      const allCharList = [...characterList, ...characters];
      setCharacterList(allCharList);
      setOffset(offset + 10);
      // control data total count
      setIsFetching(offset > 1560);
      setIsLoadMore(false);
    }
  }

  return (
    <>
      <Head>
        <title>Marvel</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      {/* <SearchInputWrapper>
        <SearchInputStyled
          type="text"
          placeholder="Search..."
          onChange={(e) => searchItems(e.target.value)}
        />
      </SearchInputWrapper> */}
      <CharacterListStyled>
        {characterList?.map(({ name, id, thumbnail }) => (
          <CardWrapper key={id}>
            <CharacterCard name={name} thumbnail={thumbnail} id={id} />
          </CardWrapper>
        ))}
        {loadMore && (
          <LoaderStyled>
            <CircleStyled />
            <CircleStyled />
            <CircleStyled />
          </LoaderStyled>
        )}
      </CharacterListStyled>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let characters = [];
  const limit = 30;
  try {
    characters = await getCharacterList(limit, 0);
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
