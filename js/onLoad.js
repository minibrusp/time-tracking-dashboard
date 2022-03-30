import loadData from './api.js'
import { getSessionItem, setSessionItem } from './sessionStorage.js'
import { onLoadRender, resetButtonState, setButtonState } from './render.js'
import { navButtons } from './variables.js'



const loadSessionData = timeFrameState => {
   let sessionDatas = getSessionItem('allData')
   sessionDatas.map(data => {
      let title = data.title.toLowerCase().replace(' ', '-')

      onLoadRender(title, data.title, data.timeframes[timeFrameState].current, timeFrameState.replace('ly', ''), data.timeframes[timeFrameState].previous)
   })
}

export const onLoad = async () => {
   if (getSessionItem('timeFrameState')) {

      let timeFrameState = getSessionItem('timeFrameState')
      resetButtonState(navButtons)
      setButtonState(navButtons, timeFrameState)
      loadSessionData(timeFrameState)

      return
   }
   setSessionItem('timeFrameState', 'weekly')
   let timeFrameState = getSessionItem('timeFrameState')
   try {
      setSessionItem("allData", await loadData())
      loadSessionData(timeFrameState)

   }
   catch (error) {
      console.log(error)
   }
}