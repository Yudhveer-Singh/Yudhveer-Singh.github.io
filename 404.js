var l=window.location;
var url=l.protocol+"//"+l.host+l.pathname;
document.getElementById("fullurl").innerHTML=url;
document.getElementById("fullurl").href=url;

var map=new Map();
map.set("http://localhost:7700/index.html","http://localhost:7700/404.js");

var kv= map.entries();
for(let k of kv){
   if(url==k[0]){
      let text='The page you are looking for is moved to<br><a href="'+k[1]+'">'+k[1]+'</a>';
      document.getElementById("discription").innerHTML=text;
   }
}
