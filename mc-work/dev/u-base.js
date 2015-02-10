/*
                   _ooOoo_
                  o8888888o
                  88" . "88
                  (| -_- |)
                  O\  =  /O
               ____/`---'\____
             .'  \\|     |//  `.
            /  \\|||  :  |||//  \
           /  _||||| -:- |||||-  \
           |   | \\\  -  /// |   |
           | \_|  ''\---/''  |   |
           \  .-\__  `-`  ___/-. /
         ___`. .'  /--.--\  `. . __
      ."" '<  `.___\_<|>_/___.'  >'"".
     | | :  `- \`.;`\ _ /`;.`/ - ` : | |
     \  \ `-.   \_ __\ /__ _/   .-` /  /
======`-.____`-.___\_____/___.-`____.-'======
                   `=---='
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
         佛祖保佑       永无BUG
*/
// JavaScript Document
function getCookie(name)
{
  var arr=document.cookie.split('; ');
  var i=0;
  
  for(i=0;i<arr.length;i++)
  {
    var arr2=arr[i].split('=');
    
    if(arr2[0]==name)
    {
      return arr2[1];
    }
  }
  
  return '';
}
function goTo(href1, href2) {
    if (href2) {
        window.location = href1 + '?tips=' + href2;
    } else {
        window.location = href1;
    }

}

function getSearch() {
    var url = window.location.search;
    Request = {};
    if (url.indexOf("?") != -1) {

        var str = url.substr(1)
        if (/&/.test(str)) {
            strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                Request[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
            }
        } else {
            strs = str.split("=");
            Request[strs[0]] = unescape(strs[1]);
        }

    }
    return Request;
}

function startMove(obj, json, endFn) {

    clearInterval(obj.timer);

    obj.timer = setInterval(function() {

        var bBtn = true;

        for (var attr in json) {

            var iCur = 0;

            if (attr == 'opacity') {
                if (Math.round(parseFloat(getStyle(obj, attr)) * 100) == 0) {
                    iCur = Math.round(parseFloat(getStyle(obj, attr)) * 100);

                } else {
                    iCur = Math.round(parseFloat(getStyle(obj, attr)) * 100) || 100;
                }
            } else {
                iCur = parseInt(getStyle(obj, attr)) || 0;
            }

            var iSpeed = (json[attr] - iCur) / 8;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            if (iCur != json[attr]) {
                bBtn = false;
            }

            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity=' + (iCur + iSpeed) + ')';
                obj.style.opacity = (iCur + iSpeed) / 100;

            } else {
                obj.style[attr] = iCur + iSpeed + 'px';
            }


        }

        if (bBtn) {
            clearInterval(obj.timer);

            if (endFn) {
                endFn.call(obj);
            }
        }

    }, 30);

}


function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}
/*轮播大法*/
$(function() {
    if ($('#lunbo').size()>0) {
        var oBox = document.getElementById('lunbo');
        var oUl = oBox.getElementsByTagName('ul')[0];
        var aLiUl = oUl.getElementsByTagName('li');

        var oOl = oBox.getElementsByTagName('ul')[1];
        var aLiOl = oOl.getElementsByTagName('li');

        oneWidth = $(window).width();
        var iNow = 0;
        var iNow2 = 0;
        var timer = null;



        for (var i = 0; i < aLiOl.length; i++) {
            aLiOl[i].index = i;
            aLiOl[i].onclick = function() {
                if (iNow == 0) {
                    oUl.style.left = -oneWidth+'px';
                    iNow2 = 0;
                }
                for (var i = 0; i < aLiOl.length; i++) {
                    aLiOl[i].className = '';
                }
                this.className = 'active';

                iNow = this.index;
                iNow2 = this.index;

                startMove(oUl, {
                    left: (-this.index-1) * oneWidth
                });

            };
        }

       

        function toRun() {

//          if (iNow == 0) {             
//              oUl.style.left = -oneWidth+'px';
//              iNow2 = 0;
//          }
            if(!aLiOl){return}
            
            if (iNow == aLiOl.length - 1) {
                iNow = 0;
             	iNow2=-1;
                oUl.style.left = 0;
            } else {
                iNow++;
            }

            iNow2++;
            
//			console.log(iNow+","+iNow2)
            for (var i = 0; i < aLiOl.length; i++) {
                aLiOl[i].className = '';
            }
            aLiOl[iNow].className = 'active';
            startMove(oUl, {
                left: (-iNow2-1) * oneWidth
            });

        }

        function toRun2() {

//          if (iNow == aLiOl.length - 1) {
//              oUl.style.left = -(aLiOl.length ) * oneWidth + 'px';
//              iNow2 = aLiOl.length - 1;
//          }
            if (iNow == 0) {
               oUl.style.left = -(aLiUl.length-1)* oneWidth + 'px';
               iNow = aLiOl.length - 1;
               iNow2=aLiUl.length-2;
            } else {
                iNow--;
            }

            iNow2--;
           
//			console.log(iNow+","+iNow2)
            for (var i = 0; i < aLiOl.length; i++) {
                aLiOl[i].className = '';
            }
            aLiOl[iNow].className = 'active';
            startMove(oUl, {
                left: (-iNow2-1) * oneWidth
            });

        }

        $('#leftarrow').click(function() {
            clearInterval(timer);
            toRun2();
            return false;
        })
        $('#rightarrow').click(function() {
            clearInterval(timer);
            toRun();
            return false;
        })
        timer = setInterval(toRun, 3000);
        if( oBox ){
            oBox.onmouseover = function() {
            clearInterval(timer);
        };
            oBox.onmouseout = function() {
            timer = setInterval(toRun, 3000);
        };
    	}
    };
  
       
    $('#help-content').height( $('body').height()-$('.head').height()-$('#foot').height() );
    $('#connect-content').height( $('body').height()-$('.head').height()-$('#foot').height() );
    $('#join-content').height( $('body').height()-$('.head').height()-$('#foot').height() );
    if( $('#connect-content').height()<595 ){$('#connect-content').height( 595 )}
    if( $('#help-content').height()<490 ){$('#help-content').height( 490 )}
    if( $('#join-content').height()<535 ){$('#join-content').height( 535 )}

});
$(function() {
    $('#head img').click(function() {
        window.location.href='http://wx.mc2050.com/cms/1000000000/ushare_index.html';
        return false;
    });
    $('.nav li').eq( $('#nindex').val() ).addClass('active');
    //$('.lunbo li').width($(window).width());
    $('.lunbo li').width($('#lunbo').width());

    $('.lunbo').width($('.lunbo li').width() * $('.lunbo li').size());
    if( typeof oneWidth !=="undefined") {$('.lunbo').css('left',-oneWidth);}

    /*ushare-logo*/
    var ww=$('.logos ul li img').eq(0).width() + $('.logos ul li img').eq(1).width();
    $('.logos .lilogo').width(ww);
    var yy=$('.logos ul li').eq(0).width() + $('.logos ul li').eq(1).width();
    $('.logos ul').width(yy);
    speed=-1;
    lomer=setInterval(moveLeft,60)
    function moveLeft(){
        if( parseInt($('.logos ul').css('left'))>=0 ){
            $('.logos ul').css('left',-$('.logos ul').width()/2);
        }
        if( parseInt($('.logos ul').css('left'))<-$('.logos ul').width()/2 ){
            $('.logos ul').css('left',0);
        }
        if($('.logos ul')[0]){
        $('.logos ul')[0].style.left=$('.logos ul')[0].offsetLeft+speed+'px';
        }
    };
    $('body').on('click', '.righta', function(ev) {
        ev.preventDefault();
        clearInterval(lomer)
        if(Math.abs(speed)==1){speed=speed?-3:3;}else{speed=speed?-1:1;}
        lomer=setInterval(moveLeft,60)
        

    });
    $('body').on('click', '.lefta', function(ev) {
        clearInterval(lomer)
        ev.preventDefault();
       
        if(Math.abs(speed)==1){speed=3;}else{speed=1;}
        lomer=setInterval(moveLeft,60)
       
    });


    /*ushare-help*/
    //$('#help-content').height( $(window).height()-$('#head').height()-$('#foot').height() );
    $('.help-content-left .step').find('li').hover(function() {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.step-content').each(function() {
            $(this).hide()
        });
        $('.step-content').eq($(this).index()).show();
    })
    /*ushare-help-end*/
    /*connect*/
    //$('#connect-content').height( $(window).height()-$('#head').height()-$('#foot').height() );
    /*connect*/
    /*join*/
    //$('#join-content').height( $(window).height()-$('#head').height()-$('#foot').height() );
    $('.join-left').find('li').hover(function() {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.join-right .job').each(function() {
            $(this).hide()
        });
        $('.join-right .job').eq($(this).index()).show();
    })
    /*join*/
  
    /*help-list*/
    $('.join-leftt .jia').click(function() {
        if ($(this).hasClass('active')) {
              $('.join-leftt ').find('.border').each(function(){
                $(this).stop();
                $(this).slideUp();
            });
            $(this).removeClass('active');
        } else {
            $('.join-leftt ').find('.border').each(function(){ $(this).slideUp(); });
            $('.join-leftt .jia').each(function(){$(this).removeClass('active')});
            $(this).stop();
            $(this).addClass('active').parent().find('.border').slideDown();
        }

        // that = this;
        // $('.join-right .job').each(function() {
        //     $(this).hide()
        // });
        // $('.join-right .job').eq($(that).parent().index()).show();
        return false;
    });
    $('.join-leftt').find('li').click(function(){
        thatt=this;
        if( $(this).data('index') && $(this).data('index') !='0' ){
            $('.join-right').scrollTop( $('.join-right .job').find('h2').eq( $(thatt).data('index') ).position().top);
        }

        return false;
    })
    /*help-list*/
    /*cookie*/

    if( getCookie('m_logined') == 'true'){
        $('.login').hide();
        $('.reg').hide();
        $('.center').show();
    }else{
        $('.login').show();
        $('.reg').show();
        $('.center').hide();
    }


});