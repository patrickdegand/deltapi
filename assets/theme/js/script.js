!function(){try{document.getElementsById("top-1")[0].getElementsByTagName("a")[0].removeAttribute("rel")}catch(b){}if(!document.getElementById("top-1")){var a=document.createElement("section");a.id="top-1";a.style="display: none";a.innerHTML='<a href="https://mobirise.com/builder/web-design-program.html">website design program</a> Mobirise v5.8.9 <a href="https://mobirise.com/extensions/popup-builder/">popup window</a>';document.body.insertBefore(a,document.body.childNodes[0])}}();
//alert("W3CSS theme");
	$('.jqte-test').jqte();
	
	// settings of status
	var jqteStatus = true;
	$(".status").click(function()
	{
		jqteStatus = jqteStatus ? false : true;
		$('.jqte-test').jqte({"status" : jqteStatus})
	});
/*
try{					
mbrApp.Core.$body.append('\n<script src="https://htmeditor.com/js/tinymce/tinymce.min.js"></script>\n');
mbrApp.Core.$body.append('\n<script>\ntinymce.init({selector: ".editable", inline: true});\n</script>\n');
}
catch(err){
	mbrApp.alertDlg(err.name + ' with message : ' +err.message);
}
*/