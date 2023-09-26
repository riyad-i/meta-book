import * as postsAPI from "./posts-api";

export async function getPosts(){
    const posts = await postsAPI.getPosts()
    console.log(posts);
    return posts
}

export async function creaetPost(){
    const posts = await postsAPI.getPosts()
    console.log(posts);
    return posts
}