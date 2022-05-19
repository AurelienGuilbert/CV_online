/*!
* Start Bootstrap - Resume v7.0.4 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // EFFECT - Appear on scroll 
    // skills 
    var div = $("#skills");
    var pos = div.position();

    $(window).scroll(function () {
    var windowpos = $(window).scrollTop();
    
    if (windowpos >= (pos.top - 650)) {
        div.addClass("AfterScroll");
    }
    else if(windowpos < (pos.top - 650)){
        div.removeClass("AfterScroll");
    }
    });
    
    // experience 
    var div2 = $("#experience");
    var pos2 = div2.position();

    $(window).scroll(function () {
    var windowpos = $(window).scrollTop();

    if (windowpos >= (pos2.top - 650)) {
        div2.addClass("AfterScroll");
    }
    else if(windowpos < (pos2.top - 650)){
        div2.removeClass("AfterScroll");
    }
    });

    // education 
    var div3 = $("#education");
    var pos3 = div3.position();

    $(window).scroll(function () {
    var windowpos = $(window).scrollTop();

    if (windowpos >= (pos3.top - 650)) {
        div3.addClass("AfterScroll");
    }
    else if(windowpos < (pos3.top - 650)){
        div3.removeClass("AfterScroll");
    }
    });

    // interests 
    var div4 = $("#interests");
    var pos4 = div4.position();

    $(window).scroll(function () {
    var windowpos = $(window).scrollTop();

    if (windowpos >= (pos4.top - 650)) {
        div4.addClass("AfterScroll");
    }
    else if(windowpos < (pos4.top - 650)){
        div4.removeClass("AfterScroll");
    }
    });


});
