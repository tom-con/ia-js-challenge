$(document).ready(() => {

    let dragged = null
    let blackCount = 1
    let nodes = {
        red: false,
        blue: false,
        black1: false,
        black2: false,
        green: false,
    }
    // Return the dots to their starting
    // states
    function resetInitialState(){
        $('.dot.in-position').addClass('hidden')
        $('.dot.in-menu').removeClass('hidden')
        nodes = {
            red: false,
            blue: false,
            black1: false,
            black2: false,
            green: false,
        }
    }

    function checkWin(){
        let allDone = Object.values(nodes).reduce((acc, n) => acc && n, true)
        if(allDone){
            console.log('won')
        } else {
            console.log('did not yet win')
        }
    }

    // Prevent default behaviors (these)
    // cancel the abiltiy for an item to
    // be 'droppable'.
    function preventDropDefault(e){
        if($(dragged).data('color') === $(e.target).data('color'))
            e.preventDefault()
    }

    // Chained methods to control dot behavior
    // 1. Set the dot that is being dragged
    // 2. Un-set a dot when a drag finishes
    $('.dot.in-menu')
        .on('dragstart', (e) => {
            dragged = $(e.target)
        })
        .on('dragend', (e) => {
            dragged = null
        })

    // Chained methods to control drop-zone
    // behavior
    // 1. Check if the color is the correct
    //    color before allowing drop
    // 2. Toggle classes between the 'in-
    //    position' and 'in-menu' dots.
    // Note: I kept the dragenter event
    // in case I want to improve the UX of
    // hinting at a (un)successful drop
    $('.dot.in-position')
        .on('dragenter', (e) => {})
        .on('dragover', preventDropDefault)
        .on('dragleave', preventDropDefault)
        .on('drop', (e) => {
            let color = $(dragged).data('color')
            if(color === $(e.target).data('color')){
                if(color === 'black'){
                    color += blackCount
                    blackCount+=1
                }
                $(e.target).removeClass('hidden')
                $(dragged).addClass('hidden')
                nodes[color] = true
            }
        })

    $('#reset').click(resetInitialState)
})