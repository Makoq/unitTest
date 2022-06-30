var saleOffice = {}
saleOffice.listenClient=[]

saleOffice.listen = function (fn) { 
    this.listenClient.push(fn)
}
saleOffice.trigger = function () {
    for(let i=0;i<saleOffice.listenClient.length;i++){
        saleOffice.listenClient[i].apply(this,arguments)
    }
}

saleOffice.listen(function (x) { 
    console.log("xiaom",x)
})
saleOffice.listen(function (x) { 
    console.log("xiaohong",x)
})

saleOffice.trigger(1)

// saleOffice.trigger(2)