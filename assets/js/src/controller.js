$(document).ready(() => {

    let dragging = false
    let dragged = null
    let target = null
    let score = 0

    function renderInitialState(){
        $('.dot.in-position').hide()
        $('.dot.in-menu').show()
    }

    // This series of chained methods controls the behavior
    // of dots when they are clicked/dragged. This is
    // needed to:
    // 1. Ensure the correct dot is interacted with
    // 2. That the user is actively dragging and not
    //    clicking.

    $('.dot.in-menu')
        .on('dragstart', (e) => {
            dragged = $(e.target)
        })
        .on('dragend', (e) => {
            dragged = null
        })

    $('.dot.in-position')
        .on('dragenter', (e) => {
            if($(dragged).data('color') === $(e.target).data('color'))
                e.preventDefault()
        })
        .on('dragover', (e) => {
            if($(dragged).data('color') === $(e.target).data('color'))
                e.preventDefault()
        })
        .on('dragleave', (e) => {
            
        })
        .on('drop', (e) => {
            if($(dragged).data('color') === $(e.target).data('color')){
                console.log('here')
                $(e.target).removeClass('hidden')
                $(dragged).addClass('hidden')
            }

        })
})