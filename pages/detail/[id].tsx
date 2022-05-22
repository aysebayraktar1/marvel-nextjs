import React, { FC } from "react";
import ComicCard from "../../components/ComicCard";
import {
  CharacterDetailStyled,
  CharDescStyled,
  DetailWrapper,
  ComicTitleStyled,
  CardWrapper,
  ComicListStyled
} from "../../styles/detail";
import {
  getCharacterById,
  getComicsByCharIdAndOrderDesc,
} from "../../services/rest";
import { GetServerSideProps } from "next";
import CharacterCard from "../../components/CharacterCard";

const DetailPage: FC<IDetailPage> = ({ detail, comics }) => {
  return (
    <CharacterDetailStyled>
      {detail?.map(({ name, thumbnail, description, id }) => (
        <DetailWrapper key={id}>
         <CardWrapper>
            <CharacterCard name={name} thumbnail={thumbnail} id={id} />
          </CardWrapper>
          <CharDescStyled>{description}</CharDescStyled>
        </DetailWrapper>
      ))}
      {comics?.length && <ComicTitleStyled>Comics</ComicTitleStyled>}
      <ComicListStyled>
      {comics?.map(({ id, title, description }) => (
        <ComicCard key={id} id={id} title={title} description={description} />
      ))}
      </ComicListStyled>
    </CharacterDetailStyled>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  let detail = [];
  let comics = [];

  // fetch comics
  try {
    comics = await getComicsByCharIdAndOrderDesc(id, 10, "-onsaleDate");
    detail = await getCharacterById(id);
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      detail,
      comics,
    },
  };
};

export default DetailPage;
