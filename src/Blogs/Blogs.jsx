import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";


const Blogs = ({handleAddToBookmarks}) => {
    const [blogs , setBlogs] = useState([])
    useEffect(()=>{
         fetch('blogs.json')
         .then(res=>res.json())
         .then(data=> setBlogs(data))

    },[])
    console.log(blogs);

    return (
        <div className="md:w-2/3 md:px-4">
            <h1 className="text-4xl"> blogs: {blogs.length}</h1>
            {
               blogs.map(blog=> <Blog 
                      blog={blog}
                      handleAddToBookmarks={handleAddToBookmarks}
                      key={blog.id}
               ></Blog>) 
            }
            
        </div>
    );
};
Blogs.propTypes =
{
    handleAddToBookmarks: PropTypes.func.isRequired
}
export default Blogs;