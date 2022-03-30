import { timeTracker } from './variables.js'
import { getSessionItem } from './sessionStorage.js'

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
                  <h3>${current}hrs</h3>
                  <p>Last ${unit} - ${prev}hrs</p>
                  </div>
               </div>
            </section>`

   timeTracker.innerHTML += StatsTemplate
}

export const navEventRender = timeFrameState => {
   getSessionItem('allData').map(data => {
      let currentHeader = document.querySelector(`.${data.title.toLowerCase().replace(' ', '-')} .time-tracker__stats__container__bot h3`)
      let previousPara = document.querySelector(`.${data.title.toLowerCase().replace(' ', '-')} .time-tracker__stats__container__bot p`)

      currentHeader.textContent = `${data.timeframes[timeFrameState].current}hrs`

      timeFrameState === 'daily'
         ? previousPara.textContent = `Last ${timeFrameState.replace('il', '')} - ${data.timeframes[timeFrameState].previous}hrs`
         : previousPara.textContent = `Last ${timeFrameState.replace('ly', '')} - ${data.timeframes[timeFrameState].previous}hrs`


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