interface obj
{
    [key : string]:number
}

const initialConfig:obj = { a: 1, b: 2 }

const fns = [
    
    (config: obj) => new Promise<obj>(resolve =>
    {
        setTimeout(() =>
        {
            config.x=0
            resolve(config)
        },5000)
    }),

    (config:obj) => {
        config.d = 6
        config.e = 6
        return config
    }
]

const finalConfig = fns.reduce((prevRes, fn) => prevRes.then(fn), Promise.resolve(initialConfig))

finalConfig.then(res=> {
    console.log(res)
})