var animateUs = (function() {
  myjQ = jQuery.noConflict(true);
  var animations;
  if(!Modernizr.csstransitions) {
    animations = {
         float: function(elem) {
          animations.show(elem,500);

           animations.moveUp(elem, 500,
                             animations.moveDown(elem, 400, 
                                                 animations.moveUp(elem, 300,function(){return true;})
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
        grow: function(elem, duration, oncomplete) {
           elem.animate({
            height: '100px',
            width: '100px',
            opacity: 1,
          }, {
            duration: duration,
            easing: 'easeOutBack',
            oncomplete: oncomplete,
            queue: false
          });
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
         float: function(elem) {
           elem.transition({opacity: '1', y:'-=10'}, 500, 'easeOutQuad').transition({opacity: '1', y:'+=10'}, 500, 'easeOutQuad');
        },
        show: function(elem) {
          elem.transition({opacity: '1'}, 700); 
        },
        grow: function(elem) {
          elem.transition({opacity: '1', width: '100px', height:'100px'}, 700, 'easeInOutBack');
        }, 
        point: function(elem) {
          elem
            .transition({
              right: '-7px',
              duration: '500', 
              easing: 'linear'
          })
            .transition({
              right: '-2px', 
              duration: '500', 
              easing: 'linear'
            });
        }
      };
    
  }
  
   
    var animateUs = myjQ('[data-animation-name]');
    
    animateUs.each(function(){
      var elem = myjQ(this);
      var delay = 0 || elem.data('animation-delay');
      var loopDelay = 0 || elem.data('loop');
      var toCall = animations[elem.data('animation-name')].bind(null, elem);
      
      setTimeout(toCall, delay);
      
      if (elem.data('loop')) {
       setInterval(function(){
          setTimeout(toCall, delay);
        }, elem.data('loop')); 
      }
    });


})();



