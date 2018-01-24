$('document').ready(function()
 {

    $(".integration").click(function () {
        $(".presentation-integration").slideToggle();
        $(".presentation-developpement").hide('slow');
        $(".presentation-outils").hide('slow');
        $(this).toggleClass('skill-title-color');
        $(".developpement").removeClass('skill-title-color');
        $(".outil").removeClass('skill-title-color');
    });
    $(".developpement").click(function () {
        $(".presentation-developpement").slideToggle();
        $(".presentation-integration").hide('slow');
        $(".presentation-outils").hide('slow');
        $(this).toggleClass('skill-title-color');
        $(".integration").removeClass('skill-title-color');
        $(".outil").removeClass('skill-title-color');
    });
    $(".outil").click(function () {
        $(".presentation-outils").slideToggle();
        $(".presentation-integration").hide('slow');
        $(".presentation-developpement").hide('slow');
        $(this).toggleClass('skill-title-color');
         $(".integration").removeClass('skill-title-color');
        $(".developpement").removeClass('skill-title-color');
    });
    

    $(".btn-skill").hover(function(){
        $(this).toggleClass('btn-skill-animate');
    });

});
