// 数字 字符串索引签名（联合类型需要满足数字索引返回值是字符串索引的子类）
interface StringArray {
  [a: number]: number;
}
let chars: StringArray = { 1: 1 };
let charss: StringArray = [1];

// 实例接口
interface ClockInterface {
  tick(): void;
}
// 构造器接口
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
function createClock(
  ctor: ClockConstructor,
  h: number,
  m: number
): ClockInterface {
  return new ctor(h, m);
}
// 类有两部分接口 实例部分 和构造器部分类型
class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("digitalClock");
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("analogClock");
  }
}
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 2, 15);

//接口继承
interface Person {
  age: number;
}
interface Grade {
  year: number;
}
interface Student extends Grade, Person {
  skill: string;
}
let hanhan: Student = {
  age: 18,
  year: 1,
  skill: "learn"
};

// 混合类型
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = function(star: number) {
    return "aa";
  } as Counter;
  counter.interval = 1;
  counter.reset = () => {
    console.log("reset");
  };
  return counter;
}
let ccc = getCounter();
console.log(Object.prototype.toString.call(ccc));

//接口继承类
class Control {
  // 私有属性不能被实例访问
  private state: any;
  age: number;
  constructor() {
    this.age = 123;
  }
}

interface SelectableControl extends Control {
  select(): void;
}
class Button extends Control implements SelectableControl {
  select() {
    console.log("Button");
  }
}
let btn = new Button();
console.log(btn);
