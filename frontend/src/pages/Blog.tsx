import BlogCard from "@/components/BlogCard"
import BlogHeader from "@/components/BlogHeader"
import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "@/Config";
import { useNavigate } from "react-router-dom";


  

function Blogs() { 

  const [firstname, setName] = useState<string>("Guest");
  const navigate = useNavigate();
  const getUsername = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("No token found! Redirecting to signup...");
      navigate("/signup");
      return;
    }

    try {
      const response = await axios.get(`${BACKEND_URL}/api/v1/user/getuser`, {
        headers: { Authorization: token },
      });
      setName(response.data.name || "Guest");
      console.log(response.data.name)
    } catch (e) {
      alert("Failed fetching username");
    }
  };

  useEffect(() => {
    getUsername();
  }, []);
  return (
    <div>
      <BlogHeader name = {firstname} /> 
      <BlogCard />
    </div>
  )
}

export default Blogs 