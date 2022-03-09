import React from "react";
import "./index.css"
import { MenuBtn } from "../../UIkit/MenuBtn/MenuBtn";
export const Menu:React.FC = () =>{
    return(
        <div className="menu">
            <div className="headerText"> Музей Байкала</div>
            <MenuBtn href="https://github.com/nto-final/gid-start-screen">Фотобудка</MenuBtn>
            <MenuBtn href="https://github.com/nto-final/gid-start-screen">Галерея</MenuBtn>
            <MenuBtn href="https://github.com/nto-final/gid-start-screen">Портал</MenuBtn>
            <MenuBtn href="https://github.com/nto-final/gid-start-screen">AR Гид</MenuBtn>
            <MenuBtn href="https://github.com/nto-final/gid-start-screen">Статистика</MenuBtn>
            <a href="admin" className="adminLink">Войти в систему</a>
        </div>
    )
}