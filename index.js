"use strict";
// function Name (name:string){
//     console.log("hello" + name)
// }
Object.defineProperty(exports, "__esModule", { value: true });
// Name("Mehedi")
// function Sum(a:number, b:number){
//     return a + b;
// }
// let ans:number = Sum(4,6);
// console.log(ans)
// function isLegal(age:number){
//     if(age > 18){
//         return true
//     }else {
//         return false
//     }
// }
// const valid:boolean = isLegal(10);
// console.log(valid)
function delayedCall(fn) {
    setTimeout(fn, 1000);
}
delayedCall(function () {
    console.log("hello");
});
//# sourceMappingURL=index.js.map