function malti()
{
    var number = document.getElementById("n1").value;
    document.getElementById("text1").innerHTML="plz wait 3 second";
    document.getElementById("result1").innerHTML="";
    for(var i=0;i<=12;i=i+1)
    {
        var m = number*i;
        document.getElementById("result1").innerHTML+=number+"&times;"+i+" = "+m+"<br>";
    }
}
function clean()
{
    document.getElementById("result2").innerHTML="";
}
function repeat()
{
    var number = document.getElementById("n2").value;
    var i = number;
    do 
    {
        document.getElementById("result2").innerHTML+="repeat "+number+" time "+"<br>";
        i--;
    }
    while(i!=0);
}