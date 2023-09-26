import { Link } from "react-router-dom"
import * as usersService from "../utilities/users-service"

function NavBar({user, setUser}){
    // console.log(user);
    const handleLogout = () => {
        usersService.logOut()
        setUser(null)
    }

    return(
        <nav>
            <h2>Welcome {user.name}</h2>
            &nbsp;
            <Link to={'/posts'}>All Posts</Link>
            &nbsp; | &nbsp;
            <Link to={'posts/new'}>New Post</Link>
            &nbsp; | &nbsp;
            <Link to='' onClick={handleLogout}>Log Out</Link>
            &nbsp; | &nbsp;
            <Link >Edit</Link>
            
        </nav>
    )
}


export default NavBar