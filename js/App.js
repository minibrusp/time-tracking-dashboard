import { getSessionItem, setSessionItem } from './sessionStorage.js'
import { onLoad } from './onLoad.js'
import { navEventRender, resetButtonState, disableNavButtons } from './render.js'
import { flipCardAnimation, numberAnimationZero } from './animation.js'

await onLoad()


let navButtons = document.querySelectorAll('.time-tracker__nav__list button')

navButtons.forEach(button => {
   button.addEventListener('click', event => {
      if (event.target.classList.contains('active')) return

      disableNavButtons(navButtons)

      resetButtonState(navButtons)

      event.target.classList.add('active')
      setSessionItem('timeFrameState', event.target.value)

      navEventRender(getSessionItem('timeFrameState'))

      getSessionItem('allData').map(data => {
         console.log("COunt")
         let statsCard = document.querySelector(`.${data.title.toLowerCase().replace(' ', '-')} .time-tracker__stats__container`)
         flipCardAnimation(statsCard)
      })


   })
})

let statsCards = document.querySelectorAll('.time-tracker__stats__container')

statsCards.forEach(card => {
   card.addEventListener('click', event => {
      if (card.classList.contains('--flipping')) return
      flipCardAnimation(card)
      card.classList.add('--flipping')
      setTimeout(() => {
         card.classList.remove('--flipping')
      }, 1000)

      setTimeout(() => {
         let current = card.querySelector(`h3 span`)
         numberAnimationZero(current)
         let prev = card.querySelector(`p span + span`)
         numberAnimationZero(prev)
      }, 500)


   })
})



