export default () => {
  const element = document.querySelector(".click");

  function handleClick(this: HTMLAnchorElement, event: Event) {
    event.preventDefault();
    console.log(this.href);
  }

  element.addEventListener("click", handleClick, false);
};
