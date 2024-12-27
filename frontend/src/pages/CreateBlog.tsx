import BlogHeader from '@/components/BlogHeader'
import 'flowbite'
import { useState } from 'react'
import { CreateBlogParams} from '@muttu11/medium-common'
import { BACKEND_URL } from '@/Config';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function CreateBlog() {

  const navigate = useNavigate();
  const [blogInputs, setBlogInputs] = useState<CreateBlogParams>({
      title : "",
      content : ""
  });

  async function createBlogRequest (){
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/blog/new` , blogInputs , {headers : {Authorization : localStorage.getItem("token")}, });
      const blogId = response.data.id;
      console.log(blogId)
      navigate("/blogs") 
      return blogId;
    }
    catch(e){
      alert("failed to create your blog")
    }
  }
  return (<div>
<form>
  <div className='bg-gray-50 '>
    <BlogHeader name={"User"}/>
    <div className="flex justify-center pt-10 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border-none">
      <label className='ml-14 flex items-center' htmlFor="chat">TITLE : </label>
        <textarea id="chat" rows={1} className="block mx-4 p-2.5 w-1/3 text-lg font-semibold  text-gray-950 
        bg-white rounded-lg border border-gray-300" placeholder="The sunny day..." onChange={(e)=>{
          setBlogInputs ({
            ...blogInputs ,
            title : e.target.value
          }) }}></textarea>
    </div>
    <div className="w-full mb-4 border-none rounded-lg bg-gray-50 dark:bg-gray-700">
      <div className=" flex justify-center px-4 py-2 bg-gray-50 rounded-t-lg dark:bg-gray-800">
          <label htmlFor="comment" className="flex items-start">Your article : </label>
          <textarea id="comment" rows={15} className="block mx-5 w-1/2 p-2 text-base text-gray-900 
           bg-white rounded-lg border  border-gray-300" placeholder="Write your blog..." required 
           onChange={(e)=>{
            setBlogInputs ({
              ...blogInputs ,
              content : e.target.value
            }) }}></textarea>
      </div>
      <div className="flex justify-center ml-10 my-5 dark:border-gray-600">
        <button onClick={createBlogRequest} type="submit" className="inline-flex items-center py-3 px-4 text-base      font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 
        focus:outline-none focus:ring-blue-300">Post Blog
        </button>
      </div>
    </div>
  </div>
</form>
</div>
  )
}

export default CreateBlog