import SignUpForm from "../components/SignUpForm/SignUpForm"
import LoginForm from "../components/LoginForm/LoginForm"

import { useState } from "react"

function AuthPage({setUser}){
    const [showLogin, setShowLogin] = useState(true)
    return(
        <div>
            <h1>Auth Page</h1>

            {
                showLogin ? (
                    <LoginForm setUser={setUser}/>
                ): (
                    <SignUpForm setUser={setUser}/>
                )
            }
            <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up' : 'Log In'}</button>

        </div>
    )
}

export default AuthPage