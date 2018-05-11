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
            e.originalEvent.dataTransfer.setData('plain/text', dragged.data('color'))
            target = $(`.dot.in-position*[data-color="${dragged.data('color')}"]`).first()
            console.log(target)
        })
        .on('dragend', (e) => {
            console.log('stopped')
            // console.log(targetPos)
            // targetPos.top += parentPos.top
            // targetPos.left += parentPos.left
            // console.log(targetPos)
            // console.log(e.pageY, e.pageX)
            // let mousePos = dragged.position()
            // console.log(target)
            // console.log({top: target[0].y, left: target[0].x})
            // console.log({top: e.clientY, left: e.clientX})
            // let yDiff = Math.abs(target.x - e.clientX)
            // let xDiff = Math.abs(target.y - e.clientY)
            // if(xDiff >= 50 && yDiff >= 50){
            //     target.removeClass('hidden')
            //     dragged.addClass('hidden')
            // }
        })

    $('.dot.in-position')
        .mouseover((e) => {
            console.log('asdasdas')
        })
        .on('dragenter', (e) => {
            console.log('hi')
            // if(dragged.data('color') === $(e.target).data('color'))
            //     console.log('success')
        })
})