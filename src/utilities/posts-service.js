import * as postsAPI from "./posts-api";

export async function getPosts(){
    const posts = await postsAPI.getPosts()
    console.log(posts);
    return posts
}

export async function createPost(postFormData){
    const post = await postsAPI.createPost(postFormData)
    console.log(post);
    return post
}