// 类的私有 公共 只读属性
class PersonC {
  // 受保护的构造函数或者属性中只能被派生类调用
  // 私有变量只能在当前类中使用
  private _nickname: string;
  protected name: string;
  protected constructor(name: string, nickname: string) {
    this.name = name;
    this._nickname = nickname;
  }
}

class Employee extends PersonC {
  readonly age: number;
  constructor(name: string, nickname: string, age: number) {
    super(name, nickname);
    // console.log(this.nickname);
    this.age = age;
  }
  getMessage() {
    return `my name is ${this.name},i am ${this.age} years old`;
  }
}
let joe = new Employee("joe", "boy", 24);
// console.log(joe.nickname);(私有属性 实例不可以访问)
// let john =new Person('john',24)(protected只能在派生类中调用)
// joe.age=18;(readonly是只读属性 不可以修改)

// 类的存取器
class Password {
  private _password: number;
  userName: string;
  constructor(userName: string) {
    this._password = 123456;
    this.userName = userName;
  }
  get password(): number {
    return this._password;
  }
  set password(newPassword: number) {
    if (this.userName === "joe") {
      this._password = newPassword;
    } else {
      console.log("Unauthorized");
    }
  }
}

let admin = new Password("joe");
admin.password = 123;
console.log(admin);

//     静态属性
interface crosstrype {
  x: number;
  y: number;
}
class Cross {
  static origin = { x: 0, y: 0 };
  getDistance(point: crosstrype): number {
    let xDist = point.x - Cross.origin.x;
    let yDist = point.y - Cross.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist);
  }
}
