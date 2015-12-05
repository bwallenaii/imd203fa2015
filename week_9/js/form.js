$(document).ready(function(){
    var pizzaOrderForm = jQuery("#pizza-order");
    var priceControls = pizzaOrderForm.find("input[type=radio],input[type=checkbox],select");
    pizzaOrderForm.validate({
        rules: {
          customer_name: {
            required: true,
            minlength: 2,
            maxlength: 15
          },
          "crust": "required",
          "toppings[]": "required"
        },
        messages: {
          customer_name: {
            required: "Who we leaving the pizza with?",
            minlength: "Your name too short",
            maxlength: "Your name too long. Won't fit on the receipt."
          },
          crust: "Pizza gotta be on something",
          "toppings[]": "Gotta have something on top!",
          age: {
            min: "Your too young to order online.",
            max: "Your too old to know how to order online."
          }
        },
        errorElement: "span"
    });
    
    priceControls.on("change", function(){
        
        /*priceControls.each(function(index, item){
            console.log(index, item);
        });*/
        var totalPrice = 0;
        for(var i = 0; i < priceControls.length;++i){
            var currentItem = jQuery(priceControls[i]);
            var price = Number(currentItem.attr("data-price"));
            if(currentItem[0].checked){
                totalPrice += price;
            }
            console.log(currentItem.is("select"));
            if(currentItem.is("select")){
                var selValue = currentItem[0].value; //raw JS FTW!!
                var options = currentItem.find("option");
                for(var j = 0; j < options.length;++j){
                    var opt = jQuery(options[j]);
                    if(opt.attr("value") == selValue){
                        price = Number(opt.attr("data-price"));
                        totalPrice += price;
                    }
                }
            }
        }
        jQuery("#total-price").html("$" + totalPrice.toFixed(2));
    });
});



























