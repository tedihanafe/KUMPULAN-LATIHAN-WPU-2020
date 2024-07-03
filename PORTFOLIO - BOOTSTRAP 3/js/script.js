$('.page-scroll').on('click', function(e) {


    var tujuan = $(this).attr('href');
   

    var elemenTujuan = $(tujuan);
   

    $('html , body').animate({
     scrollTop: elemenTujuan.offset().top - 50
    }, 1250);
   
    e.preventDefault();

   });


// parallax

// about
$(window).on('load', function() {
    $('.kiri').addClass('muncul');
    $('.kanan').addClass('muncul');

});
// akhir about


$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/1 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/0.5 +'%)'
    });


// portfolio
if(wScroll > $('.portfolio').offset().top -300 ){
   $('.portfolio .thumbnail').each(function(i) {
        setTimeout(function(){
            $('.portfolio .thumbnail').eq(i).addClass('muncul');
        }, 300 * (i+1));
   });


}




});











