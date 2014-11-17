function getStyle(obj, name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else
	{
		return getComputedStyle(obj, false)[name];
	}
}
function $(id)
{
	return getElementById(id);
}
function getByClass(oParent, sClass)
{
	var aEle=oParent.getElementsByTagName('*');
	var aResult=[];
	var i=0;
	
	for(i=0;i<aEle.length;i++)
	{
		if(aEle[i].className==sClass)
		{
			aResult.push(aEle[i]);
		}
	}
	
	return aResult;
}
function css2(obj, attr, value)
{
	switch (arguments.length)
	{
		case 2:
			if(typeof arguments[1] == "object")
			{	//二个参数, 如果第二个参数是对象, 批量设置属性
				for (var i in attr)obj.style[i] = attr[i]
			}
			else
			{	//二个参数, 如果第二个参数是字符串, 读取属性值
				return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr]
			}
			break;
		case 3:
			//三个参数, 单一设置属性
			obj.style[attr] = value;
			break;
		default:
			alert("参数错误！")
	}
}
function css(obj, attr, value)
{
	if(arguments.length==2)
		return parseFloat(obj.currentStyle?obj.currentStyle[attr]:document.defaultView.getComputedStyle(obj, false)[attr]);
	else if(arguments.length==3)
		switch(attr)
		{
			case 'width':
			case 'height':
			case 'paddingLeft':
			case 'paddingTop':
			case 'paddingRight':
			case 'paddingBottom':
				value=Math.max(value,0);
			case 'left':
			case 'top':
			case 'marginLeft':
			case 'marginTop':
			case 'marginRight':
			case 'marginBottom':
				obj.style[attr]=value+'px';
				break;
			case 'opacity':
				obj.style.filter="alpha(opacity:"+value*100+")";
				obj.style.opacity=value;
				break;
			default:
				obj.style[attr]=value;
		}
	
	return function (attr_in, value_in){css(obj, attr_in, value_in)};
}

var MOVE_TYPE={
	BUFFER: 1,
	FLEX: 2
};

function startMove(obj, oTarget, iType, fnCallBack, fnDuring)
{
	var fnMove=null;
	if(obj.timer)
	{
		clearInterval(obj.timer);
	}
	
	switch(iType)
	{
		case MOVE_TYPE.BUFFER:
			fnMove=doMoveBuffer;
			break;
		case MOVE_TYPE.FLEX:
			fnMove=doMoveFlex;
			break;
	}
	
	obj.timer=setInterval(function (){
		fnMove(obj, oTarget, fnCallBack, fnDuring);
	}, 15);
}

function doMoveBuffer(obj, oTarget, fnCallBack, fnDuring)
{
	var bStop=true;
	var attr='';
	var speed=0;
	var cur=0;
	
	for(attr in oTarget)
	{
		cur=css(obj, attr);
		if(oTarget[attr]!=cur)
		{
			bStop=false;
			
			speed=(oTarget[attr]-cur)/5;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			
			css(obj, attr, cur+speed);
		}
	}
	
	if(fnDuring)fnDuring.call(obj);
	
	if(bStop)
	{
		clearInterval(obj.timer);
		obj.timer=null;
		
		if(fnCallBack)fnCallBack.call(obj);
	}
}

function doMoveFlex(obj, oTarget, fnCallBack, fnDuring)
{
	var bStop=true;
	var attr='';
	var speed=0;
	var cur=0;
	
	for(attr in oTarget)
	{
		if(!obj.oSpeed)obj.oSpeed={};
		if(!obj.oSpeed[attr])obj.oSpeed[attr]=0;
		cur=css(obj, attr);
		if(Math.abs(oTarget[attr]-cur)>1 || Math.abs(obj.oSpeed[attr])>1)
		{
			bStop=false;
			
			obj.oSpeed[attr]+=(oTarget[attr]-cur)/5;
			obj.oSpeed[attr]*=0.7;
			var maxSpeed=65;
			if(Math.abs(obj.oSpeed[attr])>maxSpeed)
			{
				obj.oSpeed[attr]=obj.oSpeed[attr]>0?maxSpeed:-maxSpeed;
			}
			
			css(obj, attr, cur+obj.oSpeed[attr]);
		}
	}
	
	if(fnDuring)fnDuring.call(obj);
	
	if(bStop)
	{
		clearInterval(obj.timer);
		obj.timer=null;
		if(fnCallBack)fnCallBack.call(obj);
	}
}


function Move(obj, json, fnEnd)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var bStop=true;
		
		for(var name in json)
		{
			var iTarget=json[name];
			
			if(name=='opacity')
			{
				var cur=Math.round(parseFloat(getStyle(obj, name))*100);
			}
			else
			{
				var cur=parseInt(getStyle(obj, name));
			}
			
			var speed=(iTarget-cur)/3;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			
			if(name=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;
			}
			else
			{
				obj.style[name]=cur+speed+'px';
			}
			
			if(cur!=iTarget)
			{
				bStop=false;
			}
		}
		
		if(bStop)
		{
			clearInterval(obj.timer);
			
			if(fnEnd)
			{
				fnEnd();
			}
		}
	}, 20);
}

