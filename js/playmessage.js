//评论开始
	$(".imgbnt").click(function(e){
		//alert("你好");
		$(".face").slideDown(500);
		e.stopPropagation();//阻止动画
	});

	$(document).click(function(){
		$(".face").slideUp(400);
	});

	$(".face ul li").click(function(){
		var img=$(this).find("img").clone();
		$(".edit").append(img);
	});

	$(".submit").click(function(){
		var txt=$(".edit").html();
		if(txt==""){
			$(".edit").focus();
			}
		else{
			$(".msginbox").append("<div class='msginfo'><dl><dt><img src='../images/message/logo.jpg' width='50' height='50'></dt><dd>小毕</dd></dl><div>"+txt+"</div></div>");
			$(".edit").html("");
			}
	});
//评论结束
