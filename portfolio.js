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

$('.my-tooltip').on("mouseleave",function() {
    for(i = 0; i < tooltipList.length; i++){
        tooltipList[i].hide();
    }
});

/*
$(document).ready(function(){
    $('[data-toggle="tooltip"]').click(function () {
       $('[data-toggle="tooltip"]').tooltip("hide");

    });

    for(i = 0; i < tooltipList.length; i++){
        tooltipList.addEventListener('focus', (e) => {
            e.target.tooltipList[i].disable();
        });
    }
});
*/
