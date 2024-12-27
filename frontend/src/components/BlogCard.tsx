import { useBLogs } from "@/hooks"
import "flowbite"
import LoadingSkeleton from "./LoadingSkeleton";
function BlogCard() {

    const {loading , blogs} = useBLogs();
    if(loading){
        return <div>
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
        </div>
    }
    return (<div>
            {blogs.map(blog => 
                <div className="flex justify-center my-5 ">
                    <div className=" w-2/4 p-6 bg-white border border-gray-200 rounded-lg shadow ">
                    <div className="flex ">
                        <p className="text-sm text-gray-400 pb-2 pr-8">{blog.author.firstname || "Anonymous"}</p>
                        <p className="text-sm text-gray-400 pb-2 ">22/12/2024</p>
                    </div>
                    <div >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{blog.title}</h5>
                    </div>
                    <p className="mb-3 font-normal text-gray-700">{blog.content.slice(0,250)} ...</p>
                    <div className=" flex justify-between">
                        <a href={`/blog/${blog.blogid}`}className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                        <button type="button" className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                            <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
                            </svg>
                            <span className="sr-only">Icon description</span>
                        </button>
                    </div>
                    </div>
                    </div>
                )}
        </div>
    )
}

export default BlogCard