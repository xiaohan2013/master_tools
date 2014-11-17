//获取url参数
(function($){

$.getUrlParam = function(name){

  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);

  if (r!=null) return unescape(r[2]); return null;
}
})(jQuery);

var regstate=$.getUrlParam('reg')
var message="";
//alert(regstate)
if (regstate==1) {message="欢迎您拨冗莅临"};
if (regstate==2) {message="请勿重复提交"};
if (regstate==3) {message="提交失败"};

if (regstate!=undefined && regstate!="" && regstate!=null) {alertMessage(message)};

function alertMessage(message){
    alert(message)
}

$(window).load(function() {
	setTimeout(function() {$('.loading').fadeOut(500);}, 500);

    if($(window).height() < '500') {
        $('.swiper-container').css("min-height","504px");
        $('.swiper-slide').css("min-height","504px");
        var mySwiper = new Swiper('.swiper-container', {
            speed: 750,
            mode: 'vertical',
            onSlideNext: function(swiper) {
                $('.swiper-slide-active .loadPic').each(function(){
                    $(this).attr('src',$(this).attr('img-url'));
                });
            },
            // calculateHeight:true,
            // updateFormElements:true
            // moveStartThreshold:'50'
            // roundLengths:true
             simulateTouch: false
        })
    }else{
        var mySwiper = new Swiper('.swiper-container', {
            speed: 750,
            mode: 'vertical',
            onSlideNext: function(swiper) {
                $('.swiper-slide-active .loadPic').each(function(){
                    $(this).attr('src',$(this).attr('img-url'));
                });
            },
            // calculateHeight:true,
            // updateFormElements:true
            // moveStartThreshold:'50'
            // roundLengths:true
             simulateTouch: false
        })        
    }
})



    var autoPlay=true;
    var music=$("#music").get(0);
    var $musicPlayer = $("#musicPlayer");

    music.play();

    $("body").bind("touchmove",function(e){
           
              e.preventDefault();
              e.stopPropagation();
    }).bind("touchstart",function(e){
        if(autoPlay) music.play();
    })

    $musicPlayer.bind("touchstart", function(){
      if (music.paused) {
            music.play();
        }else{
            music.pause();
        }
    });

    music.addEventListener("play",function(){   
        autoPlay=false;
        $musicPlayer.removeClass("pause");
        $musicPlayer.addClass("musicAuto");
    })
    music.addEventListener("pause",function(){
        $musicPlayer.addClass("pause");
        $musicPlayer.removeClass("musicAuto");
    })
