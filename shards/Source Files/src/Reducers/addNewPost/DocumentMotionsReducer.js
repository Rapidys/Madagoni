let initialState = {
  Motion: [
    {
      MotionTypeId: 1,
      MotionStatusId: 1,
      TargetId: 1,
      DocumentMotionId: 0,
      TargetTypeId: 1,
    }
  ]
}

let SetMotion = "SET-MOTION"

let DocumentMotionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SetMotion: {
      return {
        ...state,
        Motion: [...state.Motion, ...action.data],
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
