const fs= require('fs')
const Parser =require('@babel/parser')

const indexCode = fs.readFileSync('./index.js' ,{
    encoding: "utf-8"
})


const ast = Parser.parse(indexCode)

fs.writeFileSync('out.json',JSON.stringify(ast))

console.log(ast)