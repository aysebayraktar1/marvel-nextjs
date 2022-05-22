interface ICharacterList {
  characters: ICharacter[];
  limit?: number;
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
  title: string;
  name?: string;
  description: string;
}

interface ICharacterCard {
  name: string;
  thumbnail: {
    path: string;
  };
  id: number;
  description?: string | "";
}

interface IComicCard {
  id: number;
  title: string;
  description: string;
}
interface IDetailPage {
  detail: ICharacterCard[];
  comics: IComic[];
}

interface InfiniteProps {
  isFetching: boolean;
  setIsFetching: (isFetching: boolean) => void;
}
