const fs= require('fs')
const Parser =require('@babel/parser')

const indexCode = fs.readFileSync('./ts.ts' ,{
    encoding: "utf-8"
})


const ast = Parser.parse(indexCode)

console.log(ast)