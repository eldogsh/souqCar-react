import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const NewsDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/news/${id}`)
      .then((response) => response.json())
      .then((result) => setPost(result))
      .catch((error) => console.log("error", error));
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div >
         <br></br>
       <h2 style={{textAlign:"center" , paddingInline:"10px"}}>{post.title}</h2>
    
      <br></br>
   <div  style={{textAlign:"center"}}>
       <img src={post.imgUrl} className="rounded-4 col-lg-7 col-sm-12 col-12 px-3" alt="news" />
   </div>
      <br></br>
   
     
      <br></br>
     <div className=" col-lg-7 col-sm-12 col-12 px-3  fs-5 font-weight-normal" style={{marginRight:"auto",marginLeft:"auto"}}>
       <p >{post.body}</p>
     </div>
    </div>
  );
};

export default NewsDetails;