import { test} from "../../../tsPrjForAST/src/a"
import("./c").then(re => { 
    const { m }=re
    console.log(m)
})
console.log('s',test)