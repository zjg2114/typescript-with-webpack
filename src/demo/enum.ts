// 枚举类型（只读类型）
enum Category {
  a,
  b = 2,
  c = 4,
  d
}
let aa: Category = Category.b;

enum Message {
  success = "获取成功",
  fail = "获取失败"
}

enum Char {
  a,
  b = Char.a,
  c = 1 + 3,
  d = "123".length
}

// 常量枚举
const enum Week {
  Mon,
  Tue,
  Wed
}

let week = [Week.Mon, Week.Tue, Week.Wed];
console.log(week);
