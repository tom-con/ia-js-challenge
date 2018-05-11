$(document).ready(() => {

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