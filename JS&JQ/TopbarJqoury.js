$(document).ready(function () {
    // Initially show home section
    $('#home-section').show();
    $('#home-link').addClass('active');

    // Handle link clicks
    $('.top-bar a').click(function () {
        // Remove 'active' class from all links
        $('.top-bar a').removeClass('active');
        
        // Add 'active' class to clicked link
        $(this).addClass('active');
        
        // Hide all content sections
        $('.content-section').hide();
        
        // Show home section on home link click
        if ($(this).attr('id') === 'home-link') {
            $('#home-section').show();
        }
    });
});

// Responsive Top Navigation Toggle
function toggleNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "top-bar") {
        x.className += " responsive";
    } else {
        x.className = "top-bar";
    }
}
