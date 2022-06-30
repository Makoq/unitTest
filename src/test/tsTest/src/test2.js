// const initialConfig = {params: {a:1,b:2}}

// const fns = [
//     // 异步处理
//     config => {
//        return new Promise(resolve=>{
//            setTimeout(()=>{
//                config.params.a = 3
//                resolve(config)
//            },2000)
//        })
//     },
//     // 同步处理
//     config => {
//         config.params.d = 6
//         config.params.e = 6
//         return config
//     },
// ]

// // you can always return a promise
// fns.reduce((prevPromise, fn) => {
//    return prevPromise.then(fn)
// }, Promise.resolve(initialConfig))
//     .then(finalConfig=>{
//         console.log(finalConfig)
//     })

