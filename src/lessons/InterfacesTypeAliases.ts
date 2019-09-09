export default () => {
  interface Item {
    name: string;
  }
  interface Artist extends Item {
    songs: number;
  }

  type Artist2 = {
    name: string;
  } & Item;

  interface Artist {
    getSongs: () => number;
  }

  const newArtist: Artist = {
    name: "",
    songs: 5,
    getSongs: () => {
      return newArtist.songs;
    }
  };
  class ArtistCreator implements Partial<Artist> {
    constructor(public name: string) {}
  }
  const artistFactory = ({ name }: Partial<Artist>) => {
    return { name };
  };

  artistFactory({ name: "Todd" });
};
