import React from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {login, logout} from "../../redux/auth-reducer";
import {InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import style from '../common/FormsControls/formsControls.module.css'
import {createField, GetStringKeys, Input} from "../common/FormsControls/FormsControls";

type LoginFormOwnProps = {
    captchaUrl:string | null
}

const LoginForm:React.FC<InjectedFormProps<LoginFormsValuesType , LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error,captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormsValuesTypeKeys>("Email", 'email', [required], Input)}
            {createField<LoginFormsValuesTypeKeys>("Password", 'password', [required], Input, {type: 'password'})}
            {createField<LoginFormsValuesTypeKeys>(undefined, 'rememberMe', [], Input, {type: 'checkbox'},'remember me')}

            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl &&  createField("Symbols from image", 'captcha',[required], Input, {}) }

            {error && <div className={style.formSummaryError}>{error}</div>}
            <div> <button>Login</button> </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<LoginFormsValuesType,LoginFormOwnProps>({form: 'login'})(LoginForm)

type MapStatePropsType = {
    captchaUrl:string | null
    isAuth:boolean
}
type MapDispatchPropsType = {
    login: (email:string,password:string,rememberMe:boolean,captcha:string) => void
}

export type LoginFormsValuesType = {
    email: string
    password:string
    rememberMe:boolean
    captcha:string
}

type LoginFormsValuesTypeKeys = GetStringKeys<LoginFormsValuesType>

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData:LoginFormsValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe,formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (<>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </>
    );
};

const mapStateToProps = (state:AppStateType):MapStatePropsType => ({
    captchaUrl:state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login, logout})(Login);