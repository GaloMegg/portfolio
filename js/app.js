
$("#aboutMe").on("click", ScrollDown)

function ScrollDown(e) {
    e.preventDefault()
    $("html , body").animate({
        scrollTop: $("#aboutMeScroll").offset().top
    }, 1000)
}