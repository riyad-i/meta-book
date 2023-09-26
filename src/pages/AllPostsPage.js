import * as usersService from '../utilities/users-service'
import { useState } from 'react';

function AllPostsPage(){
    // const [expDate, setExpDate] = useState(null)
    
    // const handleCheckToken = async () => {
    //     const expDate = await usersService.checkToken()
    //     console.log(expDate);
    //     setExpDate(expDate.toString())
    // }
    return(
        <div>
            <h1>All Posts</h1>
            {/* <button onClick={handleCheckToken}>Check when my login expires</button>
            <h3>{expDate}</h3> */}
        </div>
    )
}

export default AllPostsPage