export default () => {
  class Song {
    constructor(public title: string, public duration: string | number) {}
  }

  const getSongDuration = (item: Song) => {
    if (typeof item.duration === "string") {
      return item.duration;
    }
    const { duration } = item;
    const minutes = Math.floor(duration / 60000);
    const seconds = (duration / 1000) % 60;

    return `${minutes}:${seconds}`;
  };

  const songDurationFromString = getSongDuration(
    new Song("wonderful", "05:31")
  );

  console.log(songDurationFromString);
  const getSongDurationFromMs = getSongDuration(new Song("wonderful", 3300));
  console.log(getSongDurationFromMs);
};
