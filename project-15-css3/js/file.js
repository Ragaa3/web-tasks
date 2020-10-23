// start function to welcome
function welcome ()
{
    "use strict";
alert("welcome to you");
}
// end function to welcome

// start emoji function
function emoji ()
{
    "use strict";
    document.getElementById("like").innerHTML ="";
    var emo = document.getElementById("emoj").outerHTML;
    document.getElementById("h").innerHTML =emo;
}
// start emoji function

// start thanks function
function end ()
{
    "use strict";
    var name = document.getElementById("name").value;
    alert("thanks "+name+" for visiting our website");
}
// end thanks function
