import fs from 'fs'
import { parse } from "@babel/parser";
 

const indexCode = fs.readFileSync('./index.js' ,{
    encoding: "utf-8"
})


const ast = parse.parse(indexCode)

console.log(ast)