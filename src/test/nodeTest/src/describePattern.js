var saleOffice={}
saleOffice.clientList=[]

saleOffice.listen=function(fn){
    this.clientList.push(fn)
}
saleOffice.trigger=function(){
    for(let i=0;i<this.saleOffice.length;i++){
        saleOffice[i].apply(this,arguments)
    }
}
saleOffice.listen(function(x){
    console.log(x)
})
saleOffice.listen(function(x){
    console.log(x)
})

saleOffice.trigger(1)
saleOffice.trigger(2)