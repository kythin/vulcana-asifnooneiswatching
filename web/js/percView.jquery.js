/*jslint browser: true*/
/*global jQuery, window, document*/
(function ($) {
    'use strict';
    var results = {};

    function display() {
        var resultString = '';

        $.each(results, function (key) {
            if (Math.round(results[key]) > 0) {
                resultString += ' (' + key + ': ' + Math.round(results[key]) + '%) ';
            }
        });

        $('#debug').text(resultString);
    }

    function calculateVisibilityForDiv(div$) {
        var windowHeight = $(window).height(),
            docScroll = $(document).scrollTop(),
            divPosition = div$.offset().top,
            divHeight = div$.height(),
            hiddenBefore = docScroll - divPosition,
            hiddenAfter = (divPosition + divHeight) - (docScroll + windowHeight);

        //TODO: This maths only covers horizontal %, which is why all slides on the same level are 100% at the same time.

        if ((docScroll > divPosition + divHeight) || (divPosition > docScroll + windowHeight)) {
            return 0;
        } else {
            var result = 100;

            if (hiddenBefore > 0) {
                result -= (hiddenBefore * 100) / divHeight;
            }

            if (hiddenAfter > 0) {
                result -= (hiddenAfter * 100) / divHeight;
            }

            return result;
        }
    }

    function calculateAndDisplayForAllDivs() {
        $('.card').each(function () {
            var div$ = $(this);
            results[div$.attr('id')] = calculateVisibilityForDiv(div$);
        });

        display();
    }

    $(document).scroll(function () {
        calculateAndDisplayForAllDivs();
    });

    $(document).ready(function () {
        calculateAndDisplayForAllDivs();
    });
}(jQuery));