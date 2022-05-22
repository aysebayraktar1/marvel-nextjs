import React, { FC } from "react";
import NextImage from "../../components/Image";
import ComicCard from "../../components/ComicCard";
import {
  CharacterDetailStyled,
  CharDescStyled,
  CharNameStyled,
  DetailWrapper,
  ComicTitleStyled,
} from "../../styles/detail";
import {
  getCharacterById,
  getComicsByCharIdAndOrderDesc,
} from "../../services/rest";
import { GetServerSideProps } from "next";

const DetailPage: FC<IDetailPage> = ({ detail, comics }) => {
  console.log("detail", detail);
  return (
    <CharacterDetailStyled>
      {detail?.map(({ name, thumbnail: { path }, description, id }) => (
        <DetailWrapper key={id}>
          <NextImage
            src={path + "/standard_fantastic.jpg"}
            priority={true}
            width={250}
            height={250}
            objectFit="contain"
            quality={100}
            alt={name}
          />
          <CharNameStyled>{name}</CharNameStyled>
          <CharDescStyled>{description}</CharDescStyled>
        </DetailWrapper>
      ))}
      <ComicTitleStyled>Comics</ComicTitleStyled>
      {comics?.map(({ id, title, description }) => (
        <ComicCard key={id} id={id} title={title} description={description} />
      ))}
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
