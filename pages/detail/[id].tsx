import React, { useEffect, useState } from 'react';
import NextImage from '../../components/Image';
import ComicCard from '../../components/ComicCard';
import {
  CharacterDetailStyled,
  CharDescStyled,
  CharNameStyled,
  DetailWrapper,
  ComicTitleStyled
} from '../../styles/detail';
import { getCharacterById, getComicsByCharId } from '../../services/rest';

const DetailPage = ({ detail, id }) => {
  const [comics, setComics] = useState(null);

  useEffect(() => {
    // fetch comics
    const fetchData = async () => {
      let res = [];
      try {
        res = await getComicsByCharId(id, 10, '-onsaleDate');
      } catch (err) {
        console.log(err);
      }
      setComics(res);
    };

    fetchData();
  }, [id]);

  return (
    <CharacterDetailStyled>
      {detail?.map(({ name, thumbnail, description, id }) => (
        <DetailWrapper key={id}>
          <NextImage
            src={thumbnail.path + '/standard_fantastic.jpg'}
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

DetailPage.getInitialProps = async ({ query }) => {
  const { id } = query;
  let detail = [];
  try {
    detail = await getCharacterById(id);
  } catch (err) {
    console.log(err);
  }
  return { detail: detail, id };
};

export default DetailPage;
