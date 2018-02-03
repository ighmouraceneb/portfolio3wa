$('document').ready(function()
 {
/**
* @description Sytème d'accordéon : développer/réduire le contenu en cliquant * sur les en-têtes + changement de l'affichage des en-tête au développement et * au réduction
* */  
    $(".skill-title").click(function(){

        $(this).next().slideToggle();
        $(this).toggleClass('skill-title-color');
    });
/**
* @description Une animation au survole d'un botton
* */ 
    $(".btn-animate").hover(function(){
        $(this).toggleClass('btn-skill-animate');
    });


        $('.projet-description').on("mousemove", function(e) {
            var offset = $(this).offset();
            var width = $(this).width();
            var height = $(this).height();
  
            var X = (e.pageX - offset.left) / width;
            var Y = (e.pageY - offset.top) / height;

            if(X < 0.5 & Y < 0.5 ){
                $(this).css({
                    "transform": "perspective(1500px) rotateX(-10deg) rotateY(10deg) scale3d(1,1,1)",
                    "transition": "800ms cubic-bezier(0.03,0.98,0.52,1)",
                    "border": "0.3rem solid #75a29f"
            });
            
                
            }else if(X > 0.5 & Y > 0.5 ){
                $(this).css({
               'transform':'perspective(1500px) rotateX(-10deg) rotateY(-10deg) scale3d(1,1,1)',
                "transition": "800ms cubic-bezier(0.03,0.98,0.52,1)",
                    "border": "0.3rem solid #75a29f"
            });
            
                
            }else if(X > 0.5 & Y < 0.5 ){
                $(this).css({
               'transform':'perspective(1500px) rotateX(10deg) rotateY(-10deg) scale3d(1,1,1)',
                "transition": "800ms cubic-bezier(0.03,0.98,0.52,1)",
                    "border": "0.3rem solid #75a29f"
            });
            
                
            }else if(X < 0.5 & Y > 0.5 ){
                $(this).css({
               'transform':'perspective(1500px) rotateX(10deg) rotateY(10deg) scale3d(1,1,1)',
               "transition": "800ms cubic-bezier(0.03,0.98,0.52,1)",
                "border": "0.3rem solid #75a29f"
            });
             
                
            }
        });

$('.projet-description').on("mouseout", function(e) {
    $(this).css({
               "transition": "1000ms cubic-bezier(0.03,0.98,0.52,1)",
               'transform':'perspective(1500px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)',
                "border": "0"
            });
    $(this).siblings().removeClass('info-hover');
});

$('.projet-description').mouseenter(function(e){
                            
            $(this).siblings().addClass('info-hover');
});
    
    
const ICON = $(".devicon");
ICON.hover(function(){
    $(this).toggleClass('colored');
    const TOOLTIP = $(this).attr('tooltip');
    
    if(TOOLTIP == "") return false;
    
    $(this).append('<span class="infobulle"></span>');
    
    const INFOBULLE = $(this).children('.infobulle');
    INFOBULLE.append(TOOLTIP);
    
    const TOP = $(this).offset().top-$(this).height()/2;
    const LEFT = $(this).offset().left+$(this).width()/2-INFOBULLE.width();
    $(this).css({
        "font-size":"2rem",
        "transition": "0.5s",
    })
    INFOBULLE.css({
       top: TOP,
       left: LEFT,

    });
});
    
ICON.mouseout(function(){

    $(this).children('.infobulle').remove();
        $(this).css({
        "font-size":"1.5rem",
        "transition": "0.5s",
    })
});  
 const FAB = $(".fab");
FAB.hover(function(){
    
    const TOOLTIP = $(this).attr('tooltip');
    
    if(TOOLTIP == "") return false;
    
    $(this).append('<span class="infobulle"></span>');
    
    const INFOBULLE = $(this).children('.infobulle');
    INFOBULLE.append(TOOLTIP);
    
    const TOP = $(this).offset().top-$(this).height()/2;
    const LEFT = $(this).offset().left+$(this).width()/2-INFOBULLE.width();
    $(this).css({
        "font-size":"3rem",
        "transition": "0.5s",
    })
    INFOBULLE.css({
       top: TOP,
       left: LEFT,

    });
});
    
FAB.mouseout(function(){

    $(this).children('.infobulle').remove();
        $(this).css({
        "font-size":"2rem",
        "transition": "0.5s",
    })
});  
 
    
    /**
* @description change form style to focus and animate the label
* */

$('.contact').find('.form').focus(function() {
    

  $(this).parent('.input-block').addClass('focus');

  $(this).parent().find('label').animate({
    'top': '10px',
    'fontSize': '12px'
  }, 300);
});

/**
* @description change form style when it loses focus and animate the label
*/


$('.contact').find('.form').blur(function() {
    

  if ($(this).val().length == 0) {

    $(this).parent('.input-block').removeClass('focus');
      
 
    $(this).parent().find('label').animate({
      'top': '25px',
      'fontSize': '14px'
    }, 300);
  }
});
    
});