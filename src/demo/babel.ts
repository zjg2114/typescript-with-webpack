let a: string = "hello world";
const func = (str: string) => {
  return new Promise((reslove, reject) => {
    if (str.length > 3) {
      reslove(str.slice(0, 3));
    } else {
      reject("length<3");
    }
  });
};
func(a)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
