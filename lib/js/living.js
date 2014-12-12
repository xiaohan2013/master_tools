window.Sel={
		   initPro:function(s1,s2) {
			       	var option1 = '';
			        $.each(cityDataJson, function(index, indexItems) {
			         option1 += "<option value=" + indexItems.id + ">"
			           + indexItems.name + "</option>";
			        });
			        $("#"+s1).append(option1);
			        $("#"+s1).on("change", function() {
			        	Sel.second(cityDataJson,s1,s2);
		        	});
		      },
		      
		 	second:function(cityDataJson,s1,s2) {
			    var option2 = '';
			    var selectedIndex = $("#" + s1 + " option").not(function(){ return !this.selected }).text();
			    $("#"+s2).empty();
			    if($("#"+s1+":selected").val() == -1){
			     	$("#"+s2).append("<option value=\"-1\">请选择</option>");
			    }
			    $.each(cityDataJson, function(index, indexItems) {
				     var proName = indexItems.name;
				     $.each(indexItems.items, function(index, indexItems) {
					      if (indexItems.parentNode != selectedIndex) {
					       return true;﻿
					      } 
					      option2 += "<option value=" + indexItems.id + ">" + indexItems.name + "</option>";
				   	 });
			  	});
			  	$("#"+s2).append(option2);
		 	},
		 	selectDefault:function(s1,s2,val1,val2) {
			    $("#" + s1).val(val1);
			    $("#" + s1).trigger('change');
			    if(val2) {
			    	 $("#" + s2).val(val2);
			    }
		 	}
}
function checkMobile(sMobile){
		    if(!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(sMobile))){ 
		        return false;
		    }
		    return true;
}
 //url ? 问号后面的东东哦
function getSearch()
{ 
	var url=window.location.search; 
	Request ={}; 
	if(url.indexOf("?")!=-1) 
	{ 
	
		var str = url.substr(1) 
		if(/&/.test(str)){
			strs = str.split("&"); 
			for(var i=0;i<strs.length;i++) 
			{ 
				Request[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
			}
		}else{
			strs = str.split("=");
			Request[strs[0]]=unescape(strs[1]);
		}
		
	}
	return Request;
}
		

