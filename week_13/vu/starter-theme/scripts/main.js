/*
    Theme Scripts

    Revealing Module Pattern
    https://carldanley.com/js-revealing-module-pattern/
 */
        var ThemeApp=(function($){
            
            var init = function(optons){
                console.log('Theme code has started', options);
            };
            
            return{
                init: init
            };
        }(window.jQuery))

        //Anonymous self executing functions
        //

        ThemeApp.init(); //this runs