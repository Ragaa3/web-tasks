 document.getElementById("result").innerHTML ="the plus of them :";
// start function to add two number
function add()
{
    "use strict";
    var a = document.getElementById("number1").value,
        b = document.getElementById("number2").value;
    var x = Number(a),
        y = Number(b); // Number() to convert to number
    
    var sum = x + y;
    if (isNaN(a) || isNaN(b)) // start first condition if a is not anumber or b is not a number display "the plus of them : sorry not a number"
    {
        document.getElementById("result").innerHTML ="the plus of them : sorry not a number";
    }
    // end first condition
    
    // start second condition if x is number and y is number test nested if
    else if ( typeof x == "number" && typeof y == "number")
    {
        // start nested condition if a is Null or b is Null display "the plus of them : please type the two number" 
        if ( a == "" || b =="")
        {
            document.getElementById("result").innerHTML ="the plus of them : please type the two number";
        }
        // if a isn't Null or b isn't Null display "the plus of them : " + sum
        else
        {
            document.getElementById("result").innerHTML ="the plus of them : " + sum;
        }
    } 
    // end second condition
    
}
// end function 
     
                    
            
     
    
        
        
