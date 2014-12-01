// JavaScript Document

function startMove(obj,json,endFn){
	
		clearInterval(obj.timer);
		
		obj.timer = setInterval(function(){
			
			var bBtn = true;
			
			for(var attr in json){
				
				var iCur = 0;
			
				if(attr == 'opacity'){
					if(Math.round(parseFloat(getStyle(obj,attr))*100)==0){
					iCur = Math.round(parseFloat(getStyle(obj,attr))*100);
					
					}
					else{
						iCur = Math.round(parseFloat(getStyle(obj,attr))*100) || 100;
					}	
				}
				else{
					iCur = parseInt(getStyle(obj,attr)) || 0;
				}
				
				var iSpeed = (json[attr] - iCur)/2;
			iSpeed = iSpeed >0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				if(iCur!=json[attr]){
					bBtn = false;
				}
				
				if(attr == 'opacity'){
					obj.style.filter = 'alpha(opacity=' +(iCur + iSpeed)+ ')';
					obj.style.opacity = (iCur + iSpeed)/100;
					
				}
				else{
					obj.style[attr] = iCur + iSpeed + 'px';
				}
				
				
			}
			
			if(bBtn){
				clearInterval(obj.timer);
				
				if(endFn){
					endFn.call(obj);
				}
			}
			
		},30);
	
	}
	
	
	function getStyle(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}
		else{
			return getComputedStyle(obj,false)[attr];
		}
	}
	
	function stopMove(obj){
		clearInterval(obj.timer);
	}
function noneNav(){
		if( $(window).width()<1180 )
		{
			$('.nav').hide();
		}
	}
$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
       anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        scrollBar: false,
        easing: 'easeInQuart',
        //easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,

        //Design
        verticalCentered: true,
        resize : true,
        sectionsColor: ['#ffffff', '#4BBFC3', '#7BAABE', '#ffffff', '#f7f7f8'],
        //paddingTop: '3em',
        //paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsive: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){
        	if(index == 2){
        		$('#chanpin').hide().removeClass('bounceInLeft');
                //console.log("Going to section 4!");
            }

            if(index == 3){
            	 $('.sectop').hide().removeClass('bounceInDown');
            	 $('.list-one').hide().removeClass('slideInLeft');
            	 $('.list-two').hide().removeClass('flipInY');
            	 $('.list-three').hide().removeClass('slideInRight');
                //console.log("Going to section 2!");
            }
            if(index == 4){
                $('#hezuo').hide().removeClass('lightSpeedIn');
            }
            if(index == 5){
                if(!to3d() || document.documentMode < 10){
					
				 	$('#section4').animate({opacity:0},500).css({filter:"Alpha(Opacity=0)"});
				}else{
					 $('#section4').show().removeClass('rotateIn');
				}
            }
        },
        afterLoad: function(anchorLink, index){
        	 if(index == 2){
        	 	$('#chanpin').show().addClass('bounceInLeft');
        	 	
        	 }
        	 if(index == 3){
                $('.sectop').show().addClass('bounceInDown');
                $('.list-one').show().addClass('slideInLeft');
                $('.list-two').show().addClass('flipInY');
                $('.list-three').show().addClass('slideInRight');
            }
        	 if(index == 4){
                $('#hezuo').show().addClass('lightSpeedIn');
            }
			if(index == 5){
				if(!to3d() || document.documentMode < 10){
					
				 	$('#section4').animate({opacity:1},500).css({filter:"Alpha(Opacity=100)"});
				}else{
					 $('#section4').show().addClass('rotateIn');
				}
               
            }
//          //using anchorLink
//          if(anchorLink == 'secondSlide'){
//              alert("Section 2 ended loading");
//          }
        },
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
        	
        	if(index == 1 && slideIndex != 0){
               startMove($('#section0')[0],{'padding-bottom':0},function(){
               	$('.nav').hide()
               	$('#section0 .fp-slidesNav')[0].style.bottom='4.557%';
               	console.log( slideIndex )
               	setTimeout(function(){$('#section0 .slide .shutx').eq( slideIndex-1 ).show()},500);
              
               })
            }
        	if(index == 1 && slideIndex == 0){
            	var b = 21.875/100;
				var c=$('#section1').height();
				$('#section0').css({'padding-bottom':b*c});
				$('#section0 .fp-slidesNav').css({'bottom':25/100*c});
				$('.nav').show()
            }
        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction){
        	
        }
    });
    
});
window.onload=function(){
	noneNav();
	$('body').on('mouseover ontouchstart','#xiangxia',function(){
		$('#xiangxia').removeClass('swing')
	});
	$('body').on('mouseout ontouchend','#xiangxia',function(){
		$('#xiangxia').addClass('swing')
	});
	$('.list-content li').each(function(i){
		$(this).click(function(){
			$('.sectop').css('background-color','#f7b72b');
			if(i==0){$('.sectop').css('background-image','url(http://style.mc2113.com/dist/mc_pc/images/guanggao.png)');}
			if(i==1){$('.sectop').css('background-image','url(http://style.mc2113.com/dist/mc_pc/images/hudong.png)');}
			if(i==2){$('.sectop').css('background-image','url(http://style.mc2113.com/dist/mc_pc/images/shijian.png)');}
			$('#shutx').show();
			$('.list-content2').show();
			$(this).parent().hide();
		})
	})
	$('body').on('click touchstart','#shutx',function(){
		$('.sectop').css('background-color','rgba(86, 195, 192, 0.5)');
		$('#shutx').hide();
		$('.list-content2').hide().siblings('ul').show();
	})
	$('body').on('mouseover','#shutx',function(){
		$(this).toggleClass('wobble');
	})
	$('body').on('mouseout','#shutx',function(){
		$(this).toggleClass('wobble');
	})
	$('body').on('click touchstart','.shutx',function(){
		$.fn.fullpage.moveTo(1, 0);
	})
	secc=['firstPage','secondPage','3rdPage','lastPage'];
	$('.nav').find('li').each(function(i){
		$(this).on('click touchstart',function(){
			$.fn.fullpage.moveTo( secc[i] );
		})
	})
	
	
	
	var b = 21.875/100;
	var c=$('#section1').height();
	$('#section0').css({'padding-bottom':b*c});
	$('#section0 .fp-slidesNav').css({'bottom':25/100*c});
	
	var jz = parseFloat( $('#section0').css('padding-bottom') );
	$('#xiangxia').width( $(window).width()*87/1920 );
	$('#xiangxia').height( $(window).height()*120/768 );
	$('#xiangxia').css( 'margin-left',-$('#xiangxia').width()/2 );
	$('#xiangxia').css('bottom', (jz-$('#xiangxia').height())/2);
	
	$('#chanpin').width( $(window).width()*391/1920 );
	$('#chanpin').height( $(window).height()*391/768 );
	//$('#chanpin').css( 'margin-left',-$('#chanpin').width()/2 );
	$('#chanpin').css( 'top',($(window).height()-$('#chanpin').height())/2 );
	
	$('#3child').width( $(window).width()*1000/1920 );
	$('#3child').height( $('#section3').height() );
	$('#3child').css('margin-left','auto');
	$('#3child').css('margin-right','auto');
	$('#hezuo img').height($('#section3').height()*334/768);

	$('#hezuo').height( $('#section3').height()*381/768 );
	$('#hezuo').css('padding-top',(parseFloat($('#hezuo').height())-parseFloat($('#hezuo img').height()))/2); 
	$('#shangbiao').height($('#section3').height()*387/768);
	
	
	$('#foot_erwei').width( $(window).width()*1000/1920 );
	$('#foot_erwei').height($('#section3').height()*239/768);
	$('#foot_xinxi').css('padding-left',($(window).width()-$('#section4').width()*1000/1920)/2);
	$('#foot_xinxi').height($('#section4').height()*90/768);
	$('#foot_xinxi p').eq(1).css( 'line-height', $('#foot_xinxi p').height()+'px');
	$('#foot_xinxi p').eq(2).css( 'line-height', $('#foot_xinxi p').height()+'px');
	$('#foot_xinxi .lastp')[0].style.marginRight=($(window).width()-$('#section4').width()*1000/1920)/2+100+'px';
	$('.sectop').height( $('#section3').height()*140/768 );
	
	$('#section2').css('padding-left',($(window).width()-$('#section2').width()*1000/1920)/2);
	$('#section2 .list-content').width( $(window).width()*1000/1920 );
	$('#section2 .list-content2').width( $(window).width()*1000/1920 );
	
	$('#section0 .nav li').each(function(i){$(this).css('line-height',$(this).height()+'px')})
	
	$('.smb').each(function(i){
		$(this).slimScroll({
			width: '760px',
			height: '576px',
			size: '10px',
			position: 'right',
			color: '#ffffff',
			alwaysVisible: true,
			distance: '20px',
			//start: $('#child_image_element'),
			railVisible: true,
			railColor: '#ffffff',
			railOpacity: 0.3,
			wheelStep: 10,
			allowPageScroll: false,
			disableFadeOut: false
		})
	})
}
window.onresize=function(){
	noneNav();
//	document.title=$('body').width()
}
