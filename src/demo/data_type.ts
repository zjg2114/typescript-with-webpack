// 基本数据类型
let bool: boolean = false;
let num: number = 123;
let str: string = "abc";

// 数组
let arr1: number[] = [1, 2, 3];
let arr2: Array<number | string> = ["a", 1, 2, 3];

// 元组(规定了长度和类型的数组)
let tuple: [number, string] = [1, "q"];

// 函数类型
let add = (x: number, y: number) => x + y;
let add2: (x: number, y: number) => number;
add2 = (a, b) => a + b;

// 对象
let obj: { a?: any } = {};
obj.a = 1;

// void 没有任何返回值的类型
let noReturn = () => {};
