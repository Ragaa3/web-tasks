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
    bpri= document.getElementById("btpri").value,
    bd= document.getElementById("btd").value;
// button one
function conctbt1()
{
    "use strict";
    if (document.getElementById("input").readOnly == false)
    {
        inpu +=b1;
        document.getElementById("input").value=inpu;
    }
}
// button two
function conctbt2()
{
    "use strict";
    if (document.getElementById("input").readOnly == false)
    {
        inpu +=b2;
        document.getElementById("input").value=inpu
    }
}
// button three
function conctbt3()
{
    "use strict";
    if (document.getElementById("input").readOnly == false)
    {
        inpu +=b3;
        document.getElementById("input").value=inpu
    }
}
// button four
function conctbt4()
{
    "use strict";
    if (document.getElementById("input").readOnly == false)
    {
        inpu +=b4;
        document.getElementById("input").value=inpu
    }
}
// button five
function conctbt5()
{
    "use strict";
    if (document.getElementById("input").readOnly == false)
    {
        inpu +=b5;
        document.getElementById("input").value=inpu
    }
}
// button six
function conctbt6()
{
    "use strict";
    if (document.getElementById("input").readOnly == false)
    {
        inpu +=b6;
        document.getElementById("input").value=inpu
    }
}
// button seven
function conctbt7()
{
    "use strict";
    if (document.getElementById("input").readOnly == false)
    {
        inpu +=b7;
        document.getElementById("input").value=inpu
    }
}
// button eight
function conctbt8()
{
    "use strict";
    if (document.getElementById("input").readOnly == false)
    {
        inpu +=b8;
        document.getElementById("input").value=inpu
    }
}
// button nine
function conctbt9()
{
    "use strict";
    if (document.getElementById("input").readOnly == false)
    {
        inpu +=b9;
        document.getElementById("input").value=inpu
    }
}
// button zero
function conctbt0()
{
    "use strict";
    if (document.getElementById("input").readOnly == false)
    {
        inpu +=b0;
        document.getElementById("input").value=inpu
    }
}
// button pluse +
function conctbtpl()
{
    "use strict";
    if (document.getElementById("input").readOnly == false)
    {
        inpu +=plus;
        document.getElementById("input").value=inpu
    }
}
// button equal =
function conctbteq()
{
    "use strict";
    if (document.getElementById("input").readOnly == false)
    {
        if(eval(inpu) == undefined) // if input empty
        {
            document.getElementById("input").value=" please enter number";
        }
        else
        {
            if(isFinite(eval(inpu)) == false)
            {
                document.getElementById("input").value=" Error is not a number ";  
            }
            else
            {
                var a=eval(inpu);
                document.getElementById("input").value=a;
            } 
        }
    inpu='';
    }
}
// button minuse -
function conctbtmi()
{
    "use strict";
    if (document.getElementById("input").readOnly == false)
    {
        inpu +=bmi;
        document.getElementById("input").value=inpu
    }
}
// button mlutiplier x
function conctbtml()
{
    "use strict";
    if (document.getElementById("input").readOnly == false)
    {
        inpu +=bml;
        document.getElementById("input").value=inpu
    }
}
// button division /
function conctbtdiv()
{
    "use strict";
    if (document.getElementById("input").readOnly == false)
    {
        inpu +=bdi;
        document.getElementById("input").value=inpu
    }
}
// button mode %
function conctbtp()
{
    "use strict";
    if (document.getElementById("input").readOnly == false)
    {
        inpu +=bpri;
        document.getElementById("input").value=inpu
    }
}
// button dot .
function conctbtd()
{
    "use strict";
    if (document.getElementById("input").readOnly == false)
    {
        inpu +=bd;
        document.getElementById("input").value=inpu
    }
}
// button clear
function clean()
{
    "use strict";
    if (document.getElementById("input").readOnly == false)
    {
        document.getElementById("input").value='';
        document.getElementById("input").placeholder='';
        inpu=''
    }
    
}
// button on
function on()
{
    "use strict";
    document.getElementById("input").value='';
    document.getElementById("input").placeholder='';
    document.getElementById("input").readOnly = false;
    document.getElementById("input").focus();
    inpu=''
}
// button off
function of()
{
    "use strict";
    document.getElementById("input").value='';
    document.getElementById("input").placeholder='CASIO';
    document.getElementById("input").readOnly = true;
    inpu='';
}
// button delete
function conctbtdel()
{
    "use strict";
    inpu = document.getElementById("input").value=inpu.slice(0,(inpu.length)-1);
}