class PromiseHandler {
  //待执行队列
  queue;
  //限定长度的正在执行队列
  executeQueue;
  //最大并行数量
  maxNum;
  constructor(num) {
    this.maxNum = num;
    this.queue = [];
    this.executeQueue = [];
  }

  enqueue = function (newPromiseFnArray) {
    this.queue = this.queue.concat(newPromiseFnArray);

    let lenOfQueue = this.executeQueue.length;
    //如果当前执行队列已经满了，则不再做入队操作
    if (lenOfQueue >= this.maxNum) {
      return;
    }
    this.enExecuteQueue();

    this.fn();
  };

  fn = function () {
    let count = 0;
    for (let i = 0; i < this.executeQueue.length; i++) {
      this.executeQueue[i]()
        .then(
          (res) => {
            count++;
          },
          (rej) => {
            count++;
          }
        )
        .catch()
        .finally(() => {
          //并发数达到限制时，说明所有的promise都执行结束了
          if (count === this.executeQueue.length) {
            //promise都执行完了，可以清空当前的执行队列了
            this.executeQueue = [];
            //从待执行队列王当期执行队列中入队
            this.enExecuteQueue();
            //如果当前执行队列还有内容则执行队列中剩下的内容
            this.executeQueue.length > 0 && this.fn();
          }
        });
    }
  };

  enExecuteQueue = function () {
    while (this.executeQueue.length < this.maxNum && this.queue.length > 0) {
      this.executeQueue.push(this.queue.shift());
    }
  };
}
var instance = new PromiseHandler(3);

var promiseList = [1000, 500, 300, 400].map((i) => {
  return () =>
    new Promise((resolve) =>
      setTimeout(() => {
        console.log(i);
        resolve();
      }, i)
    );
});
// 注意这里是返回一个promise，确保promise的实际执行完全由生成器控制
var extraPromise = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log("new");
      resolve();
    }, 1000)
  );

instance.enqueue(promiseList);
// instance.enqueue(extraPromise);
