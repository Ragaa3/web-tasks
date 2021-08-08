// 64 lines
// function to plus two number
function add()
{
    "use strict";
    var a =Number(document.getElementById("num1").value),
        b =Number(document.getElementById("num2").value),
        c=a+b;
    if(isNaN(a) || isNaN(b)) // if (a or b) are not a number true
    {
        alert("focus on what write");
        document.getElementById("summ").innerHTML="sorry it is not a number";
    }
    else if(document.getElementById("num1").value=="" || document.getElementById("num2").value=="")   // if (a or b)is not a number false and a or b is empty
    {
        document.getElementById("summ").innerHTML="please a number";
    }
    else // if (a or b)is not a number false and a or b is not empty
    {
        document.getElementById("summ").innerHTML="the plus of them is :"+c;
    }
}
// function to prompt what you want to write
function po()
{
    "use strict";
    var b=prompt("say some thing");
    document.getElementById("text").innerHTML=b;
}
// function when you click to div appear now time
function ti()
{ 
    "use strict";
    var a = new Date();
    document.getElementById("time").innerHTML=a
}
// function to appear number of charcter that you write
function le()
{
    "use strict";
    var a = document.getElementById("in").value;
    document.getElementById("leng").innerHTML=a.length; 
}
// function to change color
function chan()
{
    "use strict";
    var c= document.getElementById("colo").value;
    document.getElementById("co").style.backgroundColor=c;
}
// function to take namber of names and make you input names then print names

        
    