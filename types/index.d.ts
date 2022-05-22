interface ICharacterList {
  characters: ICharacter[];
}

interface ICharacter {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
  };
  comics: IComic[];
}

interface IComic {
  id: number;
  name: string;
  description: string;
}

interface ICharacterCard {
  name: string;
  thumbnail: {
    path: string;
  };
  id: number;
}

interface IComicCard {
  id: number;
  title: string;
  description: string;
}