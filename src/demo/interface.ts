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
