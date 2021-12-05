import React, {useEffect, useMemo, useState} from "react";
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
import {
  setNewObject,
  statusAC
} from "../../../Reducers/addNewPost/addNewPostReducer";
import MySelect from "../../../MySelect/MySelect";
import {Dialog, DialogContent, DialogTitle} from "@material-ui/core";


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

  let finishDoc = useSelector(state => state.GetDoc.finishDocument)
  let Motions = useSelector(state => state.docMotion.Motion)
  let selectType = useSelector(state => state.selectDocument.selectType)
  let fileId = useSelector(state => state.uploadFile.fileId)
  let status = useSelector(state => state.addNewPost.status)

  const [open, setOpen] = useState(false)

  let dispatch = useDispatch()
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


  let getDocumentId = useSelector(state => state.addNewPost.documentId)
  let getDocumentDate = useSelector(state => state.addNewPost.documentDate)

  useEffect(() => {
    if (status === 200) {
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
          disabled={!props.documentTitle}
          onClick={addNewPost}
          className={props.addBtn}
        >გადაგზავნა</Button>
        {/*"ml-lg-2 ml-sm-0 border - 1"*/}
        <Button
          disabled={!props.documentTitle}
          onClick={handleDraft}
          className={props.draftBtn}
        >დრაფტად შენახვა</Button>
        <Button
          className={props.approve}
        >
          ხელმოწერა
        </Button>
        <Button
          className={!finishDoc === true ? 'd-none' : 'border - 1'}
          onClick={finishModal}
        >
          დავასრულე
        </Button>
        <Dialog
          open={finishCategories}
          onClose={finishModal}
          fullWidth={true}
          maxWidth={"sm"}
        >
          <DialogTitle>დასრულება</DialogTitle>
          <DialogContent>
            <ModalBody>
              <MySelect
                defaultValue={'დასრულების ტიპი'}
                options={[
                  {referenceId: 1, displayName: 'დავასრულე'},
                  {referenceId: 2, displayName: 'გავეცანი'},
                ]}
              />

              <Button className={"mt-5"}
              onClick = {finishModal}
              >
                არჩევა
              </Button>
            </ModalBody>
          </DialogContent>

        </Dialog>

      </CardBody>
    </Card>
  )
};


export default Editor;
