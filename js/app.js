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
        scrollTop: $("#aboutMeScroll").
            offset().top
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

window.addEventListener("mousemove", function (e) {
    $(".cursor").css({
        left: (e.clientX - 8),
        top: (e.clientY - 8)
    })
})

document.addEventListener("mousedown", function (e) {
    $(".cursor__element").addClass("cursor__clicked")
})
document.addEventListener("mouseup", function (e) {
    $(".cursor__element").removeClass("cursor__clicked")
})
document.addEventListener("mouseenter", function (e) {
    $(".cursor").removeClass("hidden")
})
document.addEventListener("mouseleave", function (e) {
    $(".cursor").addClass("hidden")
})

document.querySelectorAll("a, button").forEach((e) => {
    e.addEventListener("mouseover", () => {
        $(`.cursor__element`).addClass( "hoverlinked")
    })
    e.addEventListener("mouseout", () => {
        $(`.cursor__element`).removeClass( "hoverlinked")
    })
})