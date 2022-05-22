import React, { FC, useState } from 'react';

import Image, { ImageProps } from 'next/image';

const NextImage: FC<ImageProps> = (props) => {
  const lazyBoundary = props.lazyBoundary || '250px';
  const { src } = props;
  const [imgSrc, setImgSrc] = useState(src);

  const getImageURL: any = () => {
    return imgSrc;
  };
  const handleOnError = () => {
    // handle image not found error, replace fake image
    setImgSrc("http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/standard_fantastic.jpg");
  };

  return (
    <Image
      loader={getImageURL}
      src={imgSrc}
      lazyBoundary={lazyBoundary}
      onError={handleOnError}
      {...props}
    />
  );
};

export default NextImage;
