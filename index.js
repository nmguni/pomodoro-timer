// Gloabl Variables 
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]')


const open_modal = document.querySelector('.open') 
const close_modal = document.querySelector('.close_modal')
const modal = document.querySelector('#myModal')

const pomo_start = document.querySelector('.pomadoro__start') 
const short_break = document.querySelector('.short__break') 
const long_break = document.querySelector('.long__break');

const time = document.querySelector('pomo__clock') 

const start = document.querySelector('#btn__start') 
const stop = document.querySelector('#btn__stop') 
const reset = document.querySelector('#btn__reset');


let counter = 0;
let interval = null;

// event listeners 

// Pomodoro button - rests time to 25:00
// short break 
// long break

//  Start Button 
// Stop Button
// Reset Button - resets time to chosen time


// Open Settings modal https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal

//  OPEN MODAL 
open_modal.onclick = function() {
   modal.style.display = 'block'
}
//  CLOSE MODAL
close_modal.onclick = function() {
   modal.style.display= 'none'
}
// CLOSE WHEN CLICKED OUTSIDE OF MODAL 
window.onclick = function(e) {
   if(e.target == modal) {
      modal.style.display = 'none'
      console.log(e.target)
   }
}

// Tab functions 
tabs.forEach(tab => {
   tab.addEventListener('click', () => {
      // Get target for what we clicked on
const target =  document.querySelector(tab.dataset.tabTarget)
      // Make tabs disapear
      tabContents.forEach(tabContent => tabContent.classList.remove('active'))

      // remove active tab color
      tabs.forEach(tab => tab.classList.remove('active'))
      // only making tab we clicked on active
      tab.classList.add('active')
      target.classList.add('active')
   })
})