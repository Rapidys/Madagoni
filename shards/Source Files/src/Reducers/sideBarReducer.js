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
      title: `მიღებული`,
      htmlBefore: '<i class="material-icons">email</i>',
      to: "/incomingDocuments",
      htmlAfter: null,
      Received: null,
      totalReceived: null,
    },
    {
      title: "ხელმოსაწერი",
      htmlBefore: '<i class="material-icons">announcement</i>',
      to: "/signatureDocuments",
      htmlAfter: null,
      forSign: null,
      totalSigns: null,
    },
    {
      title: "დრაფტი",
      htmlBefore: '<i class="material-icons">drafts</i>',
      to: "/draftDocuments",

    },
    {
      title: "გაგზავნილი",
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
