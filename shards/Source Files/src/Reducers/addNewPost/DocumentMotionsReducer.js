let initialState = {
  Motion: []
}

let SetMotion = "SET-MOTION"

let DocumentMotionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SetMotion: {
      return {
        ...state,
        Motion: state.Motion = action.data,
      }
    }

    default:
      return state
  }
}
export let setMotion = (data) => ({
  type: SetMotion, data
})

export default DocumentMotionsReducer
