// loading screan
window.onload=function()
              {
    $("body").css("overflow-y","auto");
     $(".overlay .spinner").fadeOut(2000,function()
                                   {
        $(this).parent().fadeOut(2000,function()
                                 {
            
            $(this).remove();
        });
    });
    
};