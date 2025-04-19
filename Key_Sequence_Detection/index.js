// key sequence detection: inputs certain squence of keys something needs to happen
// konami code

const pressed = []
const secretCode = 'vonte'

window.addEventListener('keyup', (e) => {
    console.log(e.key)
    pressed.push(e.key)
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length) //limits array length to le gth of secret code
    if(pressed.join('').includes(secretCode)) {
        console.log('DING DING!')
        cornify_add()
    }
    console.log(pressed)
})