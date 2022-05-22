import React, { FC } from "react";

const ComicCard: FC<IComicCard> = ({ id, title, description }) => {
  return (
    <div key={id} data-testid="ComicCard__Component">
      {title}
      <pre></pre>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};

export default ComicCard;