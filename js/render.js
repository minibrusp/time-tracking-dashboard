import { timeTracker } from './variables.js'
import { getSessionItem } from './sessionStorage.js'
import { numberAnimation, wordAnimation } from './animation.js'

export const onLoadRender = (className, title, current, unit, prev) => {
   let StatsTemplate = `
            <section class="time-tracker__stats ${className} box">
               <div class="time-tracker__stats__container box">
                  <div class="time-tracker__stats__container__top">
                  <h2>${title}</h2>
                  <button>
                     <img src="./images/icon-ellipsis.svg" alt="Ellipsis button">
                  </button>
                  </div>
                  <div class="time-tracker__stats__container__bot">
                  <h3><span>${current}</span>hrs</h3>
                  <p>Last <span>${unit}</span> - <span>${prev}</span>hrs</p>
                  </div>
               </div>
            </section>`

   timeTracker.innerHTML += StatsTemplate
}

export const navEventRender = timeFrameState => {
   getSessionItem('allData').forEach(data => {

      let currentHeader = document.querySelector(`.${data.title.toLowerCase().replace(' ', '-')} .time-tracker__stats__container__bot h3 span`)
      numberAnimation(currentHeader, data.timeframes[timeFrameState].current)

      let unit = document.querySelector(`.${data.title.toLowerCase().replace(' ', '-')} .time-tracker__stats__container__bot p span`)
      let prev = document.querySelector(`.${data.title.toLowerCase().replace(' ', '-')} .time-tracker__stats__container__bot p span + span`)

      timeFrameState === 'daily'
         ? wordAnimation(unit, timeFrameState.replace('il', ''))
         : wordAnimation(unit, timeFrameState.replace('ly', ''))

      numberAnimation(prev, data.timeframes[timeFrameState].previous)

   })
}

export const resetButtonState = (buttons) => {
   buttons.forEach(button => {
      if (!button.classList.contains('active')) return
      button.classList.remove('active')
   })
}

export const setButtonState = (buttons, timeFrameState) => {
   buttons.forEach(button => {
      if (button.value == timeFrameState) {
         button.classList.add('active')
      }
   })
}

export const disableNavButtons = (buttons) => {
   buttons.forEach(button => {
      button.disabled = true

      setTimeout(() => {
         button.disabled = false
      }, 2500)
   })
}