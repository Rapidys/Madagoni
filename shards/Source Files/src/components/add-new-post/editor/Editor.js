import React, {useEffect, useState} from "react";
import ReactQuill from "react-quill";
import {
  Button,
  Card,
  CardBody,
  Form,
  FormInput
} from "shards-react";
import "react-quill/dist/quill.snow.css";
import "../../../assets/quill.css";
import {useDispatch, useSelector} from "react-redux";
import {setMotion} from "../../../Reducers/addNewPost/DocumentMotionsReducer";
import {selectDocumentAC} from "../../../Reducers/addNewPost/selectDocReducer";
import {
  setNewObject,
  statusAC
} from "../../../Reducers/addNewPost/addNewPostReducer";
import {useParams} from "react-router-dom";
import {setSignDocument} from "../../../Reducers/signDocumentReducer";
import FinishButtonModal from "./BtnModals/FinishButtonModal";
import DocCreateModal from "./BtnModals/docCreateModal";
import SignDocumentModal from "./BtnModals/signDocumentModal";
import FinishMessage from "./BtnModals/finishMessage";


const Editor = (props) => {


  let params = useParams()

  let getDoc = useSelector(state => state.GetDoc)
  let Motions = useSelector(state => state.docMotion.Motion)
  let selectType = useSelector(state => state.selectDocument.selectType)
  let fileId = useSelector(state => state.uploadFile.fileId)
  let status = useSelector(state => state.addNewPost.status)

  let dispatch = useDispatch()

  const [open, setOpen] = useState(false)
  const [openSign, setOpenSign] = useState(false)


  let close = () => {
    setOpen(false)
  }


  function addNewPost() {
    {
      Motions && Motions.map(motion => {
        motion.MotionStatusId = 2
      })
    }
    let newPost = {
      DocumentId: 0,
      DocumentDate: null,
      DocumentTitle: props.documentTitle,
      DocumentBody: props.documentBody,
      isActive: true,
      DocumentTypeId: selectType,
      DocumentMotions: Motions,
      Attachments: fileId
    }
    dispatch(setNewObject(newPost))

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
      DocumentTitle: props.documentTitle,
      DocumentBody: props.documentBody,
      isActive: true,
      DocumentTypeId: selectType,
      DocumentMotions: Motions,
      Attachments: fileId  // unda iyos ibieqti {isActive da atachmentId}

    }
    dispatch(setNewObject(newPost))

  }


  const handleBody = (e) => {
    props.setDocumentBody && props.setDocumentBody(e)
  }
  const handleTitle = (e) => {
    props.setDocumentTitle && props.setDocumentTitle(e.target.value)
  }
  const setSignature = () => {
    dispatch(setSignDocument(Number(params.id)))
    setOpenSign((e) => !e)
  }

  let getDocumentId = useSelector(state => state.addNewPost.documentId)
  let getDocumentDate = useSelector(state => state.addNewPost.documentDate)

  useEffect(() => {
    if (status && status === 200) {
      setOpen(true)
      props.setDocumentTitle('')
      props.setDocumentBody('')
      dispatch(selectDocumentAC({}))
      dispatch(setMotion([]))
      dispatch(statusAC(null))
    }
  }, [status])

  let [finishCategories, setFinishCategories] = useState(false)
  let finishModal = () => {
    setFinishCategories((e) => !e)
  }
  return (
    <Card small className="mb-3">
      <CardBody>
        <Form className="add-new-post">
          <FormInput size="lg" className="mb-3" readOnly={props.titleReadOnly}
                     placeholder="Your Post Title"
                     value={props.documentTitle}
                     onChange={handleTitle}

          />
          <ReactQuill
            readOnly={props.readOnly}
            className="add-new-post__editor mb-1"
            modules={Editor.modules}
            formats={Editor.formats}
            onChange={handleBody}
            value={props.documentBody}

          />
          <div>

            <DocCreateModal getDocumentDate={getDocumentDate}
                            getDocumentId={getDocumentId}
                            open={open}
                            close={close}
            />
          </div>
        </Form>
        <Button
          disabled={!props.documentTitle}
          onClick={addNewPost}
          className={getDoc.addBtn !== true ? 'd-none' : 'border - 1'}
        >გადაგზავნა</Button>
        {/*"ml-lg-2 ml-sm-0 border - 1"*/}
        <Button
          disabled={!props.documentTitle}
          onClick={handleDraft}
          className={props.draftBtn}
        >დრაფტად შენახვა</Button>
        <Button
          className={getDoc.approveBtn !== true ? 'd-none' : 'border - 1'}
          onClick={setSignature}
        >
          ხელმოწერა
        </Button>


        <SignDocumentModal
          openSign={openSign}
          closeSign={setSignature}
        />


        <Button
          className={getDoc.finishDocument !== true ? 'd-none' : 'border - 1'}
          onClick={finishModal}
        >
          დავასრულე
        </Button>
        <FinishButtonModal finishCategories={finishCategories}
                           finishModal={finishModal}
                           setFinishCategories={setFinishCategories}
        />
        <FinishMessage/>
      </CardBody>
    </Card>
  )
};


export default Editor;

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
