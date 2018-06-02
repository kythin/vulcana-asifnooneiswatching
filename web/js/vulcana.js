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
    alert(isInViewport(document.getElementById("elem"))?"Yes":"No");
}