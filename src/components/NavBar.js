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
            <Link to={'/orders'}>Order History</Link>
            &nbsp; | &nbsp;
            <Link to={'orders/new'}>New Order</Link>
            &nbsp; | &nbsp;
            <Link to='' onClick={handleLogout}>Log Out</Link>
        </nav>
    )
}


export default NavBar