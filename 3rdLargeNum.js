//Third Largest Number of an Array

function thirdLargest(Value , V_size) {
    if (V_size<3) {
        console.log("Invalid Input");
        return;
    }
    let first=Value[0]
    for (let i = 1; i < V_size; i++)
     if (Value[i]>first) 
         first=Value[i];
     
     let second=Number.MIN_VALUE;
     for (let i = 0; i < V_size; i++) 
        if (Value[i]>second &&
            Value[i]<first)
            second=Value[i];
            
            let third=Number.MIN_VALUE;
            for (let i = 0; i < V_size; i++)
                if (Value[i] > third && Value[i] < second)
                third = Value[i]; 
                    
                console.log("the third largest Number is  ", third);
                
            }
         
          
            
     
     let Value=[1000,9999,64832,986743,23467235,2325345,75365453,7645654];
     let n=Value.length;
     thirdLargest(Value,n);
    
