$(document).ready(function(e) {
    var intro='<div id="horizontalMain"><div id="horizontal" style="width:100%; height:100%; background:url(images/rotation.png) no-repeat center center;  position:fixed; z-index:1">'+
        '<div style=" position:absolute; bottom:10px; width:100%; text-align:center; "><a href="http://weisft.com/sft" target="_blank">技术支持：SFT</a>   <a href="tel:4001005757">400-100-5757</a></div>'+
    '</div></div>';
    
    $(window).bind( 'orientationchange', function(e){
        var body=document.body;  
        var viewport=document.getElementById("viewport");  
        if(body.getAttribute("orient")=="landscape"){  
            body.setAttribute("orient","portrait");
            isHorizontal(false);
        }else{  
            body.setAttribute("orient","landscape");  
            isHorizontal(true);
        }  
    });
    
    
    function isHorizontal(b){
        //alert(isTouchMV);
        if(isTouchMV){
            var isObj=$('#horizontalMain')[0];
            if(b){
                if(!isObj){
                    $('#body').before(intro);
                    document.getElementById('horizontal').addEventListener('touchmove',horizontalTouchmove);
                }
            }else{
                if(isObj){
                    document.getElementById('horizontal').removeEventListener('touchmove',horizontalTouchmove);
                    $('#horizontalMain').remove();
                }
                
            }
        }//end if isHorizontal
    }
    
    function horizontalTouchmove(event){
        //alert(1);
        event.preventDefault();
        return false;	
    }
});