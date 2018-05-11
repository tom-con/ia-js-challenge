$(document).ready(() => {

    let dragging = false
    let score = 0

    function renderInitialState(){
        $('.dot.in-position').hide()
        $('.dot.in-menu').show()
    }
    // This series of methods controls the behavior
    // of dots when they are clicked/dragged. This
    // is needed to:
    // 1. Ensure the correct dot is interacted with
    // 2. That the user is actively dragging and not
    //    clicking.
    let dragging = false
    $('.dot')
        .mousedown(() => dragging = false )
        .mousemove((e) => {
            let thisDot = $(e.target)
            console.log(thisDot.position())
            dragging = true 
        })
        .mouseup(() => dragging = false)

})