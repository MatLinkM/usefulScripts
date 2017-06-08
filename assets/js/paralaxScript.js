$('.nav a').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href');
        target = $(id).offset().top;
        heightNav = $('.nav').innerHeight();

    $('html, body').animate({
        scrollTop: target - heightNav
    }, 1000)
})
