new WOW().init();

/************* Anchor ***************/
$(window).scroll(function(){
    if($(this).scrollTop() > 400){
        $('#anchor').fadeIn();
    }else{
        $('#anchor').fadeOut();
    }

});

$('#anchor').click(function(){
    $('body, html').animate({
        scrollTop:0
    }, 900);
    return false;
});
