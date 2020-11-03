// selection
function selection1(){
    $("#result").text($("h3").text());
}
function selection2(){
    $("#result").text($("h5").text());
}
function selection3(){
    $("#result").text($("#selection-text1").text());
}
function selection4(){
    $("#result").text($(".selection-text2").text());
}


// animation
function scrollToSelection(){
    $('html, body').animate({
        scrollTop: $("#selection").offset().top
    }, 500);
}

function scrollToParent(){
    $('html, body').animate({
        scrollTop: $("#parent").offset().top
    }, 500);
}

function scrollToAnimation(){
    $('html, body').animate({
        scrollTop: $("#animation").offset().top
    }, 500);
}

function scrollToAJAX(){
    $('html, body').animate({
        scrollTop: $("#ajax").offset().top
    }, 500);
}

function animation1(){
    $("#animation-box").animate({height: "500px"});
    $("#animation-box").animate({height: "250px"});
}

function animation2(){
    $("#animation-box2").fadeIn("slow");
    $("#animation-box2").fadeOut("slow");
}

// parent and child
function parent(){
    $("#child").parent().css("background-color", "white");
}

function child(){
    $("#parent2").children().css("background-color", "white");
}


// AJAX
function ajax(){
    $.get("https://api.coindesk.com/v1/bpi/currentprice.json", function(data){
        let temp = JSON.parse(data);
        $(".btc").text("1 BTC = $" + temp["bpi"]["USD"]["rate"]);
    });
}