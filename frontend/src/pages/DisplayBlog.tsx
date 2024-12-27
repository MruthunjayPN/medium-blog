import { usedisplayBlog } from "@/hooks"
import { useParams } from "react-router-dom";


function DisplayBlog() {
    const { id }= useParams();
    const {Loading ,fullblog} = usedisplayBlog({id : Number(id)});
    if(Loading){
        return <div>
            loading ...
        </div>
    }
    return (
        <div className="flex flex-col justify-center bg-slate-100 h-screen">
            <div className="grid grid-cols-12">
            <div className="col-span-10 col-star-2 col-end-11 lg:col-span-9">
                <p  className="block p-6 bg-white border max-h-screen min-h-96 border-gray-200 rounded-lg shadow">
                    <h3 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {fullblog?.title}</h3>
                    <p className="font-normal text-gray-700 dark:text-gray-400 p-4">{fullblog?.content }</p>
                </p>
            </div>
            <div className="col-span-4 col-start-10">
                <div className=" hidden lg:block w-full max-w-sm max-h-screen min-h-96 bg-white border border-gray-200 rounded-lg shadow ">
                    <h1 className="h-24 pt-5 pb-2 flex justify-center text-2xl ">Author Details</h1>
                    <div className="flex flex-col items-center pb-10">
                        <h1 className="w-24 h-24 mb-3 text-5xl rounded-full flex flex-col justify-center shadow-lg text-center ">{fullblog?.author.firstname[0].toUpperCase()}</h1>
                        <h5 className="mb-1 text-xl font-medium text-gray-900">{fullblog?.author.firstname}</h5>
                        <span className="text-sm text-gray-500">Content Writer</span>
                        <div className="flex mt-4 md:mt-6">
                            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Follow</a>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
        </div>
    )
}

export default DisplayBlog