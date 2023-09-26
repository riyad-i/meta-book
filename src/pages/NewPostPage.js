import { useState } from "react"
import { createPost } from "../utilities/posts-api"

function NewPostPage(){
    const [formData, setFormData] = useState({
        title: '',
        email: '',
        body: '',
        author: '',
    })

    const handleChange = (e)=>{
        // console.log();
        setFormData({
            ...formData,
            [e.target.name] : e.target.value,
            error: ''
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const postFormData = {...formData}
            console.log(postFormData);
            
            const post = await createPost(postFormData)
            console.log(post);
        } catch (err) {
            console.log(err);
            setFormData({
                ...formData,
                error: 'Post Failed - Try Again'
            })
        }
    }

    return(
        <div>
            <h1>New Post Page</h1>
            <h2>Create a new Post</h2>
            <form onSubmit={handleSubmit}>
                <label for='title'>Title:</label> <input value={formData.name} onChange={handleChange} name='title' id='title' type='text' required/>
                Author: <input name='author' value={formData.author} onChange={handleChange} type='text' required/>
                email: <input name='email' type='text' value={formData.email} onChange={handleChange} required/>
                <textarea name='body' value={formData.body} onChange={handleChange} required></textarea>
                <button>Create Post</button>
            </form>
        </div>
    )
}

export default NewPostPage