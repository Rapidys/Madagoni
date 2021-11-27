import React, {useEffect} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {PrivacyRoutes, PublicRoutes} from "../routes";
import withTracker from "../withTracker";
import {connect} from "react-redux";
import {LoadingAC, setIsAuth} from "../Reducers/AuthReducer";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import Preloader from "../Preloader/Preloader";


const AppRouter = (props) => {
  let history = useHistory()
  let location = history.location.pathname
  console.log(location)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      props.setIsAuth(true)
      props.setIsLoading(false)
    }
  }, [])

  if (props.isLoading) {
    return <Preloader/>
  }


  return (


    props.isAuth

      ?

      <Switch>
        {PrivacyRoutes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={withTracker(props => {
                return (
                  <route.layout {...props}>
                    <route.component {...props} />
                  </route.layout>
                );
              })}
            />
          );
        })}
        <Redirect to='/documents'/>

      </Switch>
      :
      <Switch>
        {PublicRoutes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          );
        })}
        <Redirect to='/login'/>
      </Switch>


  )
};
let MapStateToProps = (state) => ({
  isAuth: state.Auth.isAuth,
  isLoading: state.Auth.isLoading
})
let MapDispatchToProps = (dispatch) => {
  return {
    setIsAuth: (setAuth) => {
      dispatch(setIsAuth(setAuth))
    },
    setIsLoading: (loading) => {
      dispatch(LoadingAC(loading))
    }
  }
}
let AppRouterContainer = connect(MapStateToProps, MapDispatchToProps)(AppRouter)

export default AppRouterContainer;
