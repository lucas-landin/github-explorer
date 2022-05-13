import { useState } from "react"
import '../styles/landingpage.scss'

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
        <div className={`container ${isHoveringRight ? " hover-right": "" && !isHoveringLeft ? " ": "hover-left" || isHoveringRight && isHoveringLeft && ""}`}>
            <div className={"split right"} 
            onMouseEnter={hoveringEnterHandler} onMouseLeave={hoveringOutHandler}>
                <h1>Rocketseat</h1>
                <a href="#" className="button">Read More</a>
            </div>
            <div className={"split left"}
            onMouseEnter={hoveringOutHandler} onMouseLeave={hoveringEnterHandler} >
                <h1>Lista de Repositórios</h1>
                <a href="#" className="button">Read More</a>
            </div>
        </div>
    )
}