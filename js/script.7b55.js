!function(){for(var a,b=function(){},c=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],d=c.length,e=window.console=window.console||{};d--;)a=c[d],e[a]||(e[a]=b)}(),$(document).ready(function(){console.log("ready!");$(".blog-nav-item").click(function(){console.log("We clicked!!!"),$(".blog-nav-item").removeClass("active"),this.addClass("active")})});