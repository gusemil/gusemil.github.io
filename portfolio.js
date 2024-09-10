//Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$('.navbar-toggler').click(function() {
    if($('.my-footer').is(":hidden")){
        $('.my-footer').show();
    }
    else{
        $('.my-footer').hide();
    }
});

$('.nav-link').click(function() {
    $('.navbar-collapse').collapse('hide');
    $('.my-footer').show();
});