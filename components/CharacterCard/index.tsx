import React, { FC } from "react";
import NextImage from "../Image";
import Link from "next/link";
import { ImageWrapper, NameStyled, CharacterCardWrapper } from "./styled";

const CharacterCard: FC<ICharacterCard> = ({ name, thumbnail, id }) => {
  return (
    <CharacterCardWrapper data-testid="CharacterCard__Component">
      <Link href={`/detail/${id}`}>
        <ImageWrapper>
          <NextImage
            src={thumbnail?.path + "/standard_fantastic.jpg"}
            priority={true}
            width={250}
            height={250}
            objectFit="cover"
            quality={100}
            alt={name}
          />
          <NameStyled>{name}</NameStyled>
        </ImageWrapper>
      </Link>
    </CharacterCardWrapper>
  );
};

export default CharacterCard;
