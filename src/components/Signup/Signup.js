import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user
      ] = useCreateUserWithEmailAndPassword(auth);

      if(user){
        navigate('/shop')
    }

    const handleEmailBlur =(event)=>{
        setEmail(event.target.value);
        console.log(email)
    };

    const handlePasswordBlur =(event)=>{
        setPassword(event.target.value);
        console.log(password)
    };

    const handleConfirmPasswordBlur =(event)=>{
        setConfirmPassword(event.target.value);
        console.log(confirmPassword)
    };

    const handleCreateUser =(event)=>{
        event.preventDefault();

        if(password !== confirmPassword){
            setError('Your two passwords did not match');
            return;
        }
        if(password.length <6){
            setError('Password must be 6 characters or longer');
            return;
        }
        else{
            setError('');
        }
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Sign up</h1>
                <form onSubmit={handleCreateUser}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' onBlur={handleEmailBlur} required/>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' onBlur={handlePasswordBlur} required/>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" name='confirm password' onBlur={handleConfirmPasswordBlur} required/>
                    </div>

                    <p style={{color:'red'}}>{error}</p>

                    <input type="submit" name='submit' className='form-submit'  value="Sign up" />
                </form>
                <p>Already have an account? <Link to='/login' className='form-link'>Login</Link></p>
            </div>
        </div>
    );
};

export default Signup;




