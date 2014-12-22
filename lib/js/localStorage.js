function localStorag(name,data){
					if( window.localStorage ){
						if( !window.localStorage[name] )
						    {window.localStorage[name]= data;}
					}else{
						return
					}
}
function formStorage(){
					if( window.localStorage.name ){
					$("#username").val( window.localStorage.name );
					}
					if( window.localStorage.tel ){
						$("#phone").val( window.localStorage.tel );
					}
//					if( window.localStorage.cityId && window.localStorage.prjId ){
//						window.Sel.selectDefault("prize-city","prize-prj",window.localStorage.cityId,window.localStorage.prjId ) ;
//					
//					}
					
					
					
}