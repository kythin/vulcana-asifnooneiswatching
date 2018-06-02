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
    Array.prototype.forEach.call(items, function(elements, index) {
        console.log(elements.id, isInViewport(elements));
    });


}