let initialState = {
  navItemsInfo: [
    {
      title: "დოკუმენტები",
      to: "/documents",
      htmlBefore: '<i class="material-icons">description</i>',
      htmlAfter: ""
    },
    {
      title: "ახალი",
      to: "/add-new-post",
      htmlBefore: '<i class="material-icons">add</i>',
      htmlAfter: ""
    },
    {
      title: "დიაგრამები",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">assessment</i>',
      htmlAfter: ""
    },
    {
      title: "პოსტები",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/blog-posts",
    },

    {
      title: "დრაფტები",
      htmlBefore: '<i class="material-icons">email</i>',
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
