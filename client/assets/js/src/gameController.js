$(document).ready(() => {
    // Unfortunately jQuery/vanilla JS lend themselves
    // global state management rather than a more
    // deterministic model. In this case the global
    // state is maintainging three variables: 
    
    // First is the dragged variable. This keeps
    // track of the element being dragged.
    let dragged = null

    // The blackCount variable is used as a means
    // of controlling the particular behavior of
    // black nodes, since they are the odd-ones-out,
    // having a duo rather than single dot.
    let blackCount = 1

    // The nodes data structure is used to keep
    // track of wins. Ideally this would be the
    // entire game state so that the UI is an
    // exact reflection of state, however the
    // state for this application is maintained
    // within the DOM and the javascript, which
    // is not preferable.
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
        $('[data-color=wasBlack]]').data('color', 'black')
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
        // to a specific UI reflection.
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

    // Set the dot that is being dragged
    function setColor(e){
        dragged = $(e.target)
        let color = $(dragged).data('color')
        $('.bg-controller').removeClass('add-opacity')
        $(`.${color}-bg`).addClass('add-opacity')
    }

    // Un-set a dot when a drag finishes
    function unsetColor(e){
        let color = $(dragged).data('color')
        dragged = null
    }
    
    // Chained methods to control dot behavior
    $('.dot.in-menu')
        .on('dragstart', setColor)
        .on('dragend', unsetColor)

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