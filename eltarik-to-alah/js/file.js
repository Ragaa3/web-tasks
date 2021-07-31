//show color option 
$(".gear").click(function(){
    $(".color").fadeToggle();
});
var colorf = $(".option-box .color ul li");
colorf
.eq(0).css("backgroundColor","dodgerblue").end()
.eq(1).css("backgroundColor","purple").end()
.eq(2).css("backgroundColor","hotPink").end()
.eq(3).css("backgroundColor","darkOrange").end()
.eq(4).css("backgroundColor","red");
colorf.click(function(){
    $("link[href*='colo']").attr("href",$(this).attr("data-value"))
    
});
//pop
$(function () {
  $('[data-toggle="popover"]').popover()
})
//alert
$('.alert').alert()
// links

$("#filters a").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            // $('.filter').removeClass('hidden');
            $('.filter').show();
        }
        else
        {
        // $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//        $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide();
            $('.filter').filter('.'+value).show();
            
        }
    $('#filters a').removeClass('active');
    $(this).addClass('active');
    });

    
//scroll
var scrollbu =$("#top-scroll");
$(window).scroll(function()
                 {
    if($(this).scrollTop()>=700)
    {
        scrollbu.show();
    }
    else
    {
        scrollbu.hide();
    }
    
});
scrollbu.click(function()
                   {
        $("html,body").animate({scrollTop:0},600)
});
        
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
               