import * as fs from 'fs'
import { parse } from "@babel/parser";
 

const indexCode = fs.readFileSync('./entry.ts' ,{
    encoding: "utf-8"
})

const ast = parse(indexCode)

// fs.writeFileSync('./r.json', JSON.stringify(ast))

 