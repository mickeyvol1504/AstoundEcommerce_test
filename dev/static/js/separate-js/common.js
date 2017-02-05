$(document).ready(function () {

    var $document = $(document);

    /* Events listener*/

    // Open popup
    $document.on('click', '.product__img', function () {
        showPopup($('.popup-wrapper'));
    });

    // Close popup clicking on close button
    $document.on('click', '.popup__close', function () {
        hidePopup($('.popup-wrapper'));
    });

    // Close popup clicking on popup-overlay
    $document.on('click', '.popup-overlay', function () {
        hidePopup($(this).closest('.popup-wrapper'));
    });

    // Close popup on pressing "Esc" button
    $document.on('keydown', function (e) {
        if(e.which === 27 && $('.popup_open').length) {
            hidePopup($('.popup-wrapper'));
        }
    });

    // Open/close tooltip with social icons on desktop layout
    $document.on('click', '.popup__social-hint', function () {
       $(this).toggleClass('popup__social-hint_open')
              .next().slideToggle();
    });
});


/* Functions */

/**
 *
 * @param $popupWrapper
 */
function showPopup($popupWrapper) {
    $popupWrapper.fadeIn(400, function(){
        $popupWrapper.find('.popup').addClass('popup_open');
    });
}
/**
 *
 * @param $popupWrapper
 */
function hidePopup($popupWrapper) {
    $popupWrapper.find('.popup').removeClass('popup_open');
    $popupWrapper.fadeOut(400);
}

