let initialState = {
  file: []
}

let uploadImgReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPLOAD-IMG':
      return {
        ...state,
        file: action.setImg
      }
    default:
      return state
  }
}

export let uploadImg = (setImg) => ({type: 'UPLOAD-IMG', setImg})

export default uploadImgReducer
