import axios from 'axios'

let baseUrl = 'https://cyberdocapiservice20211103000756.azurewebsites.net/api'
let token = localStorage.getItem('token')

let $ApiBase = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': "*",
    'Authorization': `Bearer ${token}`
  },
})


// $ApiBase.interceptors.response.use((config) => {
//   return config
//
// }, (error) => {
//   if (error.response.status === 403) {
//     return <Redirect to='/Login'/>
//   }
// })


const API = {
  AuthAPI(email, password) {
    return $ApiBase.post('/auth/authenticate', {
      email,
      password
    })
  },
  newPostAPI(newPost) {
    return $ApiBase.post('/docs/create', newPost)
  },
  registerUser(user) {
    return $ApiBase.post('/admin/UpdateUser', {
      user
    })
  },
  GetStructure() {
    return $ApiBase.get('/admin/GetStructure')
  },
  UploadFileApi(file) {
    return $ApiBase.post(`/docs/UploadFile`, file)
  },
  getDocTypes() {
    return $ApiBase.get(`/reference/GetReference/DocumentTypes`)
  },
  getDocument(params) {
    return $ApiBase.get(`/docs/GetDocument/${params}`)
  },
  getDocuments(documentStatus) {
    return $ApiBase.post(`/docs/GetDocuments/`, documentStatus)
  },
  setDocumentColor(documentColor) {
    return $ApiBase.post(`/docs/SetDocumentColor`, documentColor)
  },
}


export default API
