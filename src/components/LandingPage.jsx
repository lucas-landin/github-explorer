import { useState } from "react"
import '../styles/landingpage.scss'
import { Link } from "react-router-dom"
import "../styles/repositories.scss";

export function LandingPage(){
const [isHoveringRight,setHoveringRight] = useState(false)
const [isHoveringLeft,setHoveringLeft] = useState(false)
function hoveringEnterHandler(){
    setHoveringRight(true)
    setHoveringLeft(true)
}


function hoveringOutHandler(){
    setHoveringRight(false)
    setHoveringLeft(false)
}

    return(
        <div className={`container ${isHoveringRight ? " hover-right": "" && !isHoveringLeft ? " ": "hover-left" }`}>
            <div className={"split right"} 
            onMouseEnter={hoveringEnterHandler} onMouseLeave={hoveringOutHandler}>
                <h1 className="titulo">Rocketseat</h1>
                <a href="https://www.rocketseat.com.br/" className="button">Decolar!</a>
            </div>
            <div className={"split left"}
            onMouseEnter={hoveringOutHandler} onMouseLeave={hoveringEnterHandler} >
                <h1 className="titulo">Lista de Repositórios</h1>
                <Link to={'/RepositoryList'} className="button">Ler Mais </Link>
            </div>
        </div>
    )
}