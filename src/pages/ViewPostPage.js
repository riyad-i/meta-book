import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as postsService from "../utilities/posts-service";
import { Link } from "react-router-dom";

export default function ViewPostPage() {
  const params = useParams();
  const id = params.id;

  const [post, setPost] = useState(null);

  useEffect(() => {
    (async () => {
      const post = await postsService.getPost(id);
      setPost(post);
    //   console.log(id, 'id')
    })();
  }, []);

  const remove = async () => {
    const deleted = await postsService.deletePost(post._id)
    console.log(deleted);
  }

//   const edit =  () => {
    
//   }

  return (
    <div>
        { post ? 
        <>
        <h2>{post.title}</h2>
        <h4>{post.author}</h4>
        <h5>{post.body}</h5>
        <button onClick={remove}>Delete</button>
        {/* <button onClick={edit}>Edit</button> */}
        <Link to={`posts/${post._id}`}>Edit</Link>
        </>
    : null}

    </div>
  );
}
