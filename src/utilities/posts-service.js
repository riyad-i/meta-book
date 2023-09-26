import * as postsAPI from "./posts-api";

export async function getPosts(){
    const posts = await postsAPI.getPosts()
    console.log(posts);
    return posts
}


export async function getPost(id){
    const post = await postsAPI.getPost(id)
    console.log(post);
    return post
}

export async function deletePost(id){
    const post = await postsAPI.deletePost(id)
    console.log(post);
    return post
}

export async function editPost(postFormData){
    const post = await postsAPI.editPost(postFormData)
    console.log(post);
    return post
}




export async function createPost(postFormData){
    const post = await postsAPI.createPost(postFormData)
    console.log(post);
    return post
}