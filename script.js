$(document).ready(() => {
    var mainImage = $("img:first-child").fadeIn(500).show();
    var lastImage = $("img:last-child");
    var length = $("img").length;
    var count = 0;
    
    $(".left-btn").click(function() {
        if(count === 0) {
            mainImage.hide();
            mainImage = $(lastImage).fadeIn(500).show();
            count = length -1;
        } else {
            mainImage.hide();
            mainImage = $(mainImage).prev().fadeIn(500).show(); 
            count = count - 1;   
        }
             
    })

    $(".right-btn").click(function() {
        if(count < length -1) {
            mainImage.hide();
            mainImage = $(mainImage).next().fadeIn(500).show();
            count = count + 1;
        } else {
            mainImage.hide()
            mainImage = $("img:first-child").fadeIn(500).show();
            count = 0;
        }
    })


})