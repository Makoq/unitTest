//最简单的单例模式
// function singleInstance() {
//     this.instance = null

// }

// singleInstance.getInstance=function(){
//     if (!this.instance) {
//         this.instance=new singleInstance()
//     }
//     return this.instance
// }

// let a = singleInstance.getInstance()
// let b = singleInstance.getInstance()

// console.log(a==b)

//利用闭包的单例模式

function singleInstance() {
    this.instance = null

}

singleInstance.getInstance=(function(){
    var instance
    return function () {
        if (!instance) {
            instance=new singleInstance()
        }
        return instance
    }
})()

let a = singleInstance.getInstance()
let b = singleInstance.getInstance()

console.log(a==b)

//透明的单例
// var single = (function () {
//     var instance
//     var cre = function () {
//         if (!instance) {
//             instance=this
//         }
//         return instance
//     }
//     return cre
// })()
// let a = new single()
// let b = new single()

// console.log(a==b)