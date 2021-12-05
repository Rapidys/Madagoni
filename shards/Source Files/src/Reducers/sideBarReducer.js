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

    },
    {
      title: "ხელმოსაწერი",
      htmlBefore: '<i class="material-icons">announcement</i>',
      to: "/signatureDocuments",

    },
    {
      title: "შესრულებული",
      htmlBefore: '<i class="material-icons">assistant_photo</i>',
      to: "/completed",

    },

    {
      title: "გაგზავნილი",
      htmlBefore: '<i class="material-icons">edit</i>',
      to: "/sentDocuments",
    },
    {
      title: "დრაფტი",
      htmlBefore: '<i class="material-icons">drafts</i>',
      to: "/draftDocuments",

    },
    {
      title: "გაუქმებული",
      htmlBefore: '<i class="material-icons">block</i>',
      to: "/canceled",

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
