jQuery(document).ready(function () {
    console.log(1);
    jQuery(".btn-menu").on('click', function () {
        jQuery(".modal-menu").css('animation', 'downtop 0.5s ease-in-out forwards')
        jQuery(".modal-menu").css('display', 'block')
        jQuery(".overlay").css('display', 'block');
    });

    jQuery(".input-baidang").on('click', function () {
        jQuery(".modal-baidang").css('animation', 'downtop 0.5s ease-in-out forwards')
        jQuery(".modal-baidang").css('display', 'block')
        jQuery(".overlay").css('display', 'block');
    });

    jQuery(".overlay").on('click', function () {
        jQuery(".modal-menu").css('animation', 'topdown 0.5s ease-in-out forwards')
        jQuery(".modal-baidang").css('animation', 'topdown 0.5s ease-in-out forwards')
        jQuery(".modal-congthuc").css('animation', 'topdown 0.5s ease-in-out forwards')
        jQuery(this).css('display', 'none');
    });
    jQuery(".cls").on('click', function () {
        jQuery(".modal-menu").css('animation', 'topdown 0.5s ease-in-out forwards')
        jQuery(".modal-baidang").css('animation', 'topdown 0.5s ease-in-out forwards')
        jQuery(".modal-congthuc").css('animation', 'topdown 0.5s ease-in-out forwards')
        jQuery(".overlay").css('display', 'none');
    });

    jQuery('.btn-food').on('click', function () {
        jQuery('.btn-food').removeClass('active');
        jQuery(this).addClass('active');
    });

    jQuery('.carousel-food').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        rows: 2,
        arrow: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    var items = jQuery(".containers .list-menu ul li");
    var numItems = items.length;
    var perPage = 5;

    items.slice(perPage).hide();

    // jQuery("#pagination-container").pagination({
    //     items: numItems,
    //     itemsOnPage: perPage,
    //     cssStyle: "light-theme",

    //     onPageClick: function (pageNumber) {
    //         var showFrom = perPage * (pageNumber - 1);
    //         var showTo = showFrom + perPage;

    //         items.hide()
    //             .slice(showFrom, showTo).show();
    //     }
    // });

    jQuery(".avatar").click(function () {
        jQuery(".profile").toggle();
        jQuery(".profile").css('animation', 'show 0.5s ease-in-out forwards')
    });
    // Show more content


    jQuery(window).on("scroll", function () {
        if (jQuery(window).scrollTop() > 50) {
            jQuery(".navbar").addClass("active-header");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            jQuery(".navbar").removeClass("active-header");
        }
    });

    jQuery('.avatar').click(function () {
        jQuery('.drop-down-menu').slideToggle();
    });


});