// start function when enter your name welcome to you
function welcome ()
{
    "use strict";
    var name = prompt("please enter your name","Ragaa");
    document.getElementById("welcome").innerHTML = "welcome " + name;
}
// end welcome function

// start first function with prompt to search what you want

function search1 ()
{
    "use strict";
    var anime1 = prompt("say what you want");
    var name = [
        "naruto",
        "itach",
        "obito",
        "hakage",
        "kira"
        ];
    if (name.indexOf(anime1) == 0)
    {
        document.getElementById("anime").innerHTML = "<img src='images/naruto.png' width='300px' height='300px'>" + "<img src='images/naruto_2.png' width='300px' height='300px'>" ;
    }
    else if (name.indexOf(anime1) == 1)
    {
        document.getElementById("anime").innerHTML = "<img src='images/itachi.png' width='300px' height='300px'>";
    }
    else if (name.indexOf(anime1) == 2)
    {
        document.getElementById("anime").innerHTML = "<img src='images/obito.png' width='300px' height='300px'>";
    }
    else if (name.indexOf(anime1) == 3)
    {
        document.getElementById("anime").innerHTML = "<img src='images/hakage.png' width='300px' height='300px'>";
    }
    else if (name.indexOf(anime1) == 4)
    {
        document.getElementById("anime").innerHTML = "<img src='images/kira.jpg' width='300px' height='300px'>";
    }
    else
    {
        document.getElementById("anime").innerHTML = "sorry not found";
    }       
}
// end first search function

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
    if (name.indexOf(anime2) == 0)
    {
        document.getElementById("anime").innerHTML = "<img src='images/naruto.png' width='300px' height='300px'>" + "<img src='images/naruto_2.png' width='300px' height='300px'>";
    }
    else if (name.indexOf(anime2) == 1)
    {
        document.getElementById("anime").innerHTML = "<img src='images/itachi.png' width='300px' height='300px'>";
    }
    else if (name.indexOf(anime2) == 2)
    {
        document.getElementById("anime").innerHTML = "<img src='images/obito.png' width='300px' height='300px'>";
    }
    else if (name.indexOf(anime2) == 3)
    {
        document.getElementById("anime").innerHTML = "<img src='images/hakage.png' width='300px' height='300px'>";
    }
     else if (name.indexOf(anime2) == 4)
    {
        document.getElementById("anime").innerHTML = "<img src='images/kira.jpg' width='300px' height='300px'>";
    }
    else
    {
        document.getElementById("anime").innerHTML = "sorry not found";
    }       
}
// end second search function