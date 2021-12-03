let initialState = {
  isNew: [],
  navItemsInfo: [
    {
      title: "ახალი",
      to: "/add-new-post",
      htmlBefore: '<i class="material-icons">add</i>',
      htmlAfter: ""
    },

    {
      title: "პოსტები",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/blog-posts",
    },
    {
      title: `მიღებული`,
      htmlBefore: '<i class="material-icons">email</i>',
      to: "/incomingDocuments",
      htmlAfter: null,
      Received: null,
      totalReceived:null,
    },
    {
      title: "დასადასტურებლები",
      htmlBefore: '<i class="material-icons">announcement</i>',
      to: "/signatureDocuments",
      htmlAfter: null,
      forSign: null,
      totalSigns:null,
    },
    {
      title: "დრაფტები",
      htmlBefore: '<i class="material-icons">drafts</i>',
      to: "/draftDocuments",

    },
    {
      title: "გაგზავნილები",
      htmlBefore: '<i class="material-icons">edit</i>',
      to: "/sentDocuments",
    },

    {
      title: "პროცესში",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    }
  ]

}
const sideBarReducer = (state = initialState) => {
  return state
}


export default sideBarReducer
