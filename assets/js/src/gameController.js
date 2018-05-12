$(document).ready(() => {

    let dragged = null
    let blackCount = 1

    // The nodes data structure is used to keep
    // track of wins. Ideally this would be the
    // entire game state so that the UI is an
    // exact reflection of state, however the
    // state for this application is maintained
    // within the DOM and the javascript, which
    // is not exactly prefered.
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
        blackCount = 1
        dragged = null
    }

    function checkWin(){
        let allDone = Object.values(nodes).reduce((acc, n) => acc && n, true)
        // Handle win logic here. Perhaps propagate
        // to a specific UI condition.
        if(allDone){
            console.log('won')
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
            let color = $(dragged).data('color')
            $('.red-bg').addClass('add-opacity')
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
    // 3. On successful drop, checks if
    //    win conditions are met.
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
                // Necessary because there are two black nodes
                if(color === 'black'){
                    color += blackCount
                    blackCount+=1
                    // This ensures black can't be put here again
                    $(e.target).data('color', 'wasBlack')
                }
                $(e.target).removeClass('hidden')
                $(dragged).addClass('hidden')
                // Update js state to check win conditions
                nodes[color] = true
                checkWin()
            }
        })

    $('#reset').click(resetInitialState)
})