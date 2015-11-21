jQuery(document).ready(function(){
  
  var links = jQuery("#main-nav a");
  var content = jQuery("#content");
  
  links.click(function(e){
    e.stopPropagation ? e.stopPropagation():null;
    var $this = jQuery(this);
    var page = $this.attr("href");
    content.load(page);
    return false;
  });
  
  jQuery(links[0]).click();
  
});