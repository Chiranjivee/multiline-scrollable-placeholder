$(document).ready(function(){
    $("textarea").on('change keyup paste', function() {
        var length = $(this).val().length;
        if (length > 0) {
            $(this).removeClass('trans');
            $(this).addClass('data-edits');
        } else {
            $(this).addClass('trans');
            $(this).removeClass('data-edits');
        }
    });
      
    $("div").on('click', function() {
        $("textarea").focus();
    });
      
    var scrollTop = 0;
    $("textarea").on('wheel', function (e) {
        if (e.originalEvent.deltaY < 0) {
            $("#uniq").animate({
            scrollTop:  scrollTop-=10
            }, 0);
            console.log("Scroll up");
        } else {
            $("#uniq").animate({
                scrollTop:  scrollTop+=10
            }, 0);
            console.log("Scroll down");
        }
    });  
});