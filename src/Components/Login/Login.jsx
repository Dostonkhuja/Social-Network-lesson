import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from '../common/FormsControls/formsControls.module.css'

const LoginForm = ({handleSubmit, error,captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Login", 'email', [required], Input)}
            {createField("Password", 'password', [required], Input, {type: 'password'})}
            {createField(null, 'rememberMe', null, Input, {type: 'checkbox'},'remember me')}

            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl &&  createField("Symbols from image", 'captcha',[required], Input, {}) }

            {error && <div className={style.formSummaryError}>{error}</div>}
            <div> <button>Login</button> </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({login, isAuth,captchaUrl}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe,formData.captcha)
    }
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (<>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
        </>
    );
};

const mapStateToProps = (state) => ({
    captchaUrl:state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login, logout})(Login);