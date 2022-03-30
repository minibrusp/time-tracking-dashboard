export const getSessionItem = key => {
   return JSON.parse(sessionStorage.getItem(key))
}

export const setSessionItem = (key, value) => {
   return sessionStorage.setItem(key, JSON.stringify(value));
}