import { useNavigate } from "react-router-dom";
import { AppBar } from "../components/AppBar ";

export function Todos(){
    const navigate =useNavigate()
    return <div>
        <AppBar firstName={"Lalit"} label={"Log Out"}onClick={()=>{
            navigate("youtube.com")
        }}/>

    </div>
}