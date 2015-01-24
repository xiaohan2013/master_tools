Living=window.Living || {};
Living.cookie={
	getCookie:function(name)
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
		},
	setCookie:function(name, value, iDay)
		{
			if(iDay!==false)
			{
				var oDate=new Date();
				oDate.setDate(oDate.getDate()+iDay);
				
				document.cookie=name+'='+value+';expires='oDate;
			}
			else
			{
				document.cookie=name+'='+value;
			}
		},
	removeCookie:function(name)
		{
			setCookie(name, 'a', -1);
		}
}
