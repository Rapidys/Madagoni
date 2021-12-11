import API from "../../API/ApiBase";

let initialState = {
    newPost: {},
    documentDate: null,
    documentId: null,
    status: null,
}

const setNewPost = "SET-NEW-POST"
const setDocumentDate = "SET-DOCUMENT-DATE"
const setDocumentId = "SET-DOCUMENT-ID"
const status = "status"

export let addNewPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case setNewPost :
            return {
                ...state,
                newPost: action.newPost
            }
        case setDocumentDate :
            return {
                ...state,
                documentDate: action.Date
            }
        case setDocumentId :
            return {
                ...state,
                documentId: action.id
            }
        case status :
            return {
                ...state,
                status: action.is
            }

        default:
            return state
    }
}


export let setNewPostAC = (newPost) => ({type: setNewPost, newPost})
export let setDocumentDateAC = (Date) => ({type: setDocumentDate, Date})
export let setDocumentIdAC = (id) => ({type: setDocumentId, id})
export let statusAC = (is) => ({type: status, is})


export let setNewObject = (newPost) => {
    return (dispatch) => {

        try {

            API.newPostAPI(newPost)
                .then(response => {
                    if (response && response.status === 200) {
                        dispatch(setNewPostAC(newPost))
                        dispatch(setDocumentIdAC(response.data.documentId))
                        dispatch(setDocumentDateAC(response.data.documentDate))
                        dispatch(statusAC(response.status))
                    }
                })
        } catch (e) {
            console.log(e.response)
        }
    }
}
