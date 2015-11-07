jQuery(document).ready(function(){
	
	jQuery(".danger-click").click(function(){
		jQuery(this).css({
			"background-color": "#00f"
		});
		alert("Nooooooooooooooo!");
		jQuery(this).css({
			"background-color": ''
		});
	});
	
	//jQuery(".danger-click").click();
	jQuery("a[href^=http]").click(function(){
		return confirm("I can't control what you look at here. You sure you wanna go?");
	});
	
	jQuery("#submit-tell").click(function(){
		var inputBox = jQuery("#you-tell-me");
		var text = inputBox.val();
		//jQuery("#content").html("<p>" + text + "</p>");
		jQuery("#content").append("<p>" + text + "</p>");
		/*var newP = jQuery("<p/>");
		newP.html(text);
		jQuery("#content").append(newP);
		newP.click(function(){
			jQuery(this).toggleClass("monster");
		});*/
		inputBox.val("");
	});
	
	jQuery("p").click(function(){
		jQuery(this).toggleClass("monster");
	});
});