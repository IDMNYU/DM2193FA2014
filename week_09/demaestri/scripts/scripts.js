// WE want to do this:

 //Find all of the elements on the page with data-tooltip
 //If you put your mouse on those elements
 //Read the value of data-tooltip
 //Position the tooltip DIV near the element
 //When you move your mouse off the element remove the Tooltip DIV 

 $('[data-tooltip]').on('mouseenter', function(){

    var $tooltip_el = $(this); //this creates the element
    var tooltip_el_width = $tooltip_el.outerWidth();
    var tooltip_el_offset = $tooltip_el.offset(); 
    var tooltip_text = $tooltip_el.data('tooltip'); //this method let's you reach the value of the data

    //Build a tooltip DIV
    var $tooltip = $('<div/>',{ //create this div
        'class' : 'tooltip', //apply this text to it 
        'text' : tooltip_text
        //Insert the DIV into the page

    }).appendTo('body').css({

     //Position the tooltip DIV near the element
        'position' : 'absolute',
        'top' : tooltip_el_offset.top,
        'left' : Math.floor((tooltip_el_width/2) + tooltip_el_offset.left), //taking half the button and adding that amount to the left edge of the browser
        'transform': 'translateX(-50%)',

    });

    $tooltip_el.on('mouseleave',function(){
        $tooltip.remove();
        $tooltip_el.off('mouseleave');
    });

});

 //console.log(tooltip_el_width);
 //console.log(tooltip_el_offset);
 //console.log('left offser:', (tooltip_el_width/2) + tooltip_el_offset.left);

 //When you move your mouse off the element remove the Tooltip DIV 
