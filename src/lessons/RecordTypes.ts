export default () => {
  let dictionary: Record<string, TrackStates> = {};

  interface TrackStates {
    current: string;
    next: string;
  }

  const item: Record<keyof TrackStates, string> = {
    current: "#j09k2",
    next: "#09yt"
  };

  dictionary[0] = item;
};
