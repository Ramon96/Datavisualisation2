
$(document).ready(function(){
    setSections();
});


function setSections(){
    $('section').each(function(){
        var boys = $(this).attr("data-percentage");
        var girls = 100 - boys;
        $(this).children('.boys').css("width", boys + "%");
        $(this).children('.girls').css("width", girls + "%");

    });
}

