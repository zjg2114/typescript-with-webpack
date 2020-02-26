// tree shaking 只支持ES Moudle的方式引入
// https://webpack.docschina.org/guides/tree-shaking/#src/components/Sidebar/Sidebar.jsx
// import { square } from "../utils/computed";
import _ from "lodash";
export function cube(x: number) {
  return x * x * x;
}
// square(3);
console.log(_.join(["a", "b"], "c"));
