$(function(){


if($(".navLiXQ").size()>0)
{
$(".navLiXQ").hover(function(){
    $(this).find(".twoNav").css({ 
    display: "block"});
    },function(){
        $(this).find(".twoNav").css({ 
    display: "none"});
});
$(".navLiXQ").hover(function(){
    $(this).find(".xinNav").css({ 
    display: "block"});
    },function(){
        $(this).find(".xinNav").css({ 
    display: "none"});
});
}
if($(".issue").size()>0){
$(".issue").hover(function(){
    $(this).find(".release").css({ 
    display: "block"});
    },function(){
        $(this).find(".release").css({ 
    display: "none"});
});
}
if($("#pic_list_1").size()>0){
$("#pic_list_1").cxScroll();}
if($('#GogoTop').size()>0){
$('#GogoTop').click(function(){
	$('html,body').animate({scrollTop:'0px'},800);
	return false;
});
}
 
if($('.env-app-icon').size()>0){
   // console.log($('.env-app-icon'));
   $('.env-app-icon').each(function(i){
       $(this).hover(function(){
        $('.weitu').eq(i).stop();
        $('.weitu').eq(i).animate({top:0},500);
   },function(){
        $('.weitu').eq(i).stop();
        $('.weitu').eq(i).animate({top:220},500);
   })
   })
}
})