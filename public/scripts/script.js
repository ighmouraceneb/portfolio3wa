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
    $(".btn-skill").hover(function(){
        $(this).toggleClass('btn-skill-animate');
    });

});
