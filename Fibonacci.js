function Ran(num){
    if (num==1)
    return 0;
   if (num==2) 
        return 1;
        return Ran(num-1)+Ran(num-2)
}
        
        console.log(Ran(5));//3
        
//  0+1
// 1+1
// 2+1
// 3+2
// 5+3
// 8+5
// 13+8
// 21+13
