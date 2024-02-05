import { useState } from "react"
import { BottomWrapping } from "../components/BottomWrapping"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputField } from "../components/InputField"
import { SubHeading } from "../components/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export function SignUp (){
    const [username , setUsername] = useState(" ");
    const [firstName , setFirstname] = useState(" ");
    const [lastName , setLastName] = useState(" ");
    const [password , setPassword] = useState(" ");
    const navigate = useNavigate()
    
    return( 
    <div className="bg-slate-200 grid md:grid-cols-2 md:items-center h-screen overflow-y-auto gap-36 items-center sm:max-xl:p-9">
        <img src="./images/TodoSignUp.jpg" className="w-full h-auto md:h-full object-cover"></img>
         <div className=" grid  place-items-center">
    
            <div className="rounded-lg bg-white w-96 text-center p-2 h-max px-4">
                
                <Heading title={"Sign Up Here"}/>
                <SubHeading title={"Are you Willing to do something in life so Use Our app by Login up here!! "}/>
                <InputField onClick={(e) =>{
                    setFirstname(e.target.value)
                }} 
                    title={"FirstName"} placeholder={"Lalit"}/>
                <InputField onClick={(e)=>{
                    setLastName(e.target.value)
                }}
                    title={"LastName"} placeholder={"Wagh"}/>
                <InputField onClick={(e)=>{
                    setUsername(e.target.value)
                }} 
                    title={"Username"} placeholder={"abc@gmail.com"}/>
                <InputField onClick={(e)=>{
                    setPassword(e.target.value)
                }} 
                    title={"Password"} placeholder={"123123"}/>
        <div className="mt-4">
            <Button onClick={async()=>{
                try{
                    const response = await axios.post("http://localhost:3000/api/signup", {
                        firstName ,
                        lastName,
                        username, 
                        password
                    });
                    console.log(response.data.token);
                    localStorage.setItem("token" , response.data.token);
                    navigate("/todos")
                }catch(error){
                    console.error("error in signup" ,error)
                }
               
            }} title={"Sign Up"}/>

        </div>
        <BottomWrapping title={"Already have an account?"} buttonText={"Sign In"} to={"/Signin"}/>
        {/* </div> */}
    </div>
        
        
    </div>
    </div>
   
    )
}