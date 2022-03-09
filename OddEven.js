//-------odd or even-----
function soln(num){
    return num % 2 === 0 ? 'even' : 'odd'    //0
}
var input=100;
var result=soln(input);
console.log(result)
// Expected Output-Even
console.log(100 % 2) //0