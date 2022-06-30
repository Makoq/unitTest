//单例模式 es6
class SingleInstance {
    static instance = null
    
    constructor(theGift) {
        this.gift=theGift
        if (!SingleInstance.instance) {
            
            SingleInstance.instance=this
        }
        return SingleInstance.instance
    }
    static getInst() { 
        
    }
}

let a = new SingleInstance("code")
console.log(a.gift)
let b = new SingleInstance("math")
console.log(b.gift)

console.log(a==b)
