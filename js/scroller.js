$(document).ready(function() {
    // Smooth scrolling to page sections
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        $(window).scrollTo(this.hash, {duration:500});
    });
});
