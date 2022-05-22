import React, { FC } from "react";
import NextImage from "../Image";
import Link from "next/link";
import { ImageWrapper, NameStyled } from "./styled";

const CharacterCard: FC<ICharacterCard> = ({
  name,
  thumbnail: { path },
  id,
}) => {
  return (
    <Link href={`/detail/${id}`}>
      <ImageWrapper>
        <NextImage
          src={path + "/standard_fantastic.jpg"}
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
  );
};

export default CharacterCard;
