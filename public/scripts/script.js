$('document').ready(function()
 {

    $(".integration").click(function () {
        $(".presentation-integration").slideToggle();
    });
    $(".developpement").click(function () {
        $(".presentation-developpement").slideToggle();
    });
    $(".outil").click(function () {
        $(".presentation-outils").slideToggle();
    });

});