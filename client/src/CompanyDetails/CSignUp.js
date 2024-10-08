import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';

const CSignUp = () => {
    const history = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = async(e) =>{
        e.preventDefault()
        const response = await fetch('http://localhost:8000/api/cregister' , {
            
            method: 'POST',

            headers : {
                'Content-Type' : 'application/json'

            },

            body : JSON.stringify({
                name,
                email,
                password,
            })
        })

        const data = await response.json();
        console.log(data);

        if(data.status === 'ok'){
            history('/signin')
        }
    }


    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={registerUser}>
                <input value={name} 
                onChange={(e) => setName(e.target.value)}
                type='text' 
                placeholder='Name' />

                <input value={email} 
                onChange={(e) => setEmail(e.target.value)}
                type='email' 
                placeholder='Email' />

                <input value={password} 
                onChange={(e) => setPassword(e.target.value)}
                type='password' 
                placeholder='Password' />

                <input type='submit' value="Register"/>

            </form>
        </div>
    )
}


export default CSignUp