import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {login} from "../../redux/auth-reducer";
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

export type LoginFormsValuesType = {
    email: string
    password:string
    rememberMe:boolean
    captcha:string
}

type LoginFormsValuesTypeKeys = GetStringKeys<LoginFormsValuesType>

 const Login: React.FC = (props) => {

    const captchaUrl = useSelector((state:AppStateType)=>state.auth.captchaUrl)
    const isAuth = useSelector((state:AppStateType)=>state.auth.isAuth)

    const dispatch = useDispatch()

    const onSubmit = (formData:LoginFormsValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe,formData.captcha))
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (<>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
        </>
    );
}

export default Login