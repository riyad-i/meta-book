import { useState } from "react"
import {signUp} from "../../utilities/users-service"



//SignUpForm.jsx <--> users-service.js <--> users-api.js <-Internet-> server.js (Express)

function SignUpForm({setUser}){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    })

    const disable = formData.password !== formData.confirm

    const handleChange = (e)=>{
        // console.log();
        setFormData({
            ...formData,
            [e.target.name] : e.target.value,
            error: ''
        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            const userFormData = {...formData}
            delete userFormData.error
            delete userFormData.confirm
            console.log(userFormData);
            
            const user = await signUp(userFormData)
            console.log(user);
            setUser(user)
        } catch (err) {
            console.log(err);
            setFormData({
                ...formData,
                error: 'Sign Up Failed - Try Again'
            })
        }

    }

    return(
        <div>
            <div className="form-container" method="post">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
                    
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required/>

                    <label>Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required/>

                    <label>Confirm Password</label>
                    <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required/>

                    <button type='submit' disabled={disable}>Sign Up</button>
                </form>
            </div>
            <p className="error-message">{formData.error}</p>
        </div>
    )
}

export default SignUpForm