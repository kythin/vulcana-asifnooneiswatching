function isInViewport(element){
    if(element.offsetTop<window.innerHeight &&
        element.offsetTop>-element.offsetHeight
        && element.offsetLeft>-element.offsetWidth
        && element.offsetLeft<window.innerWidth){
        return true;
    } else {
        return false;
    }
}



function test(){

    var items = document.querySelectorAll('.card');
    Array.prototype.forEach.call(items, function(element, index) {
        if (isInViewport(element)) console.log(element.id, isInViewport(element));
    });


}



$(document).ready(function () {

    $('.scrolling-wrapper').each(function () {
        var div$ = $(this);

        console.log('width', div$[0].scrollWidth);

        var scrollto = (div$[0].scrollWidth / 4); // /2 gets ut to the second slide immediately but we don't want that.

        div$.animate({ scrollLeft:  scrollto});

        //var scrollto = div$.offset().left - (div$.scrollWidth / 2);
        //div$.animate({ scrollLeft:  scrollto});
        //console.log(scrollto);

    });

});