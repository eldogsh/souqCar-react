import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";

import Col from "react-bootstrap/Col";
import strings from "../../localization/localization";
import { Link } from "react-router-dom";

const News = () => {
  const [posts, setPosts] = useState([]);
  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3000/news", requestOptions)
      .then((response) => response.json())
      .then((result) => setPosts(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
     <div className="row px-4 theme1 ">
       <div
          className=" m-0"
          style={{
            borderRadius: "10px",
            color: "white",
            height: "200px",
            width: "100%",
            position: "relative",
            background: '#888 url("https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694469151/1686716-1278608144_bsusse.jpg") no-repeat center/cover ',
            backgroundBlendMode:"multiply",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center"
        
            
          }}
        >
          <h1 style={{
       textAlign:"center",
        }}> {strings.carNews}</h1>
        </div>
        </div>
    <div className="mainDiv">
   
   
      <Row className="p-2" xs={1} md={3}>
        {posts.map((post) => (
          <div key={post.id}>
          <Link className="text-decoration-none" to={`/news/${post.id}`}>
            <div className="articlesCard m-2">
            <div className="parentImg">
                <img
                  src={post.imgUrl}
                  alt="news"
                  className=" articlesCard-img rounded-3"
                  style={{width:"100%",height:"240px"}}
                />
              </div>
             
                <h2 className="articlesCard-taxt p-3 ">{post.title}</h2>
          

            </div>
             
            </Link>
            
          </div>
        ))}
      </Row>
    </div>
   
    </>
  );
};

export default News;