import { Input } from "@/components/Input"
import { useState } from "react"
import Quote from "@/components/Quote"
import { SignupHeading } from "@/components/SignupHeading"
import { SigninParams } from "@muttu11/medium-common"
import {Buttons} from "@/components/Buttons"
import SignupFooter from "@/components/SignupFooter"
import { useNavigate } from "react-router-dom"
import { BACKEND_URL } from "@/Config"
import axios from "axios"

  function Signup() {
    const navigate = useNavigate();
    const [postInputs , setPostInputs] = useState<SigninParams>({
      email : "" ,
      password : "" ,
    })
  
  async function sendUserRequest() {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin` , postInputs);
      const jwt = response.data.token ;
      localStorage.setItem("token", jwt);
      navigate("/blogs") 
    }
    catch(e){
      alert("signin failed")
    }
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="h-screen flex justify-center ">
          <div className="flex justify-center flex-col">
            <SignupHeading heading="Login into MEDIUM"/>
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
               <Buttons button_name = {"Sign in" } clickFunction={sendUserRequest}/>
               <SignupFooter footing ={"Dont have an account ? "} links={"Signup"} to ={"/signup"}/>
          </div>
        </div>
      <div className="hidden : lg:block">
          <Quote />
      </div>
    </div>  
  )
}

export default Signup
