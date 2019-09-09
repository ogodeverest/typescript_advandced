export default () => {
  const enum Sizes {
    Small = "small",
    Medium = "medium",
    Large = "large"
  }
  let selected: Sizes = Sizes.Small;

  const upadateSize = (size: Sizes): void => {
    selected = size;
  };

  upadateSize(Sizes.Large);
  console.log(selected);
};
