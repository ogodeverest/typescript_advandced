import * as _ from "lodash";

export default () => {
  _.chunk([1, 23, 4, 5], 2);
  _.mixin({
    log(item: string) {
      console.log("Itemmmm::::::", item);
    }
  });
  _.log("sadas");
};
