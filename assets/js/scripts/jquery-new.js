jQuery(document).ready(function () {

    // Chat bot
    jQuery(".icon-chatbot").on('click', function () {
        if (jQuery(".chatbot-container").css('opacity') === '0') {
            jQuery('.chatbot-container').css('animation', 'show 0.5s ease-in-out forwards');
        } else {
            jQuery('.chatbot-container').css({ animation: 'hide 0.5s ease-in-out forwards' });
        }
    });
    // Close Chat bot
    jQuery(".close-chat").on('click', function () {
        jQuery('.chatbot-container').css({ animation: 'hide 0.5s ease-in-out forwards' });
    });


});