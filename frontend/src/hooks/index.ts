import { BACKEND_URL } from "@/Config";
import axios from "axios";
import { useEffect, useState } from "react"

interface blog {
    content : string,
    title : string , 
    blogid : number,
    author : {
        firstname : string 
    }
}

export const  usedisplayBlog = ({id} : {id: number}) => {
    const [Loading, setLoading] = useState(true);
    const [fullblog, setfullBlog] = useState<blog>();
    
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {headers : {Authorization : localStorage.getItem("token")}})
            .then(response => {
                console.log(response.data);
                setfullBlog(response.data.blog);
                setLoading(false);
            })
    }, [id])
    return {  
        Loading ,  
        fullblog
    }
} 
export const useBLogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<blog[]>([]);
    
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {headers : {Authorization : localStorage.getItem("token")}})
            .then(response => {
                console.log(response.data);
                setBlogs(response.data.blogs);
                setLoading(false);
            })
    }, [])
    return {  
        loading , 
        blogs
    }
}