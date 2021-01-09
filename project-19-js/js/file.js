function my(a)
{
    var i =0;
    window.setInterval(function (){
        if(i<a)
            {i++;
             
             document.getElementById("on").innerHTML ='';
             document.getElementById("on").innerHTML +=i;
             document.getElementById("to").innerHTML ='';
             document.getElementById("to").innerHTML +=i;
             document.getElementById("th").innerHTML ='';
             document.getElementById("th").innerHTML +=i;
             document.getElementById("fo").innerHTML ='';
             document.getElementById("fo").innerHTML +=i;
             document.getElementById("fi").innerHTML ='';
             document.getElementById("fi").innerHTML +=i;

            }},20);
   
}
window.setTimeout(my(120),10000);
document.getElementById("bt1").onclick=function b(){window.open("https://github.com/login/","target=_blank","width=400")}
function chan()
{
    if(document.getElementById("ico").style.right ==="-180px")
    {
        document.getElementById("ico").style.right=0;
    }
    else
    {
        document.getElementById("ico").style.right="-180px";
    }
}
function mm()
{
    
    "use strict";
    document.getElementById("ico").style.color="red";
    document.getElementById("sect2").style.color="red";
    document.getElementById("h").style.color="red";
    document.getElementById("b").style.backgroundColor="red";
}
function mmm()
{
    
    "use strict";
    document.getElementById("ico").style.color="#788bc3";
    document.getElementById("sect2").style.color="#788bc3";
    document.getElementById("h").style.color="#788bc3";
    document.getElementById("b").style.backgroundColor="#788bc3";
}
function mmmm()
{
    
    "use strict";
    document.getElementById("ico").style.color="blueviolet";
    document.getElementById("sect2").style.color="blueviolet";
    document.getElementById("h").style.color="blueviolet";
    document.getElementById("b").style.backgroundColor="blueviolet";
}
function bb()
{
    
    "use strict";
    document.getElementById("ico").style.color="dodgerblue";
    document.getElementById("sect2").style.color="dodgerblue";
    document.getElementById("h").style.color="dodgerblue";
    document.getElementById("b").style.backgroundColor="dodgerblue";
}
function bbb()
{
    
    "use strict";
    document.getElementById("ico").style.color="pink";
    document.getElementById("sect2").style.color="pink";
    document.getElementById("h").style.color="pink";
    document.getElementById("b").style.backgroundColor="pink";
}
function app1()
{
    if(document.getElementById("set1").style.display ==="none")
    {
        document.getElementById("set1").style.display="block";
    }
    else
    {
        document.getElementById("set1").style.display="none";
    }
}
function app2()
{
    if(document.getElementById("set2").style.display ==="none")
    {
        document.getElementById("set2").style.display="block";
    }
    else
    {
        document.getElementById("set2").style.display="none";
    }
}
function app3()
{
    if(document.getElementById("set3").style.display ==="none")
    {
        document.getElementById("set3").style.display="block";
    }
    else{
        document.getElementById("set3").style.display="none";
    }
}
function app4()
{
    if(document.getElementById("set4").style.display ==="none")
    {
        document.getElementById("set4").style.display="block";
    }else{
        document.getElementById("set4").style.display="none";
    }
}
function app5()
{
    if(document.getElementById("set5").style.display ==="none")
    {
        document.getElementById("set5").style.display="block";
    }
    else
    {
        document.getElementById("set5").style.display="none";
    }
}

        