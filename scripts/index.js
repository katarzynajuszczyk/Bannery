var animateUs = (function() {
  myjQ = jQuery.noConflict(true);
  var animations;
  if(!Modernizr.csstransitions) {
    animations = {
         floatHide: function(elem) {
          animations.show(elem, 600);
          animations.moveUp(elem, 500,
                             animations.moveDown(elem, 400, 
                                                 animations.moveUp(elem, 300, elem.delay(2000).hide())
                             )
           );
         },
         moveUp: function(elem, duration, oncomplete) {
          elem.animate({
            top: '-=3',
          }, {
            duration: duration,
            easing: 'easeOutBack',
            complete: oncomplete
         });
        },
        moveDown: function(elem, duration, oncomplete) {
          elem.animate({
            top: '+=6'
          }, {
            duration: duration,
            easing: 'easeOutBack',
            complete: oncomplete
          });
        },
        show: function(elem,duration) {
          elem.animate({
            opacity:1,
          }, {
            duration: duration,
            easing: 'easeOutBack',
            queue: false
          });  
        },
        pulsate: function(elem) {
            elem.animate({opacity: '0'},{duration: 200})
                .animate({opacity: '1'},{duration: 200})
                .animate({opacity: '0'},{duration: 200})
                .animate({opacity: '1'},{duration: 200})
                .animate({opacity: '0'},{duration: 200})
                .animate({opacity: '1'},{duration: 200});         
        },
        point: function(elem) {
           elem.animate({
             right: '-7px'
           }, {
             easing: 'easeInCirc',
             duration: 600,
             complete: function(){
               animations.pointRight(elem);
             }
          }); 
        },
        pointRight: function(elem) {
           elem.animate({
              right: '-2px'
            }, {
               easing: 'easeInCirc',
               complete: function(){
                 animations.point(elem);
               } 
          }); 
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



