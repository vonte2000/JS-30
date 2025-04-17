const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

let lastChecked

function handleCheck(e) {
    let inBetween = false //flag variable
    //check if shift key held down
    //checks if user checking item
    if(e.shiftKey && this.checked) {
        //loop over checkBoxes
        checkboxes.forEach(checkbox => {
            console.log(checkbox)
            if(checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween
                console.log('starting to check them in between')
            }
            if(inBetween) {
                checkbox.checked = true
            }
        })
    }
    lastChecked = this
    console.log(e)
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))