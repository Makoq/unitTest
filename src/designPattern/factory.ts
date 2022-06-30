function  factory(sex:string,age:number) {
    const obj={}
    obj['sex']=sex
    obj['age']=age
    obj['run']=()=>{
        console.log('run')
    }
    return obj
}

const obj1=factory('male',12)
const obj2=factory('female',12)

