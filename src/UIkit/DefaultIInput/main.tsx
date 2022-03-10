import react, { useState } from "react";
import "./DefaultInput.css"
import visibleEye from "./visibleIcon.svg"
import unvisibleEye from "./unVisibleIcon.svg"

interface IDefaultInp{
    style?: react.CSSProperties;
    onChange:(e:any)=>void;
    type?:string;
    placeholder?:string;
    class?:string;
    value?:string;

}

export const DefaultInput: React.FC<IDefaultInp> = (props) => {
    let [visible, setVisible] = useState(false)
    if (props.type == "password"){
        return(
            <div className="inp-box">
                <input
                style={props.style}
                onChange={(e) => props.onChange(e)}
                type={visible? "text":"password"}
                placeholder={props.placeholder}
                className="input"
                // value={props.value == undefined? "":props.value}
                
                >
                {props.children}

                </input>
                <img  className="eyeImg" src={!visible? visibleEye:unvisibleEye} onClick={() => setVisible(!visible)}></img>
            </div>
        );
    }
    return(
        <input
        className={"inp"+ " " + props.class}
        style={props.style}
        onChange={(e) => props.onChange(e)}
        type={props.type}
        placeholder={props.placeholder}
        >
        {props.children}
        </input>
    );
}