import { Input } from "@/components/Input"
import { useState } from "react"
import Quote from "@/components/Quote"
import { SignupHeading } from "@/components/SignupHeading"
import { SignupParams } from "@muttu11/medium-common"
import {Buttons} from "@/components/Buttons"
import SignupFooter from "@/components/SignupFooter"
import axios from "axios"
import {BACKEND_URL} from '../Config'
import { useNavigate } from "react-router-dom"


function Signup() {
  const navigate = useNavigate();
  const [postInputs , setPostInputs] = useState<SignupParams>({
    firstname : "",
    email : "" ,
    password : "" ,
  })

async function sendUserRequest() {
  try {
    const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup` , postInputs);
    const jwt = response.data.token;
    localStorage.setItem("token", jwt);
    
    navigate("/blogs") 
  }
  catch(e){
    alert("signup failed")
  }
}

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="h-screen flex justify-center ">
          <div className="flex justify-center flex-col">
            <SignupHeading heading="Create an account"/>
            <Input  labels="First Name" placeholder="Muttu" onChange={(e)=>{
                  setPostInputs ({
                    ...postInputs ,
                    firstname : e.target.value
                  })
              }}/>
              <Input  labels="Email" placeholder="muttu22@gmail.com" onChange={(e)=>{
                  setPostInputs ({
                    ...postInputs ,
                    email : e.target.value
                  })
              }}/>
              <Input  labels="Password" placeholder="" type={"password"} onChange={(e)=>{
                  setPostInputs ({
                    ...postInputs ,
                    password : e.target.value
                  })
              }}/>
               <Buttons button_name = {"Sign up" } clickFunction = {sendUserRequest} />
               <SignupFooter footing ={"Already have an account ? "} links={"Signin"} to ={"/signin"}/>
          </div>
        </div>
      <div className="hidden : lg:block">
          <Quote />
      </div>
    </div>  
  )
}





export default Signup
