import { test} from "./src/a"
import("./src/c").then(re => { 
    const { m }=re
    console.log(m)
})
console.log('s',test)