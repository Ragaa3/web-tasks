function showtime()
{
    "use strict";
    var now = new Date(),
        hours = now.getHours(),
        mintutes = now.getMinutes(),
        seconds = now.getSeconds();
    if(hours<10)
    {
        hours = "0"+hours;
    }
    if(mintutes<10)
    {
        mintutes = "0"+mintutes;
    }
    if(seconds<10)
    {
        seconds = "0"+seconds;
    }
    document.getElementById("step").textContent = hours+':'+mintutes+':'+seconds;
}
window.onload = function ()
{
    "use strict";
    setInterval(showtime,300);
}
function mmm()
{
    var x =["brown","red","green","blue"];
    document.getElementById("change").style.backgroundColor= x[0];
    document.getElementById("step").style.color="red";
        
}
function mmm2()
{
    var x =["brown","red","green","blue"];
    document.getElementById("change").style.backgroundColor= x[2];
    document.getElementById("step").style.backgroundColor="gray";
    document.getElementById("step").style.color="white";
        
}
function mmm3()
{
    var x =["brown","red","green","blue"];
    document.getElementById("change").style.backgroundColor= x[3];
    document.getElementById("step").style.backgroundColor="hotpink";
    document.getElementById("step").style.color="green";
        
}
function mmm4()
{
    var x =["brown","red","green","blue","orange"];
    document.getElementById("change").style.backgroundColor= x[4];
    document.getElementById("step").style.backgroundColor="azure";
    document.getElementById("step").style.color="black";
        
}