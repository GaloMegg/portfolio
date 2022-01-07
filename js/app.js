$("#home").on("click", ScrollDownHome)
function ScrollDownHome(e) {
    e.preventDefault()
    $("html , body").animate({
        scrollTop: $("#homeScroll").offset().top
    }, 1000)
}

$("#aboutMe").on("click", ScrollDownAboutMe)
function ScrollDownAboutMe(e) {
    e.preventDefault()
    $("html , body").animate({
        scrollTop: $("#aboutMeScroll").offset().top
    }, 1000)
}

$("#proyects").on("click", ScrollDownProyects)
function ScrollDownProyects(e) {
    e.preventDefault()
    $("html , body").animate({
        scrollTop: $("#proyectsScroll").offset().top
    }, 1000)
}

$("#contact").on("click", ScrollDownContact)
function ScrollDownContact(e) {
    e.preventDefault()
    $("html , body").animate({
        scrollTop: $("#contactScroll").offset().top
    }, 1000)
}


