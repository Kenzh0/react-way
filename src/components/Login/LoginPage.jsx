import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControl";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import styles from "../common/FormsControls/FormsControl.module.css"

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
      <form onSubmit={handleSubmit}>
          {createField(Input, [required], "email", "Email")}
          {createField(Input, [required], "password", "Password", {type: "password"})}
          {createField(Input, [], "rememberMe", null, {type: "checkbox"}, "remember me")}
          
          {captchaUrl && <img src={captchaUrl} alt="Captcha" />}
          {captchaUrl && createField(Input, [required], "captcha", null, {}, "Symbols from image")}
          
          {error && <div className={styles.formSummaryError}>{error}</div>}
          <div>
              <button>Login</button>
          </div>
      </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const LoginPage = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    
    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }
    
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(LoginPage);