const hero = document.querySelector('.hero')
const text = hero.querySelector('h1')
const walk = 100 //100px

function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero
    /*
    destructuring:
    const width = hero.offsetWidth
    const height = hero.offsetheight
    */
   let { offsetX: x, offsetY: y } = e
   
   if(this !== e.target) {
    x = x + e.target.offsetLeft
    y = t + e.target.offsetTop
   }
   const xWalk = Math.round((x / width * walk) - (walk - 2)) //offsets so the range is -50 < x < 50
   const yWalk = Math.round((y / height * walk) - (walk - 2))
   console.log(xWalk, yWalk)

   text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 red,
    ${xWalk * -1}px ${yWalk}px 0 blue,
    ${yWalk}px ${xWalk}px 0 green,
    ${yWalk * -1}px ${xWalk}px 0 orange
    `
}
hero.addEventListener('mousemove', shadow)