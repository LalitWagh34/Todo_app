import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputField } from "../components/InputField"
import { Button } from "../components/Button"
import { BottomWrapping } from "../components/BottomWrapping"
import { useEffect, useState } from "react"
import axios from "axios"


export async function SignIn(){
    const [username , setUsername] = useState(" ");
    const [password , setPassword] = useState(" ");
    const [usernameError , setUsernameError] = useState("");
    const [passwordError , setPasswordError] = useState("");
    
    useEffect(()=>{
        setUsernameError("");
        setPasswordError("");
    },[username , password])

    try{
        const response = await axios.post("http://localhost:3000/api/signin")
            if (response.status === 200){
                var jwt  = response.data.token;
                localStorage.setItem("token" , jwt);
                Navigate("/signup")
            }
    }
    catch(error){
        if (error.response.status === 404){
            setUsernameError("User Already Exists");
        }
    }

    return (
        // bg-slate-200 grid md:grid-cols-2 md:items-center h-screen overflow-y-auto gap-36 items-center sm:max-xl:p-9
        <div className="bg-slate-200 grid md:grid-cols-2 md:items-center h-screen overflow-y-auto gap-36 items-center sm:max-xl:p-9">
        {/* rounded-lg bg-white w-96 text-center p-2 h-max px-4" */}
        <img src="./images/SignInTodo.jpg" className="w-full h-auto md:h-full md:w-auto object-cover "></img>
        
         <div className=" grid  place-items-center">
    
            <div className="rounded-lg bg-white w-96 text-center p-2 h-max px-4">
                
                <Heading title={"Sign Up Here"}/>
                <SubHeading title={"Are you Willing to do something in life so Use Our app by Login up here!! "}/>
                <InputField title={"Username"} placeholder={"abc@gmail.com"}/>
                <InputField title={"password"} placeholder={"123123"}/>
        <div className="mt-4">
            <Button title={"Sign In"}/>

        </div>
        <BottomWrapping title={"Already have an account?"} buttonText={"Sign In"} to={"/Signin"}/>
        {/* </div> */}
    </div>
        
        
    </div>
    </div>
    )
}