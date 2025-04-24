import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BLOGS } from '../data/BLOGS';

function Blog(){
    const {testParam} = useParams();
    const navigate = useNavigate();
    const [blogContent, setBlogContent] = useState([]);

    useEffect(()=>{
      const theBlog = BLOGS.find((blog)=>blog.testUrl === testParam);
      if(!theBlog){
        alert("해당 블로그 글은 존재하지 않습니다!");
        navigate('/');
      }
      setBlogContent(theBlog);
    },[]);

  return <div><BlogRenderer content={blogContent}/></div>
}

export default Blog;