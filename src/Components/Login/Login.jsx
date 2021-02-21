import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from '../common/FormsControls/formsControls.module.css'

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Login", 'email', [required], Input)}
            {createField("Password", 'password', [required], Input, {type: 'password'})}
            {createField(null, 'rememberMe', null, Input, {type: 'checkbox'},'remember me')}

            {error && <div className={style.formSummaryError}>{error}</div>}
            <div> <button>Login</button> </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({login, isAuth}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe)
    }
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (<>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login, logout})(Login);