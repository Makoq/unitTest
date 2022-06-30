import { test} from "./a.js"
import("./c.js").then(re => { 
    const { m }=re
    console.log(m)
})
console.log('s',test)