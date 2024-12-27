import { Link } from "react-router-dom"

function SignupFooter({footing , links , to}: {footing: string , links : string , to:string}) {
  return (
    <div>
        <p className="text-slate-500 text-lg"> {footing} <Link className="text-slate-500 underline 
               pl-2 hover:text-blue-600" to ={to}>{links} </Link></p>
    </div>
  )
}
export default SignupFooter