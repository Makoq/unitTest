interface Obj
{
    a:number
}
console.log("as");

const a: Array<Obj> = [];
function fn(i: number)
{
    
    console.log(i);
    
 }
fn(a[0]?.a)