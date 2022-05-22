import React, { FC } from "react";

const ComicCard: FC<IComicCard> = ({ id, title, description }) => {
  return (
    <li key={id} data-testid="ComicCard__Component">
      {title}
      <pre></pre>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </li>
  );
};

export default ComicCard;