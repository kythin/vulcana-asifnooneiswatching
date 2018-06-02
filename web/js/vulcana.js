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
    var myDiv = $(".scrolling-wrapper");
    var scrollto = myDiv.offset().left + (myDiv.width() / 2);
    myDiv.animate({ scrollTop:  scrollto});
});