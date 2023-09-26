import * as usersService from '../utilities/users-service'
import { useState } from 'react';
import * as postsService from '../utilities/posts-service'
import { useEffect } from 'react';

function AllPostsPage(){
    // const [expDate, setExpDate] = useState(null)
    
    // const handleCheckToken = async () => {
    //     const expDate = await usersService.checkToken()
    //     console.log(expDate);
    //     setExpDate(expDate.toString())
    // }
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        (async () => {
            const users = await postsService.getPosts();
            setPosts(users);
          })()
    }, [])

    return(
        <div>
            <h1>All Posts</h1>
            <br/>
            {posts ? 
                posts.map(post => {
                    return(
                        <div>
                            <h2>{post.title}</h2>
                            <h4>{post.author}</h4>
                            <h5>{post.body}</h5>
                            <br/>
                            <br/>
                        </div>
                    )
                })
            : null}
            {/* <button onClick={handleCheckToken}>Check when my login expires</button>
            <h3>{expDate}</h3> */}
        </div>
    )
}

export default AllPostsPage