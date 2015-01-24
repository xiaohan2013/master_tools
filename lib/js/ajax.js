Living.json2url=function(json)
{
	var a=[];
	for(var i in json)
	{
		var v=json[i]+'';
		v=v.replace(/\n/g, '<br/>');
		v=encodeURIComponent(v);
		a.push(i+'='+v);
	}
	return a.join('&');
}

Living.ajax=function(url, opt)
{
	opt			=opt||{};
	opt.data	=opt.data||{};
	opt.data.t	=opt.data.t||new Date().getTime();
	opt.method	=opt.method||'get';
	
	var oAjax=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
	
	if(opt.method=='post')
	{
		oAjax.open('POST', url, true);
		oAjax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		try{
			oAjax.send(opt.data?Living.json2url(opt.data):null);
		}catch(e){}
	}
	else
	{
		url+='?'+Living.json2url(opt.data);
		oAjax.open('GET', url, true);
		try{
			oAjax.send();
		}catch(e){}
	}
	
	oAjax.onreadystatechange=function ()
	{
		if(oAjax.readyState==4)
		{
			if(oAjax.status==200)
			{
				opt.fnSucc && opt.fnSucc(oAjax.responseText);
			}
			else
			{
				opt.fnFaild && opt.fnFaild(oAjax.status);
			}
		}
	};
}