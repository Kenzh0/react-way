import React from 'react'
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/LoginPage";
import {Component, Suspense} from "react";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import withRouter from "./components/Profile/withRouter";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store"

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {
    catchAllUnhandledErrors = () => {
        alert('Some error occured')
    }
    
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }
    
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }
    
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        
        return (
          <div className='app-wrapper'>
              <HeaderContainer/>
              <Navbar/>
              <div className='app-wrapper-content'>
                  <Suspense fallback={<div><Preloader/></div>}>
                      <Routes>
                          <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                          <Route path='/dialogs' element={<DialogsContainer/>}/>
                          <Route path='/users' element={<UsersContainer/>}/>
                          <Route path='/login' element={<LoginPage/>}/>
                      </Routes>
                  </Suspense>
              </div>
          </div>
        )
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App);

const SamuraiJSApp = (props) => {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Provider store={store}>
              <AppContainer/>
          </Provider>
      </BrowserRouter>
    )
}

export default SamuraiJSApp;


