import React from "react";

// Layout Types
import {DefaultLayout} from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import NewPostSection from "./components/add-new-post/newPostSection";
import Errors from "./views/Errors";
import BlogPosts from "./views/BlogPosts";
import LoginContainer from "./components/Login/LoginContainer";
import Documents from "./components/Documents/Documents";
import RegisterContainer from "./components/Register/Register";
import SentDocuments from "./views/DraftMessages/sentDocuments";
import DraftDocuments from "./views/sentMessages/draftDoc";
import ChosenDocument from "./views/chosenDocument/MessagesPage/MessagePage";
import SignatureDocuments from "./views/signatureDocument/signatureDocument";
import IncomingDocuments from "./views/incomingDocuments/IncomingDocuments";
import AdminPage from "./components/adminPage/adminPage";
import CompletedDocuments from "./views/Completed/completed";
import CanceledDocuments from "./views/Canceled/Canceled";

export let PrivacyRoutes = [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/documentFiles",
    layout: DefaultLayout,
    component: Documents,

  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: NewPostSection
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/incomingDocuments",
    layout: DefaultLayout,
    component: IncomingDocuments
  },
  {
    path: "/signatureDocuments",
    layout: DefaultLayout,
    component: SignatureDocuments
  },
  {
    path: "/completed",
    layout: DefaultLayout,
    component: CompletedDocuments
  },
  {
    path: "/draftDocuments",
    layout: DefaultLayout,
    component: DraftDocuments
  },
  {
    path: "/sentDocuments",
    layout: DefaultLayout,
    component: SentDocuments,
    exact: true,
  },
  {
    path: "/canceled",
    layout: DefaultLayout,
    component: CanceledDocuments,
    exact: true,
  },
  {
    path: "/document/:id",
    layout: DefaultLayout,
    component: ChosenDocument,
    exact: true,

  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/adminPage",
    layout: DefaultLayout,
    component: AdminPage
  },
  {
    path: "/register",
    layout: DefaultLayout,
    component: RegisterContainer
  },
]

export let PublicRoutes = [
  {
    path: "/login",
    component: LoginContainer
  },
]
