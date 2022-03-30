import { getSessionItem, setSessionItem } from './sessionStorage.js'
import { onLoad } from './onLoad.js'
import { navEventRender, resetButtonState } from './render.js'

await onLoad()


let navButtons = document.querySelectorAll('.time-tracker__nav__list button')

navButtons.forEach(button => {
   button.addEventListener('click', event => {
      if (event.target.classList.contains('active')) return

      resetButtonState(navButtons)

      event.target.classList.add('active')
      setSessionItem('timeFrameState', event.target.value)

      navEventRender(getSessionItem('timeFrameState'))
   })
})



