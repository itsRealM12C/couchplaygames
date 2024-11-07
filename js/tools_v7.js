var Tools=window.Tools={'preventDefault':function(e)
{if(!e)
e=event;if(typeof e.preventDefault!='undefined')
e.preventDefault();e.returnValue=false;},'cursorX':function(e)
{var diff=(this.target(e)!=this.currentTarget(e)?this.absoluteOffsetLeft(this.target(e))-this.absoluteOffsetLeft(this.currentTarget(e)):0);if(typeof e.targetTouches!='undefined')
return diff+e.targetTouches[0].pageX-this.absoluteOffsetLeft(this.target(e.targetTouches[0]));if(typeof e.layerX!='undefined')
return diff+e.layerX;if(typeof e.clientX!='undefined')
return diff+e.clientX-this.absoluteOffsetLeft(this.target(e));return 0;},'cursorY':function(e)
{var diff=(this.target(e)!=this.currentTarget(e)?this.absoluteOffsetTop(this.target(e))-this.absoluteOffsetTop(this.currentTarget(e)):0);if(typeof e.targetTouches!='undefined')
return diff+e.targetTouches[0].pageY-this.absoluteOffsetTop(this.target(e.targetTouches[0]));if(typeof e.layerY!='undefined')
return diff+e.layerY;if(typeof e.clientY!='undefined')
return diff+e.clientY-this.absoluteOffsetTop(this.target(e));return 0;},'windowInnerWidth':function(e)
{return(typeof window.innerWidth!='undefined'?window.innerWidth:document.documentElement.clientWidth);},'windowInnerHeight':function(e)
{return(typeof window.innerHeight!='undefined'?window.innerHeight:document.documentElement.clientHeight);},'absoluteOffsetLeft':function(obj)
{return(typeof obj.offsetLeft!='undefined'?obj.offsetLeft:0)+(obj.offsetParent&&obj.offsetParent!=obj?Tools.absoluteOffsetLeft(obj.offsetParent):0);},'absoluteOffsetTop':function(obj)
{return(typeof obj.offsetTop!='undefined'?obj.offsetTop:0)+(obj.offsetParent&&obj.offsetParent!=obj?Tools.absoluteOffsetTop(obj.offsetParent):0);},'isChildOf':function(childElem,parentElem)
{if(childElem.parentNode==null)
return false;if(typeof childElem.parentNode=='undefined')
return false;if(childElem.parentNode===parentElem)
return true;return this.isChildOf(childElem.parentNode,parentElem);},'target':function(e)
{return(typeof e.target!='undefined'?e.target:e.srcElement);},'currentTarget':function(e)
{return(typeof e.currentTarget!='undefined'?e.currentTarget:e.srcElement);},'relatedTarget':function(e)
{if(typeof e.relatedTarget!='undefined')
return e.relatedTarget;return(e.type=='mouseover'?e.fromElement:e.toElement);},'locationFolder':function()
{return location.pathname.replace(/\/[^\/]*$/,'/');},'isTouch':function()
{return(navigator.userAgent.search(/(iphone|ipad|ipod|android)/i)>=0);},'addEvent':function(elem,eventType,func)
{if(this.isTouch()==true&&eventType.search(/mouse/i)>=0)
return;if(this.isTouch()==false&&eventType.search(/touch/i)>=0)
return;if(typeof elem.attachEvent!='undefined')
elem.attachEvent('on'+eventType,func);else
elem.addEventListener(eventType,func,false);},'removeEvent':function(elem,eventType,func)
{if(this.isTouch()==true&&eventType.search(/mouse/i)>=0)
return;if(this.isTouch()==false&&eventType.search(/touch/i)>=0)
return;if(typeof elem.detachEvent!='undefined')
elem.detachEvent('on'+eventType,func);else
elem.removeEventListener(eventType,func,false);},'addEventList':function(elem,eventTypes,func)
{for(var i=0;i<eventTypes.length;i++)
{if(this.isMouseEventSupported(eventTypes[i]))
{if(elem.addEventListener)
elem.addEventListener(eventTypes[i],func,false);else
elem.attachEvent('on'+eventTypes[i],func);return;}}},'isMouseEventSupported':function(eventName)
{var el=document.createElement('div');eventName='on'+eventName;var isSupported=(eventName in el);if(!isSupported)
{el.setAttribute(eventName,'return;');isSupported=(typeof el[eventName]=='function');}
el=null;return isSupported;},'audioPlay':function(elem)
{if(typeof elem.play!='undefined')
elem.play();},'audioPause':function(elem)
{if(typeof elem.pause!='undefined')
elem.pause();},'audioRewind':function(elem)
{try{elem.currentTime=0;}catch(e){}},'ajaxGet':function(url)
{var req=null;if(typeof XMLHttpRequest!='undefined')
req=new XMLHttpRequest();else if(typeof ActiveXObject!='undefined')
req=new ActiveXObject('Msxml2.XMLHTTP');else
req=new ActiveXObject('Microsoft.XMLHTTP');req.open('GET',url,true);req.onreadystatechange=function(){if(req.readyState!=4)
return;eval(req.responseText);};req.send(null);},'numberFormat':function(number,decs,decSep,kSep)
{decs=(typeof decs!='undefined'?decs:0);decSep=(typeof decSep!='undefined'?decSep:'.');kSep=(typeof kSep!='undefined'?kSep:',');var formatted='',abs=''+Math.floor(Math.abs(number)),neg=(number<0),str;while(abs.length>0)
{formatted=(formatted!=''?kSep:'')+formatted;str=(abs.substr(Math.max(0,abs.length-3),Math.min(abs.length,3)));abs=abs.substr(0,abs.length-str.length);formatted=str+formatted;}
if(decs>0)
formatted+=decSep+number.toFixed(decs).replace(/^.*\./,'');if(neg==true)
formatted='-'+formatted;return formatted;}};