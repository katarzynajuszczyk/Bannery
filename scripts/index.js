var animateUs = (function() {
  myjQ = jQuery.noConflict(true);
  var animations;
  if(!Modernizr.csstransitions) {
     animations = {
         floatHide: function(elem) {
             elem.animate({
                opacity: '1',
                marginTop: '+=20',
             }, {
                 duration: 400,
                 easing: 'easeOutBack'
             }).delay(1500).animate({
                    opacity: '0',
                    display: 'none',
                    marginTop: '0',
              }, {
                 duration: 400,
                 easing: 'easeOutBack'
             });
         },
         pulsate: function(elem) {
            elem.animate({opacity: '0'},{easing: 'easeInCirc',duration: 200})
                .animate({opacity: '1'},{easing: 'easeInCirc',duration: 200})
                .animate({opacity: '0'},{easing: 'easeInCirc',duration: 200})
                .animate({opacity: '1'},{easing: 'easeInCirc',duration: 200})
                .animate({opacity: '0'},{easing: 'easeInCirc',duration: 200})
                .animate({opacity: '1'},{easing: 'easeInCirc',duration: 200});         
        },
        point: function(elem) {
            elem.animate({right: '-7px'}, {easing: 'easeInCirc',duration: 300})
                .animate({right: '-2px'}, {easing: 'easeInCirc',duration: 300})
                .animate({right: '-7px'}, {easing: 'easeInCirc',duration: 600})
                .animate({right: '-2px'}, {easing: 'easeInCirc',duration: 300}); 
            }
      };

    
  } else {
      animations = {
        floatHide: function(elem) {
            elem.transition({opacity: '1', y: '20px'}, 500, 'easeOutQuad').transition({opacity: 0, y: '0', delay: 2000});
        },
        pulsate: function(elem) {
           elem.transition({scale: 1.2}, 200).transition({scale: 1},200).transition({scale: 1.2}, 200).transition({scale: 1},200).transition({scale: 1.2}, 200).transition({scale: 1},200); ;         
        },
        point: function(elem) {
          elem
            .transition({
              x: '-2px',
              duration: '350', 
              easing: 'in-out'
          })
            .transition({
              x: '+4px', 
              duration: '350', 
              easing: 'in-out'
          })
          .transition({
              x: '-2px',
              duration: '350', 
              easing: 'in-out'
          })
          .transition({
              x: '+4px', 
              duration: '350', 
              easing: 'in-out'
           })
           .transition({
              x: '-2px',
              duration: '350', 
              easing: 'in-out'
          })
          .transition({
              x: '+4px', 
              duration: '350', 
              easing: 'in-out'
           });;
        }
      };
    
  }
  
        
    var animateUs = myjQ('[data-animation-name]');
    var animateOnce = function(elements) {
        elements.each(function(){
          var elem = myjQ(this);
          var delay = 0 || elem.data('animation-delay');
          var toCall = animations[elem.data('animation-name')].bind(null, elem);

          setTimeout(toCall, delay);
        });
    }
    
    animateOnce(animateUs);
    setInterval(function(){
      animateOnce(animateUs);
    }, 6000); 
    
})();



