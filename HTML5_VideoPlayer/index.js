// Get elements
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Build funcs
function togglePlay() { //.paused is a prop that lives on the video
    const method = video.paused ? 'play' : 'pause'  //replaces if/else statement
    video[method]()  
}
function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚'
    toggle.textContent = icon
}

function skip() {
    console.log('skipping')
    video.currentTime += parseFloat(this.dataset.skip)
}

function handleRandeUpdate() {  //consider adding a flag like with canvas project
    video[this.name] = this.value
    console.log(this.name)
    console.log(this.value)
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  }

  function scrub(e) {
    console.log(e)
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration    
    video.currentTime = scrubTime
  } 

// Hook up event listener
video.addEventListener('click', togglePlay) //video plays by cliking it, not just controls
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)
toggle.addEventListener('click', togglePlay)
skipButtons.forEach(button => button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change', handleRandeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRandeUpdate))
let mousedown = false
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))    //checks if mousedown is true and moves to next
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)

// EXTENDED CHALLENGE: add full screen button