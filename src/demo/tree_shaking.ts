// tree shaking 只支持ES Moudle的方式引入
// https://webpack.docschina.org/guides/tree-shaking/#src/components/Sidebar/Sidebar.jsx
// import { cube } from "../utils/computed";
export function cube(x: number) {
  return x * x * x;
}
cube(3);
