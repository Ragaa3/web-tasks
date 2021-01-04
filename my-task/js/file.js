var inpu = document.getElementById("input").value,
    b1 = document.getElementById("bt1").value,
    b2 = document.getElementById("bt2").value,
    b3 = document.getElementById("bt3").value,
    b4 = document.getElementById("bt4").value,
    b5 = document.getElementById("bt5").value,
    b6 = document.getElementById("bt6").value,
    b7 = document.getElementById("bt7").value,
    b8 = document.getElementById("bt8").value,
    b9 = document.getElementById("bt9").value,
    b0 = document.getElementById("bt0").value,
    plus = document.getElementById("pluse").value,
    bmi = document.getElementById("min").value,
    beq = document.getElementById("equal").value,
    bml = document.getElementById("mli").value,
    bdi= document.getElementById("divs").value,
    bpri= document.getElementById("btpri").value;
function conctbt1()
{
    "use strict";
    inpu +=b1;
    document.getElementById("input").value=inpu
}
function conctbt2()
{
    "use strict";
    inpu +=b2;
    document.getElementById("input").value=inpu
}
function conctbt3()
{
    "use strict";
    inpu +=b3;
    document.getElementById("input").value=inpu
}
function conctbt4()
{
    "use strict";
    inpu +=b4;
    document.getElementById("input").value=inpu
}
function conctbt5()
{
    "use strict";
    inpu +=b5;
    document.getElementById("input").value=inpu
}
function conctbt6()
{
    "use strict";
    inpu +=b6;
    document.getElementById("input").value=inpu
}
function conctbt7()
{
    "use strict";
    inpu +=b7;
    document.getElementById("input").value=inpu
}
function conctbt8()
{
    "use strict";
    inpu +=b8;
    document.getElementById("input").value=inpu
}
function conctbt9()
{
    "use strict";
    inpu +=b9;
    document.getElementById("input").value=inpu
}
function conctbt0()
{
    "use strict";
    inpu +=b0;
    document.getElementById("input").value=inpu
}
function conctbtpl()
{
    "use strict";
    inpu +=plus;
    document.getElementById("input").value=inpu
}
function conctbteq()
{
    "use strict";
    var a=eval(inpu);
    document.getElementById("input").value=a;
    inpu='';
}
function conctbtmi()
{
    "use strict";
    inpu +=bmi;
    document.getElementById("input").value=inpu
}
function conctbtml()
{
    "use strict";
    inpu +=bml;
    document.getElementById("input").value=inpu
}
function conctbtdiv()
{
    "use strict";
    inpu +=bdi;
    document.getElementById("input").value=inpu
}
function conctbtp()
{
    "use strict";
    inpu +=bpri;
    document.getElementById("input").value=inpu
}
function clear()
{
    "use strict";
    document.getElementById("input").value=inpu.replace(inpu,'');
    
}
function conctbtdel()
{
    "use strict";
    inpu = document.getElementById("input").value=inpu.slice(0,(inpu.length)-1);
}