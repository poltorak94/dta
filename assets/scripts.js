$(document).ready(function() {
    $('.input-tel').mask('+7 (999) 999-99-99');
    let workSlider = new Swiper(".works__slider", {
        loop: true,
        spaceBetween: 25,
        slidesPerView: 3,
        navigation: {
            nextEl: ".works__button-next",
            prevEl: ".works__button-prev",
        },
    });
    let clientSider = new Swiper(".clients__slider", {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 4,
        navigation: {
            nextEl: ".clients__button-next",
            prevEl: ".clients__button-prev",
        },
    });
    let headerHeight = $('.header').height();
    if ($(window).scrollTop() > headerHeight) {
        $('.header').addClass('header--active')
    }
    $(window).on('scroll', function() {
        let windowTop = $(this).scrollTop();
        if (windowTop > headerHeight + 50) {
            $('.header').addClass('header--active')
        } else {
            $('.header').removeClass('header--active')
        }
    });
    $('.faq__header').on('click', function() {
        let container = $(this).closest('.faq__item');
        container.find('.faq__body').slideToggle()
    })
    $("#periodic-timer_period_minutes").syotimer({
        date: new Date(),
        lang: "rus",
        layout: "dhms",
        doubleNumbers: true,
        periodic: true,
        periodInterval: 30,
        periodUnit: "d",
    });
});


// document.addEventListener("DOMContentLoaded", function() {
//     $('.swiper-container').each(function() {
//         let sliderContainer = $(this).closest('.swiper-slider');
//         let next = sliderContainer.find('.swiper-slider__button--next')[0];
//         let prev = sliderContainer.find('.swiper-slider__button--prev')[0];
//         let pag = sliderContainer.find('.swiper-slider__pagination')[0];
//         let slider = new Swiper($(this)[0], {
//             loop: false,
//             spaceBetween: 20,
//             slidesPerView: 4,
//             navigation: {
//                 nextEl: next,
//                 prevEl: prev,
//             },
//             breakpoints: {
//                 375: {
//                     slidesPerView: 1,
//                     spaceBetween: 20,
//                 },
//                 640: {
//                     slidesPerView: 2,
//                     spaceBetween: 20,
//                 },
//                 768: {
//                     slidesPerView: 2,
//                     spaceBetween: 20,
//                 },
//                 990: {
//                     slidesPerView: 3,
//                     spaceBetween: 20,
//                 },
//                 1200: {
//                     slidesPerView: 4,
//                     spaceBetween: 20,
//                 }
//             }
//         });
//     });

// });