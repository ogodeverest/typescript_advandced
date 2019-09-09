export default () => {
  class Song {
    kind: "song";
    constructor(public title: string, public duration: number) {}
  }

  class PlayList {
    kind: "playlis";
    constructor(public name: string, public songs: Song[]) {}
  }

  function isSong(item: any): item is Song {
    return "title" in item && item instanceof Song;
  }

  const getItemName = (item: Song | PlayList) => {
    if (item.kind === "song") {
      return item.title;
    }
    return item.name;
  };

  const songName = getItemName(new Song("Wonderful", 30000));
  console.log("Song Name:", songName);
  const playlistName = getItemName(
    new PlayList("New playlist", [new Song("sads", 122321)])
  );
  console.log(playlistName);
};
