import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css"
interface MenuBtnIE{
    href:string;
}

export const MenuBtn:React.FC<MenuBtnIE> = (props) =>{
    let navigate = useNavigate();
    return(
        <button className="menuBtn" onClick={()=>navigate(props.href)}>{props.children}</button>
    )
}