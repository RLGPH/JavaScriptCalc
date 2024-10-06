$(document).ready(function () {
    $('#home-section').show();
    $('#home-link').addClass('active');

    $('.top-bar a').click(function () {
        $('.top-bar a').removeClass('active');

        $(this).addClass('active');

        $('.content-section').hide();

        if ($(this).attr('id') === 'home-link') {
            $('#home-section').show();
        }
    });
});

function toggleNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "top-bar") {
        x.className += " responsive";
    } else {
        x.className = "top-bar";
    }
}
