/*-----------------------------------------------------------------------------------

    Theme Name: Acowork - Coworking & Office Space HTML Template
    Description: Coworking & Office Space HTML Template
    Author: Website Layout
    Version: 1.0

    /* ----------------------------------

    JS Active Code Index
            
        01. Preloader
        02. Sticky Header
        03. Scroll To Top
        04. Parallax
        05. Video
        06. Copy to clipboard
        07. Resize function
        08. Wow animation - on scroll
        09. FullScreenHeight function
        10. ScreenFixedHeight function
        11. FullScreenHeight and screenHeight with resize function
        12. Sliders
        13. Tabs
        14. Current Year
        15. CountUp
        16. Countdown

    ---------------------------------- */    

(function($) {

    "use strict";

    var $window = $(window);

        /*------------------------------------
            01. Preloader
        --------------------------------------*/

        $('#preloader').fadeOut('normall', function() {
            $(this).remove();
        });

        /*------------------------------------
            02. Sticky Header
        --------------------------------------*/

        $window.on('scroll', function() {
            var scroll = $window.scrollTop();
            var logochange = $(".navbar-brand img");
            var logodefault = $(".navbar-brand.logodefault img");
            if (scroll <= 50) {
                $("header").removeClass("scrollHeader").addClass("fixedHeader");
                logochange.attr('src', 'img/logos/logo-inner.png');
                logodefault.attr('src', 'img/logos/logo.png');
            } 
            else {
                $("header").removeClass("fixedHeader").addClass("scrollHeader");
                logochange.attr('src', 'img/logos/logo.png');
                logodefault.attr('src', 'img/logos/logo.png');
            }
        });

        /*------------------------------------
            03. Scroll To Top
        --------------------------------------*/

        $window.on('scroll', function() {
            if ($(this).scrollTop() > 500) {
                $(".scroll-to-top").fadeIn(400);

            } else {
                $(".scroll-to-top").fadeOut(400);
            }
        });

        $(".scroll-to-top").on('click', function(event) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, 600);
        });

        /*------------------------------------
            04. Parallax
        --------------------------------------*/

        // sections background image from data background
        var pageSection = $(".parallax,.bg-img");
        pageSection.each(function(indx) {

            if ($(this).attr("data-background")) {
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
        });
        
        /*------------------------------------
            05. Video
        --------------------------------------*/

        $('.story-video').magnificPopup({
            delegate: '.video',
            type: 'iframe'
        });

        $('.popup-social-video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        $('.source-modal').magnificPopup({
            type: 'inline',
            mainClass: 'mfp-fade',
            removalDelay: 160
        });

        /*------------------------------------
            06. Copy to clipboard
        --------------------------------------*/

        if ($(".copy-clipboard").length !== 0) {
            new ClipboardJS('.copy-clipboard');
            $('.copy-clipboard').on('click', function() {
                var $this = $(this);
                var originalText = $this.text();
                $this.text('Copied');
                setTimeout(function() {
                    $this.text('Copy')
                    }, 2000);
            });
        };

        /*------------------------------------
            07. Resize function
        --------------------------------------*/

        $window.resize(function(event) {
            setTimeout(function() {
                SetResizeContent();
            }, 500);
            event.preventDefault();
        });

        /*------------------------------------
            08. Wow animation - on scroll
        --------------------------------------*/
        
        var wow = new WOW({
            boxClass: 'wow', // default
            animateClass: 'animated', // default
            offset: 0, // default
            mobile: false, // default
            live: true // default
        })
        wow.init();

        /*------------------------------------
            09. FullScreenHeight function
        --------------------------------------*/

        function fullScreenHeight() {
            var element = $(".full-screen");
            var $minheight = $window.height();
            element.css('min-height', $minheight);
        }

        /*------------------------------------
            10. ScreenFixedHeight function
        --------------------------------------*/

        function ScreenFixedHeight() {
            var $headerHeight = $("header").height();
            var element = $(".screen-height");
            var $screenheight = $window.height() - $headerHeight;
            element.css('height', $screenheight);
        }

        /*------------------------------------
            11. FullScreenHeight and screenHeight with resize function
        --------------------------------------*/        

        function SetResizeContent() {
            fullScreenHeight();
            ScreenFixedHeight();
        }

        SetResizeContent();

    
    // === when document ready === //
    $(document).ready(function() {

        /*------------------------------------
            12. Sliders
        --------------------------------------*/
        // testimonial-carousel1
        $('.testimonial-carousel1').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 1500,            
            nav: false,
            center: false,
            dots: true,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    dots: false,
                },
                767: {
                    items: 1,
                },
                992: {
                    items: 1,
                },
                1200: {
                    items: 1,
                }
            }
        });

        // testimonial-carousel2
        $('.testimonial-carousel2').owlCarousel({
            loop: true,
            responsiveClass: true,
            nav: false,
            navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
            dots: false,
            margin: 20,
            autoplay: false,
            thumbs: true,
            thumbsPrerendered: true,
            autoplayTimeout: 5000,
            smartSpeed:800,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 1
                }

            }
        });

        // testimonial-carousel3
        $('.testimonial-carousel3').owlCarousel({
            loop: true,
            responsiveClass: true,
            nav: false,
            navText: ["<span class='fa-solid fa-arrow-left-long'></span>", "<span class='fa-solid fa-arrow-right-long'></span>"],
            dots: false,
            margin: 0,
            center: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            items: 1,
            responsive: {
                992: {
                    dots: false,
                    nav: true
                }
            }
        });

        // testimonial-carousel4
        $('.testimonial-carousel4').owlCarousel({
            loop: false,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            nav: false,
            navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
            dots: true,
            center: true,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 1,
                    nav: true
                },
                1200: {
                    items: 1,
                    nav: true
                }
            }
        });

        // service-carousel1
        $('.service-carousel1').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 1500,            
            nav: true,
            navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
            center: false,
            dots: false,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    dots: false,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 3,
                },
                1200: {
                    items: 4,
                }
            }
        });

        // service-carousel2
        $('.service-carousel2').owlCarousel({
            center: false,
            items:2,
            loop:true,
            dots: true,
            nav: false,
            margin:30,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            responsive:{
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1200: {
                    items: 3,
                }
            }
        });

        // service-carousel3
        $('.service-carousel3').owlCarousel({
            center: false,
            items:2,
            loop:true,
            dots: false,
            nav: false,
            margin:30,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            responsive:{
                0: {
                    items: 1,
                },
                767: {
                    items: 2,
                },
                991: {
                    items: 2,
                },
                1200: {
                    items: 4,
                }
            }
        });

        // clients-carousel1
        $('.clients-carousel1').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 1500,            
            nav: false,
            center: false,
            dots: false,
            margin: 30,
            responsive: {
                0: {
                    items: 2,
                },
                575:{
                    items: 3,
                },
                767: {
                    items: 4,
                },
                992: {
                    items: 4,
                },
                1200: {
                    items: 5,
                }
            }
        });

        // clients-carousel2
        $('.clients-carousel2').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: false,
            autoplayTimeout: 3000,
            smartSpeed: 1500,            
            nav: false,
            center: false,
            dots: false,
            margin: 30,
            responsive: {
                0: {
                    items: 2,
                },
                575:{
                    items: 3,
                },
                767: {
                    items: 4,
                },
                992: {
                    items: 4,
                },
                1200: {
                    items: 5,
                }
            }
        });

        // workspace-carousel
        $('.workspace-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 1500,            
            nav: true,
            center: true,
            dots: false,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                767: {
                    items: 1,
                    margin: 20,
                    nav: false
                },
                992: {
                    items: 2,
                    margin: 20
                },
                1200: {
                    items: 2,
                }
            }
        });

        // workspace-details-carousel
        $('.workspace-details-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 1500,            
            nav: false,
            center: false,
            dots: false,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 1,
                    margin: 20
                },
                992: {
                    items: 2,
                    margin: 20
                },
                1200: {
                    items: 2,
                }
            }
        });

        // workspace-carousel2
        $('.workspace-carousel2').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 1500,            
            nav: false,
            dots: true,
            center:true,
            margin: 20,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 2
                }
            }
        });

        // workspace-carousel3
        $('.workspace-carousel3').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            smartSpeed: 1500,            
            nav: false,
            dots: false,
            center:true,
            margin: 20,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
        });

        // slider-fade3
        $('.slider-fade3').owlCarousel({
            items: 1,
            loop:true,
            dots: true,
            margin: 0,
            nav: false,
            navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
            autoplay: true,
            smartSpeed:1500,
            mouseDrag:false,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            responsive: {
                992: {
                    items: 1,
                    nav: true,
                    dots: false
                },
            }
        });

        // Sliderfade4
        $('.slider-fade4').owlCarousel({
            items: 1,
            loop:true,
            dots: true,
            margin: 0,
            nav: false,
            navText: ["<i class='fa-solid fa-arrow-left-long'></i>", "<i class='fa-solid fa-arrow-right-long'></i>"],
            autoplay:true,
            autoplayTimeout: 6000,
            smartSpeed:1500,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            responsive: {
                992: {
                    nav: true,
                    dots: false
                }
            }       
        });
        
        // Default owlCarousel
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop:true,
            dots: false,
            margin: 0,
            autoplay: true,
            smartSpeed:500
        });

        // Slider text animation
        var owl = $('.slider-fade3');
        owl.on('changed.owl.carousel', function(event) {
            var item = event.item.index - 2;     // Position of the current item
            $('span').removeClass('animated fadeInUp');
            $('h1').removeClass('animated fadeInUp');
            $('.butn').removeClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('span').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.butn').addClass('animated fadeInUp');
        });

        /*------------------------------------
            13. Tabs
        --------------------------------------*/

        //Horizontal Tab
        if ($(".horizontaltab").length !== 0) {
            $('.horizontaltab').easyResponsiveTabs({
                type: 'default', //Types: default, vertical, accordion
                width: 'auto', //auto or any width like 600px
                fit: true, // 100% fit in a container
                tabidentify: 'hor_1', // The tab groups identifier
                activate: function(event) { // Callback function if tab is switched
                    var $tab = $(this);
                    var $info = $('#nested-tabInfo');
                    var $name = $('span', $info);
                    $name.text($tab.text());
                    $info.show();
                }
            });
        }


        /*------------------------------------
            14. Current Year
        --------------------------------------*/

        $('.current-year').text(new Date().getFullYear());

        $('.card-style13').on({
            mouseenter: function () {
                $('.card-style13.active').removeClass('active');
                $(this).addClass('active');
            }
        });

        $('.card-style12 .card-body').on({
            mouseenter: function () {
                $('.card-style12 .card-body.active').removeClass('active');
                $(this).addClass('active');
            }
        });

        /*------------------------------------
            15. CountUp
        --------------------------------------*/

        $('.countup').counterUp({
            delay: 25,
            time: 2000
        });

        /*------------------------------------
            16. Countdown
        --------------------------------------*/

        // CountDown for coming soon page
        $(".countdown").countdown({
            date: "01 Feb 2027 00:01:00", //set your date and time. EX: 15 May 2014 12:00:00
            format: "on"
        });
      
    });

})(jQuery);