/**
 * ����ύ��form��ÿ����Ԫ���Ƿ������дҪ��
 * ������ʾ��֤��
 * mod: 2013-12-24 darkmirrors
 */
 
function checkSurvey(fm){
	for(var i=0;i<fm.length;i++){
		var obj = fm[i];
		var title=obj.title;
		if(title=="")continue;//����δ����title��Ԫ��
		var p=title.lastIndexOf("~");
		if(p<0)continue;//����title��δ�������ʽ��Ԫ��
		var info=title.substring(0,p);
		var format=title.substring(p+1,title.length);
		var p1=title.indexOf("��");
		var info1=title.substring(p1,p);
		var name=obj.name;
		if(name=="")continue;//����û�����ֵ�Ԫ��
		var value=trim(obj.value);
		var tagName = obj.tagName.toLowerCase();

		//obj.value=value;//�Զ���ȥ�ύ������˵Ŀո�
		
		if (tagName == 'input') {
			if(obj.type=="radio"){
				if(checkRadio(fm,obj)){
					continue;
				}
				else{
					return false;
				}
			}
			if(obj.type=="checkbox"){
				if(checkCheckbox(fm,obj)){
					continue;
				}
				else{
				 	return false;
				}
			}
			if(obj.type=="select-one"){
				if(checkSelectOne(obj)){
					continue;
				}
				else{
					return false;
				}
			}
			if(obj.type=="select-multiple"){
				if(checkSelectMultiple(obj)){
					continue;
				}
				else{
					return false;
				}
			}
		}else if(tagName == 'select' || tagName == 'textarea'){
			if(obj.value == ''){
				alert(info+"\n"+"���ݲ�����Ϊ��");
				return false;
			}
		}
		
		var notNull=false;
		if(format.charAt(format.length-1)=="!"){
			notNull=true;
			format=format.substring(0,format.length-1);
		}
		if(notNull){
			if(value==""){
				alert(info+"\n"+"���ݲ�����Ϊ��");
				obj.focus();
				return false;
			}
		}else{
			//���ݿ���Ϊ��ʱ��
			if(value=="")
				continue;
		}
		//���ݵĳ����ж�
		var colonP=format.indexOf(":");
		if(colonP>0){
			if(format.charAt(colonP-1)=='f'){
				var lengthLimit=format.substring(0,colonP-1);
				if(!isNaN(lengthLimit)){
					if(value.length!=lengthLimit)
					{
						alert(info1+"\n"+"��д���Ȳ��ܳ���"+lengthLimit+"���ַ�");
						obj.focus();
						return false;
					}
				}
			}else{
				var lengthLimit=format.substring(0,colonP);
				if(!isNaN(lengthLimit)){
					if(value.length>lengthLimit)
					{
						alert(info1+"\n"+"��д���Ȳ��ܳ���"+lengthLimit+"���ַ�");
						obj.focus();
						return false;
					}
				}
			}
			format=format.substring(colonP+1,format.length);
		}
		if(format=="email"){
			//�����ʼ���ʽ
			var found=value.match(/\w+@.+\..+/);
			if(found==null){
				alert("��������д"+info1+"\n"+value+"����һ����Ч��Email��ַ");
				obj.focus();
				return false;
			}
		}else if(format=="int"){
			//����
			var intVal=parseInt(value);
			if(isNaN(intVal)||intVal!=value){
				alert(info1+"\n"+"����д����");
				obj.focus();
				return false;
			}
		}else if(format=="mobile"){
			//�ֻ�����
			var found=value.match(/^1[3|4|5|8][0-9]\d{4,8}$/);
			if(found==null){
		        alert("��������д"+info1+"\n"+value+"������ȷ���ֻ�����");
		        obj.focus();
		        return false; 
		    } 
		}else if(format=="float"){
			//������
			var floatVal=parseFloat(value);
			if(isNaN(floatVal)||floatVal!=value){
				alert(info1+"\n"+"����дС��");
				obj.focus();
				return false;
			}
		}else if(format=="date"){
			//����
			var found=value.match(/(\d{1,5})-(\d{1,2})-(\d{1,2})/);
			if(found==null||found[0]!=value||found[2]>12||found[3]>31){
				alert("��������д"+info1+"\n"+"���ڸ�ʽ����ȷ"+"\n"+"��ʾ��[2000-01-01]");
				obj.focus();
				return false;
			}
			var year=trim0(found[1]);
			var month=trim0(found[2])-1;
			var date=trim0(found[3]);
			var d=new Date(year,month,date);
			if(d.getFullYear()!=year||d.getMonth()!=month||d.getDate()!=date){
				alert("��������д"+info1+"\n"+"���ڸ�ʽ����ȷ"+"\n"+"��ʾ��[2000-01-01]");
				obj.focus();
				return false;
			}
		}else if(format=="time"){
			//ʱ��
			var found=value.match(/(\d{2}):(\d{2}):(\d{2})/);
			if(found==null||found[0]!=value||found[1]>23||found[2]>59||found[3]>59){
				alert("��������д"+info1+"\n"+"ʱ���ʽ����ȷ"+"\n"+"��ʾ��[05:38:00]");
				obj.focus();
				return false;
			}
		}else if(format=="hasChinese"){
			var _hasChinese=false;
			for(var j=0;j<value.length;j++){
				if(value.charCodeAt(j)>255){
					_hasChinese=true;
					break;
				}
			}
			if(!_hasChinese){
				alert("��������д"+info1+"\n"+"������Ҫ���������ַ�");
				obj.focus();
				return false;
			}
		}else if(format=="allChinese"){
			for(var j=0;j<value.length;j++){
				if(value.charCodeAt(j)<=255){
					alert("��������д"+info1+"\n"+"����Ҫ������")
					obj.focus();
					return false;
				}
			}
		}else if(format=="noChinese"){
			for(var j=0;j<value.length;j++){
				if(value.charCodeAt(j)>255){
					alert("��������д"+info1+"\n"+"����Ҫ�������");
					obj.focus();
					return false;
				}
			}
		}else if(format!=""){
			//�Զ���
			try
			{
				var found=value.match(eval(format));
				if(found==null||found[0]!=value){
					alert("��������д"+info1+"\n"+"��ʽ������Ҫ��"+"\n"+"��ʾ��["+format+"]");
					obj.focus();
					return false;
				}
			}
			catch(e){
				alert(e.name+":\n["+fm[i].name+"]���Ϸ�������ʽ\""+format+"\"");
				return false;
			}
		}
	}
	return true;
}
function checkRadio(fm,opt)
{
	var title=opt.title;
	if(title=="")return true;//����δ����title��Ԫ��
	var p=title.lastIndexOf("~");
	if(p<0)return true;//����title��δ�������ʽ��Ԫ��
	var info=title.substring(0,p);
	var format=title.substring(p+1,title.length);
	var p1=title.indexOf("��");
	var info1=title.substring(p1,p);
	var format=title.substring(p+1,title.length);
	var name=opt.name;
	if(name=="")return true;//����û�����ֵ�Ԫ��
	if(format=="!"){
		//����ѡ��һ��ѡ��
		if(document.getElementsByName(name).length==1){
			//ͬ��radioֻ��һ��
			if(opt.checked){
				return true;
			}else{
				alert(info1+"Ϊ�ش���"+"\n"+"��ѡ��һ��ѡ��");
				opt.focus();
				return false;
			}
		}else{
			//��һ��radio��
			var radios=fm[name];
			for(var j=0;j<radios.length;j++){
				if(radios[j].checked==true)return true;
			}
			alert(info1+"Ϊ�ش���"+"\n"+"��ѡ��һ��ѡ��");
			opt.focus();
			return false;
		}
	}else{
		//����һ��ѡ��Ҳ��ѡ
		return true;
	}
}
function checkCheckbox(fm,opt)
{
	var title=opt.title;
	if(title=="")return true;//����δ����title��Ԫ��
	var p=title.lastIndexOf("~");
	if(p<0)return true;//����title��δ�������ʽ��Ԫ��
	var info=title.substring(0,p);
	var format=title.substring(p+1,title.length);
	var p1=title.indexOf("��");
	var info1=title.substring(p1,p);
	var name=opt.name;
	if(name=="")return true;//����û�����ֵ�Ԫ��

	var min=format.match(/min:(\d+)\w*/);
	var max=format.match(/\w*max:(\d+)/);

	if(document.getElementsByName(name).length==1){
		//ֻ��һ��ͬ��checkbox
		if(min!=null){
			if(min[1]==1&&!opt.checked){
				alert(info1+"Ϊ�ش���"+"\n"+"��ѡ��һ��ѡ��");
				opt.focus();
				return false;
			}
		}
	}else{
		//һ��checkbox��
		var checkboxes=document.getElementsByName(name);
		var check_count=0;
		for(var j=0;j<checkboxes.length;j++){
			if(checkboxes[j].checked)check_count++;
		}
		if(min!=null){
			if(min[1]>check_count){
				alert(info1+"Ϊ�ش���"+"\n"+"������Ҫѡ��"+min[1]+"��ѡ��");
				opt.focus();
				return false;
			}
		}
		if(max!=null){
			if(max[1]<check_count){
				alert(info1+"Ϊ�ش���"+"\n"+"�������ѡ��"+max[1]+"��ѡ��");
				opt.focus();
				return false;
			}
		}
	}
	return true;
}
function checkSelectOne(sel)
{
	var title=sel.title;
	if(title=="")return true;//����δ����title��Ԫ��
	var p=title.lastIndexOf("~");
	if(p<0)return true;//����title��δ�������ʽ��Ԫ��
	var info=title.substring(0,p);
	var format=title.substring(p+1,title.length);
	var p1=title.indexOf("��");
	var info1=title.substring(p1,p);
	var name=sel.name;
	if(name=="")return true;//����û�����ֵ�Ԫ��
	
	if(format=="!"&&sel.selectedIndex==0){
		alert(info1+"Ϊ�ش���"+"\n"+"��ѡ��һ��ѡ��");
		sel.focus();
		return false;
	}
	return true;
}
function checkSelectMultiple(sel)
{
	var title=sel.title;
	if(title=="")return true;//����δ����title��Ԫ��
	var p=title.lastIndexOf("~");
	if(p<0)return true;//����title��δ�������ʽ��Ԫ��
	var info=title.substring(0,p);
	var format=title.substring(p+1,title.length);
	var format=title.substring(p+1,title.length);
	var p1=title.indexOf("��");
	var name=sel.name;
	if(name=="")return true;//����û�����ֵ�Ԫ��

	var min=format.match(/min:(\d+)\w*/);
	var max=format.match(/\w*max:(\d+)/);
	
	var select_count=0;
	for(var j=0;j<sel.length;j++){
		if(sel[j].selected)select_count++;
	}
	if(min!=null){
		if(min[1]>select_count){
			alert(info1+"Ϊ�ش���"+"\n"+"������Ҫѡ��"+min[1]+"��ѡ��");
			sel.focus();
			return false;
		}
	}
	if(max!=null){
		if(max[1]<select_count){
			alert(info1+"Ϊ�ش���"+"\n"+"�������ѡ��"+max[1]+"��ѡ��");
			sel.focus();
			return false;
		}
	}
	return true;
}
/**
 * ��ȥ�ַ�������s���˵Ŀո�
 */
function trim(s){
	s=s.replace(/^ */,"");
	s=s.replace(/ *$/,"");
	return s;
}
/**
 * ��ȥ�ַ�����ʾ����ֵ������ͷ�����е�"0"��
 * ����
 * 	trim0("01")������"1"
 * 	trim0("1")������"1"
 * 	trim0("10")������"10"
 * 	trim0("000")������"0"
 */
function trim0(s){
	if(s.length==0)return s;
	s=s.replace(/^0*/,"");
	if(s.length==0)s="0";
	return s;
}
/**
 * ȡ��һ��form�������ύʱ�ڲ��ύ������QueryString
 * ����:
 * ?accountName=&userName=&email=&area=0&credit_low=&credit_high=&age_low=&age_high=&userLevel=0
 */
function getQueryString(fm){
 	var qStr="";
 	for(var i=0;i<fm.length;i++){
 		if(!fm[i].disabled){
 			var n=fm[i].name;
 			if(n==null)continue;
 			if(n.length==0)continue;
 			if(fm[i].type=="select-multiple"){
 				var _vs=fm[i].options;
 				for(var _j=0;_j<_vs.length;_j++){
 					var _opt=_vs(_j);
 					if(_opt.selected)
 					{
 						var v=_opt.value;
 						qStr=qStr+"&"+n+"="+ec(v);
 					}
 				}
 			}else{
 				var v=fm[i].value;
 				if(fm[i].type=="radio"||fm[i].type=="checkbox"){
 					if(!fm[i].checked)continue;
 				}
 				qStr=qStr+"&"+n+"="+ec(v);
 			}
 		}
 	}
 	if(qStr.length>0)qStr="?"+qStr.substr(1);
 	return qStr;
}

function ec(va){
	return va.replace(/\n/g,"%0D%0A");
}

function checkVerifySurvey(doUrl,submitForm,isResetForm){
	if(checkSurvey(submitForm)){
		var newWindow = window.open(doUrl,"survey_server","toolbar,resizable,scrollbars,dependent,width=500,height=420,left=150,top=80");
		newWindow.focus();
		if(doUrl.length==0)submitForm.submit();
		if(isResetForm)submitForm.reset();
		return true;
	}else{
		return false;
	}
}