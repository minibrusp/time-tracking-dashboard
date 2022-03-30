const loadData = async () => {
   let response = await fetch('./../data.json')
   let data = response.json()
   return data
}

export default loadData