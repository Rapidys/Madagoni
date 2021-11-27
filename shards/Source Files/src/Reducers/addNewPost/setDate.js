let initialState = {
  endDate: ''

}

let setNewDate = "setNewDate"
let setChosenData = (state = initialState, action) => {

  switch (action.type) {
    case setNewDate: {
      return {
        ...state,
        endDate: action.newDate
      }

    }

    default:
      return state
  }
}

export let setDate = (newDate) => ({type: setNewDate, newDate})
export default setChosenData
