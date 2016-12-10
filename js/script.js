$("img").hide();

$("#show_pic").click(function () {
    $("img").toggle(1000);
});


$("img").hover(function () {
        $(this).animate({
            height: "340",
            width: "490"
        }, "fast");

    },
    function () {
        $(this).animate({
            height: "310",
            width: "460"
        }, "fast");
    });

$("img").click(function () {
    $(this).animate({
        height: "440",
        width: "590"
    }, "fast");
});