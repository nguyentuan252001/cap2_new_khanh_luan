jQuery(document).ready(function () {
    jQuery(".btn-menu").on('click', function () {
        jQuery(".modal-menu").css('animation', 'downtop 0.5s ease-in-out forwards')
        jQuery(".modal-menu").css('display', 'block')
        jQuery(".overlay").css('display', 'block');
    });

    jQuery(".overlay").on('click', function () {
        jQuery(".modal-menu").css('animation', 'topdown 0.5s ease-in-out forwards')
        jQuery(this).css('display', 'none');
    });
    jQuery(".cls").on('click', function () {
        jQuery(".modal-menu").css('animation', 'topdown 0.5s ease-in-out forwards')
        jQuery(".overlay").css('display', 'none');
    });
});