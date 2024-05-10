// 实现一个CodingMan，可以按照以下方式调用:
// People(“Hank”)输出:
// Hi! This is Hank!

// People(“Hank”).sleep(10).eat(“dinner”)
// 输出
// Hi! This is Hank!
// 等待10秒..
// Wake up after 10
// Eat dinner~

// People(“Hank”).eat(“dinner”).eat(“supper”)
// 输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~

// People(“Hank”).sleepFirst(5).eat(“supper”)
// 输出
// 等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper
// 以此类推。

function People(name) {
  if (!(this instanceof People)) {
    return new People(name);
  }

  this.arr = [];

  this.arr.push(() => {
    console.log(`Hi This is ${name}!`);
    this.next();
  });

  setTimeout(() => {
    this.next();
  }, 0);
}

People.prototype.next = function () {
  if (this.arr.length > 0) {
    this.arr.shift()();
  }
};

People.prototype.sleepFirst = function (sleepFirstTime) {
  this.arr.unshift(() => {
    console.log(`等待${sleepFirstTime}秒`);
    setTimeout(() => {
      console.log(`Weak up after ${sleepFirstTime}`);
      this.next();
    }, sleepFirstTime * 1000);
  });
  return this;
};

People.prototype.sleep = function (sleepTime) {
  this.arr.push(() => {
    console.log(`等待${sleepTime}秒..`);
    setTimeout(() => {
      console.log(`Weak up after ${sleepTime}`);
      this.next();
    }, sleepTime * 1000);
  });
  return this;
};

People.prototype.eat = function (eatContent) {
  this.arr.push(() => {
    console.log(`Eat ${eatContent}`);
    this.next();
  });
  return this;
};

// People("“Hank”").sleep(4).eat("“dinner”");
// 输出
// Hi! This is Hank!
// 等待10秒..
// Wake up after 10
// Eat dinner~
//People('“Hank”').eat('“dinner”').eat('“supper”')
// 输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~
People("“Hank”").sleepFirst(5).eat("“supper”");
// 输出
// 等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper
// 以此类推。
