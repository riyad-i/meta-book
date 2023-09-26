const BASE_URL = '/api/posts'


export async function getPosts(){

    const res = await fetch(BASE_URL, {
        method: 'get',
        headers: {'Content-Type': 'application/json'},
    })
    if (res.ok){
        return await res.json()
    }else{
        throw new Error("Couldn't get Posts")
    }
}

export async function getPost(){

    const res = await fetch(BASE_URL, {
        method: 'get',
        headers: {'Content-Type': 'application/json'},
    })
    if (res.ok){
        return await res.json()
    }else{
        throw new Error("Couldn't get Posts")
    }
}




export async function createPost(postFormData){

    const res = await fetch(BASE_URL, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(postFormData)
    })
    if (res.ok){
        return await res.json()
    }else{
        throw new Error("Couldn't get Posts")
    }
}






//function needs to be edited
// export async function newPost(userData){
//     console.log('api user data', userData);

//     const res = await fetch(BASE_URL, {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(userData)
//     })

//     if (res.ok){
//         return await res.json()
//     }else{
//         throw new Error('Invalid Sign Up')
//     }
// }
