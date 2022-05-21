import React from "react"
import Collapsible from "../components/Collapsible"

function Bounty(props) {
    console.log(props)

    return (
        <div>
            <Collapsible id={props.id} 
            title={props.title} 
            type={props.type} 
            prize={props.prize} 
            detail={props.detail}
            cid={props.cid} />
            <br/>
        </div>
    )

};

export default Bounty;