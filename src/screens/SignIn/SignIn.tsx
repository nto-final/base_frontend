import React , {useState} from "react"
import { DefaulButton } from "../../UIkit/DefaultButton/DefaultButton"
import { DefaultInput } from "../../UIkit/DefaultIInput/main"
import { useNavigate } from "react-router-dom"
import "./index.css"
export const SignIn:React.FC = () =>{
    const [password, setPassword] = useState("")
    const [login, setLogin] = useState("")
    let navigate = useNavigate()
    const onFormSubmit = () =>{
        //тут код аутенфикации
        console.log(login)
        console.log(password)
    }
    return(
        <div className="form">
            <div className="headerAuth"><strong>Аутенфикация</strong></div>
            <DefaultInput onChange={(login)=>setLogin(login.target.value)} placeholder="Логин"></DefaultInput>
            <DefaultInput type="password" onChange={(password)=>setPassword(password.target.value)} placeholder="Пароль"></DefaultInput>
            <DefaulButton style={{height:"55px", width:"275px"}} onClick={()=>onFormSubmit()}>Войти</DefaulButton>
            <button className="previousLink"  onClick={()=>navigate(-1)}>Вернуться назад</button>
        </div>
    )
}