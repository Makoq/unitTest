class Person{
    gender:string
    constructor(gender:string){
        this.gender=gender
    }
}

class Flower{
    color:string
    constructor(color:string){
        this.color=color
    }
}
class GG extends Person{
    flower:Flower
    constructor(gender:string,flower:Flower){
        super(gender)
        this.flower=flower
    }
    sendFlower(target:MM){
        target.receiveFlower(this.flower)
    }
    sendFlowerToProxy(proxy:DateProxy,target:MM,flower:Flower){
        proxy.receiveFlower(target,flower)
    }
}

class MM extends Person{
    receiveFlower(flower:Flower){
        console.log("received flower!!")
    }
    receiveFlowerFromProxy(flower:Flower){
        console.log("received flower from proxy!!")
    }
}

class DateProxy{
    receiveFlower(target:MM,flower:Flower){
        target.receiveFlowerFromProxy(flower)
    }
}

/***
 * @class myDate
 * 初始化一次约会
 */
class myDate{

    attempt(){
        const rose =new Flower("red");

        const xiaoMing=new GG("boy",rose);

        const xiaoHong=new MM("girl");

        const proxy=new DateProxy()
        
        xiaoMing.sendFlower(xiaoHong); 

        xiaoMing.sendFlowerToProxy(proxy,xiaoHong,rose)
    }
}

export default myDate;