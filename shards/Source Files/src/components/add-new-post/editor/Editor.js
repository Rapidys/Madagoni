import React, {useState} from "react";
import ReactQuill from "react-quill";
import {
  Button,
  Card,
  CardBody,
  Form,
  FormInput, Modal, ModalBody,
  ModalHeader
} from "shards-react";
import "react-quill/dist/quill.snow.css";
import "../../../assets/quill.css";
import {useDispatch, useSelector} from "react-redux";
import {setMotion} from "../../../Reducers/addNewPost/DocumentMotionsReducer";
import {selectDocumentAC} from "../../../Reducers/addNewPost/selectDocReducer";
import {statusAC} from "../../../Reducers/addNewPost/addNewPostReducer";


const Editor = (props) => {
  Editor.modules = {
    toolbar: [
      [{header: '1'}, {header: '2'}, {header: [3, 4, 5, 6]}, {font: []}],
      [{size: []}],
      [{align: ''}, {align: 'center'}, {align: 'right'}, {align: 'justify'}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      ['link', 'image', 'video'],
      ['clean'],
      ['code-block'],


    ]
  }
  Editor.formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'video',
    'code-block'
  ]


  const [documentTitle, setDocumentTitle] = useState('')
  const [documentBody, setDocumentBody] = useState('')
  let Motions = useSelector(state => state.docMotion.Motion)
  let selectType = useSelector(state => state.selectDocument.selectType)
  let fileId = useSelector(state => state.uploadFile.fileId)
  let status = useSelector(state => state.addNewPost.status)

  const [open, setOpen] = useState(false)

  let dispatch = useDispatch()
  let close = () => {
    setOpen(false)
  }


  function addNewPost(e) {
    {
      Motions && Motions.map(motion => {
        motion.MotionStatusId = 2
      })
    }
    let newPost = {
      DocumentId: 0,
      DocumentDate: null,
      DocumentTitle: documentTitle,
      DocumentBody: documentBody,
      isActive: true,
      DocumentTypeId: selectType,
      DocumentMotions: Motions,
      Attachments: fileId
    }
    props.setNewPost(newPost)
  }


  let handleDraft = () => {

    {
      Motions && Motions.map(motion => {
        motion.MotionStatusId = 1
      })
    }


    let newPost = {
      DocumentId: 0,
      DocumentDate: null,
      DocumentTitle: documentTitle,
      DocumentBody: documentBody,
      isActive: true,
      DocumentTypeId: selectType,
      DocumentMotions: Motions,
      Attachments: fileId  // unda iyos ibieqti {isActive da atachmentId}

    }
    props.setNewPost(newPost)

  }

  const handleBody = (e) => {
    setDocumentBody(e)
  }


  let getDocumentId = useSelector(state => state.addNewPost.documentId)
  let getDocumentDate = useSelector(state => state.addNewPost.documentDate)

  if (status === 200) {
    setOpen(true)
    setDocumentTitle('')
    setDocumentBody('')
    dispatch(selectDocumentAC({}))
    dispatch(setMotion([]))
    dispatch(statusAC(null))
  }

  return (
    <Card small className="mb-3">
      <CardBody>
        <Form className="add-new-post">
          <FormInput size="lg" className="mb-3"
                     placeholder="Your Post Title"
                     value={documentTitle}
                     onChange={(e) => {
                       setDocumentTitle(e.target.value)
                     }}

          />
          <ReactQuill
            className="add-new-post__editor mb-1"
            modules={Editor.modules}
            formats={Editor.formats}
            onChange={handleBody}
            value={documentBody}
          />
          <div>
            <Modal open={open} toggle={close}>
              <ModalHeader>
                დოკუმენტის ნომერი : {getDocumentId}
              </ModalHeader>
              <ModalBody className={"d-flex align-items-center"}>
                <i className="fas fa-check-circle"
                   style={{color: 'green', fontSize: '30px'}}/>
                <span
                  className={"ml-2"}>დოკუმენტის შექმნის თარიღი : {getDocumentDate}</span>


              </ModalBody>
            </Modal>
          </div>
        </Form>
        <Button
          disabled={!documentTitle}
          onClick={addNewPost}
        >გადაგზავნა</Button>
        <Button
          disabled={!documentTitle}
          onClick={handleDraft}
          className={"ml-2"}
        >დრაფტად შენახვა</Button>

      </CardBody>
    </Card>
  )
};


export default Editor;
