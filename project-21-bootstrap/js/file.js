
// loading screan
window.onload=function()
              {
     $(".overlay .spinner").fadeOut(2000,function()
                                   {
        $(this).parent().fadeOut(2000,function()
                                 {
            $("body").css("overflow","auto");
            $(this).remove();
        });
    });
    
};
               