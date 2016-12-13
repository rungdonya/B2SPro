/**
 * Created by Donya on 12/13/2016 AD.
 */
$(document).ready(function(){
    $(".pop").hide();
    $(".prw").hide();
    $(".timepage").hide();
    $(".mySidenav").hide();
});

$("#homepage").click(function(){
    $(".tammy").show();
    $(".mySidenav").hide();
    $(".pop").hide();
    $(".prw").hide();
});

$("#event").click(function(){
        $(".tammy").hide();
        $(".mySidenav").show();
        $(".pop").show();
        $(".prw").hide();
    }
);

$('#events').click(function(){
    $('#searchBook').hide();
    $("#includedContent1").show();
    $("#h").hide();
    $(".tammy").hide();
    $(".mySidenav").show();
    $(".pop").show();
    $(".prw").hide();
});


$("#plan").click(function(){
    $(".tammy").hide();
    $(".mySidenav").hide();
    $(".pop").hide();
    $(".prw").show();
    $(".accordion").show();
    $(".locationpage").hide();
});

$('#plans').click(function(){
    $('#searchBook').hide();
    $("#includedContent1").show();
    $("#h").hide();
    $(".tammy").hide();
    $(".mySidenav").hide();
    $(".pop").hide();
    $(".prw").show();
    $(".accordion").show();
    $(".locationpage").hide();
});

$("#location").click(function(){
    $(".accordion").hide();
    $(".locationpage").show();
});



$("#where2").click(function(){
    $(".locationpage").hide();
    $(".accordion").show();
});

//pop
var i =1;


function add() {
    i=i+1;
}
document.getElementById("month").innerHTML = "DECEMBER";

function w3_open1() {
    document.getElementById("mySidenav").style.display = "block";
}

function w3_close1() {
    document.getElementById("mySidenav").style.display = "none";
}

// Script to open and close sidenav
function w3_open() {
    document.getElementById("mySidenav").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidenav").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}


// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}
