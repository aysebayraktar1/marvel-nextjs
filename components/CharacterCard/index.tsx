import React, { FC } from 'react';
import NextImage from '../Image';
import Link from 'next/link';

const CharacterCard: FC<ICharacterCard> = ({ name, thumbnail, id }) => {
  return (
    <Link href={`/detail/${id}`}>
      <a>
        <NextImage
          src={thumbnail.path + '/standard_fantastic.jpg'}
          priority={true}
          width={250}
          height={250}
          objectFit="contain"
          quality={100}
          alt={name}
        />
        <div>{name}</div>
      </a>
    </Link>
  );
};

export default CharacterCard;
