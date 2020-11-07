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
    
    // if isNaN(a) == false or isNaN(b) check nested if 
    else 
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

// start search function with list  
function search2 ()
{
    "use strict";
    var anime2 = document.getElementById("name").value;
    var name = [
        "naruto",
        "itach",
        "obito",
        "hakage",
        "kira"
        ];
    if (name.indexOf(anime2.toLowerCase()) == 0)
    {
        document.getElementById("anime").innerHTML = "<img src='images/naruto.png' width='300px' height='200px'>" + "<img src='images/naruto_2.png' width='300px' height='200px'>";
    }
    else if (name.indexOf(anime2.toLowerCase()) == 1)
    {
        document.getElementById("anime").innerHTML = "<img src='images/itachi.png' width='300px' height='200px'>";
    }
    else if (name.indexOf(anime2.toLowerCase()) == 2)
    {
        document.getElementById("anime").innerHTML = "<img src='images/obito.png' width='300px' height='200px'>";
    }
    else if (name.indexOf(anime2.toLowerCase()) == 3)
    {
        document.getElementById("anime").innerHTML = "<img src='images/hakage.png' width='300px' height='200px'>";
    }
     else if (name.indexOf(anime2.toLowerCase()) == 4)
    {
        document.getElementById("anime").innerHTML = "<img src='images/kira.jpg' width='300px' height='200px'>";
    }
    else
    {
        document.getElementById("anime").innerHTML = "sorry not found";
    }       
}
// end second search function
