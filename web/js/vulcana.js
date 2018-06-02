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

    var items = document.querySelectorAll('.slide-item');
    Array.prototype.forEach.call(items, function(elements, index) {
        console.log(elements, isInViewport(elements);

    });


}