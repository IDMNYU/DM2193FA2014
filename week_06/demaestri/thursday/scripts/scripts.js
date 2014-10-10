
// Fetch all things with the class .item
// Assign a Click event to the items 
$('.item').on('click', function(){
    alert($(this).text());
});

//OTHER FUNCTIONS: 
//alert('some text');

// "Give me the thing I just clicked"
// $(this)

// console.log($(this).text());

//console.log('MOUSE ENTER', $.trim($(this).text())); 

//Get the Text contents out of the DOM element
//$(this).text();

//Get the HTML contents out of the DOM element
//$(this).html();

// jQuery best practices
// Always assign $(this) to a variable
// "Caching"

}).on('mouseleave', function(){
    console.log('MOUSE LEAVE', $.trim($(this).text()));
}).on('click', function(){

    var $item = $(this);

    $item.toggleClass('collapse');

});
