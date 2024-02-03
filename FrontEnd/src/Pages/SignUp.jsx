import { BottomWrapping } from "../components/BottomWrapping"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputField } from "../components/InputField"
import { SubHeading } from "../components/SubHeading"

export function SignUp (){
    return( 
    <div className="bg-slate-200 grid md:grid-cols-2 md:items-center h-screen overflow-y-auto gap-36 items-center sm:max-xl:p-9">
        <img src="./images/TodoSignUp.jpg" className="w-full h-auto md:h-full object-cover"></img>
         <div className=" grid  place-items-center">
    
            <div className="rounded-lg bg-white w-96 text-center p-2 h-max px-4">
                
                <Heading title={"Sign Up Here"}/>
                <SubHeading title={"Are you Willing to do something in life so Use Our app by Login up here!! "}/>
                <InputField title={"FirstName"} placeholder={"Lalit"}/>
                <InputField title={"LastName"} placeholder={"Wagh"}/>
                <InputField title={"Username"} placeholder={"abc@gmail.com"}/>
                <InputField title={"password"} placeholder={"123123"}/>
        <div className="mt-2">
            <Button title={"Sign Up"}/>

        </div>
        <BottomWrapping title={"Already have an account?"} buttonText={"Sign In"} to={"/Signin"}/>
        {/* </div> */}
    </div>
        
        
    </div>
    </div>
   
    )
}