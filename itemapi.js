$.getScript("definition.js");
$('[data-rotmg]').each(function(){
var itemid = $(this).data('rotmg');
$(this).css("width","46px");
$(this).css("height","46px");
$(this).css("background","url(renders.png)");
$(this).css("display","inline-block");
if(typeof items[itemid] == "undefined")
   itemid="-1";
if(items[itemid].length>3)   
var itemposition="-"+items[itemid][3]+"px -"+items[itemid][4]+"px";
else
var itemposition="-"+items[itemid][1]+"px -"+items[itemid][2]+"px";
$(this).css("background-position", itemposition);
$(this).attr("title",items[itemid][0]);
});